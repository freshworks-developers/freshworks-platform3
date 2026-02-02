>title: Freshservice product events
>tags: product-events, freshservice_events
>context: product-events
>content:

# Freshservice product events

Freshservice supports  `onTicketCreate`,  `onTicketUpdate`, and  `onConversationCreate` events

The `onConversationCreate` event is triggered,
  - When an agent/requester/end user replies to a ticket.
  - When an agent adds a public/private note to the ticket.
  - When an agent replies to a forwarded ticket.
  - When a requestor/end user replies to a ticket.

---
>title: what is ticket updation event for Freshservice
>tags: product-events, freshservice_events
>context: product-events
>content:

# What is ticket updation event for Freshservice

## The `onTicketUpdate` event is triggered in the Freshdesk system when,

- Status changed
- Priority changed
- Group changed
- Agent changed
- Ticket deleted
- Ticket is marked as spam
- Type changed
- Source changed
- Ticket is escalated for any reason
- Ticket is escalated because first response was breached

## The `onTicketUpdate` event is not triggered when:

- Updates to custom fields.
- Updates to tags.
instead of the `onTicketUpdate` event.

---
>title: how to configure ticket updation event for Freshservice
>tags: product-events, freshservice_events
>context: product-events
>code:

# How to configure ticket updation event for Freshservice

## Change `manifest.json` as below to configure product events
```json
{
 "platform-version": "2.3",
 "product": {
   "freshservice": {
     "events": {
       "onConversationCreate": {
         "handler": "onConversationCreateHandler"
       }
     }
   }
 }
}
```

## Change `server.js` as below to include definition for callback function, do not include events array in `server.js`
```js
exports = {
 onConversationCreateHandler: function(payload) {
       if(payload.data.ticket.priority >= 3)
       {
       //your code for handling onConversationCreate event goes here
       }
   }
 }
```

## Below is a Sample payload Example. Udpate the payload attributes as per event requirements

```json
{
 "timestamp": 1496400354326,
 "account_id": "13",
 "domain": "sample.freshservice.com",
 "event": "onConversationCreate",
 "region": "US",
 "data": {
     "conversation": {
        "id": 5,
        "attachments": [{
        }]
      },
     "actor": {
     "profile_id": 27000015175
       }
   }
}
```
---
