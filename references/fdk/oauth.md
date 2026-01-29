>title: How to configure OAuth in Platform 3.0
>tags: oauth, authentication, authorization
>content:

OAuth enables dynamic user authentication and authorization through an access token, which can be automatically refreshed. Users don't need to provide their credentials for authentication.

The `config/oauth_config.json` file contains multiple OAuth configurations with `<oauth_configuration_name>` as a key and JSON object of the configuration details.

## OAuth configuration contains the following attributes -
1. `display_name`: The display name for the OAuth integration configuration, this is a mandatory field.
2. `client_id` and `client_secret`: Issued upon registering your app in the third-party developer portal and these credentials are mandatory.
3. `authorize_url`: Third-party authorization request URL.
4. `token_url`: Request URL for obtaining the access token.
5. `options`: Additional parameters for fetching the access token, such as scope and custom headers.
6. `token_type`: Specifies the level of access for the access token (supports `account` and `agent`).
7. `oauth_iparams`: Used to retrieve unique authorization URLs for certain OAuth providers.

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

## In `config/requests.json`, define the request template which uses OAuth:

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
>title: OAuth prerequisites and details for Platform 3.0
>tags: oauth, prerequisites
>content:

## Steps:
1. Register your app in the third-party developer portal to obtain `client_id` and `client_secret`.
2. Set the redirect URL for your app in the third-party developer portal:
   - Testing: `http://localhost:10001/auth/callback`
   - Production: `https://oauth.freshdev.io/auth/callback`

## Considerations:
1. The third-party application must adhere to OAuth 2.0 framework (RFC 6749) for successful OAuth handshake.
2. Supports accessing a maximum of three OAuth-secured resources.
3. One of the 3 OAuth Configurations should facilitate agent installation.

---
>title: Steps for testing an OAuth App locally in Platform 3.0
>tags: oauth, testing, local-development
>content:

1. Execute `fdk run` command in the terminal.
2. Log in to your Freshworks product account.
3. Select a ticket and append the URL with `?dev=true` query parameter, like this: `https://subdomain.freshdesk.com/helpdesk/tickets/1?dev=true`.
4. The first time you test your app, authorize it to access information from the third-party.
5. Click the Authorize button in the app to redirect to the third-party domain.
6. The generated token is stored in `.fdk/localstore` for account level and in the browser's localStorage for agent level.

---
>title: Example of configuring OAuth settings via installation parameters (iparams)
>tags: oauth, iparams, dynamic-configuration
>content:

When the app uses Shopify and OneDrive OAuth integrations, which requires the domain for `authorize_url` and `token_url` to be dynamic and valid for that installation of the app, you can choose `oauth_iparams` to retrieve the values during app installation to complete the OAuth handshake. When using multiple integrations for OAuth, the app installation will require `oauth_iparams` to be provided as per the `config/oauth_config.json` configurations.

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
