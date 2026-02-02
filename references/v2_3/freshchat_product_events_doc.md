
---
>title: what are Freshchat events
>tags: freshchat product events, freshchat
>context: product-events
>content:

# what are freshchat events
Currently Freshchat supports `onConversationCreate`, `onConversationUpdate`, `onAgentActivityCreate`, `onMessageCreate`, `onUserCreate`, and `onUserUpdate` events

Agent activity is a metric that helps supervisors to assess how agents spend their business hours when they are unavailable in the Freshchat system.

## The `onAgentActivityCreate` event is triggered, when:
1. In the Freshdesk system, the general availability of an agent changes (from online to offline and vice versa).
2. The agent's `Intelliassign` status changes.

## The `onConversationUpdate` event is triggered in the Freshchat system when,
1. A conversation is assigned to an agent or a group.
2. An existing conversation is reassigned to an agent or unassigned from a group.
3. A conversation is resolved or reopened.

---
>title: Configuring a event named onAgentActivityCreate
>tags: freshchat product events, freshchat
>context: product-events
>code:

# Configuring a event named onAgentActivityCreate

To configure the event

## Change `manifest.json` as below to configure product events

```json
{
  "product": {
    "freshchat": {
      "events": {
        "onAgentActivityCreate": {
          "handler": "onAgentActivityCreateCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function
```js
exports= {
  onAgentActivityCreateCallback: function(payload){
      //your code for handling onAgentActivityCreate event goes here
    }
  }
```
---

>title: example of an event payload sample received
>tags: freshchat product events, freshchat
>context: product-events
>code:

# example of an event payload sample received

## Sample JSON for payload recieved for an event
```json
{
  "region": "US",
  "account_id": "227655214724132",
  "domain": "web.freshchat.com",
  "event": "onAgentActivityCreate",
  "timestamp": 1564392319214,
  "version": "2.0.0",
  "data": {
  "agent_activity": {
  },
  "actor": {
    "id": "98c76ba0-6b38-499b-9c37-e104774276b8",
    "avatar":{},
    "sub_entity": "hallway_bot",
    "social_profiles": [],
    "org_contact_id": "1556375110506151936",
    "login_status": false
    }
  }
}
```

---
>title: Example of configuring a conversation update event for freshchat
>tags: freshchat product events, agent
>context: product-events
>code:

# Example of configuring a conversation update event for freshchat

## We have to add in `manifest.json` below to configure onConversationUpdate

```json
{
  "product": {
    "freshchat": {
      "events": {
        "onConversationUpdate": {
          "handler": "onConversationUpdateCallback"
        }
      }
    }
  }
}
```

## `server.js` will have a handler written like this,

OnConverstaionUpdate will be handled like this
```js
exports= {
  onConversationUpdateCallback: function(payload){
      //your code for handling onConversationUpdate event goes here
    }
  }
```

---
>title: How to test a product event
>tags: product-events, freshchat
>context: product-events
>content:

# How to test a product event

To simulate events for testing,
- Run `fdk run` command from terminal
- Navigate to http://localhost:10001/web/events
- Select the event that you want to simulate.
- Once selected the corresponding event payload is displayed. Edit the values and click simulate
   - If the event is successfully simulated, Success is displayed.
   - If there is a problem, Failed is displayed. Check if the payload is valid and resume testing.
---
