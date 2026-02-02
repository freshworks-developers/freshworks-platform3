>title: what are Freshworks Serverless Offerings
>tags: serverless, serverless-offerings
>context: 
>content:

# what are Freshworks Serverless Offerings

The Freshworks app development platform provides a serverless environment to enable developers to create apps that run in response to events such as Freshdesk product, app setup, and external events. To use this feature, configure an event listener and the corresponding callback method. The event triggers, the callback method and is executed on a server.

The serverless events are in contrast to front-end apps which run in response to events, such as a Ticket page load or a button click, which are executed on the client’s browser (UI).

---

>title: what are the usecases to use Freshworks Serverless Offerings
>tags: serverless, serverless-offerings
>context: 
>content:

# what are the usecases to use Freshworks Serverless Offerings

Following are the usecases in which serverless apps can be used

### Usecases:
1. Custom Automations
2. Data Synchronization
3. Alerts and Notifications
4. Server Method Invocation

---

>title: what are Freshworks Serverless Offerings considerations
>tags: serverless, serverless-offerings
>context: 
>content:

# what are Freshworks Serverless Offerings considerations

### Considerations:
1. The serverless component of the app is executed in sandbox mode where some methods, such as `setTimeout` and `setInterval`, cannot be used.
2. The app must complete its execution within 20 seconds or it will timeout.

---

>title: Steps to create a serverless app from FDK CLI
>tags: serverless, serverless-offerings
>context: manifest.json, server.js
>content:

# Steps to create a serverless app from FDK CLI

### Steps:
1. Create a new directory: `mkdir [dir_name]` (replace `[dir_name]` with the app name).
2. Navigate to `[dir_name]`: `cd [dir_name]`.
3. Run `fdk create --products freshdesk --template your_first_serverless_app` to create the app directory with the following structure:
   - `server/`
   - `server.js`
   - `test_data/`
   - `config/`
   - `manifest.json`

### Directory Structure:
- `server/` (Contains files and folders for the serverless component of the app, adhering to the ES6 standard).
- `server.js` (Contains event registration and callback methods).
- `test_data/` (Includes sample payloads for each event, used during local testing).
- `config/` (Contains installation parameter files).
- `manifest.json` (Contains platform version, product, event declarations, Node.js and FDK versions, and npm package dependencies).

---

>title: Steps to configure environment for custom app development
>tags: serverless, serverless-offerings
>context: server.js
>content:

# Steps to configure environment for custom app development

When creating a serverless custom app, in `server.js`, you can include the `process.env.ENV` environment variable to run different app logic in the test and production environments using the following syntax:
```js
if(process.env.ENV === "test") {
  //test environment execution statements
}
if(process.env.ENV === "production") {
  //production environment execution statements
}
```

---

>title: How to test a serverless app locally
>tags: serverless, testing
>context: server.js
>content:

# How to test a serverless app locally

### Steps to test a serverless app:
1. Use the latest version of Chrome for testing.
2. Local testing provides a simulation environment without creating records in the backend.
3. For backend data persistence during testing, publish the app as a custom app and test events manually.
4. Ensure sample payload JSON files are available at `[app-root-directory]/server/test_data`.
5. To simulate the app runtime:
   - Execute `fdk run` from the command line.
   - Go to `https://localhost:10001/web/test`.
   - Click "Select an event" to see the list of configured events in `server.js`.
      - To test app setup events, select `onAppInstall`, `afterAppUpdate`, or `onAppUninstall`.
      - To test external events, select `onExternalEvent`.
      - To test scheduled events, select `onScheduledEvent`.
      - To test a product event, choose the corresponding product event name.
      - To test the default serverless app created from the `your_first_serverless_app` template, select `onTicketCreate`.
6. Once an event is selected, the corresponding payload is displayed. Edit the payload for different scenarios.
7. Click "Simulate":
   - If the event simulation is successful, the "Simulate" button changes to "Success".
   - If the event simulation fails due to an invalid payload, the "Simulate" button changes to "Failed".
   - For a failed simulation, modify the payload appropriately and click "Simulate" again.
---
