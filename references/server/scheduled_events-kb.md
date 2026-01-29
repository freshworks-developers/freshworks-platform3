>title: Scheduled Events in FDK
>tags:
>content:

In serverless applications, you can create scheduled events to trigger specific serverless methods at specified times. These events can be one-time or recurring, allowing you to automate tasks efficiently.

this is the example configuration that will be done in manifest.json
```js
// This is a scheduled event and its callback handler defined in 'manifest.json'
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

**Example Code Snippet:**

```js
// Defining the callback function in 'server.js'
exports = {
    onScheduledEventHandler: function(payload) {
        if (payload.data.account_id === "3") {
            // Your app logic here
        }
    }
};
```

**Creating Schedules:**

This is how to create a one-time schedule:
```js
try {
    let data = await $schedule.create({
        name: "ticket_reminder",
        data: { ticket_id: 100001 },
        schedule_at: "2018-06-10T07:00:00.860Z",
    });
} catch (error) {
    console.error(error);
}
```

This is how to create a recurring schedule:
```js
try {
    let data = await $schedule.create({
        name: "ticket_reminder",
        data: { ticket_id: 10001 },
        schedule_at: "2018-06-10T07:00:00.860Z",
        repeat: { time_unit: "minutes", frequency: 5 }
    });
} catch (error) {
    console.error(error);
}
```

**Fetching and Updating Schedules:**

Fetching a schedule:
```js
try {
    let data = await $schedule.fetch({
        name: "ticket_reminder"
    });
} catch (error) {
    console.error(error);
}
```

This is how Updating a schedule snippet looks like:
```js
try {
    let data = await $schedule.update({
        name: "ticket_reminder",
        data: { ticket_id: 10001 },
        schedule_at: "2018-06-10T07:00:00.860Z",
        repeat: { time_unit: "hours", frequency: 1 }
    });
} catch (error) {
    console.error(error);
}
```

This is how deleting a schedule snippet looks like:
```js
try {
    let data = await $schedule.delete({
        name: "ticket_reminder"
    });
} catch (error) {
    console.error(error);
}
```

**Attributes of payload callback**

When the scheduled event occurs, the configured event listeners invoke the registered callback method and pass a standard payloa of following format.

```json
{
  "currentHost": {
    "endpoint_urls": { 
      "<product_name>": "value"
    },
    "subscribed_modules": [ "value" ]
  },
  "data": {
    "account_name": "John",
    "account_id": 3,
    "country": "France"
  },
  "event": "onScheduledEvent",
  "region": "US",
  "timestamp": 1496400354326,
}
```
