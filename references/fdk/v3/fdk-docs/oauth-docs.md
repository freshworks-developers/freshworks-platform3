>title: What are OAuth prerequisites and details
>tags: oauth, oauth-support, prerequisites
>context: oauth_config.json
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
4. Platform version 2.2 has been deprecated on September 30, 2023. Migrate to the latest platform and FDK versions.
5. Supports accessing a maximum of three OAuth-secured resources.
6. One of the 3 OAuth Configurations should facilitate agent installation.

---
>title: What is multi-OAuth feature?
>tags: oauth, oauth-support, configuration
>context: oauth_configs.json
>content:

# What is multi-OAuth feature?

Freshworks supports multi-OAuth configurations. It means, during its lifecycle, an app can access multiple OAuth-secured resources. Currently, this feature lets your app access a maximum of three OAuth-secured resources.

Out of the three OAuth configurations, only one can be a configuration that facilitates agent installation.

Note: Either an agent (individual product user) who uses the Freshworks product or an admin can install apps. Admins can install apps at an account level. After installation, an app that uses OAuth to access third-party resources, requires authorization before app users start to use the app. In account-level installations, the server-side places the authorization call to the secure resource and to provide client context, the server-side passes a client ID and client secret (think of it as a password) to the resource. In agent installations, all details are loaded onto the client (agent browser) along with the app and the client places the authorization call to the resource. So, client ID and client secret are not required during the call to the authorization server.

---
>title: How to configure OAuth
>tags: oauth, oauth-support, configuration
>context: oauth_configs.json
>content:

# How to configure OAuth

The `config/oauth_config.json` file contains multiple OAuth configurations with `<oauth_configuration_name>` as a key and JSON object of the configuration details.

## OAuth configuration contains the following attributes -
1. `display_name`: The display name for the OAuth integration configuration, this is a mandatory field.
1. `client_id` and `client_secret`: Issued upon registering your app in the third-party developer portal and these credentials are mandatory.
2. `authorize_url`: Third-party authorization request URL.
3. `token_url`: Request URL for obtaining the access token.
4. `options`: Additional parameters for fetching the access token, such as scope and custom headers.
5. `token_type`: Specifies the level of access for the access token (supports `account` and `agent`).
6. `oauth_iparams`: Used to retrieve unique authorization URLs for certain OAuth providers.

## Syntax for oauth configuration:

```json
{
  "integrations": {
    "<oauth_configuration_name1>": {
      "display_name": "value",
      "client_id": "value",
      "client_secret": "value",
      "authorize_url": "url value",
      "token_url": "url value",
      "options": {
        "scope": "read"
      },
      "token_type": "account or agent"
    },
    "<oauth_configuration_name2>": {
      "display_name": "value",
      "client_id": "value",
      "client_secret": "value",
      "authorize_url": "url value",
      "token_url": "url value",
      "options": {
        "scope": "read"
      },
      "token_type": "account or agent"
    }
  }
}

```
## Example of oauth configuration:

```json
{
  "integrations": {
    "sampleOAuth": {
      "display_name": "Sample OAuth",
      "client_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX",
      "client_secret": "XXXXXXXXXXXXXXXXXXXXX",
      "authorize_url": "https://login.third-party-domain.com/authorize.srf",
      "token_url": "https://login.third-party-domain.com/token.srf",
      "options": {
        "scope": "read"
      },
      "token_type": "account"
    }
  }
}
```

---
>title: example of configuring OAuth settings via installation parameters (iparams)
>tags: oauth, oauth-support, iparams
>context: oauth_configs.json
>code:

# example of configuring OAuth settings via installation parameters (iparams)

When the app uses Shopify and OneDrive OAuth integrations, which requires the the domain for `authorize_url` and `token_url` to be dynamic and valid for that installation of the app, you can choose `oauth_iparams` to retrieve the values during app installation to complete the OAuth handshake. When using multiple integrations for OAuth, the app installation will require `oauth_iparams` to be provided as per the `config/oauth_config.json` configurations.

