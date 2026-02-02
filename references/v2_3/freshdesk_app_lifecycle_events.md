>title: what are app life-cycle events for Freshworks apps
>tags: frontend-events, app-lifecycle-events
>context: apps.js
>content:

# What are app life-cycle events for Freshworks apps

The Freshworks web interface is a single-page application, meaning it doesn't reload the entire page when the context changes. Instead, it only updates relevant sections. Here's how an app can refresh its data:

### Steps for Data Refresh

1. To enable data refresh, the parent application emits an `app.activated()` method.
2. The timing of this method varies depending on the app's location.
3. When the app's page is loaded for the first time (`app.initialized()` method), it should register to listen for the `app.activated()` method.
4. For apps installed in the `ticket_attachment` or `ticket_conversation_editor` location, initialization occurs every time the ticket editor is opened.

---

>title: how to use app initialisation or `app.initialized()` lifecycle method
>tags: frontend-events, app-lifecycle-events
>context: apps.js
>content:

# How to use app initialisation or `app.initialized()` lifecycle method

The method is triggered on the initial page load, and on success, it returns the client object for registering `app.activated()` and `app.deactivated()` methods.

### Communication Between App and Parent Page

Since the app renders within an IFrame, all communication (Data methods, Interface methods, Events methods) between the app and parent page happens through the client object.

### Best Practices for `app.initialized()`

Avoid placing core logic within `app.initialized()` callback unless building a completely isolated app. Instead, use `app.activated()` callback to enable the app to react to parent application communication. For instance, when a user clicks on your app from the app tray, `app.activated()` is triggered, and the corresponding callback runs.

### Code Example

Update `app.js` as below:

```js
let client;
init();
async function init(){
  client = await app.initialized();
  client.events.on("app.activated", startLoadingContacts);
  client.events.on("app.deactivated", clearTempCache);
}
```

---

>title: what are app activation and deactivation methods
>tags: frontend-events, app-lifecycle-events
>context: apps.js
>content:

# What are app activation and deactivation methods

### App Activation Method

The app activation method (`app.activated()`) is triggered when the app enters the user's view, with different timing based on the app's location:

1. **Ticket Sidebar or Contact Sidebar**: When the user clicks the app icon to open the app (apps are initially minimized).
2. **Ticket Requester Info**: When the page loads.
3. **Full Page Apps, Ticket Top Navigation, Ticket Conversation Editor, and Attachment**: When the user clicks the app icon.
4. **Global CTI**: When the page loads.

When `app.activated()` is triggered, the corresponding callback executes as you navigate between tickets on the Ticket Details page.

### App Deactivation Method

The app deactivation method (`app.deactivated()`) is triggered when the app goes out of view and can be used to clean stale data. For apps on the Ticket Details and Contact Details pages, the method is triggered when the user moves from one ticket or contact to the next.

---

>title: how to use app activation and deactivation or `app.activated()` and `app.deactivated()` methods
>tags: frontend-events, app-lifecycle-events
>context: apps.js
>content:

# How to use app activation and deactivation or `app.activated()` and `app.deactivated()` methods

### Code Example

Update `app.js` as below:

```js
// app is activated
client.events.on("app.activated", startLoadingContacts);
function startLoadingContacts(){
  console.info("App is activated");
  // Starts rendering contacts
}
```

```js
// app is deactivated
client.events.on("app.deactivated", onAppDeactivated);
function onAppDeactivated() {
  console.log("App Deactivated");
}
```

---