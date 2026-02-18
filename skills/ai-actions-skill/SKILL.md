---
name: ai-actions-skill
description: Expert-level skill for creating AI Actions in Freshworks Platform 3.0 marketplace applications. Use when working with (1) Creating actions.json schemas with proper constraints, (2) Implementing SMI functions for AI actions, (3) Handling flat request schema requirements, (4) Defining response schemas with nested objects, (5) Integrating actions with workflow automation or AI assistants, (6) Validating and testing AI actions.
compatibility: Freshworks Platform 3.0, FDK 9.x, Node.js 18.x
---

# AI Actions Skill for Freshworks Platform 3.0

You are an AI Actions specialist for Freshworks Platform 3.0.

## Core Rules

- **NEVER assume API endpoints** - ALWAYS check the third-party API documentation before constructing request templates
- **Request schemas MUST be flat** - NO nested objects, NO arrays - ZERO TOLERANCE
- **Response schemas CAN be nested** - Include only essential fields
- **Function names MUST match exactly** - Case-sensitive between actions.json and server.js
- **Construct nested structures in server.js** - NOT in request schemas
- **Use request templates** - For all external API calls
- **Validate before finalizing** - Run `fdk validate` and test with FDK test server

---

## App Architecture

```
ai-actions-app/
├── actions.json                    # Action schemas (flat request, nested response)
├── server/
│   ├── server.js                   # SMI functions (flat→nested transformation)
│   └── test_data/
│       └── actionName.json         # Test payloads
├── config/
│   ├── requests.json               # External API templates
│   └── iparams.json                # Installation parameters
└── manifest.json                   # Platform 3.0 manifest (declares requests)
```

---

## What are AI Actions?

**Concept:** A declared function catalog exposed via `actions.json` where each action has:
- A unique function name
- Input JSON Schema (request parameters)
- Response JSON Schema (output structure)
- A backend callback (SMI function) with the SAME name that executes the action

**Purpose:** Makes tool/function calling predictable for UIs, assistants, and automations that can:
- Introspect available actions
- Validate inputs against schemas
- Handle typed responses

**Invocation:** Actions are triggered by:
- Platform events (e.g., onTicketCreate)
- Workflow automator
- Frontend app components
- AI assistants

**Supported Products:**
- ✅ Freshdesk
- ✅ Freshchat
- ✅ Freshworks CRM
- ✅ Freshcaller

---

## File Structure

AI Actions require these files:

```
app-root/
├── actions.json                    # Action definitions (schemas, parameters, responses)
├── server/
│   ├── server.js                   # SMI function implementations
│   └── test_data/
│       └── actionName.json         # Test payload for FDK testing
├── config/
│   ├── requests.json               # Request templates for external APIs
│   └── iparams.json                # Installation parameters
└── manifest.json                   # Platform 3.0 manifest (from freshworks_app_dev_skill)
```

**CRITICAL:** The function name in `actions.json` MUST match the function name in `server.js` (case-sensitive).

**Skeleton Template:** See `ai-actions-skeleton/` folder in this skill for generic templates.

**For complete app structure:** Use `freshworks-app-dev-skill` for manifest.json, .fdk/, and other app files.

---

## Quick Reference

### actions.json Template

```json
{
  "functionName": {
    "display_name": "Human Readable Name",
    "description": "What this action does",
    "parameters": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "field1": { "type": "string", "description": "Field description" },
        "field2": { "type": "number", "description": "Field description" }
      },
      "required": ["field1"]
    },
    "response": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "id": { "type": "string", "description": "Resource ID" },
        "data": { 
          "type": "object",
          "properties": {
            "nested": { "type": "string" }
          }
        }
      },
      "required": ["id"]
    }
  }
}
```

### server.js Template

```javascript
exports = {
  functionName: async function(args) {
    const { field1, field2 } = args;
    
    try {
      const response = await $request.invokeTemplate('requestTemplate', {
        context: {},
        body: JSON.stringify({ field1, field2 })
      });
      
      return renderData(null, {
        data: {
          response: JSON.parse(response.response)
        }
      });
      
    } catch (error) {
      return renderData({
        status: error.status || 500,
        message: error.message || 'Action failed'
      });
    }
  }
};
```

---

## Critical Constraints

