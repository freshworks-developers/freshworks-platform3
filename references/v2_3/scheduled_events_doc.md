>title: what is Scheduled Events
>tags: serverless, scheduled-events, scheduler, cron
>context: server.js
>content:

# What is Scheduled Events

Create scheduled events to invoke serverless apps. At the specified time, the relevant serverless method in the app is executed.

## Parameters for Scheduled Events

### 1. name (string)
Unique identifier for the schedule.

### 2. data (JSON)
Data to be passed to the schedule event handler when fired.

### 3. schedule_at (time in ISO format)
Time for triggering the schedule. For recurring schedules (with time_unit as days), the hour and minutes are taken from `schedule_at`.

### 4. time_unit (string)
Time unit for recurring schedule (minutes, hours, or days).

### 5. frequency (number)
Execution frequency with respect to the time unit.

---
>title: how to register Scheduled Events
>tags: serverless, scheduled-events, scheduler, cron
>context: manifest.json, server.js
>content:

# How to Register Scheduled Events

## Steps to Register a Scheduled Event and a Corresponding Callback

### Step 1: Update `manifest.json`
Update `manifest.json` with the following:
```json
{
    "freshdesk": {
      "location": {},
      "events": {
        "onScheduledEvent": {
            "handler": "onScheduledEventHandler"
            }
        }
    }
}
```

### Step 2: Define Callback Function in `server.js`
In the `server.js` file, add the callback function definition as follows:
```js
exports = {
    onScheduledEventHandler: function(payload) {
        if (payload.data.account_id === "3") {
            //app logic goes in here
        }
    }
};
```

---
>title: how to create one-time or recurring Scheduled Event
>tags: serverless, scheduled-events, scheduler, cron
>context: server.js
>content:

# How to Create One-Time or Recurring Scheduled Event

## Creating a One-Time Schedule
To create a one-time schedule:
```js
try {
    let data = await $schedule.create({
        name: "ticket_reminder",
        data: {
            ticket_id: 100001
        },
        schedule_at: "2018-06-10T07:00:00.860Z",
    });
    //"data" is a json with status and message.
} catch (error) {
    // //"error" is a json with status and message.
    console.error(error)
}
```

## Creating a Recurring Schedule
To create a recurring schedule:
```js
try {
    let data = await $schedule.create({
        name: "ticket_reminder",
        data: {
            ticket_id: 10001
        },
        schedule_at: "2018-06-10T07:00:00.860Z",
        repeat: {
            time_unit: "minutes",
            frequency: 5
        }
    });
    //"data" is a json with status and message.
} catch (error) {
    // //"error" is a json with status and message.
}
```

---
>title: how to fetch a schedule
>tags: serverless, scheduled-events, scheduler, cron
>context: server.js
>content:

# How to Fetch a Schedule

## Fetching a Schedule by Name
To fetch a schedule by name:
```js
try {
    let data = await $schedule.fetch({
        name: "ticket_reminder"
    });
    //"data" is a json with name, data and schedule_at used to create the schedule.
} catch (error) {
    // error is a json with status and message.
}
```

---
>title: how to update a schedule
>tags: serverless, scheduled-events, scheduler, cron
>context: server.js
>content:

# How to Update a Schedule

## Updating an Existing Schedule
To update an existing schedule:
```js
try {
    let data = await $schedule.update({
        name: "ticket_reminder",
        data: {
            ticket_id: 10001
        },
        schedule_at: "2018-06-10T07:00:00.860Z",
        repeat: {
            time_unit: "hours",
            frequency: 1
        }
    });
    //"data" is a json with status and message.
} catch (error) {
    // “error” is a json with status and message.
}
```

---
>title: how to delete a schedule
>tags: serverless, scheduled-events, scheduler, cron
>context: server.js
>content:

# How to Delete a Schedule

## Deleting a Schedule by Name
To delete a schedule by name:
```js
try {
    let data = await $schedule.delete({
        name: "ticket_reminder"
    });
    //"data" is a json with status and message.
} catch (error) {
    // “error” is a json with status and message.
}
```

---
>title: how to test Scheduled Events
>tags: serverless, scheduled-events, scheduler, cron
>context: server.js
>content:

# How to Test Scheduled Events

## Steps to Test Scheduled Events in Local Simulation

### Step 1: Go to Test Simulation Page
Go to http://localhost:10001/web/test simulation page to test serverless events.

### Step 2: Choose `onAppCreate` Event
Choose `onAppCreate` event if the schedule is created in the `onAppCreate` event handler.

### Step 3: Click the Simulate Button
Click the simulate button to invoke the `onAppCreate` event, which will register the scheduled event in its function. The scheduled event handler will be invoked and directly executed.

### Step 4: Test Schedule Triggers
When testing scheduled events on your computer, the schedules will be triggered at the specified time and frequency after they are created or updated.

### Step 5: Trigger Scheduled Event Handler Directly
To directly trigger the scheduled event handler, select `onScheduledEvent` to invoke it. This will immediately execute the scheduled event handler function.
```
