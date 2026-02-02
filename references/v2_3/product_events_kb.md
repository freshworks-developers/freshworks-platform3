>title: How do I configure product events in my app?
>tags: events, product, serverless
>context: manifest.json, server.js
>code:

# How do I configure product events in my app?

Product events are events such as creating a ticket, updating a ticket, or creating a conversation, that occur in the product where your app is deployed. By configuring product events, you can have these events trigger your app to call a callback function and execute custom logic.

## Update the manifest.json file

In your app’s root directory, open the manifest.json file. Add an events attribute to subscribe to the relevant product event. For example:

```json
{
  "events": {
    "<productEventName>": {
      "handler": "<eventCallbackMethod>"
    }
  }
}
```

## Implement the callback in server.js

In the server.js file, define the callback function that matches the handler name you used in manifest.json. The function will receive a payload each time the subscribed event occurs. For example:

```js
exports = {
  // args is a JSON block containing the payload information
  // args["iparam"] will contain the installation parameter values
  // eventCallbackMethod is the callback function name specified in manifest.json
  eventCallbackMethod: function(args) {
    console.log("Logging arguments from the event: " + JSON.stringify(args));
    // Custom logic
  }
};
```
---

>title: What are some facts I should know as I work with product events
>tags: events, product, serverless
>context: manifest.json, server.js
>content:

# What are some facts I should know as I work with product events

- The serverless component of the app is executed in a sandbox mode.
- Certain methods like setTimeout and setInterval are unavailable.
- The default app execution timeout is 20 seconds. If the request timeout is increased to 20, 25, or 30 seconds, the app execution timeout is extended to 40 seconds.
- The payload passed to the serverless component must not exceed 256 KB.
- To view all platform restrictions and constraints, see Rate limits and constraints.
- Avoid using symbols (for example, arrows) in the code when defining the event, as they can cause errors.

---

>title: What are the payload attributes in product events?
>tags: events, product, serverless
>context: manifest.json, server.js
>content:

# What are the payload attributes in product events?

When a product event occurs, the product sends an event-specific payload to your callback method. The payload includes the following common attributes:

- `account_id (string)`
The identifier of the Freshdesk account, automatically generated when the account is configured.

- `app_settings (object)`
A JSON object of key-value pairs containing information about the app settings. If your app does not use app settings, this is an empty JSON object.

- `data (object)`
Event-specific data relevant to the Freshdesk event, specified as a JSON object of key-value pairs.

- `domain (string)`
The domain name of the Freshdesk account.

- `event (string)`
The name of the product event (for example, onTicketCreate).

- `iparams (object)`
A JSON object of installation parameter values (<paramName>: <paramValue> pairs).

- `region (string)`
The region in which the Freshdesk account is deployed. Possible values: US, EU, EUC, AUS, and IND.

- `timestamp (number)`
The timestamp of when the product event occurred, specified in epoch format.

## Schema for payload attributes

```json
{
  "account_id" : "value",
  "app_settings": {
    "key1": "value1",
    "key2": "value2"
  },
  "data" : {
    //Contains the list of objects related to the event.
  },
  "domain" : "value",
  "event"  : "value",
  "iparams" : {
      "Param1" : "value",
      "Param2" : "value"
  },
  "region"  : "value",
  "timestamp"  : "value"
}
```

---

>title: What should i know about testing my serverless app?
>tags: testing, events, serverless
>context: test_data
>content:

# What should i know about testing my serverless app?

To test a serverless app, you should know these:

## Browser Requirement

- Use the latest version of Chrome to ensure compatibility.

## Simulated vs. Real Events

- Testing is only a simulation of events, so no actual records are created in the backend.
- If you want to create actual data and fully test the event, publish your app as a custom app and then trigger events manually.

## Test Data Location

- Ensure that the JSON files containing the sample payloads to test events are located at `<app_root>/server/test_data`.

>title: How to simulate a serverless event locally and test it?
>tags: testing, events, serverless
>context: test_data
>content:

# How to simulate a serverless event locally and test it?

To Simulate an Event run the app from the app directory with `fdk run` in a terminal

- Once the app is running, open a browser and go to `https://localhost:10001/web/test`.
- A dialog box will appear. Click **Select an event** to see a list of all events configured in your `server.js` file.
- Choose the event you wish to simulate.
- The corresponding payload is displayed. To test a different scenario, modify the payload.
- Click **Simulate**.
  - If the simulation is successful, the **Simulate** button changes to **Success**.
  - If it fails (for example, due to invalid payload data), the button changes to **Failed**. Fix the payload and click **Simulate** again.

This process lets you verify that your app's serverless logic executes correctly when product events or custom triggers occur.

---