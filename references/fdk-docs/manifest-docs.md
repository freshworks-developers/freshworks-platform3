>title: How to use placeholders in global apps?
>tags: manifest
>context: manifest.json
>content:

# How to use placeholders in global apps?

You can build a global app that is deployed on a product’s left-navigation pane placeholder that is available for app building. In the app manifest, configure these common placeholders at modules.common. The common placeholders available for app building depend on the module you add in the manifest along with the common module.

---

>title: What are the modules and common placeholders available for app building for Freshdesk are?
>tags: manifest
>context: manifest.json
>content:

# What are the modules and common placeholders available for app building for Freshdesk are?

You can build a global app that is deployed on a product’s left-navigation pane placeholder that is available for app building. In the app manifest, configure these common placeholders at modules.common. The common placeholders available for app building depend on the module you add in the manifest along with the common module

If the module other than common is support_email/support_ticket/support_portal/support_agent/support_contact/support_company, then the common placeholders available for app building are full_page_app, cti_global_sidebar

---

>title: What are the modules and common placeholders available for app building for Freshservice are?
>tags: manifest
>context: manifest.json
>content:

# What are the modules and common placeholders available for app building for Freshservice are?

You can build a global app that is deployed on a product’s left-navigation pane placeholder that is available for app building. In the app manifest, configure these common placeholders at modules.common. The common placeholders available for app building depend on the module you add in the manifest along with the common module.

If the module other than common is service_ticket/service_asset/service_change/service_user, then the common placeholders available for app building is full_page_app.

---

>title: What are the modules and common placeholders available for app building for Freshsales Suite/Freshsales Classic are?
>tags: manifest
>context: manifest.json
>content:

# What are the modules and common placeholders available for app building for Freshsales Suite/Freshsales Classic are?

You can build a global app that is deployed on a product’s left-navigation pane placeholder that is available for app building. In the app manifest, configure these common placeholders at modules.common. The common placeholders available for app building depend on the module you add in the manifest along with the common module.

If the module other than common is appointment/contact/cpq_document/deal/phone/product/sales_account/task, then the common placeholders available for app building are full_page_app, left_nav_cti, left_nav_chat.

If the module other than common is lead, then the common placeholders available for app building are full_page_app, left_nav_cti, left_nav_chat.

If the module other than common is chat_conversation, in Freshsales Suite(if an app is built for chat_conversation, it can work with Freshchat as well but a full_page_app or a left_nav_cti app cannot be rendered in stand-alone Freshchat accounts) then the common placeholders available for app building are full_page_app, left_nav_cti

---

>title: What are the modules and common placeholders available for app building for Freshcaller are?
>tags: manifest
>context: manifest.json
>content:

# What are the modules and common placeholders available for app building for Freshcaller are?

If an app is built for call, caller_conversation, caller_metrics, caller_agent, notification modules, it can work with Freshcaller but a full_page_app (app built only to work on the common module) cannot be rendered in Freshcaller.

---

>title: What are the modules and common placeholders available for app building for Freshcaller are?
>tags: manifest
>context: manifest.json
>content:

# What are the modules and common placeholders available for app building for Freshcaller are?

If an app is built for the chat_user module, it can work with Freshchat but a full_page_app (app built only to work on the common module) cannot be rendered in Freshchat.

---

>title: How to configure manifest and register SMI functions?
>tags: manifest
>context: manifest.json
>code:

# How to configure manifest and register SMI functions?

