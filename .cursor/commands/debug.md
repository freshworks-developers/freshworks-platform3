# /debug - Debug Freshworks Platform 3.0 Apps

## Usage

```
/debug
```

When you run `/debug` in a Freshworks app directory, this command will:
1. Analyze your app for common Platform 3.0 issues
2. Check execution boundary violations
3. Identify logging problems
4. Detect request API errors
5. Validate manifest structure
6. Provide specific fixes for each issue

---

## What Gets Debugged

### 1. Execution Boundary Violations

**Frontend/Backend Separation:**
- ✅ Frontend (`app.js`) runs in browser iframe
- ✅ Backend (`server.js`) runs in Node.js runtime
- ❌ No shared memory between them

**Common Issues:**

#### Issue: Console.log not appearing

**Problem:**
```javascript
// In server.js
console.log('This appears in terminal, NOT browser');

// In app.js  
console.log('This appears in browser DevTools, NOT terminal');
```

**Solution:**
- Frontend logs → Browser DevTools Console
- Backend logs → Terminal running `fdk run`
- They NEVER cross boundaries

#### Issue: Cannot access DOM in backend

**Problem:**
```javascript
// ❌ WRONG - In server.js
document.getElementById('element'); // ERROR: document is not defined
window.location.href; // ERROR: window is not defined
```

**Solution:**
```javascript
// ✅ CORRECT - Backend cannot access DOM
// Use frontend to get DOM data, pass to backend via client.request.invoke()
```

#### Issue: Cannot use Node.js APIs in frontend

**Problem:**
```javascript
// ❌ WRONG - In app.js
const fs = require('fs'); // ERROR: fs is not defined
const http = require('http'); // ERROR: http is not defined
```

**Solution:**
```javascript
// ✅ CORRECT - Use backend for Node.js APIs
// Frontend calls backend via client.request.invoke()
```

### 2. Request API Errors

#### Issue: "post is no longer supported in Request API"

**Problem:**
```javascript
// ❌ DEPRECATED Platform 2.x
$request.post('https://api.example.com/endpoint', options);
$request.get('https://api.example.com/data', options);
```

**Solution:**
```javascript
// ✅ CORRECT Platform 3.0
await $request.invokeTemplate('apiCall', {
  context: {},
  body: JSON.stringify({ data: 'value' })
});
```

**Steps to fix:**
1. Create `config/requests.json`
2. Define request template
3. Use `$request.invokeTemplate()`

### 3. Manifest Validation Errors

#### Issue: "Invalid location(s) mentioned in modules"

**Problem:**
```json
{
  "modules": {
    "common": {
      "location": {
        "ticket_sidebar": { ... }  // ❌ WRONG MODULE!
      }
    }
  }
}
```

**Solution:**
```json
{
  "modules": {
    "common": {},
    "support_ticket": {
      "location": {
        "ticket_sidebar": { ... }  // ✅ CORRECT MODULE!
      }
    }
  }
}
```

**Rule:** Product-specific locations go in product modules, NOT common!

#### Issue: "OAuth config must have required property 'integrations'"

**Problem:**
```json
// ❌ Platform 2.x format
{
  "client_id": "...",
  "client_secret": "..."
}
```

**Solution:**
```json
// ✅ Platform 3.0 format
{
  "integrations": {
    "provider_name": {
      "client_id": "...",
      "client_secret": "..."
    }
  }
}
```

#### Issue: "Missing engines block"

**Problem:**
```json
{
  "platform-version": "3.0",
  "modules": { ... }
  // ❌ No engines!
}
```

**Solution:**
```json
{
  "platform-version": "3.0",
  "modules": { ... },
  "engines": {
    "node": "18.20.8",
    "fdk": "9.7.4"
  }
}
```

### 4. Frontend-Backend Communication

#### Issue: Cannot call backend method

**Problem:**
```javascript
// In app.js
client.request.invoke('myMethod', { data: 'value' });
// ERROR: Function not found
```

**Debug Steps:**
1. Check `manifest.json` has function declared:
```json
{
  "modules": {
    "common": {
      "functions": {
        "myMethod": {}  // ✅ Must be declared!
      }
    }
  }
}
```

2. Check `server.js` exports the function:
```javascript
exports = {
  myMethod: async function(args) {
    // Implementation
  }
};
```

3. Check function name matches exactly (case-sensitive)

#### Issue: Backend method not receiving data

**Problem:**
```javascript
// Frontend
client.request.invoke('myMethod', { userId: 123 });

// Backend
exports = {
  myMethod: async function(args) {
    console.log(args.userId); // undefined!
  }
};
```

**Solution:**
```javascript
// Backend - data is in args object, not direct property
exports = {
  myMethod: async function(args) {
    console.log(args); // { userId: 123 }
    const userId = args.userId; // ✅ CORRECT
  }
};
```

### 5. iParams Access Issues

#### Issue: Cannot access iparams in backend

**Problem:**
```javascript
// ❌ WRONG
const apiKey = $iparams.api_key; // ERROR: $iparams is not defined
const token = client.iparams.get('token'); // ERROR: client is not defined
```

**Solution:**
```javascript
// ✅ CORRECT - Always via args.iparams
exports = {
  myMethod: async function(args) {
    const apiKey = args.iparams.api_key;
    const token = args.iparams.token;
  }
};
```

