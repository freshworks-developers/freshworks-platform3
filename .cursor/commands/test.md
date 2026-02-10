# /test - Generate Tests for Freshworks Apps

## Usage

```
/test
```

When you run `/test` in a Freshworks app directory, this command will:
1. Analyze your app structure and features
2. Generate test files for frontend and backend
3. Create test data payloads for events
4. Set up FDK testing configuration
5. Provide testing instructions

---

## What Gets Generated

### 1. Frontend Tests (if applicable)

**File:** `app/scripts/app.test.js`

Tests for:
- App initialization
- UI component rendering
- Event handlers
- Backend method calls
- Data fetching and display

**Example:**
```javascript
describe('App Initialization', () => {
  test('should initialize app client', async () => {
    const client = await app.initialized();
    expect(client).toBeDefined();
  });
  
  test('should render UI on app.activated', async () => {
    const client = await app.initialized();
    client.events.on('app.activated', () => {
      const element = document.getElementById('apptext');
      expect(element).toBeTruthy();
    });
  });
});

describe('Backend Communication', () => {
  test('should call backend method successfully', async () => {
    const client = await app.initialized();
    const response = await client.request.invoke('myMethod', { data: 'test' });
    expect(response.success).toBe(true);
  });
});
```

### 2. Backend Tests

**File:** `server/server.test.js`

Tests for:
- Event handlers
- SMI functions
- External API calls
- Data processing
- Error handling

**Example:**
```javascript
const { myMethod, onTicketCreateHandler } = require('./server');

describe('SMI Functions', () => {
  test('myMethod should process data correctly', async () => {
    const args = {
      data: 'test',
      iparams: {
        api_key: 'test_key'
      }
    };
    const result = await myMethod(args);
    expect(result.success).toBe(true);
  });
});

describe('Event Handlers', () => {
  test('onTicketCreate should handle ticket creation', async () => {
    const args = {
      data: {
        ticket: {
          id: 123,
          subject: 'Test Ticket'
        }
      },
      iparams: {
        webhook_url: 'https://example.com/webhook'
      }
    };
    await onTicketCreateHandler(args);
    // Verify webhook was called
  });
});
```

### 3. Test Data Payloads

**Directory:** `server/test_data/`

Generated for each event:
- `onTicketCreate.json`
- `onContactUpdate.json`
- `onAppInstall.json`
- etc.

**Example:** `server/test_data/onTicketCreate.json`
```json
{
  "data": {
    "ticket": {
      "id": 123,
      "subject": "Test Ticket",
      "description": "This is a test ticket",
      "status": 2,
      "priority": 1,
      "requester": {
        "id": 456,
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  },
  "iparams": {
    "api_key": "test_api_key",
    "domain": "test.freshdesk.com"
  }
}
```

### 4. Request Template Tests

**File:** `config/requests.test.js`

Tests for:
- Request template validation
- API endpoint connectivity
- Authentication
- Response handling

**Example:**
```javascript
describe('Request Templates', () => {
  test('should call external API successfully', async () => {
    const response = await $request.invokeTemplate('myApi', {
      context: { id: '123' }
    });
    expect(response.status).toBe(200);
    expect(JSON.parse(response.response)).toHaveProperty('data');
  });
  
  test('should handle API errors gracefully', async () => {
    try {
      await $request.invokeTemplate('myApi', {
        context: { id: 'invalid' }
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
```

### 5. Integration Tests

**File:** `tests/integration.test.js`

End-to-end tests for:
- Complete user workflows
- Frontend-backend integration
- External API integration
- OAuth flows

**Example:**
```javascript
describe('Integration Tests', () => {
  test('complete sync workflow', async () => {
    // 1. Initialize app
    const client = await app.initialized();
    
    // 2. Trigger sync from UI
    const syncBtn = document.getElementById('syncBtn');
    syncBtn.click();
    
    // 3. Verify backend was called
    const response = await client.request.invoke('syncData', {});
    expect(response.success).toBe(true);
    
    // 4. Verify UI updated
    const status = document.getElementById('syncStatus');
    expect(status.textContent).toBe('Sync completed');
  });
});
```

---

## Testing Workflow

### Step 1: Generate Tests
```
/test
```

### Step 2: Run FDK Tests
```bash
# Start local test server
fdk run

# In another terminal, run tests
npm test
```

### Step 3: Test Frontend
1. Open `http://localhost:10001/system_settings`
2. Select modules to test
3. Enter account URLs
4. Click Continue
5. Test app in browser

### Step 4: Test Backend/Serverless
1. Open `http://localhost:10001/web/test`
2. Select event to test
3. Edit test payload if needed
4. Click "Simulate Event"
5. Check terminal logs for output

### Step 5: Check Code Coverage
```bash
# FDK shows coverage on exit
# Press Ctrl+C to stop fdk run
# Coverage summary displayed

# Aim for:
# - Statements: > 80%
# - Branches: > 80%
# - Functions: > 80%
# - Lines: > 80%
```

---

## Test Categories

### 1. Unit Tests
Test individual functions in isolation:
- ✅ Single function behavior
- ✅ Input/output validation
- ✅ Error handling
- ✅ Edge cases

