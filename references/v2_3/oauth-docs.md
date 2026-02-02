>title: What are OAuth prerequisites and details
>tags: oauth, oauth-support, prerequisites
>context: oauth_configs.json
>content:

# What are OAuth prerequisites and details
OAuth enables dynamic user authentication and authorization through an access token, which can be automatically refreshed. Users don't need to provide their credentials for authentication.

## Steps:
1. Register your app in the third-party developer portal to obtain `client_id` and `client_secret`.
2. Set the redirect URL for your app in the third-party developer portal:
   - Testing: `http://localhost:10001/auth/callback`
   - Production: `https://oauth.freshdev.io/auth/callback`

## Considerations:
1. The third-party application must adhere to OAuth 2.0 framework (RFC 6749) for successful OAuth handshake.
2. OAuth request in `config/oauth_config.json` is supported from FDK version 9.0.0 and platform version 2.3.
3. OAuth request with domain whitelisting is supported on platform version 2.2 and FDK versions prior to 9.0.0.
4. Platform version 2.2 support is currently deprecated. Migrate to the latest platform and FDK versions.

---
>title: How to configure OAuth
>tags: oauth, oauth-support, configuration
>context: oauth_configs.json
>content:

# How to configure OAuth

## The `config/oauth_config.json` file contains OAuth configuration with the following fields:

1. `client_id` and `client_secret`: Issued upon registering your app in the third-party developer portal (mandatory).
2. `authorize_url`: Third-party authorization request URL.
3. `token_url`: Request URL for obtaining the access token.
4. `options`: Additional parameters for fetching the access token, such as scope and custom headers.
5. `token_type`: Specifies the level of access for the access token (supports `account` and `agent`).
6. `oauth_iparams`: Used to retrieve unique authorization URLs for certain OAuth providers.

## Sample configuration:

```json
{
  "client_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX",
  "client_secret": "XXXXXXXXXXXXXXXXXXXXX",
  "authorize_url": "https://login.third-party-domain.com/authorize.srf",
  "token_url": "https://login.third-party-domain.com/token.srf",
  "options": {
    "scope": "read"
  },
  "token_type": "account"
}
```

---
>title: example of configuring OAuth settings via installation parameters
>tags: oauth, oauth-support, iparams
>context: oauth_configs.json
>code:

# example of configuring OAuth settings via installation parameters
When the app uses Shopify OAuth integrations, which requires the the domain for `authorize_url` and `token_url` to be dynamic and valid for that installation of the app, you can choose `oauth_iparams` to retrieve the values during app installation to complete the OAuth handshake. 

## Update `config/oauth_config.json` as below to include oauth settings via installation parameters

```json
{
      "client_id": "1aXXX-XXXX-XXXXXXXXc8d1",
      "client_secret": "q8NbXXXXXXXXX1p1",
      "oauth_iparams": {
        "domain": {
          "display_name": "Shopify domain",
          "description": "Enter domain name",
          "type": "text",
          "required": true
        }
      },
      "authorize_url": "https://{{ oauth_iparams.domain }}/authorize.srf",
      "token_url": "https://{{ oauth_iparams.domain }}/token.srf",
      "options": {
        "scope": "read"
      },
      "token_type": "account"
}
```

---
>title: Making API request with OAuth credentials in frontend app with example
>tags: oauth, oauth-support, frontend
>context: oauth_configs.json, requests.json, app.js
>content:

# Making API request with OAuth credentials in frontend app with example

1. In `config/requests.json`, provide the request snapshot with OAuth details:
   - Use `access_token` variable in `requestTemplateName.schema.header.Authorization`.
   - Set `requestTemplateName.options.isOAuth` as `true`.
2. Declare the configured template in `manifest.json`.
3. For front-end apps, invoke the template in `app.js` using `client.request.invokeTemplate`.

## For a frontend app:
1. In `config/requests.json`, provide the request snapshot with OAuth details:
   - Use `access_token` variable in `{requestTemplateName}.schema.header.Authorization`.
   - Set `{requestTemplateName}.options.isOAuth` as `true`.
2. Declare the configured template in `manifest.json`.
3. Invoke the template in `app.js` using `client.request.invokeTemplate`.

>code:

## Steps for making an API request with OAuth credentials:
1. Update `config/requests.json` to add the request template
2. Declare the configured template in `manifest.json`
3. For front-end apps, invoke the template from the app code in `app.js` using `client.request.invokeTemplate`
4. For serverless apps, invoke the template from the app code in `server.js` in a similar manner.

### Update `config/requests.json` to add the request template:
```json
{
  "asanaGetWorkspace": {
    "schema": {
      "method": "GET",
      "host": "app.asana.com",
      "path": "/api/1.0/workspaces",
      "headers": {
          "Authorization": "bearer <%= access_token %>",
          "Content-Type": "application/json"
      }
    },
    "options": {
      "isOAuth": true
    }
  }
}
```

### Declare the configured template in `manifest.json`:
```json
{
  "requests": {
    "asanaGetWorkspace": {}
  }
}
```

### For front-end apps, invoke the template from the app code in `app.js` using `client.request.invokeTemplate`:
```js
try {
  const response = await client.request.invokeTemplate("asanaGetWorkspace", {});
  // App logic using the response
} catch (error) {
  // Error handling
}
```

### For serverless apps, invoke the template from the app code in `server.js` in a similar manner.

---
>title: Making API request with OAuth credentials in serverless app with example
>tags: oauth, oauth-support, serverless
>context: oauth_configs.json, requests.json, server.js
>code:

