>title: How to use External Events in Freshworks app
>tags: external-events, serverless, webhooks, integration
>context: manifest.json, server.js
>content:

# How to use External Events in Freshworks app
External events enable developers to create serverless apps that can consume events from third-party services. This integration enables developers to build apps that can subscribe to external events and create tickets, contacts, or any other resource in Freshworks products.

## Steps:
1. Generate a target URL - link to where the app receives webhook data.
2. Create a webhook in the external product or service, to subscribe to external events. When creating a webhook specify the target URL for the webhook to send data.
3. Configure event listeners in the `manifest.json` file.
4. The app logic in the callback method defined in `server.js`.

### Generate a target URL
Link to where the app receives webhook data.

### Create a webhook in the external product or service
To subscribe to external events. When creating a webhook specify the target URL for the webhook to send data.

### Configure event listeners in the `manifest.json` file
When an external event occurs, the webhook uses the target URL, notifies the app about the external event, and sends data to the app event listener that invokes a callback method.

### Define the app logic in the callback method in `server.js`
Runs with the help of the event-specific payload passed to the callback method.

---

>title: Considerations for External Events
>tags: external-events, serverless, webhooks, integration
>context: 
>content:

# Considerations for External Events
1. The rate limit for external events is 250 triggers per minute.
2. The app execution timeout is 20 seconds.
3. The payload size for the webhook is 128 KB.
4. The serverless environment supports webhook data (incoming content) whose content type is one of the following:
    1. `application/json`
    2. `application/xml`
    3. `text/xml`
    4. `application/x-www-form-urlencoded`
5. A `generateTargetUrl()` method is used to generate the webhook URL for the external events. This method is supported only to be used in the `onAppInstall()`, `afterAppUpdate()` and product event handler.
6. You can register multiple webhooks. But, events from all the webhook URLs of the app will receive the response in the same handler method.

---

>title: How to generate webhook URL for External Events in Freshworks app
>tags: external-events, serverless, webhooks, integration
>context: manifest.json, server.js
>content:

# How to generate webhook URL for External Events in Freshworks app

## Steps:
1. Navigate to the server.js file in the app's root directory.
2. In the callback method for the onAppInstall event, do the following:
   - Use the `generateTargetUrl()` method to create a unique webhook URL for each app installation.
   - Make an API request to the external product to register the webhook. Include the required authorization mechanism (Basic) and a JSON object for successful registration.
3. Upon successful registration, the external product sends a webhook id. Store this id to enable webhook deregistration when the app is uninstalled.

### Update your `manifest.json` file with below snippet
```json
"events": {
  "onAppInstall": {
    "handler": "onAppInstallCallback"
  }
}
```

### Update your `server.js` file with below snippet.
```js
exports = {
  onAppInstallCallback: async function(payload) {
    try {
      let webhook = await generateTargetUrl();
      //API call to the external product to register the webhook url.
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }
}
```

---

>title: How to configure the External Event in Freshworks app
>tags: external-events, serverless, webhooks, integration
>context: manifest.json, server.js
>content:

# How to configure the External Event in Freshworks app

## Steps:
1. From your app’s root directory, navigate to the `manifest.json` file.
2. Include the events attribute, specifying the external event and the corresponding callback methods.

### Update your `manifest.json` file with below snippet
```json
"events": [
  "onAppInstall": {
    "handler": "onAppInstallCallback"
  },
  "onExternalEvent": {
    "handler": "onExternalEventHandler"
  }
]
```

### Update your `server.js` file with below snippet.
```js
exports = {
    onAppInstallCallback: async function(payload) {
        try {
            let webhook = await generateTargetUrl();
            //API call to the external product to register the webhook url.
        } catch (error) {
            // Handle error
        }
    },
    onExternalEventHandler: function(payload) {
        //Include the logic to perform any action in Freshdesk.
        console.log("Logging arguments from the event:" + JSON.stringify(payload));
    }
}
```

---

>title: payload for External Events in Freshworks app
>tags: external-events, serverless, webhooks, integration
>context: 
>content:

# Payload for External Events in Freshworks app
When an external event occurs, the external product passes an event-specific payload as webhook data to the target URL (app framework). This data is passed as payload to the external event’s callback method.

## Example payload for an external event
```json
{
  "account_id" : "value",
  "event"  : "value",
  "region"  : "value",
  "timestamp"  : "value",
  "domain" : "value",
  "headers" : {},
  "data" : {},
  "iparams" : {
      "Param1" : "value",
      "Param2" : "value"
    }
}
```