## Update `config/oauth_config.json` as below to include oauth settings via installation parameters
```json
{
  "integrations": {
    "shopify": {
      "display_name": "Shopify",
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
    },
    "onedrive": {
      "display_name": "OneDrive",
      "client_id": "1aXXX-XXXX-XXXXXXXXc8d1",
      "client_secret": "q8NbXXXXXXXXX1p1",
      "oauth_iparams": {
        "domain": {
          "display_name": "OneDrive domain",
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
      "token_type": "agent"
    }
  }
}
```

---
>title: Making API request with OAuth credentials in frontend app with example
>tags: oauth, oauth-support, frontend
>context: oauth_configs.json, requests.json, manifest.json, app.js
>content:

# Making API request with OAuth credentials in frontend app with example

1. In `config/requests.json`, provide the request snapshot with OAuth details:
   - Use `access_token` variable in `requestTemplateName.schema.header.Authorization`.
   - Set `requestTemplateName.options.oauth` with the OAuth configuration name.
2. Declare the configured template in `manifest.json`.
3. For front-end apps, invoke the template in `app.js` using `client.request.invokeTemplate`.

>code:

## Steps for making an API request with OAuth credentials:

### In `config/requests.json`, provide the request snapshot with OAuth details
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
      "oauth": "asana"
    }
  }
}
```
In platform version 3.0 and later, `oauth` defines the declared OAuth configuration name.

### Declare the configured template in `manifest.json`.
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

4. For serverless apps, invoke the template from the app code in `server.js` in a similar manner.

---
>title: Making API request with OAuth credentials in serverless app with example
>tags: oauth, oauth-support, serverless
>context: oauth_configs.json, requests.json, manifest.json, server.js
>code:

# Making API request with OAuth credentials in serverless app with example

1. Provide a snapshot of the request to be made to the third-party domain, in `config/requests.json` file.
   1. Use the access_token variable in `requestTemplateName.schema.header.Authorization`.
   2. Set `requestTemplateName.options.oauth` with the OAuth configuration name.
2. Declare the configured template (snapshot) in `manifest.json`.
3. For serverless apps, invoke the template from the app code in `server.js` using `$request.invokeTemplate`.

>code:
## Steps for making an API request with OAuth credentials in serverless app

### Provide a snapshot of the request to be made to the third-party domain, in `config/requests.json` file.
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
      "oauth": "asana"
    }
  }
}
```
### Declare the configured template (snapshot) in `manifest.json`.
```js
{
  …
  "requests": {
    "asanaGetWorkspace": {}
  }
}
```
### Update `server.js` using `$request.invokeTemplate`.
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

>title: What has changed with OAuth from platform version 2.2 in platform version 3.0?
>tags: oauth, request-method
>context: oauth_configs.json, manifest.json, request.json
>content:

# What has changed with OAuth from platform version 2.2 in platform version 3.0

1. In `config/oauth_config.json`, define multiple OAuth integration in `integrations.oAuthConfigurationName` with the JSON object of - `display_name`, `client_id`, `client_secret`, `authorize_url`, `token_url` and `token_type`.
2. In `config/requests.json`, define the request template which uses OAuth `requestTemplateName.options.oauth` with the OAuth configuration name and declare `access_token` in `requestTemplateName.schema.headers.Authorization`.

>code:
## In `config/oauth_config.json`, define multiple OAuth integration in `integrations.oAuthConfigurationName` with the JSON object of - `display_name`, `client_id`, `client_secret`, `authorize_url`, `token_url` and `token_type`:
```json
{
  "integrations": {
    "shopify": {
      "display_name": "Shopify",
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
      "authorize_url": "https://dname.com/authorize.srf",
      "token_url": "https://dname.com/token.srf",
      "options": {
        "scope": "read"
      },
      "token_type": "account"
    }
  }
}
```

## In `config/requests.json`, define the request template which uses OAuth `requestTemplateName.options.oauth` with the OAuth configuration name and declare `access_token` in `requestTemplateName.schema.headers.Authorization`:
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
      "oauth": "asana"
    }
  }
}
```

---