# Making API request with OAuth credentials in serverless app with example
1. Provide a snapshot of the request to be made to the third-party domain, in `config/requests.json` file.
   1. Use the access_token variable in `requestTemplateName.schema.header.Authorization`.
   2. Set `requestTemplateName.options.isOAuth` as `true`.
2. Declare the configured template (snapshot) in `manifest.json`.
3. For serverless apps, invoke the template from the app code in `server.js` using `$request.invokeTemplate`.

>code:

## Provide a snapshot of the request to be made to the third-party domain, in `config/requests.json` file
```json
{
  "asanaGetWorkspace": {
    "schema": {
      "method": "GET",
      "host": "app.asana.com",
      "path": "/api/1.0/workspaces",
      "headers": {
          "Authorization": "bearer <%= access_token %>",
          "Content-Type": "application/json"
      }
    },
    "options": {
      "isOAuth": true
    }
  }
}
```
## Declare the configured template (snapshot) in `manifest.json`.
```js
{
  …
  "requests": {
    "asanaGetWorkspace": {}
  }
}
```

## For serverless apps, invoke the template from the app code in `server.js` using `$request.invokeTemplate`.
```js
…
try {
  await $request.invokeTemplate("asanaGetWorkspace",{});
  // app logic
} catch (error) {
  // error handling
}
```

---
>title: steps for testing an OAuth App locally
>tags: oauth, oauth-support, testing
>context: oauth_configs.json
>content:

# steps for testing an OAuth App locally
1. Execute `fdk run` command in the terminal.
2. Log in to your Freshworks product account.
3. Select a ticket and append the URL with `?dev=true` query parameter, like this: `https://subdomain.freshdesk.com/helpdesk/tickets/1?dev=true`.
4. The first time you test your app, authorize it to access information from the third-party.
5. Click the Authorize button in the app to redirect to the third-party domain.
6. The generated token is stored in `.fdk/localstore` for account level and in the browser's localStorage for agent level.

---

>title: Example of sending an OAuth request
>tags: request-method, http, api, Oauth
>context: oauth_configs.json, requests.json, app.js, server.js
>code:

# Example of sending an OAuth request
1. Add OAuth configurations in the `config/oauth_config.json`
2. Add request schema in the `config/requests.json` templates with `options.isOAuth` attribute
3. Update `app.js` file to call template with `client.request.invokeTemplate` from frontend:
4. To invoke request template for serverless apps, use `$request.invokeTemplate` in the `server.js` file:


## Add OAuth configurations in the `config/oauth_config.json`

```json
{
  "client_id": "XXXXXX-XXXX-XXXX-XXXX-XXXXXXXX",
  "client_secret": "XXXXXXXXXXXXXXXX",
  "authorize_url": "https://domain.com/oauth/authorize.srf",
  "token_url": "https://domain.com/oauth/token.srf",
  "options": {
    "scope": "read"
  },
  "token_type": "account"
}
```

## Add request schema in the `config/requests.json` templates with `options.isOAuth` attribute:

```json
{
  "sampleTemplate": {
    "schema": {
    "protocol": "https",
    "method": "POST",
    "host": "northstar.freshchat.com",
    "path": "/api/v2/conversations",
    "headers": {
        "Authorization": "bearer <%= access_token %>",
        "Content-Type": "application/json"
      }
    },
    "options": {
      "isOAuth": true
    }
  }
}
```

## Update `app.js` file to call template with `client.request.invokeTemplate` from frontend:
```js
try {
  let result = await client.request.invokeTemplate(
    "sampleTemplate", {});
  let responseJSON = JSON.parse(result.response);
  // rest of the app logic
} catch (err) {
  // handle error
}
```

## To invoke request template for serverless apps, use `$request.invokeTemplate` in the `server.js` file:
```js
try {
  let result = await $request.invokeTemplate(
    "sampleTemplate", {});
  let responseJSON = JSON.parse(result.response);
  // rest of the app logic
} catch (err) {
  // handle error
}
```

---

>title: What has changed with OAuth from platform version 2.2 in platform version 2.3?
>tags: oauth, request-method
>context: oauth_configs.json, manifest.json, request.json
>content:

# What has changed with OAuth from platform version 2.2 in platform version 2.3

1. In `config/oauth_config.json`, define the OAuth integration with the JSON object of - `client_id`, `client_secret`, `authorize_url`, `token_url` and `token_type`.
2. In `config/requests.json`, declare the request template which uses OAuth with `requestTemplateName.options.isOAuth` set as `true` and declare `access_token` in `requestTemplateName.schema.headers.Authorization`.

>code:
## In `config/oauth_config.json`, define the OAuth integration with the JSON object of - `client_id`, `client_secret`, `authorize_url`, `token_url` and `token_type`:
```json
{
  "client_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX",
  "client_secret": "XXXXXXXXXXXXXXXXXXXXX",
  "authorize_url": "https://login.third-party-domain.com/authorize.srf",
  "token_url": "https://login.third-party-domain.com/token.srf",
  "options": {
    "scope": "read"
  },
  "token_type": "account"
}
```

## In `config/requests.json`, declare the request template which uses OAuth with `requestTemplateName.options.isOAuth` set as `true` and declare `access_token` in `requestTemplateName.schema.headers.Authorization`
```json
{
  "asanaGetWorkspace": {
    "schema": {
      "method": "GET",
      "host": "app.asana.com",
      "path": "/api/1.0/workspaces",
      "headers": {
          "Authorization": "bearer <%= access_token %>",
          "Content-Type": "application/json"
      }
    },
    "options": {
      "isOAuth": true
    }
  }
}
```

---
