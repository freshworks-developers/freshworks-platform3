>title: How to register App Setup Events in Platform 3.0
>tags: app-setup-events, installation, uninstallation, update
>content:

App setup events allow you to trigger actions in `server.js` when app installation, update, or uninstallation occurs.

## Steps to Register App Setup Events

1. When an app set-up event occurs, the corresponding event listener invokes a callback method and passes a standard payload to the method.
2. In **server.js**, define the callback function.

Subscribe to an event by configuring an event listener. To do this, include the events object within the modules.common object, specifying the app set-up event and the corresponding callback methods as follows.

**manifest.json:**
```json
{
"modules": {
   "common": {
    "events": {
       "<eventName>": {
        "handler": "<eventCallbackMethod>"
       }
     }
   }
 }
}
```

---
>title: How to use onAppInstall event in Platform 3.0
>tags: app-setup-events, installation
>content:

The `onAppInstall` event is triggered when a user installs your app. It can be used to perform specific actions like:

## Actions Performed on onAppInstall
1. Creating a database table
2. Initializing default settings
3. Sending welcome emails

For app installation to reach completion, in the callback function definition, use the `renderData()` method without any arguments. To disallow app installation if a mandatory action fails, use an error object as the argument - `renderData({error-object})`.

### Attributes of the error-object
- **message** string `Required`
  - Message indicating why the mandatory action failed. Should not exceed 60 characters.

For example,
```js
renderData({message: "Installation failed due to network error."});
```

### Configuring the `onAppInstall` event

1. Subscribe to the `onAppInstall` event by using the following sample **manifest.json** content:

```json
{
"modules": {
   "common": {
     "events": {
       "onAppInstall": {
         "handler": "onAppInstallCallback"
       }
      }
   }
 }
}
```

2. Define the corresponding callback that allows completion of installation by using the following sample **server.js** content:

```js
exports = {
 onAppInstallCallback: function(payload) {
   console.log("Logging arguments from onAppInstall event: " + JSON.stringify(payload));
   // If the setup is successful
   renderData();
  }
}
```

3. Define the corresponding callback that disallows installation if a mandatory action fails, by using the following sample **server.js** content:

```js
exports = {
 onAppInstallCallback: function(payload) {
   console.log("Logging arguments from onAppInstall event: " + JSON.stringify(payload));
   // If there is an error during the setup
   renderData({message: "Invalid API Key"});
 }
}
```

---
