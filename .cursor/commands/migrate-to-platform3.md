# /migrate - Platform 2.x to 3.0 Migration Command

## Usage

```
/migrate
```

When you run `/migrate` in a Platform 2.x app directory, this command will:
1. Analyze your current Platform 2.x app structure
2. Identify all required changes for Platform 3.0 compatibility
3. Generate updated files with Platform 3.0 patterns
4. Provide a migration report with all changes made

---

## What Gets Migrated

### 1. manifest.json Transformations

#### Platform 2.x → Platform 3.0

**BEFORE (2.x):**
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
  },
  "whitelisted-domains": [
    "https://api.example.com"
  ]
}
```

**AFTER (3.0):**
```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "requests": {
        "externalApi": {}
      }
    },
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

**Changes:**
- ✅ `platform-version`: `"2.3"` → `"3.0"`
- ✅ `product` → `modules`
- ✅ Product names: `freshdesk` → `support_ticket`, `freshservice` → `service_ticket`, etc.
- ✅ Add `modules.common` for shared functionality
- ✅ Add `engines` block with Node.js and FDK versions
- ✅ Remove `whitelisted-domains` → Convert to request templates in `config/requests.json`

### 2. Request API Migration

#### External API Calls

**BEFORE (2.x):**
```javascript
// server.js
$request.post('https://api.example.com/endpoint', {
  headers: {
    'Authorization': 'Bearer ' + apiKey,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'value' })
});
```

**AFTER (3.0):**
```javascript
// server.js
await $request.invokeTemplate('externalApi', {
  context: {},
  body: JSON.stringify({ data: 'value' })
});
```

**NEW FILE: config/requests.json**
```json
{
  "externalApi": {
    "schema": {
      "method": "POST",
      "host": "api.example.com",
      "path": "/endpoint",
      "headers": {
        "Authorization": "Bearer {{api_key}}",
        "Content-Type": "application/json"
      }
    }
  }
}
```

### 3. Frontend Code Migration

#### HTML Updates

**BEFORE (2.x):**
```html
<button onclick="handleClick()">Click Me</button>
<input type="text" id="myInput" />
<select id="mySelect">
  <option value="1">Option 1</option>
</select>
```

**AFTER (3.0):**
```html
<!-- Add Crayons CDN -->
<script async type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script async nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>

<!-- Use Crayons components -->
<fw-button id="myBtn" color="primary">Click Me</fw-button>
<fw-input id="myInput" label="Enter text" placeholder="Type here"></fw-input>
<fw-select id="mySelect" label="Choose option">
  <fw-select-option value="1">Option 1</fw-select-option>
</fw-select>
```

#### JavaScript Event Listeners

**BEFORE (2.x):**
```javascript
document.getElementById('myBtn').onclick = function() { ... };
document.getElementById('myInput').addEventListener('change', function(e) { ... });
```

**AFTER (3.0):**
```javascript
document.getElementById('myBtn').addEventListener('fwClick', function() { ... });
document.getElementById('myInput').addEventListener('fwInput', function(e) { ... });
```

### 4. File Structure Migration

**BEFORE (2.x):**
```
app/
├── index.html
├── app.js
├── styles.css
├── icon.svg
├── server.js
└── config/
    └── iparams.json
```

**AFTER (3.0):**
```
app/
├── index.html
├── scripts/
│   └── app.js
└── styles/
    ├── style.css
    └── images/
        └── icon.svg
server/
└── server.js
config/
├── iparams.json
└── requests.json
manifest.json
```

### 5. OAuth Migration

**BEFORE (2.x - oauth_config.json):**
```json
{
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "authorize_url": "https://github.com/login/oauth/authorize",
  "token_url": "https://github.com/login/oauth/access_token",
  "options": {
    "scope": "repo"
  }
}
```

**AFTER (3.0 - oauth_config.json):**
```json
{
  "integrations": {
    "github": {
      "display_name": "GitHub",
      "client_id": "{{client_id}}",
      "client_secret": "{{client_secret}}",
      "authorize_url": "https://github.com/login/oauth/authorize",
      "token_url": "https://github.com/login/oauth/access_token",
      "token_type": "account",
      "options": {
        "scope": "repo"
      }
    }
  }
}
```

**OAuth Request Template (config/requests.json):**
```json
{
  "githubApi": {
    "schema": {
      "method": "GET",
      "host": "api.github.com",
      "path": "/user/repos",
      "headers": {
        "Authorization": "bearer <%= access_token %>"
      }
    },
    "options": {
      "oauth": "github"
    }
  }
}
```

### 6. Product Module Mapping

| Platform 2.x | Platform 3.0 Module |
|--------------|---------------------|
| `freshdesk` | `support_ticket`, `support_contact`, `support_company` |
| `freshservice` | `service_ticket`, `service_asset`, `service_requester` |
| `freshsales` | `deal`, `contact`, `account`, `lead` |
| `freshcaller` | `phone` |

### 7. Location Mapping

Locations must be in the correct module:

**Common Module Locations:**
- `full_page_app` → `modules.common.location`
- `cti_global_sidebar` → `modules.common.location`