### Request Schema Rules (ZERO TOLERANCE)

**❌ NEVER ALLOWED:**
- Nested objects in request schema
- Arrays in request schema
- Object type in request schema
- Array type in request schema

**✅ ALWAYS ALLOWED:**
- Flat structure only (single level)
- Supported types: `string`, `number`, `boolean`, `integer`

### ❌ WRONG - Nested Object in Request Schema

```json
{
  "createContact": {
    "parameters": {
      "type": "object",
      "properties": {
        "contact": {
          "type": "object",          // ❌ INVALID - nested object
          "properties": {
            "name": { "type": "string" },
            "email": { "type": "string" }
          }
        }
      }
    }
  }
}
```

### ❌ WRONG - Array in Request Schema

```json
{
  "bulkCreateContacts": {
    "parameters": {
      "type": "object",
      "properties": {
        "contacts": {
          "type": "array",           // ❌ INVALID - array not allowed
          "items": {
            "type": "object"
          }
        }
      }
    }
  }
}
```

### ✅ CORRECT - Flat Request Schema

```json
{
  "createContact": {
    "display_name": "Create Contact",
    "description": "Creates a new contact in the system",
    "parameters": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Contact name"
        },
        "email": {
          "type": "string",
          "description": "Contact email address"
        },
        "phone": {
          "type": "string",
          "description": "Contact phone number"
        }
      },
      "required": ["name", "email"]
    }
  }
}
```

---

## Handling Nested Objects/Arrays

**Problem:** API requires nested object or array, but request schema must be flat.

**Solution:** Construct nested structures in `server.js` SMI function.

### Example: API Requires Nested Object

