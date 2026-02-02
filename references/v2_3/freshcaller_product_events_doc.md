
---
>title: What are freshcaller product integration events
>tags: freshcaller product events, freshcaller
>context: caller_metrics, freshcaller, events_method
>content:

# Freshcaller supports three events for developer and product integration: `onAgentUpdate`, `onCallCreate`, and `onCallUpdate`.

The `onCallUpdate` event is triggered when:
1. A call connection is established or lost.
2. A call's status changes (e.g., transferred to an agent, an agent barges into a call, the call becomes a conference call).
3. Additional information such as call recording details, bill duration, call cost, and call notes is associated with the call.

---
>title: configure call update event for freshcaller
>tags: product-events, freshcaller-events, freshcaller
>context: product-events
>content:

# Here's how to configure the product events in `manifest.json` and handle the `onCallUpdate` event in `server.js`:

## Update `manifest.json` to configure product events:
```json
{
  "product": {
    "freshcaller": {
      "events": {
        "onCallUpdate": {
          "handler": "onCallUpdateCallback"
        }
      }
    }
  }
}
```

## In `server.js`, define the callback function for handling the `onCallUpdate` event:
```js
exports = {
  onCallUpdateCallback: function(payload) {
    // Your code for handling the onCallUpdate event goes here
  }
}
```

## Use the provided payload example to handle the `onCallUpdate` event data:
```json
{
  "account_id": "82918",
  "domain": "sample.freshcaller.com",
  "event": "onCallUpdate",
  "timestamp": 1583839672,
  "region": "US",
  "data": {
    "call": {
      "phone_number": "+12133701559",
      "participants": [],
      "id": 156,
      "assigned_agent_id": 694
    },
    "associations": {},
    "actor": {
      "type": "system"
    },
    "changes": {}
  }
}
```

---
>title: configure agent update event for freshcaller
>tags: freshcaller product events, freshcaller
>context: product-events
>content:

# Configure agent update event for freshcaller

The `onAgentUpdate` event is triggered and the registered callback method is executed, when:
1. The agent status is modified.
2. The agent signs in or out of the Freshcaller system.

##  Change `manifest.json` as below to configure product events
```json
{
  "product": {
    "freshcaller": {
      "events": {
        "onAgentUpdate": {
          "handler": "onAgentUpdateCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function

```js
exports = {
  onAgentUpdateCallback: function(payload) {
    //your code for handling onAgentUpdate event goes here
  }
}
```

---
