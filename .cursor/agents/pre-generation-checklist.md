# Pre-Generation Checklist - Mandatory Verification

**Purpose:** Ensure all critical validations pass BEFORE generating any app code  
**Status:** ✅ ACTIVE - Must be followed for every app generation  
**Last Updated:** 2026-02-16

## Why This Checklist Exists

Past issues have shown that skipping pre-generation verification leads to:
1. **Location placement errors** - `full_page_app` in wrong module
2. **Platform 2.x patterns** - Using deprecated syntax
3. **Missing icon.svg** - #1 FDK validation failure
4. **FQDN violations** - Host with path or encoded characters

**This checklist MUST be verified BEFORE writing ANY manifest.json or app files.**

---

## Mandatory Pre-Generation Checklist

### 1. Platform 3.0 Verification (ZERO TOLERANCE)

**Before generating manifest.json, verify:**

- [ ] ✅ Will use `"platform-version": "3.0"` (NOT "2.3", "2.2", "2.1")
- [ ] ✅ Will use `"modules": {}` structure (NOT `"product": {}`)
- [ ] ✅ Will include `"engines"` block with node and fdk versions
- [ ] ✅ Will NOT include `"whitelisted-domains"` (use request templates)
- [ ] ✅ Will declare all requests in `modules.common.requests`
- [ ] ✅ Will declare all functions in `modules.common.functions`

**If ANY Platform 2.x pattern is planned → STOP → Use Platform 3.0**

---

### 2. Location Placement Verification (MANDATORY)

**Before generating manifest.json, apply decision tree:**

```
IF location is full_page_app OR cti_global_sidebar:
  → MUST be in modules.common.location
  → NEVER in product modules

IF location is ticket_sidebar, contact_sidebar, asset_sidebar, deal_entity_menu, etc.:
  → MUST be in product module (support_ticket, support_contact, service_asset, deal, etc.)
  → NEVER in modules.common.location
```

**Verify:**
- [ ] ✅ `full_page_app` → Will be in `modules.common.location`
- [ ] ✅ `cti_global_sidebar` → Will be in `modules.common.location`
- [ ] ✅ `ticket_sidebar` → Will be in `modules.support_ticket.location` (NOT common)
- [ ] ✅ `contact_sidebar` → Will be in `modules.support_contact.location` (NOT common)
- [ ] ✅ `asset_sidebar` → Will be in `modules.service_asset.location` (NOT common)

**If location placement is wrong → STOP → Fix before generating**

---

### 3. Request API Verification (MANDATORY)

**Before generating server.js, verify:**

- [ ] ✅ Will use `$request.invokeTemplate('name', {})` for all API calls
- [ ] ✅ Will NOT use `$request.post()`, `.get()`, `.put()`, `.delete()`
- [ ] ✅ All request templates will be declared in manifest
- [ ] ✅ All request templates will be defined in `config/requests.json`

**If deprecated Request API is planned → STOP → Use invokeTemplate**

---

### 4. FQDN & Request Template Verification

**Before generating config/requests.json, verify:**

- [ ] ✅ Host will be FQDN only (e.g., `api.example.com`)
- [ ] ✅ Host will NOT have path (e.g., NOT `api.example.com/api`)
- [ ] ✅ Host will NOT have encoded characters (e.g., NOT `%7B%7B`)
- [ ] ✅ Path will start with `/` (e.g., `/api/v2/endpoint`)
- [ ] ✅ Will use `<%= context.variable %>` for dynamic values
- [ ] ✅ Will use `<%= iparam.name %>` for iparams
- [ ] ✅ Will use `<%= access_token %>` for OAuth
- [ ] ✅ Will NOT use `{{variable}}` syntax

**If FQDN rules violated → STOP → Fix before generating**

---

### 5. OAuth Structure Verification (If OAuth is used)

**Before generating oauth_config.json, verify:**

- [ ] ✅ Will have `"integrations": {}` wrapper
- [ ] ✅ Will have `oauth_iparams` inside integration object
- [ ] ✅ Will use `<%= oauth_iparams.client_id %>` syntax
- [ ] ✅ Will use `<%= oauth_iparams.client_secret %>` syntax
- [ ] ✅ OAuth credentials will NOT be in `config/iparams.json`
- [ ] ✅ Request templates will have `"options": { "oauth": "name" }`

**If OAuth structure is wrong → STOP → Use Platform 3.0 structure**

---

### 6. Frontend App Verification (If frontend is included)

**Before generating app files, verify:**

- [ ] ✅ Will create `app/styles/images/icon.svg` - **MANDATORY**
- [ ] ✅ Will include Crayons CDN in ALL HTML files (BOTH script tags)
- [ ] ✅ Will use Crayons components (NOT plain HTML elements)
- [ ] ✅ Will use IIFE pattern for async initialization
- [ ] ✅ Will use `fwClick`, `fwInput`, `fwChange` events (NOT `click`, `input`)

**If icon.svg is missing → STOP → Add it to generation plan**

---

### 7. Code Quality Verification

**Before generating server.js, verify:**

- [ ] ✅ Helper functions will be AFTER exports block (NOT before)
- [ ] ✅ Async functions will have `await` OR will remove `async` keyword
- [ ] ✅ Function parameters will be used OR removed/prefixed with `_`
- [ ] ✅ Function complexity will be ≤ 7 (extract helpers if needed)

**If code quality issues planned → STOP → Fix design**

---

### 8. Event Handler Verification

**Before generating manifest.json, verify:**

- [ ] ✅ If iparams are used → Will include `onAppInstall` event
- [ ] ✅ If scheduled events/webhooks → Will include `onAppUninstall` event
- [ ] ✅ Scheduled events will be created dynamically (NOT in manifest)
- [ ] ✅ All event handlers will be declared in manifest

**If event handlers missing → STOP → Add to generation plan**

---

## Verification Process

### Step 1: Review User Request
- Identify: Product, location, features, integrations
- Determine: Frontend/Serverless/Hybrid/OAuth

### Step 2: Run Through Checklist
- Go through ALL 8 sections above
- Mark each item as verified
- If ANY item fails → STOP and fix

### Step 3: Generate Code
- Only proceed after ALL items verified
- Use verified structure for generation
- Double-check during generation

### Step 4: Post-Generation Validation
- Run `fdk validate`
- Fix any errors (should be minimal if checklist followed)
- Present to user

---

## Common Mistakes This Prevents

1. ❌ **Location in wrong module** - Caught by Section 2
2. ❌ **Platform 2.x patterns** - Caught by Section 1
3. ❌ **Missing icon.svg** - Caught by Section 6
4. ❌ **FQDN violations** - Caught by Section 4
5. ❌ **Deprecated Request API** - Caught by Section 3
6. ❌ **Wrong OAuth structure** - Caught by Section 5
7. ❌ **Helper before exports** - Caught by Section 7
8. ❌ **Async without await** - Caught by Section 7

---

## References

- **SKILL.md** - Lines 516-544 (Universal Pre-Generation Checklist)
- **app-templates.mdc** - Lines 1-15 (Platform 3.0 Enforcement)
- **app-templates.mdc** - Lines 1127-1180 (Universal Validation Checklist)
- **location-placement-enforcement.md** - Location placement rules
- **platform-3-enforcement.md** - Platform 3.0 vs 2.x differences

---

## Summary

**This checklist is MANDATORY for every app generation.**

✅ Verify ALL sections BEFORE generating code  
✅ Stop if ANY item fails  
✅ Fix issues in design phase, not generation phase  
✅ Prevent validation errors before they happen

**Following this checklist prevents 95% of common FDK validation errors.**