**API Requirement:**
```json
POST /api/contacts
{
  "contact": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Step 1: Flat Request Schema in actions.json**
```json
{
  "createContact": {
    "parameters": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "email": { "type": "string" }
      },
      "required": ["name", "email"]
    }
  }
}
```

**Step 2: Construct Nested Object in server.js**
```javascript
exports = {
  createContact: async function(args) {
    const { name, email } = args;
    
    // Construct nested object for API
    const requestBody = {
      contact: {
        name: name,
        email: email
      }
    };
    
    try {
      const response = await $request.invokeTemplate('createContactRequest', {
        context: {},
        body: JSON.stringify(requestBody)
      });
      
      return renderData(null, {
        data: {
          response: response.response
        }
      });
    } catch (error) {
      return renderData({ status: 500, message: error.message });
    }
  }
};
```

---

## Response Schema Rules

**Different from Request:** Response schemas CAN be nested and CAN contain arrays.

### Best Practices:

1. **Include Only Essential Fields**
   - ✅ Include only fields that will be used by other actions or workflows
   - ❌ DO NOT generate schemas for the entire API response

2. **Nested Objects ARE Allowed**
   - ✅ Response schemas CAN support nested objects
   - ✅ Response schemas CAN support multiple layers

3. **Field Optionality**
   - ✅ Make response fields **optional (nullable)** by default
   - ✅ Only mark IDs as required (they must always be present)

4. **Arrays in Responses**
   - ✅ Arrays ARE allowed in response schemas
   - ✅ Use arrays for list responses

### ✅ CORRECT - Nested Response Schema

```json
{
  "getContact": {
    "response": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Contact ID"
        },
        "contact": {
          "type": "object",
          "description": "Contact details",
          "properties": {
            "name": { "type": "string" },
            "email": { "type": "string" },
            "address": {
              "type": "object",
              "properties": {
                "street": { "type": "string" },
                "city": { "type": "string" }
              }
            }
          }
        }
      },
      "required": ["id"]
    }
  }
}
```

---

## Function Naming Rules

**CRITICAL:** Function names must follow strict naming conventions.

### ✅ Valid Function Names:

- **Case-sensitive**: `createContact` ≠ `CreateContact`
- **Alphanumeric**: `[a-z]`, `[A-Z]`, `[0-9]`
- **Underscores allowed**: `create_contact`, `get_ticket_status`
- **Length**: 2 to 40 characters
- **Must NOT start with number**: ❌ `1createContact`
- **Must NOT contain spaces**: ❌ `create contact`

### ✅ CORRECT Examples:

```
createContact
getTicketStatus
update_user_profile
fetchData123
syncContacts_v2
```

### ❌ WRONG Examples:

```
1createContact        // ❌ Starts with number
create contact        // ❌ Contains space
create-contact        // ❌ Contains hyphen (use underscore)
c                     // ❌ Too short (< 2 chars)
```

---

## SMI Function Implementation

### Complete Template

```javascript
exports = {
  functionName: async function(args) {
    // Extract parameters from args
    const { param1, param2 } = args;
    
    // Construct request body (if API requires nested structure)
    const requestBody = {
      // Transform flat parameters to API-required structure
      nested: {
        param1: param1,
        param2: param2
      }
    };
    
    try {
      // Call external API using request template
      const response = await $request.invokeTemplate('apiRequestTemplate', {
        context: {},
        body: JSON.stringify(requestBody)
      });
      
      // Parse response if needed
      const parsedResponse = JSON.parse(response.response);
      
      // Return success response
      return renderData(null, {
        data: {
          response: parsedResponse,
          response_variables: {
            variable1: parsedResponse.id,
            variable2: parsedResponse.status
          }
        }
      });
      
    } catch (error) {
      console.error('Error in action:', error);
      
      // Return error response
      return renderData({
        status: error.status || 500,
        message: error.message || 'Action failed'
      });
    }
  }
};
```

### renderData() Method Rules

**Signature:** `renderData(error, data)`

**Success Response:**
```javascript
renderData(null, {
  data: {
    response: responseData,
    response_variables: {
      key1: value1,
      key2: value2
    }
  }
});
```

**Error Response:**
```javascript
renderData({
  status: 403,
  message: "Error while processing the request"
});
```

**CRITICAL:**
- ✅ First argument is ALWAYS `error` object (or `null` for success)
- ✅ For success, pass `null` as first argument
- ✅ For error, pass object with `status` and `message`

---

## Using Request Templates

**CRITICAL:** ALWAYS use request templates for third-party API calls.

### ⚠️ MANDATORY: Check API Documentation First

**BEFORE constructing ANY request template:**

1. **ASK for API documentation** - Request the user to provide:
   - Official API documentation URL
   - API endpoint details (method, path, headers)
   - Authentication requirements
   - Request/response body structure
   - Example cURL commands or API reference

2. **NEVER assume endpoints** - Do NOT guess:
   - ❌ API base URLs (e.g., `api.example.com`)
   - ❌ API paths (e.g., `/v1/contacts`, `/api/users`)
   - ❌ HTTP methods (GET, POST, PUT, DELETE)
   - ❌ Required headers or authentication schemes
   - ❌ Request body structure or field names

3. **VERIFY before implementing** - Always confirm:
   - ✅ Exact API endpoint URL
   - ✅ Required authentication method (API key, OAuth, Basic Auth)
   - ✅ Required headers (Content-Type, Authorization, custom headers)
   - ✅ Request body format (JSON, form-data, etc.)
   - ✅ Expected response structure

**If API documentation is not provided:**
- ❌ DO NOT proceed with request template construction
- ✅ ASK the user to provide API documentation or details
- ✅ Explain that accurate API details are required for correct implementation

### Step 1: Define Request Template in config/requests.json

**ONLY after verifying API documentation:**

```json
{
  "createContactRequest": {
    "schema": {
      "protocol": "https",
      "method": "POST",
      "host": "api.example.com",
      "path": "/v1/contacts",
      "headers": {
        "Authorization": "Bearer <%= iparam.api_key %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```

### Step 2: Declare Request in manifest.json

```json
{
  "modules": {
    "common": {
      "requests": {
        "createContactRequest": {}
      }
    }
  }
}
```

### Step 3: Use in SMI Function

```javascript
exports = {
  createContact: async function(args) {
    const response = await $request.invokeTemplate('createContactRequest', {
      context: {},
      body: JSON.stringify({ name: args.name, email: args.email })
    });
    
    return renderData(null, { data: { response: response.response } });
  }
};
```

---

## Working with Third-Party APIs

**CRITICAL:** AI Actions apps are designed to integrate with third-party services. NEVER assume API details.

### Mandatory Pre-Implementation Checklist

Before implementing ANY action that calls a third-party API:

- [ ] **Request API documentation** from the user
- [ ] **Verify endpoint URL** - Exact base URL (e.g., `api.workday.com`, `api.stripe.com`)
- [ ] **Verify API path** - Exact path (e.g., `/v1/employees`, `/api/v2/contacts`)
- [ ] **Verify HTTP method** - GET, POST, PUT, DELETE, PATCH
- [ ] **Verify authentication** - API key, OAuth, Basic Auth, Bearer token
- [ ] **Verify required headers** - Content-Type, custom headers, API version headers
- [ ] **Verify request body structure** - Required fields, data types, nesting
- [ ] **Verify response structure** - Expected fields, status codes, error formats

### How to Request API Details

**When user asks to create an action, respond with:**

```
To implement this action correctly, I need the API documentation for [Service Name].

Please provide one of the following:
1. Official API documentation URL (preferred)
2. Example cURL command for this API call
3. API endpoint details:
   - Base URL (e.g., https://api.example.com)
   - API path (e.g., /v1/resource)
   - HTTP method (GET/POST/PUT/DELETE)
   - Required headers
   - Authentication method
   - Request body structure
   - Expected response format

Without this information, I cannot guarantee the request template will work correctly.
```

### Example: Correct Workflow

**User Request:** "Create an action to add employees in Workday"

**❌ WRONG Response:**
```json
{
  "addEmployee": {
    "schema": {
      "method": "POST",
      "host": "api.workday.com",  // ❌ ASSUMED!
      "path": "/v1/employees"      // ❌ ASSUMED!
    }
  }
}
```

**✅ CORRECT Response:**

```
To implement the "Add Employee" action for Workday, I need the API documentation.

Please provide:
1. Workday API documentation URL for the employee creation endpoint
   OR
2. Example cURL command showing how to create an employee in Workday
   OR
3. The following details:
   - Workday API base URL
   - API endpoint path for creating employees
   - Required authentication method (OAuth, API key, etc.)
   - Required headers
   - Request body structure for employee data

Once you provide this information, I'll create the action with the correct request template.
```

### Common Third-Party Services

**When working with these services, ALWAYS verify their API documentation:**

- **Workday** - HR/Employee management APIs
- **Salesforce** - CRM APIs
- **Stripe** - Payment processing APIs
- **Slack** - Messaging APIs
- **GitHub** - Repository management APIs
- **Jira** - Issue tracking APIs
- **Zapier** - Webhook integration APIs
- **Any other third-party service**

**DO NOT assume endpoint structure for ANY service, even popular ones!**

---

## Testing Actions

### Step 1: Create Test Data

Create sample payload JSON files in `<app root>/server/test_data/`:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Step 2: Run FDK Test Server

```bash
cd <app-directory>
fdk run
```

### Step 3: Test in Browser

1. Open `https://localhost:10001/web/test`
2. From **Select type**, choose `actions`
3. In **Select an action**, choose the action to test
4. Edit payload if needed
5. Click **Simulate**
   - **Success**: Action worked
   - **Failed**: Invalid payload or implementation error

---

## Validation Checklist

Before finalizing actions, verify:

### API Documentation Validation (CRITICAL - Check First):
- [ ] **API documentation verified** - Have official docs or user-provided details
- [ ] **Endpoint URL confirmed** - Not assumed or guessed
- [ ] **HTTP method verified** - Matches API documentation
- [ ] **Authentication verified** - Correct method and credentials
- [ ] **Headers verified** - All required headers included
- [ ] **Request body structure verified** - Matches API requirements
- [ ] **Response structure verified** - Matches API documentation

### actions.json Validation:
- [ ] Function names are 2-40 characters, alphanumeric + underscores
- [ ] Function names do NOT start with numbers
- [ ] Request schema is FLAT (no nested objects or arrays)
- [ ] Response schema includes only essential fields
- [ ] IDs are marked as required in response schema
- [ ] All fields have clear descriptions
- [ ] `$schema` is set to `http://json-schema.org/draft-07/schema#`

### server.js Validation:
- [ ] Function name matches `actions.json` exactly (case-sensitive)
- [ ] Uses `$request.invokeTemplate()` for external API calls
- [ ] Constructs nested objects/arrays in function body (not in schema)
- [ ] Uses `renderData(null, data)` for success
- [ ] Uses `renderData(error)` for errors
- [ ] Includes error handling with try-catch
- [ ] Logs errors with `console.error()`

### manifest.json Validation:
- [ ] All request templates declared in `modules.common.requests`

### General Validation:
- [ ] Run `fdk validate` and fix all errors
- [ ] Test action using FDK test server
- [ ] Verify response matches schema

---

## Common Mistakes to Avoid

### ❌ MISTAKE 0: Assuming API Endpoints Without Documentation

**Problem:** Guessing API endpoints, paths, or authentication methods without checking documentation.

**Fix:** 
- ALWAYS ask for API documentation before implementing
- NEVER assume endpoint structure or authentication
- Verify all API details with official documentation or user-provided details

### ❌ MISTAKE 1: Nested Objects in Request Schema

**Fix:** Keep request schema flat, construct nested object in `server.js`.

### ❌ MISTAKE 2: Arrays in Request Schema

**Fix:** Accept single object parameters, construct array in `server.js`.

### ❌ MISTAKE 3: Including Entire API Response in Schema

**Fix:** Include only essential fields that will be used by other actions.

### ❌ MISTAKE 4: Function Name Mismatch

**Fix:** Ensure exact match (case-sensitive) between actions.json and server.js.

### ❌ MISTAKE 5: Not Using Request Templates

**Fix:** Use `$request.invokeTemplate()` with request templates.

### ❌ MISTAKE 6: Incorrect renderData() Usage

**Fix:**
```javascript
// ✅ CORRECT - Success
renderData(null, { data: { response: data } });

// ✅ CORRECT - Error
renderData({ status: 500, message: 'Error' });
```

---

## Best Practices

1. **API Documentation First (CRITICAL)**
   - ✅ ALWAYS request API documentation before implementing
   - ✅ Verify endpoint URLs, methods, and authentication
   - ✅ Check official API reference or user-provided cURL examples
   - ❌ NEVER assume or guess API endpoint structure
   - ❌ NEVER proceed without verified API details

2. **Clear Descriptions**
   - Write clear, concise descriptions for actions and fields
   - Explain what each parameter does
   - Document expected formats

3. **Minimal Response Schemas**
   - Include only fields that will be used by other actions
   - Avoid over-specifying response structure
   - Let additional fields pass through by default

4. **Error Handling**
   - Always use try-catch in SMI functions
   - Log errors with `console.error()`
   - Return meaningful error messages
   - Include HTTP status codes in errors

5. **Request Template Usage**
   - Define all external API calls as request templates
   - Use `<%= iparam.variable %>` for installation parameters
   - Use `<%= access_token %>` for OAuth
   - Declare all request templates in manifest.json
   - Base templates on verified API documentation ONLY

6. **Testing**
   - Create comprehensive test payloads
   - Test both success and error scenarios
   - Validate response structure matches schema
   - Test with FDK test server before deployment

---

## When to Use This Skill

Use this skill when:
- ✅ User asks to create AI actions
- ✅ User mentions actions.json
- ✅ User wants to integrate with workflow automation
- ✅ User wants to create actions for AI assistants
- ✅ User needs to define action schemas
- ✅ User is implementing SMI functions for actions

Do NOT use this skill for:
- ❌ General Freshworks app development (use freshworks-app-dev-skill)
- ❌ Frontend UI components (use freshworks-app-dev-skill)
- ❌ OAuth integration (use freshworks-app-dev-skill)
- ❌ Manifest structure (use freshworks-app-dev-skill)

---

## References

For detailed implementation guide, see:
- `references/ai-actions-guide.md` - Complete guide with examples
- `references/ai-actions-quick-reference.md` - One-page quick reference

For specific implementation details, use the `get_developer_docs` tool with these queries:
- "How to create actions.json in Freshworks Platform 3.0"
- "How to implement SMI functions in server.js"
- "How to use request templates for external APIs"

---

## Summary

**Key Takeaways:**

1. **Request schemas MUST be flat** - No nested objects or arrays
2. **Response schemas CAN be nested** - Include only essential fields
3. **Function names MUST match exactly** - Case-sensitive, alphanumeric + underscores
4. **Use request templates** - For all external API calls
5. **Use renderData() correctly** - `null` for success, error object for failures
6. **Construct complex structures in server.js** - Not in schemas
7. **Test thoroughly** - Use FDK test server before deployment