### 2. Integration Tests
Test component interactions:
- ✅ Frontend-backend communication
- ✅ External API calls
- ✅ Database operations
- ✅ Event flow

### 3. E2E Tests
Test complete user workflows:
- ✅ User interactions
- ✅ Data flow through system
- ✅ UI updates
- ✅ Success/error scenarios

### 4. Event Tests
Test serverless event handlers:
- ✅ Product events (onTicketCreate, etc.)
- ✅ App lifecycle events (onAppInstall, etc.)
- ✅ Scheduled events
- ✅ External events

---

## Testing Best Practices

### 1. Test Data
- Use realistic test data
- Cover edge cases (empty, null, invalid)
- Test with different data types
- Include error scenarios

### 2. Mocking
```javascript
// Mock external API calls
jest.mock('$request', () => ({
  invokeTemplate: jest.fn().mockResolvedValue({
    status: 200,
    response: JSON.stringify({ data: 'test' })
  })
}));

// Mock iparams
const mockArgs = {
  iparams: {
    api_key: 'test_key',
    domain: 'test.freshdesk.com'
  }
};
```

### 3. Assertions
```javascript
// Test success cases
expect(result.success).toBe(true);
expect(result.data).toHaveProperty('id');

// Test error cases
expect(() => myFunction()).toThrow();
expect(error.message).toContain('Invalid input');

// Test async operations
await expect(asyncFunction()).resolves.toBe(expected);
await expect(asyncFunction()).rejects.toThrow();
```

### 4. Coverage Goals
- **Minimum:** 80% for marketplace submission
- **Recommended:** 90%+ for production apps
- Focus on critical paths first
- Don't skip error handling tests

---

## FDK Testing Commands

### Start Test Server
```bash
fdk run
# Opens local test server at http://localhost:10001
```

### Configure System Settings
```bash
# Navigate to:
http://localhost:10001/system_settings

# Select modules and enter account URLs
```

### Test Installation Parameters
```bash
# Navigate to:
http://localhost:10001/custom_configs

# Enter iparam values and click Install
```

### Simulate Serverless Events
```bash
# Navigate to:
http://localhost:10001/web/test

# Select event, edit payload, simulate
```

### Validate App
```bash
fdk validate
# Checks manifest, file structure, code quality
```

---

## Test File Structure

```
my-app/
├── app/
│   └── scripts/
│       ├── app.js
│       └── app.test.js          # Frontend tests
├── server/
│   ├── server.js
│   ├── server.test.js           # Backend tests
│   └── test_data/               # Event payloads
│       ├── onTicketCreate.json
│       └── onContactUpdate.json
├── config/
│   ├── requests.json
│   └── requests.test.js         # API tests
├── tests/
│   ├── integration.test.js      # Integration tests
│   └── e2e.test.js              # End-to-end tests
├── package.json                 # Test scripts
└── jest.config.js               # Test configuration
```

---

## Example Test Scripts

### package.json
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:frontend": "jest app/",
    "test:backend": "jest server/",
    "test:integration": "jest tests/integration",
    "test:e2e": "jest tests/e2e"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "@testing-library/dom": "^9.0.0"
  }
}
```

### jest.config.js
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  collectCoverageFrom: [
    'app/**/*.js',
    'server/**/*.js',
    '!**/node_modules/**',
    '!**/test_data/**'
  ]
};
```

---

## Common Testing Scenarios

### Test OAuth Flow
```javascript
test('OAuth authorization flow', async () => {
  // 1. Initiate OAuth
  const authUrl = await client.request.invoke('getAuthUrl', {});
  expect(authUrl).toContain('oauth/authorize');
  
  // 2. Mock OAuth callback
  const token = 'mock_access_token';
  
  // 3. Test API call with token
  const response = await $request.invokeTemplate('oauthApi', {
    context: { access_token: token }
  });
  expect(response.status).toBe(200);
});
```

### Test Event Handler
```javascript
test('onTicketCreate handler', async () => {
  const testData = require('./test_data/onTicketCreate.json');
  
  const result = await onTicketCreateHandler(testData);
  
  expect(result).toBeDefined();
  // Verify external API was called
  // Verify data was processed correctly
});
```

### Test UI Interaction
```javascript
test('button click triggers backend call', async () => {
  const client = await app.initialized();
  
  const button = document.getElementById('syncBtn');
  const mockInvoke = jest.spyOn(client.request, 'invoke');
  
  button.click();
  
  expect(mockInvoke).toHaveBeenCalledWith('syncData', expect.any(Object));
});
```

---

## Troubleshooting Tests

### Tests Failing
1. Check FDK is running: `fdk run`
2. Verify test data is valid
3. Check mock implementations
4. Review error messages in terminal

### Low Coverage
1. Add tests for uncovered functions
2. Test error handling paths
3. Test edge cases
4. Add integration tests

### Slow Tests
1. Use mocks for external APIs
2. Reduce test data size
3. Run tests in parallel
4. Skip E2E tests in development

---

## Next Steps

After generating tests:
1. Review generated test files
2. Customize test data for your app
3. Add app-specific test cases
4. Run tests: `npm test`
5. Check coverage: `npm run test:coverage`
6. Fix failing tests
7. Aim for 80%+ coverage
