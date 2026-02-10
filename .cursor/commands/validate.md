# /validate - Validate Freshworks Platform 3.0 App

## Usage

```
/validate
```

When you run `/validate` in a Freshworks app directory, this command will:
1. Run `fdk validate` to check manifest and structure
2. Verify Platform 3.0 compliance
3. Check for deprecated patterns
4. Validate file structure
5. Check code quality
6. Provide specific fixes for each issue

---

## What Gets Validated

### 1. Manifest Structure

**Required Elements:**
- ✅ `"platform-version": "3.0"` (not 2.3 or 2.x)
- ✅ `"modules"` structure (not `"product"`)
- ✅ `"engines"` block with node and fdk versions
- ✅ At least one product module (even if empty `{}`)

**Forbidden Elements:**
- ❌ `"whitelisted-domains"` (use request templates)
- ❌ `"product"` structure (use `"modules"`)
- ❌ Platform 2.x version numbers

**Example Valid Manifest:**
```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "requests": {},
      "functions": {}
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

### 2. File Structure

**Frontend App:**
```
✅ app/index.html
✅ app/scripts/app.js
✅ app/styles/style.css
✅ app/styles/images/icon.svg  ← CRITICAL!
✅ manifest.json
```

**Serverless App:**
```
✅ server/server.js
✅ config/iparams.json (if needed)
✅ config/requests.json (if external APIs)
✅ manifest.json
```

**Hybrid App:**
```
✅ app/index.html
✅ app/scripts/app.js
✅ app/styles/style.css
✅ app/styles/images/icon.svg
✅ server/server.js
✅ config/iparams.json
✅ config/requests.json
✅ manifest.json
```

### 3. Code Quality

**Function Complexity:**
- ✅ Cyclomatic complexity ≤ 7
- ✅ No deeply nested logic
- ✅ Extract complex logic into helpers

**Async Patterns:**
- ✅ Use IIFE for app.initialized()
- ✅ Proper async/await usage
- ✅ No race conditions

**Unused Code:**
- ✅ No unused parameters
- ✅ No unused variables
- ✅ No dead code

### 4. Platform 3.0 Patterns

**Request API:**
- ✅ Use `$request.invokeTemplate()`
- ❌ NO `$request.post/get/put/delete()`

**Manifest Declarations:**
- ✅ All requests declared in `"requests": {}`
- ✅ All functions declared in `"functions": {}`
- ✅ All events declared in `"events": {}`

**Location Placement:**
- ✅ Product locations in product modules
- ✅ Common locations in common module
- ❌ NO product locations in common module

**OAuth Configuration:**
- ✅ Has `"integrations"` wrapper
- ✅ Request templates have `options.oauth`
- ✅ Headers use `<%= access_token %>`

### 5. UI Components

**Crayons Usage:**
- ✅ Crayons CDN included in HTML
- ✅ Use `<fw-button>` not `<button>`
- ✅ Use `<fw-input>` not `<input>`
- ✅ Use `<fw-select>` not `<select>`
- ✅ Use Crayons events (fwClick, fwInput, etc.)

---

## Validation Checks

### Check 1: FDK Validate

**Command:**
```bash
fdk validate
```

**What it checks:**
- Manifest syntax and structure
- Required files exist
- File paths in manifest are correct
- Node.js and FDK versions
- Module configuration
- Event handler declarations

**Common Errors:**

| Error | Fix |
|-------|-----|
| "Invalid JSON in manifest.json" | Fix JSON syntax errors |
| "File not found: icon.svg" | Create `app/styles/images/icon.svg` |
| "Invalid platform-version" | Use `"3.0"` not `"2.3"` |
| "Missing engines block" | Add engines with node and fdk versions |
| "Invalid module configuration" | Check module names and structure |

### Check 2: Platform 3.0 Compliance

**Checks:**
- ✅ No `whitelisted-domains`
- ✅ No `product` structure
- ✅ No deprecated Request API methods
- ✅ Proper module structure
- ✅ Correct location placement

**Auto-fix available:** Use `/migrate` command

### Check 3: Code Linting

**Checks:**
- Function complexity
- Unused variables/parameters
- Async/await patterns
- Code style consistency

**Tools:**
- ESLint for JavaScript
- FDK built-in linter

### Check 4: Security

**Checks:**
- ✅ No hardcoded credentials
- ✅ Secure iparam types for sensitive data
- ✅ Proper OAuth token handling
- ✅ Input validation
- ✅ XSS prevention

---

## Validation Workflow

### Step 1: Run FDK Validate
```bash
cd your-app
fdk validate
```

### Step 2: Check Output

**Success:**
```
✓ Manifest file is valid
✓ All required files exist
✓ Code quality checks passed
✓ Platform 3.0 compliance verified
```

**Failure:**
```
✗ Error: Invalid location(s) mentioned in modules
✗ Error: Missing icon.svg
✗ Warning: Function complexity too high
```

### Step 3: Fix Issues

Use the error messages to identify and fix problems:

**Example Error:**
```
Error: Invalid location(s) mentioned in modules in manifest.json: common - ticket_sidebar
```

**Fix:**
Move `ticket_sidebar` from `common` to `support_ticket` module.

### Step 4: Re-validate
```bash
fdk validate
```

Repeat until all checks pass.

---

## Common Validation Errors

### Error 1: Invalid Location

**Error Message:**
```
Invalid location(s) mentioned in modules in manifest.json: common - ticket_sidebar
```

**Cause:**
Product-specific location in common module

**Fix:**
```json
// ❌ WRONG
{
  "modules": {
    "common": {
      "location": {
        "ticket_sidebar": { ... }
      }
    }
  }
}