## Payload structure
| Attribute | Type | Description |
| --- | --- | --- |
| account_id | string | Freshdesk account ID. |
| event | string | Identifier of the event - onExternalEvent. |
| region | string | Region where the Freshdesk account is deployed. Possible values: US, EU, EUC, AUS, and IND. |
| timestamp | number | Time (epoch format) the event was received. |
| domain | string | Freshdesk account domain. |
| headers | object | Webhook headers. |
| data | object | Webhook payload, the size should not exceed 128 KB. |
| iparams | object | Installation parameters. |

## Sample payload
```json
{
  "account_id": "12345",
  "event": "onExternalEvent",
  "timestamp" : 1496400354326,
  "region" : "US",
  "domain": "xyz.freshdesk.com",
  "data": {
    "id": 2,
    "timestamp": "2009-09-09T00:08:36.796-0500",
    "issue": {
      "expand":"renderedFields,names,schema,transitions,operations,editmeta,changelog",
      "id":"99291",
      "self":"https://jira.atlassian.com/rest/api/2/issue/99291",
      "key":"JRA-20002",
      "fields":{
        "summary":"I feel the need for speed",
        "created":"2009-12-16T23:46:10.612-0600",
        "description":"Make the issue nav load 10x faster",
        "labels":["UI", "dialogue", "move"],
        "priority": "Minor"
      }
    },
    "webhookEvent": "jira:issue_updated",
    "changelog": {
      "items": [
        {
        "toString": "A new summary.",
        "to": null,
        "fromString": "What is going on here?????",
        "from": null,
        "fieldtype": "jira",
        "field": "summary"
        }
      ]
    }
  },
  "headers": {
    "Content-Type": "application/json"
  },
  "iparams": {}
}
```

---

>title: how to deregister for External Events in Freshworks app
>tags: external-events, serverless, webhooks, integration
>context: manifest.json, server.js
>content:

# How to deregister for External Events in Freshworks app

## Steps:
1. Navigate to the `server.js` file.
2. In the callback method associated with the onAppUninstall event:
   - Retrieve the webhook id saved during app installation.
   - Include an API request to the external product, for webhook deregistration.

### Include following snippet in your `server.js` file
```js
exports = {
    onAppInstallCallback: async function(payload) {
        try {
            let webhook = await generateTargetUrl();
            //API call to the external product to register the webhook.
        } catch (error) {
            // Handle error
        }
    },
    onExternalEventHandler: function(payload) {
        //This is the callback function definition.
        //Include the logic to perform any action in Freshdesk.
        console.log("Logging arguments from the event:" + JSON.stringify(payload));
    },
    onAppUninstallHandler: function(payload) {
        //Include API call to the external product to deregister the webhook
    }
}
```

### In the events attribute, specify the external event and the corresponding callback methods
```json
"events": [
  "onAppInstall": {
    "handler": "onAppInstallCallback"
  },
  "onExternalEvent": {
    "handler": "onExternalEventHandler"
  },
  "onAppUninstall": {
    "handler": "onAppUninstallHandler"
  }
]
```

---

>title: How does External Events testing work in Freshworks app
>tags: external-events, serverless, webhooks, integration
>context: 
>content:

# How does External Events testing work in Freshworks app
The Freshworks Development Kit (FDK) uses the node module `ngrok` to create secure tunnels between your local FDK instance and ngrok cloud. According to `ngrok.io`, ngrok exposes local servers behind NATs and firewalls to the Internet over secure tunnels. The FDK leverages this feature to expose its webhook to third-party services to test external events app integrations.

## To test external events locally
1. Launch the app using `fdk run`
2. navigate to `http://localhost:10001/web/events`
3. Select the event that you want to simulate. Once you selected, the corresponding event payload is displayed.
4. Edit the values and click `Simulate`. When you edit the payload, ensure that you adhere to the `JSON` format.
5. If the event is successfully simulated, you will see `Success` displayed.
6. If there is a problem, you will see `Failed` message displayed. Check if the payload is valid and then resume testing.

---

>title: How to test External Events locally
>tags: external-events, serverless, webhooks, integration
>context: 
>content:

# How to test External Events locally

## Steps:
1. Run the following command:
```shell
fdk run --tunnel
```
2. The server runs and shows a publicly-accessible ngrok url for the webhook.
3. Navigate to http://localhost:10001/web/test
4. From the drop-down list, select the `OnAppInstall` event to proceed with webhook registration.
5. If you have ngrok authorization privileges, run the following command:
```shell
fdk run --tunnel --tunnel-auth <auth-key>
```
6. Once the webhook is registered, go to a third-party service from where your app must receive external events and trigger an event. The event payload will be received in the app as an argument to the external event.

---