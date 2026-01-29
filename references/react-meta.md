# React Meta Framework: Freshworks Platform 3.0 Development Guide

## Overview

The React Meta Framework is a new structured, framework-first approach for building Freshworks Platform 3.0 apps using React. This framework addresses limitations of the existing complex workflow by enforcing consistency, improving maintainability, and enabling a scalable development experience.

**Note:** The Meta Framework is currently in beta and is primarily built around React.

## Benefits

The React meta framework significantly improves developer experience:

- **Package Management**: Install and manage third-party libraries directly using npm, pnpm, or yarn without relying on external CDNs
- **Automatic Dependency Installation**: FDK commands (run, validate, pack) automatically install dependencies
- **CSS Utilities Support**: Use CSS utilities such as Tailwind CSS by configuring and specifying the CSS along with dependencies
- **No External Tooling**: Depend on FDK to build React-based Freshworks apps without any additional CLI or external tooling
- **TypeScript Support**: Both JavaScript and TypeScript formats are supported
- **Multiple HTML Files**: Support for multiple .html files (placed at root level of app folder)
- **Full Validation**: All validations are supported, maintaining app code at the same standard as non-React FDK apps
- **Test Versions**: Use Test versions feature for testing, which publishes a development app as a Test Version to AMP via APIs, connecting to locally running project and reflecting UI changes in near real time

## Difference: Existing Framework vs New Meta Framework

| Feature | Existing Framework | New Meta Framework |
|---------|------------------|-------------------|
| **src folder** | src folder is auto-created. Source files should be added to src folder for quick app code review | src folder is not auto-created. Separately adding source files to any such folder is not necessary |
| **Third-party library usage** | Some third-party libraries are not supported | No limitations on usage of all third-party libraries |
| **File format supported** | Only JavaScript format is supported | Both JavaScript and TypeScript formats are supported |
| **.html files** | Only index.html file is supported | Multiple .html files are supported (at root level of app folder) |
| **Validation skip** | Some validations are skipped for React framework apps | All validations are supported |
| **Testing practice** | Testing in local FDK mimics all platform features | Test versions feature is used for testing via APIs |

## Creating an App with Meta Framework

### Command

```bash
fdk create
```

**Steps:**
1. Run `fdk create` command and select a product of your choice
2. Choose the template `first-react-app`
3. The Meta framework manages the project structure internally

## App Directory Structure

When you create an app with `first-react-app` template, the app directories are generated as follows:

```
my-react-app/
├── app/                          # Frontend application files
│   ├── components/               # All front-end React components
│   │   └── [ComponentName].jsx  # React components (simple paths: 'app/component/name')
│   ├── public/                   # Images to be used for the app
│   └── styles/                   # Styles for front-end components
├── config/                       # Configuration files
│   ├── iparams.json              # Installation parameters (default settings page)
│   ├── iparams.html              # Custom installation page
│   └── assets/                   # Installation page assets
│       ├── iparams.js            # Configuration methods (optional)
│       ├── components/           # React components for installation page
│       │   └── [ComponentName].jsx  # Simple paths: 'config/assets/component/name'
│       └── styles/               # Styles for installation page
├── test/                         # Unit test files for code validation
├── index.html                    # Main HTML entry point (or custom name at root level)
├── package.json                  # Dependencies and meta framework config
└── manifest.json                 # App configuration (Platform 3.0)
```

### Directory Descriptions

