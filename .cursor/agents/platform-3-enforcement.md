# Platform 3.0 Enforcement - Zero Tolerance for Platform 2.x

**Date:** 2026-02-16  
**Purpose:** Ensure ONLY Platform 3.0 patterns are generated, NEVER Platform 2.x  
**Status:** ✅ ACTIVE - Enforced in SKILL.md, app-templates.mdc, and all rules

## The Problem

Platform 2.x patterns are incompatible with Platform 3.0 and cause validation failures. We must enforce Platform 3.0 ONLY.

**This document provides side-by-side comparisons and detection rules to prevent any Platform 2.x code from being generated.**

## Platform 2.x vs 3.0 - Critical Differences

### 1. Manifest Structure

**❌ Platform 2.x (FORBIDDEN):**
```json
{
  "platform-version": "2.3",
  "product": {
    "freshdesk": {
      "location": {
        "ticket_sidebar": {
          "url": "index.html",
          "icon": "icon.svg"
        }
      }
    }
  }
}
```

**✅ Platform 3.0 (REQUIRED):**
```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {},
    "support_ticket": {
      "location": {
        "ticket_sidebar": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      }
    }
  },
  "engines": {
    "node": "18.20.8",
    "fdk": "9.7.4"
  }
}
```

### 2. External API Calls

**❌ Platform 2.x (FORBIDDEN):**
```json
{
  "whitelisted-domains": [
    "https://api.example.com"
  ]
}
```

```javascript
// Platform 2.x Request API (FORBIDDEN)
$request.post('https://api.example.com/endpoint', {
  headers: { 'Authorization': 'Bearer token' },
  body: JSON.stringify({ data: 'value' })
});
```

**✅ Platform 3.0 (REQUIRED):**
```json
// manifest.json
{
  "modules": {
    "common": {
      "requests": {
        "apiCall": {}
      }
    }
  }
}

// config/requests.json
{
  "apiCall": {
    "schema": {
      "method": "POST",
      "host": "api.example.com",
      "path": "/endpoint",
      "headers": {
        "Authorization": "Bearer <%= context.token %>"
      }
    }
  }
}
```

```javascript
// Platform 3.0 Request API (REQUIRED)
await $request.invokeTemplate('apiCall', {
  context: { token: args.iparams.api_token },
  body: JSON.stringify({ data: 'value' })
});
```

### 3. OAuth Configuration

**❌ Platform 2.x (FORBIDDEN):**
```json
// oauth_config.json (Platform 2.x - FLAT STRUCTURE)
{
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "authorize_url": "https://...",
  "token_url": "https://..."
}

// config/iparams.json (Platform 2.x - OAuth in iparams)
{
  "client_id": {
    "display_name": "Client ID",
    "type": "text",
    "required": true
  },
  "client_secret": {
    "display_name": "Client Secret",
    "type": "text",
    "required": true,
    "secure": true
  }
}
```

**✅ Platform 3.0 (REQUIRED):**
```json
// oauth_config.json (Platform 3.0 - INTEGRATIONS WRAPPER)
{
  "integrations": {
    "service_name": {
      "display_name": "Service Name",
      "client_id": "<%= oauth_iparams.client_id %>",
      "client_secret": "<%= oauth_iparams.client_secret %>",
      "authorize_url": "https://...",
      "token_url": "https://...",
      "token_type": "account",
      "oauth_iparams": {
        "client_id": {
          "display_name": "Client ID",
          "type": "text",
          "required": true
        },
        "client_secret": {
          "display_name": "Client Secret",
          "type": "text",
          "required": true,
          "secure": true
        }
      }
    }
  }
}

// config/iparams.json (Platform 3.0 - App settings ONLY, NO OAuth)
{
  "sheet_id": {
    "display_name": "Sheet ID",
    "type": "text",
    "required": true
  }
}
```

## Enforcement Rules

### Pre-Generation Verification (MANDATORY)

**BEFORE generating ANY manifest.json, verify:**

1. ✅ `"platform-version": "3.0"` (NOT "2.3", "2.2", "2.1")
2. ✅ `"modules": {}` structure (NOT `"product": {}`)
3. ✅ `"engines"` block present with node and fdk versions
4. ✅ NO `"whitelisted-domains"` key
5. ✅ All requests declared in `modules.common.requests`

**BEFORE generating ANY server.js, verify:**

1. ✅ Using `$request.invokeTemplate('name', {})` 
2. ✅ NOT using `$request.post()`, `.get()`, `.put()`, `.delete()`

**BEFORE generating ANY oauth_config.json, verify:**

1. ✅ Has `"integrations": {}` wrapper
2. ✅ Has `oauth_iparams` inside integration object
3. ✅ Uses `<%= oauth_iparams.client_id %>` syntax

## Detection & Rejection

**IF ANY of these Platform 2.x patterns are detected:**
- `"platform-version": "2.3"` or `"2.2"` or `"2.1"`
- `"product": { "freshdesk": {} }`
- `"whitelisted-domains": []`
- `$request.post()`, `.get()`, `.put()`, `.delete()`
- OAuth config without `integrations` wrapper
- OAuth credentials in `config/iparams.json`

**THEN:**
1. 🚨 **STOP IMMEDIATELY**
2. 🚨 **DO NOT PRESENT CODE TO USER**
3. 🚨 **REGENERATE WITH PLATFORM 3.0 PATTERNS**
4. 🚨 **VERIFY ALL PLATFORM 3.0 REQUIREMENTS**

## Validation

After generation, verify:
```bash
cd app-directory
fdk validate
```

Should pass without errors related to:
- Platform version
- Manifest structure
- Request API usage
- OAuth configuration

## References

- `.cursor/rules/app-templates.mdc` - Platform 3.0 templates
- `skills/freshworks_app_dev_skill/SKILL.md` - Complete skill documentation
- `skills/freshworks_app_dev_skill/references/errors/error-catalog.md` - Error fixes

## Summary

**ZERO TOLERANCE FOR PLATFORM 2.X PATTERNS**

Every app MUST be Platform 3.0:
- ✅ `"platform-version": "3.0"`
- ✅ `"modules"` structure
- ✅ `$request.invokeTemplate()`
- ✅ Request templates in `config/requests.json`
- ✅ OAuth with `integrations` wrapper
- ✅ `engines` block

**NO EXCEPTIONS - NO PLATFORM 2.X PATTERNS ALLOWED**
