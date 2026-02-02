>title: Example of adding a request template to freshdesk application
>tags: request-method, http, api, configure, freshdesk
>context: requests.json, manifest.json
>code:

# Example of adding a request template to freshdesk application
1. Declare request template in `manifest.json`.
2. Configure the request template in the `config/requests.json` file

## Declare request template in the `manifest.json`

```json
{
  "platform-version": "2.3",
  "product": {
    "freshdesk": {
      "requests": {
        "asanaGetWorkspace":{},
      }
    }
  }
}
```

## Configure the request template in the `config/requests.json` file

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
      "isOAuth": true,
      "maxAttempts": 3,
      "retryDelay": 1000,
      "isOAuth": true
    }
  }
}
```

---
>title: Declaring request template in `manifest.json`
>tags: request-method, http, api, configure
>context: requests.json, manifest.json
>code:

# Declare request template in the `manifest.json`

```json
{
  "platform-version": "2.3",
  "product": {
    "freshdesk": {
      "location": {
      },
      "requests": {
        "asanaGetWorkspace": {},
        "asanaPutWorkspace": {},
        "asanaDeleteWorkspace": {},
      }
    }
  }
}
```

---