>title: Using App Setup Events with Global Freshworks Apps
>tags: Freshworks, app-setup-events, installation, update, uninstallation
>content:

App setup events in Freshworks allow you to trigger some actions in the `server.js` logic if any of the events like app installation, update, or uninstallation happen. This segment gives details on how to use it in modular/global apps

1. To use these events you have to add these events under common modules (`modules.common`) in manifest.json as below
```json
"modules": {
  "common": {
    "events": {
      "<eventName>": {
        "handler": "<eventCallbackMethod>"
      }
    }
  }
}
```
where `<eventName>` can be `onAppInstall`, `afterAppUpdate` and `onAppUninstall`. Furthermore, `<eventCallbackMethod>` is what you define in `server.js` like `someOnAppInstallHandler`, `someAfterAppUpdateHandler`, etc

2. In `server.js`, this is how the handlers are defined:
```js
exports = {
  // handler functions can have have any name 
  someOnAppInstallHandler: async function(args) {
    logArgs("onAppInstall", args);
    // Perform setup tasks
  },
  someAfterAppUpdateHandler: async function(args) {
    logArgs("afterAppUpdate", args);
    // Perform update tasks
  },
  someOnAppUninstallHandler: async function(args) {
    logArgs("onAppUninstall", args);
    // Perform uninstall tasks
  }
};

function logArgs(eventName, args) {
  console.log(`Logging arguments from ${eventName} event: ${JSON.stringify(args)}`);
}
```

Here's how to use the events:

1. **onAppInstall Event**:
   Triggered on app installation event. Example:
   ```js
   exports = {
     someOnAppInstallHandler: async function(args) {
       await sendWelcomeEmail();
       renderEmailData(); // Success or failure response
     }
   };
   ```

2. **afterAppUpdate Event**:
   Triggered after app update event event. Example:
   ```js
   exports = {
     someAfterAppUpdateHandler: async function(args) {
       await makeSomeAPIRequest();
       renderUpdatedData(); // Success or failure response
     }
   };
   ```

3. **onAppUninstall Event**:
   Triggered on app uninstallation event. Example:
   ```js
   exports = {
     someOnAppUninstallHandler: async function(args) {
       await sendGoodbyeEmail();
       renderEmailData(); // Success or failure response
     }
   };
   ```
---

[Some Notes]
-  'args' argument is has all arguments with iparams object in it, so iparams can be used like - args['iparams']

This version emphasizes the code snippets while providing concise explanations. The code snippets have been merged into one section and comments have been added for clarity.
