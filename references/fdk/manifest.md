>title: what is `manifest.json` file used in freshworks apps
>tags: manifest, app-settings, settings
>content:

The `manifest.json` file contains essential information for a product's app, including platform version, UI locations, dependencies, SMI functions, events and callbacks (for serverless apps), and Node.js/FDK versions. For FDK version 9.0.0 or later, the `manifest.json` lists configured request templates for secure third-party HTTP calls.

The `manifest.json` includes:

1. `platform-version` (string, Required): Auto-generated field specifying the platform version used for app creation, ensuring backward compatibility.
2. `modules` (object, Required): Specifies all modules on which the app can be deployed such as `common`, `support_ticket`.
   1. `location`: Specifies multiple Freshdesk UI locations where the app is rendered.
   2. `url`: Relative path to the `template.html` file for rendering the app in an IFrame at the specified location.
   3. `icon`: Relative path to a 64x64 pixel `.SVG` image used as the app's icon on the UI.
3. `engines` (object, Required): Node.js and FDK versions that are used to build the app. 
4. `dependencies` (object): All npm packages that the app uses, specified as <npm-package-name>:<version> pairs.

---
>title: how to configure manifest file for serverless apps
>tags: manifest, app-settings, settings, serverless
>code:

Update `manifest.json` for serverless apps as below
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

---
>title: how to configure manifest file for serverless apps with SMI
>tags: manifest, app-settings, settings
>code:

Update `manifest.json` for serverless SMI apps as below
```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "events": {
        "onAppInstall": {
          "handler": "onAppInstallHandler"
        },
        "onAppUninstall": {
          "handler": "onAppUninstallHandler"
        }
      }
    },
    "support_ticket": {
      "events": {
        "onTicketCreate": {
          "handler": "onTicketCreateHandler"
        }
      }
    }
  },
  "engines": {
    "node": "18.16.0",
    "fdk": "9.1.0"
  },
  "dependencies": {
    "nodemon": "1.14.12"
  }
}
```

---