// ✅ CORRECT
{
  "modules": {
    "common": {},
    "support_ticket": {
      "location": {
        "ticket_sidebar": { ... }
      }
    }
  }
}
```

### Error 2: Missing Icon

**Error Message:**
```
File not found: app/styles/images/icon.svg
```

**Cause:**
Icon file doesn't exist or path is wrong

**Fix:**
```bash
# Create icon file
mkdir -p app/styles/images
# Add icon.svg to this directory

# Update manifest path
"icon": "styles/images/icon.svg"
```

### Error 3: Deprecated Request API

**Error Message:**
```
post is no longer supported in Request API
```

**Cause:**
Using Platform 2.x request methods

**Fix:**
```javascript
// ❌ WRONG
$request.post('https://api.example.com', options);

// ✅ CORRECT
await $request.invokeTemplate('apiCall', {
  context: {},
  body: JSON.stringify(data)
});
```

### Error 4: OAuth Config Invalid

**Error Message:**
```
OAuth config must have required property 'integrations'
```

**Cause:**
Missing `integrations` wrapper in Platform 3.0

**Fix:**
```json
// ❌ WRONG (Platform 2.x)
{
  "client_id": "...",
  "client_secret": "..."
}

// ✅ CORRECT (Platform 3.0)
{
  "integrations": {
    "provider": {
      "client_id": "...",
      "client_secret": "..."
    }
  }
}
```

### Error 5: Function Not Declared

**Error Message:**
```
Function 'myMethod' not found
```

**Cause:**
Function not declared in manifest

**Fix:**
```json
{
  "modules": {
    "common": {
      "functions": {
        "myMethod": {}  // ✅ Add declaration
      }
    }
  }
}
```

### Error 6: High Complexity

**Error Message:**
```
Function 'processData' has complexity of 12 (max 7)
```

**Cause:**
Too many nested conditions/loops

**Fix:**
```javascript
// ❌ WRONG - Complexity > 7
function processData(items) {
  if (items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].valid) {
        if (items[i].type === 'A') {
          // Deep nesting
        }
      }
    }
  }
}

// ✅ CORRECT - Extract helpers
function processData(items) {
  if (!items) return;
  const validItems = getValidItems(items);
  return processValidItems(validItems);
}

function getValidItems(items) {
  return items.filter(item => item.valid);
}

function processValidItems(items) {
  return items.map(processItem);
}
```

---

## Validation Checklist

### Manifest
- [ ] `"platform-version": "3.0"`
- [ ] `"modules"` structure (not `"product"`)
- [ ] `"engines"` block present
- [ ] At least one product module
- [ ] All requests declared
- [ ] All functions declared
- [ ] All events declared
- [ ] Locations in correct modules
- [ ] No `whitelisted-domains`

### Files
- [ ] `manifest.json` exists and valid
- [ ] `app/index.html` (if frontend)
- [ ] `app/scripts/app.js` (if frontend)
- [ ] `app/styles/style.css` (if frontend)
- [ ] `app/styles/images/icon.svg` (ALWAYS if frontend)
- [ ] `server/server.js` (if backend)
- [ ] `config/iparams.json` (if parameters)
- [ ] `config/requests.json` (if external APIs)
- [ ] `config/oauth_config.json` (if OAuth)

### Code
- [ ] No deprecated Request API methods
- [ ] Function complexity ≤ 7
- [ ] No unused parameters
- [ ] Proper async/await patterns
- [ ] No race conditions
- [ ] Crayons components used (if frontend)
- [ ] Crayons CDN included (if frontend)

### Security
- [ ] No hardcoded credentials
- [ ] Sensitive iparams marked `"secure": true`
- [ ] Input validation present
- [ ] XSS prevention implemented

---

## Quick Validation

```bash
# Full validation
fdk validate

# Check manifest only
cat manifest.json | jq '.'

# Check file structure
ls -R app/ server/ config/

# Check for deprecated patterns
grep -r "\$request\.(post|get|put|delete)" server/
grep -r "whitelisted-domains" manifest.json
grep -r '"product"' manifest.json

# Check code quality
npm run lint  # if configured
```

---

## After Validation

Once validation passes:

1. **Test locally:**
```bash
fdk run
```

2. **Check in browser:**
- Open product with `?dev=true`
- Test all features
- Check browser console for errors

3. **Check backend logs:**
- Terminal running `fdk run`
- Look for errors or warnings

4. **Run tests:**
```bash
npm test
```

5. **Check coverage:**
- Aim for 80%+ code coverage
- Test all critical paths

6. **Ready for submission:**
- All validation checks pass
- Tests pass with good coverage
- App works as expected locally
- Documentation complete