- **app/components**: Contains all front-end React components. Use simple paths like `app/component/name` instead of complex relative paths like `../../`
- **app/public**: Contains all images to be used for the app
- **app/styles**: Contains styles required for front-end components
- **config/assets/components**: Contains React components required for installation page. Use simple paths like `config/assets/component/name`
- **config/assets/styles**: Contains styles required for installation page
- **test/**: Contains unit test files used to validate app code

## Package.json Configuration

When building an app with the new meta framework, the app folder includes a `package.json` file with the following configuration:

```json
{
  "metaConfig": {
    "framework": "react",
    "packageManager": "pnpm"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@freshworks/crayons": "^4.0.0"
  }
}
```

### metaConfig Attributes

| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| `framework` | string | Specifies the front-end framework or library used by the app (e.g., "react") |
| `packageManager` | string | Specifies package manager for installing dependencies: npm, yarn, or pnpm. **Note:** If not specified, defaults to npm |

## HTML Files

### index.html

The main HTML entry point. You can create HTML files with any name at the root level of the app directory and configure them in `manifest.json`.

**Required Script Tag:**
If the app uses Data method, Request method, Installation settings, or Data store, include:

```html
<script async src="{{{appclient}}}"></script>
```

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
  <script async src="{{{appclient}}}"></script>
  <script src="scripts/app.js"></script>
</body>
</html>
```

## Custom Installation Page (iparams.html)

### iparams.js Updates

For apps built with the meta framework, enable access to configuration methods (`getConfigs`, `postConfigs`, `validate`) by attaching them to a `window` object.

**Important:**
- Configuration methods can be defined in:
  - `iparams.js` file
  - Any file inside a React component under `config/assets/components`
  - A separate file
- Methods must be explicitly assigned to the `window` object
- Using an `iparams.js` file is not mandatory while building an app with the React meta framework

### Sample Code

```jsx
import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Iparam from './Iparam';

const App = () => {
  const [child, setChild] = useState(<h3>Iparam is loading</h3>);
  const [val, setVal] = useState('new');

  useLayoutEffect(() => {
    window.app.initialized().then((client) => {
      console.log('iparam - initiated - 1', client);
      window.client = client;
      setChild(<Iparam />);
    });
  }, []);

  const getConfigs = (e) => {
    setVal(e.val);
  };

  const postConfigs = () => {
    return {
      val
    };
  };

  const validate = () => {
    console.log('validate function');
    return true;
  };

  // Attach config methods to window to make them available globally
  window.getConfigs = getConfigs;
  window.postConfigs = postConfigs;
  window.validate = validate;

  return (
    <div>
      {child}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## React Routing

When using React Router, the base path may not always match. To ensure the app is properly rendered, define a fallback route and import it in the main file.

### Example 1: Route Configuration

```jsx
<Route path="*" element={<Home />} />
<Route path='/app/tailwind' element={<TailwindPage />} />
<Route path='/app/form' element={<Form />} />
```

### Example 2: Nested Routes

```jsx
{
  path: '/*',
  Component: App,
  children: [
    {
      path: '*',
      Component: Featured,
    },
    {
      path: 'app/featured',
      Component: Featured,
    }
  ]
}
```

## Code Coverage Process

The new framework applies unit testing to code while you pack and publish an app. If the testing fails, a warning describing the potential rejection of the app is displayed.

**Note:** Unit testing is applied automatically during `fdk pack` and `fdk publish` commands for apps built with the React meta framework.

## Linting Rules

The updated linting configuration contains React-specific lint validations. The React-specific lint validation applies only to apps created using the `first-react-app` template. FDK apps that were built without the React framework are unaffected.

## Development Workflow

### Running the App

```bash
fdk run
```

- Automatically installs dependencies from `package.json`
- Starts local development server
- Supports Test versions feature for real-time UI updates

### Validating the App

```bash
fdk validate
```

- Validates app code with React-specific lint rules
- Checks all standard FDK validations
- No validations are skipped for meta framework apps

### Packing the App

```bash
fdk pack
```

- Applies unit testing to code
- Builds and packages the app
- Displays warnings if testing fails

## Testing Practices

### Test Versions Feature

For apps built with the meta framework, use the Test versions feature:

1. Publish a development app as a Test Version to AMP via APIs
2. Connects to locally running project
3. Reflects UI changes into the product in near real time

This replaces the traditional local FDK testing approach and provides a more accurate testing environment.

## React Component Patterns

### Basic Component Structure

```jsx
import React, { useState, useEffect } from 'react';
import { FwButton, FwInput } from '@freshworks/crayons/react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Component initialization
    window.app.initialized().then((client) => {
      window.client = client;
      // Access Freshworks APIs
    });
  }, []);

  return (
    <div>
      <FwInput label="Name" placeholder="Enter name" />
      <FwButton color="primary">Submit</FwButton>
    </div>
  );
}

export default MyComponent;
```

### Using Freshworks Client APIs

```jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.app.initialized().then((client) => {
      // Get current ticket data
      client.data.get("ticket").then(data => {
        console.log(data.ticket);
      });

      // Invoke server method
      client.request.invoke("serverMethod", { key: "value" })
        .then(response => console.log(response))
        .catch(error => console.error(error));
    });
  }, []);

  return <div>App Content</div>;
}
```

## Key Differences from Existing Framework

### File Organization

**Existing Framework:**
- Requires `src/` folder (auto-created)
- Source files must be in `src/` for code review

**Meta Framework:**
- No `src/` folder requirement
- Components in `app/components/`
- Installation page components in `config/assets/components/`

### Third-Party Libraries

**Existing Framework:**
- Limited third-party library support
- May require CDN links

**Meta Framework:**
- Full support for all third-party libraries
- Install via npm/pnpm/yarn
- No CDN dependencies required

### TypeScript Support

**Existing Framework:**
- JavaScript only

**Meta Framework:**
- Both JavaScript and TypeScript supported

## Best Practices

1. **Component Organization**
   - Keep components in `app/components/`
   - Use simple import paths: `app/component/name`
   - Avoid complex relative paths like `../../`

2. **Installation Page**
   - Use `config/assets/components/` for React components
   - Attach configuration methods to `window` object
   - Keep styles in `config/assets/styles/`

3. **Package Management**
   - Specify `packageManager` in `package.json` metaConfig
   - Use npm, pnpm, or yarn consistently
   - Let FDK handle dependency installation automatically

4. **Routing**
   - Always define fallback routes (`path="*"`)
   - Handle base path mismatches
   - Test routing in Test versions environment

5. **Testing**
   - Write unit tests in `test/` directory
   - Use Test versions feature for integration testing
   - Ensure code coverage meets requirements

## Notes

- **Deprecated**: `iparam_test_data.json` file has been deprecated. Before testing, navigate to `http://localhost:10001/custom_configs` and enter appropriate values for configured installation parameters
- **Code Review**: Source files in `src/` directory are packed along with the app when `fdk pack` is run and can be submitted for review (for existing framework apps)
- **Validation**: React-specific lint validations apply only to apps created with `first-react-app` template
- **Testing**: Unit testing is automatically applied during pack/publish for meta framework apps

## Platform 3.0 Execution Rules

- React components execute in browser iframe context
- Cannot access Node.js APIs (fs, http, etc.)
- Use `client.request.invoke()` for backend communication
- `console.log()` outputs to browser DevTools only
- Backend logs appear in terminal when running `fdk run`
- Strict frontend/backend boundaries enforced

---