After creating a serverless app’s files, to configure the app manifest for an SMI app , from the app’s root directory, navigate to manifest.json.
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
    "deal": {
      "location": {
        "deal_entity_menu": {
          "url": "template.html",
          "icon": "logo.svg"
        }
      },
      "events": {
        "onDealCreate": {
          "handler": "onDealCreateHandler"
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

>title: How to generate app files using fdk generate command?
>tags: manifest
>context: manifest.json
>code:

# How to generate app files using fdk generate command?

The command helps to auto-generate, update the defaults, or modify the existing parameters of an app’s files. To do any of these, run fdk generate command.

Generating oauth_config.json using fdk generate
Selecting this option enables you to set up the OAuth configuration file. This configuration is part of the process to allow your app to successfully place a request to access OAuth-secured resources. For more information on placing OAuth requests, see how to place requests to access OAuth-secured resources.

Generating iparams.json using fdk generate
Selecting this option enables you to configure the default Settings page with Installation parameters whose value the app users can set when installing the app. Through the generate command, you can set up the iparams.json file and define the name and type of the installation parameters. You can also select the modules for which the iparam is applicable. If the app user has subscribed to the module, the iparam is displayed on the Settings page during app installation. After generating the basic iparams.json file, you can navigate to the file and define more attributes for the installation parameters. For information on how to do this, see how to build an app settings page. When using the generate command, if an iparams.json file exists in the app folder, the command displays a prompt to overwrite the file. Only one iparams.json file can exist in the app folder. When the Choose Supported modules prompt is displayed, to enable the iparam for all modules listed in the app manifest, merely hit enter without selecting a specific module.

Generating iparams.html using fdk generate
Selecting this option enables you to configure the custom Settings page with Installation parameters whose value the app users can set when installing the app. Through the generate command, you can set up the iparams.html file and include the appropriate JS, JQuery, and CSS dependencies. After generating the basic iparams.html file, you can navigate to the file and include the methods to store and retrieve the installation parameter values. For more information on how to do this, see how to build a custom app-settings page.

Generating server.js using fdk generate
Selecting this option enables you to generate the server.js file that contains the configurations required for the serverless component of an app. Through the generate command, you can generate server.js for the modules listed in manifest.json by selecting the required product events and configuring the corresponding event handlers.
1. The default manifest that is created as a result of using the common-starter-template or serverless-starter-template contains only the common and support_ticket modules. If you generate server.js, without modifying the default manifest.json, you can add events and handlers for only the common and support_ticket modules.
2. When using the generate command, if a server.js file exists in the app folder, the command displays a prompt to overwrite the file. Only one server.js file can exist in the app folder.

Generating manifest.json using fdk generate
Selecting this option enables you to reconfigure the default App Manifest that is created as part of the app creation using common-starter-template or serverless-starter-template. Through the generate command, you can select modules, select and add corresponding placeholders from the list of placeholders displayed for the selected module, select and add corresponding product events from the list of serverless events displayed for the selected module.
Note: When using the generate command, if a manifest.json file exists in the app folder, the command displays a prompt to overwrite the file. Only one manifest.json file can exist in the app folder.

---

>title: Share a sample manifest.json for front-end apps in v3
>tags: manifest
>context: manifest.json
>code:

# Share a sample manifest.json for front-end apps in v3

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
    "service_user": {}
  },
  "engines": {
    "node": "18.18.0",
    "fdk": "9.1.0"
  }
}
```

---

>title: Share a sample manifest.json for serverless apps in v3
>tags: manifest
>context: manifest.json
>code:

# Share a sample manifest.json for serverless apps in v3

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
    "product": {
      "events": {
        "onProductCreate": {
          "handler": "onProductCreateCallback"
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

>title: Share a sample manifest.json for serverless smi apps in v3
>tags: manifest
>context: manifest.json
>code:

# Share a sample manifest.json for serverless smi apps in v3

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
    "product": {
      "events": {
        "onProductCreate": {
          "handler": "onProductCreateCallback"
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

---

>title: What is the platform version attribute in manifest file in Freshworks apps?
>tags: manifest
>context: manifest.json
>code:

# What is the platform version attribute in manifest file in Freshworks apps? 
Platform version you use to build the app. This value is auto-generated when you create the default app files by using the fdk create command. When you build a new app, ensure that you are on the latest version of the platform . If you update your existing app that was built with an earlier platform version, ensure to move to the latest version of the platform. Here is an example:
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

>title: What is the product attribute in manifest file in Freshworks apps?
>tags: manifest
>context: manifest.json
>code:

# What is the product attribute in manifest file in Freshworks apps?

It associates a Freshworks product with the information that is necessary to render the app on the specified product. It has product name as a child attribute, which contains the name of the product for which you are building the app. This value is auto-generated when you create the default app files by using the fdk create command.
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

>title: What is the engines attribute in manifest file in Freshworks apps?
>tags: manifest
>context: manifest.json
>code:

# What is the engines attribute in manifest file in Freshworks apps?

Node.js and FDK versions that are used to build the app. When you create the front-end app files by using the fdk create command, this attribute value is auto-populated.

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