### 6. Async/Await Issues

#### Issue: Race conditions with app.initialized()

**Problem:**
```javascript
// ❌ WRONG - Variable in different scope
let client;
async function init() {
  client = await app.initialized(); // Race condition!
}
init();
// client might not be ready here!
```

**Solution:**
```javascript
// ✅ CORRECT - IIFE pattern
(async function() {
  const client = await app.initialized();
  // Use client here - guaranteed to be ready
  client.events.on('app.activated', () => {
    // App logic
  });
})();
```

### 7. Crayons Component Issues

#### Issue: Button click not working

**Problem:**
```javascript
// ❌ WRONG - Plain HTML event
document.getElementById('myBtn').addEventListener('click', handler);
```

**Solution:**
```javascript
// ✅ CORRECT - Crayons event
document.getElementById('myBtn').addEventListener('fwClick', handler);
```

**Crayons Events:**
- `fwClick` - Button clicks
- `fwInput` - Input changes
- `fwChange` - Select/dropdown changes
- `fwBlur` - Input loses focus
- `fwFocus` - Input gains focus

### 8. Request Template Issues

#### Issue: Request template not found

**Problem:**
```javascript
await $request.invokeTemplate('myApi', { ... });
// ERROR: Template not found
```

**Debug Steps:**
1. Check `manifest.json` declares the request:
```json
{
  "modules": {
    "common": {
      "requests": {
        "myApi": {}  // ✅ Must be declared!
      }
    }
  }
}
```

2. Check `config/requests.json` defines the template:
```json
{
  "myApi": {
    "schema": {
      "method": "GET",
      "host": "api.example.com",
      "path": "/endpoint"
    }
  }
}
```

3. Check template name matches exactly (case-sensitive)

---

## Debugging Workflow

### Step 1: Run FDK Validate
```bash
fdk validate
```
This catches most manifest and structure issues.

### Step 2: Check Logs

**Frontend logs:**
```bash
# Open browser DevTools
# Console tab shows frontend logs
```

**Backend logs:**
```bash
# Terminal running fdk run shows backend logs
```

### Step 3: Common Error Messages

| Error | Cause | Fix |
|-------|-------|-----|
| "post is no longer supported" | Using deprecated `$request.post()` | Use `$request.invokeTemplate()` |
| "Invalid location(s)" | Location in wrong module | Move to product module |
| "Function not found" | Function not declared in manifest | Add to `functions: {}` |
| "Template not found" | Request not declared | Add to `requests: {}` |
| "OAuth config must have 'integrations'" | Missing wrapper | Wrap in `integrations: {}` |
| "document is not defined" | Using DOM in backend | Move to frontend |
| "client is not defined" | Using client in backend | Use `args` parameter |

### Step 4: Execution Context Check

**Where am I?**
- If you see `client`, `app.initialized()`, `document`, `window` → Frontend
- If you see `exports`, `$request`, `$db`, `args.iparams` → Backend

**What can I do here?**
- Frontend: DOM manipulation, UI events, call backend via `client.request.invoke()`
- Backend: External API calls, database operations, event handlers

---

## Debug Checklist

### Manifest Issues
- [ ] `"platform-version": "3.0"` (not 2.3)
- [ ] `"modules"` structure (not `"product"`)
- [ ] `"engines"` block present
- [ ] All functions declared in `"functions": {}`
- [ ] All requests declared in `"requests": {}`
- [ ] Locations in correct modules
- [ ] OAuth has `"integrations"` wrapper

### Code Issues
- [ ] No `$request.post/get/put/delete` (use `invokeTemplate`)
- [ ] No DOM access in backend
- [ ] No Node.js APIs in frontend
- [ ] iParams accessed via `args.iparams` in backend
- [ ] Async code uses IIFE pattern
- [ ] Crayons events used (fwClick, fwInput, etc.)

### File Structure
- [ ] `app/scripts/app.js` exists (if frontend)
- [ ] `app/styles/images/icon.svg` exists
- [ ] `server/server.js` exists (if backend)
- [ ] `config/requests.json` exists (if external APIs)
- [ ] `config/iparams.json` exists (if parameters)

---

## Quick Fixes

### Fix 1: Convert Request API
```bash
# Find all deprecated request calls
grep -r "\$request\.(post|get|put|delete)" server/

# Replace with invokeTemplate pattern
# See /migrate command for full migration
```

### Fix 2: Move Location to Correct Module
```json
// Move from common to product module
"modules": {
  "common": {},
  "support_ticket": {
    "location": {
      "ticket_sidebar": { ... }
    }
  }
}
```

### Fix 3: Add Missing Declarations
```json
// Add to manifest.json
"modules": {
  "common": {
    "requests": {
      "myApi": {}
    },
    "functions": {
      "myMethod": {}
    }
  }
}
```

---

## Getting Help

If `/debug` doesn't resolve your issue:

1. **Check FDK logs:**
```bash
fdk run
# Look for errors in terminal output
```

2. **Check browser console:**
- Open DevTools (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

3. **Validate app:**
```bash
fdk validate
# Shows all validation errors
```

4. **Ask specific questions:**
- "Why doesn't my console.log appear?"
- "How do I call an external API?"
- "Why is my OAuth not working?"