**Product Module Locations:**
- `ticket_sidebar` → `modules.support_ticket.location`
- `ticket_background` → `modules.support_ticket.location`
- `asset_sidebar` → `modules.service_asset.location`
- `deal_entity_menu` → `modules.deal.location`

---

## Migration Steps

### Step 1: Backup Your App
```bash
cp -r my-app my-app-backup
```

### Step 2: Run Migration
```
/migrate
```

### Step 3: Review Changes
The migration tool will:
1. Create a `MIGRATION_REPORT.md` with all changes
2. Update all files with Platform 3.0 patterns
3. Create new files if needed (requests.json, etc.)
4. Preserve your business logic

### Step 4: Test Locally
```bash
fdk validate
fdk run
```

### Step 5: Manual Review Required

**Check these manually:**
- ✅ All external API calls converted to request templates
- ✅ All `whitelisted-domains` converted to request templates
- ✅ All HTML buttons/inputs converted to Crayons components
- ✅ All event listeners updated for Crayons events
- ✅ OAuth config has `integrations` wrapper
- ✅ File paths updated in manifest.json

---

## Common Migration Issues

### Issue 1: Request API Methods Deprecated

**Error:**
```
post is no longer supported in Request API
```

**Fix:**
Replace all `$request.post()`, `$request.get()`, etc. with `$request.invokeTemplate()` and create request templates.

### Issue 2: Invalid Location in Module

**Error:**
```
Invalid location(s) mentioned in modules
```

**Fix:**
Move location to correct module (common vs product-specific).

### Issue 3: OAuth Config Missing Integrations

**Error:**
```
OAuth config must have required property 'integrations'
```

**Fix:**
Wrap OAuth config in `integrations` object.

### Issue 4: Missing icon.svg

**Error:**
```
FDK validation failed: icon.svg not found
```

**Fix:**
Create `app/styles/images/icon.svg` and update manifest path.

---

## Migration Checklist

- [ ] `platform-version` changed to `"3.0"`
- [ ] `product` structure converted to `modules`
- [ ] `engines` block added
- [ ] Product names mapped correctly (freshdesk → support_ticket)
- [ ] `whitelisted-domains` removed
- [ ] Request templates created in `config/requests.json`
- [ ] All `$request.post/get/put/delete` converted to `$request.invokeTemplate()`
- [ ] File structure reorganized (app/scripts/, app/styles/images/)
- [ ] HTML buttons/inputs converted to Crayons components
- [ ] Crayons CDN added to HTML
- [ ] Event listeners updated for Crayons (fwClick, fwInput, etc.)
- [ ] OAuth config wrapped in `integrations`
- [ ] OAuth request templates have `options.oauth` and `<%= access_token %>`
- [ ] Locations in correct modules
- [ ] `fdk validate` passes
- [ ] `fdk run` works locally
- [ ] All features tested

---

## Example Migration

### Before: Platform 2.3 App

**manifest.json:**
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
  },
  "whitelisted-domains": ["https://api.github.com"]
}
```

**server.js:**
```javascript
exports = {
  getRepos: function(args) {
    $request.get('https://api.github.com/user/repos', {
      headers: {
        'Authorization': 'token ' + args.iparams.github_token
      }
    }).then(function(data) {
      return data.response;
    });
  }
};
```

**app.js:**
```javascript
document.getElementById('fetchBtn').onclick = function() {
  client.request.invoke('getRepos', {}).then(function(data) {
    console.log(data);
  });
};
```

**index.html:**
```html
<button id="fetchBtn">Fetch Repos</button>
```

### After: Platform 3.0 App

**manifest.json:**
```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "requests": {
        "githubApi": {}
      },
      "functions": {
        "getRepos": {}
      }
    },
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

**config/requests.json:**
```json
{
  "githubApi": {
    "schema": {
      "method": "GET",
      "host": "api.github.com",
      "path": "/user/repos",
      "headers": {
        "Authorization": "token {{github_token}}"
      }
    }
  }
}
```

**server/server.js:**
```javascript
exports = {
  getRepos: async function(args) {
    try {
      const response = await $request.invokeTemplate('githubApi', {
        context: {}
      });
      return JSON.parse(response.response);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};
```

**app/scripts/app.js:**
```javascript
(async function() {
  const client = await app.initialized();
  
  document.getElementById('fetchBtn').addEventListener('fwClick', async function() {
    try {
      const data = await client.request.invoke('getRepos', {});
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });
})();
```

**app/index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>GitHub Repos</title>
  <script async src="{{{appclient}}}"></script>
  <link rel="stylesheet" href="styles/style.css" />
</head>
<body>
  <div class="main">
    <fw-button id="fetchBtn" color="primary">Fetch Repos</fw-button>
  </div>
</body>
<script defer src="scripts/app.js"></script>
<script async type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
<script async nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
</html>
```

---

## Need Help?

If migration fails or you encounter issues:
1. Check `MIGRATION_REPORT.md` for detailed changes
2. Review the Platform 3.0 skill documentation
3. Run `fdk validate` to see specific errors
4. Ask: "Debug my Platform 3.0 migration error: [error message]"
