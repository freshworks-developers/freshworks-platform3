>title: check if my manifest is correct
>tags: manifest-errors
>context: app.js, server.js
>code:

# check if my manifest is correct

If your manifest follows a similar syntax as given below, then it is correct.
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
      "requests": {}
    },
    "support_ticket": {}
  },
  "engines": {
    "node": "18.18.0",
    "fdk": "9.1.0"
  }
}
```

---

>title: Atleast one module apart from common module must be mentioned in manifest.json. Which one do we add?
>tags: manifest
>context: manifest.json
>code:

# Atleast one module apart from common module must be mentioned in manifest.json. Which one do we add?

Even if your app is built only for the common module, ensure that the modules object contains at least one module in addition to the common module. In this case, the other module(s) can be an empty JSON object. Please refer to the sample manifest.json file provided below
```json
  {

    "modules": {
      "common": {
        "events": {
          "onAppInstall": {
            "handler": "onAppInstallHandler"
          },
          "onAppUninstall": {
            "handler": "onAppUninstallHandler"
          }
        },
        "requests": {
          "requestMethod1": {},
          "requestMethodName2": {}
        },
        "functions": {
          "serverMethodName1": {},
          "serverMethodName2": {}
        }
      },
      "support_ticket": {}
    },

  }
```

---

>title: Request template 'fetchAgentInfo' is not defined in manifest.json
>tags: manifest-errors
>context: app.js, server.js
>content:

# Request template 'fetchAgentInfo' is not defined in manifest.json

Request templates need to be declared in manifest.json as shown below

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
        "createTicket": {},
        "getTickets": {}
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
