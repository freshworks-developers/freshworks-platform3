
>title: example of adding a request template with global apps
>tags: request-method, http, api, configure, freshdesk
>context: requests.json, manifest.json
>code:

# example of adding a request template with global apps
1. Declare request template in the `manifest.json`
2. Configure the request template in the `config/requests.json` file

## Declare request template in the `manifest.json`

```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "location": {
        "full_page_app": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      },
      "requests": {
        "getDeals":{},
        "sendToExternalAPI":{}
      }
    },
    "support_ticket": {}
  },
  "engines": {
    "node": "18.18.0",
    "fdk": "9.1.0"
  }
}
```

## Configure the request template in the `config/requests.json` file

```json
{
  "getDeals": {
    "schema": {
      "method": "GET",
      "host": "<%= iparam.domain %>.myfreshworks.com",
      "path": "/crm/sales/api/deals",
      "headers": {
        "Authorization": "Bearer <%= iparam.apikey %>",
        "Content-Type": "application/json"
      },
      "query": {
        "page": "<%= context.page %>",
        "per_page": "20"
      }
    },
    "options": {
      "retryDelay": 1000
    }
  },
  "sendToExternalAPI": {
    "schema": {
      "method": "POST",
      "host": "<%= iparam.ext_domain %>.example.com",
      "path": "/api/",
      "headers": {
        "Authorization": "Bearer <%= iparam.ext_apikey %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```
---
>title: Declare request template in the `manifest.json`
>tags: request-method, http, api, configure
>context: requests.json, manifest.json
>code:

# Declare request template in the `manifest.json`

```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "location": {
        "full_page_app": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      },
      "requests": {
        "getDeals":{},
        "sendToExternalAPI":{}
      }
    },
    "support_ticket": {}
  }
}

```

---

>title: Example for using `current_host` substitution in request template
>tags: request-method, http, api, current_host, currentHost
>context: requests.json
>code:

# Example for using `current_host` substitution in request template

```json
{
  "requestAPI": {
    "schema": {
      "method": "GET",
      "host": "<%= current_host.endpoint_urls %>.myfreshworks.com",
      "path": "/crm/sales/api/deals",
      "headers": {
        "Authorization": "Bearer <%= iparam.apikey %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```