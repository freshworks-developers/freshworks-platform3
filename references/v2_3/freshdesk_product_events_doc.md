>title: What are various Freshdesk product events
>tags freshdesk product events
>context: product-events
>content:

# What are various Freshdesk product events

Currently Freshdesk supports following product events

 `onTicketCreate`,  `onTicketUpdate`,  `onTicketDelete`,  `onConversationCreate`,  `onConversationUpdate`,  `onConversationDelete`,  `onCannedResponseCreate`,  `onCannedResponseUpdate`,  `onCannedResponseDelete`,  `onContactCreate`,  `onContactUpdate`,  `onContactDelete`,  `onCompanyCreate`,  `onCompanyUpdate`,  `onCompanyDelete`,  `onAgentCreate`,  `onAgentUpdate`,  `onAgentDelete`,  `onAgentStatusCreate`,  `onAgentStatusUpdate`,  `onAgentStatusDelete`,  `onAgentAvailabilityUpdate`,  `onGroupCreate`,  `onGroupUpdate`,  `onGroupDelete`,  `onTimeEntryCreate`,  `onTimeEntryUpdate`,  `onTimeEntryDelete`,  `onCategoryCreate`,  `onCategoryUpdate`,  `onCategoryDelete`,  `onFolderCreate`,  `onFolderUpdate`,  `onFolderDelete`,  `onArticleCreate`,  `onArticleUpdate`,  `onArticleDelete`,  `onForumCategoryCreate`,  `onForumCategoryUpdate`,  `onForumCategoryDelete`,  `onForumCreate`,  `onForumUpdate`,  `onForumDelete`,  `onTopicCreate`,  `onTopicUpdate`, and  `onTopicDelete`

---
>title: How to use Freshdesk product events
>tags: freshdesk product events
>context: product-events
>content:

# To use Freshdesk product events

1. To use product events you need to add the events and their respective callback methods in to `manifest.json` file
2. In `server.js` define those callback methods and add the required app logic into the function definition

### Add events to `manifest.json` alone as below and do not insert them in `server.js`
```json

{
    "events": {
      "onTicketCreate": {
        "handler": "onTicketCreateCallback"
      },
      "onTicketDelete": {
        "handler": "onTicketDeleteCallback"
        }
      }
    }
```

## Add event handlers or callback method to `server.js` as below and do not include events array
```js
exports = {
  onTicketCreateCallback: function(payload) {
    try {
      // persist the payload data in to a KV store
    } catch (error) {
      // handle error if the persist operation fails
    }
  },
  onTicketDeleteCallback: function(payload) {
    try {
      // delete the data in to a KV store based on payload Property values
    } catch (error) {
      // handle error if the deletion operation fails
    }
  }
}
```

---
>title: Ticket Creation Event with Example
>tags: freshdesk product events
>context: product-events
>content:

# Ticket Creation Event with Example

##  Change `manifest.json` as below to configure product events
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onTicketCreate": {
          "handler": "onTicketCreateCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function
```js
exports = {
  onTicketCreateCallback: function(payload) {
    //your code for handling onTicketCreate event goes here
  }
}
```

---
>title: what is Ticket Updation Event for Freshdesk
>tags: freshdesk product events
>context: product-events
>content:

# What is Ticket Updation Event for Freshdesk

The `onTicketUpdate` event is triggered in the Freshdesk system when,
- The status, priority, type, or source of the ticket is modified
- The agent or group associated with the ticket is modified
- The ticket is marked as spam
- The ticket is escalated for any reason.

The `onTicketUpdate` event is not triggered when:
- The tags associated with the ticket are modified.
- The custom fields configured for a ticket in the Freshdesk system are modified.
- When the agent assigned to the ticket replies or adds a note, the `onConversationUpdate` event is triggered instead of the `onTicketUpdate` event.

---
>title: how to Ticket Updation Event for Freshdesk with example
>tags: product-events, freshdesk_events
>context: product-events
>content:

# How to Ticket Updation Event for Freshdesk with example

##  Change `manifest.json` as below to configure product events
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onTicketUpdate": {
          "handler": "onTicketUpdateCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function
```js
exports = {
  onTicketUpdateCallback: function(payload) {
      //your code for handling onTicketUpdate event goes here
    }
  }
```

---
>title: Example of how to configure ticket deletion event
>tags: product-events, freshdesk_events
>context: product-events
>code:

# Example of how to configure ticket deletion event

When a ticket is deleted from the Freshdesk system, the `onTicketDelete` event is triggered.

##  Change `manifest.json` as below to configure product events
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onTicketDelete": {
          "handler": "onTicketDeleteCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function
```js
exports = {
  onTicketDeleteCallback: function(payload) {
      //your code for handling onTicketDelete event goes here
    }
  }
```

---
>title: what are conversation product events for Freshdesk
>tags: product-events, freshdesk_events
>context: product-events
>content:

# what are conversation product events for Freshdesk

A conversation is created when the agent/requester/end user adds the first response to a ticket raised in the Freshworks system. 

## The `onConversationCreate` event is triggered,

- When an agent/requester/end user replies to a ticket. 
- When an agent adds a public/private note to the ticket.
- When an agent replies to a forwarded ticket.
- When a requestor/end user replies to a ticket.

## The `onConversationUpdate` event is triggered,

- When an agent modifies the private/public note added to a ticket (first response) or conversation.
- When an agent replies to the conversation created.
- When an agent forwards a conversation.
- When a requestor/end user replies to a conversation created.
- When an agent deletes a response added to the conversation.
- When an agent deletes a forwarded conversation.

The `onConversationDelete` event is triggered when an agent deletes the ticket to which a conversation is associated. Deleting the ticket also deletes the entire conversation.

---
>title: how to configure conversation product events for Freshdesk
>tags: product-events, freshdesk_events
>context: product-events
>content:

# how to configure conversation product events for Freshdesk

To configure product events

## Change `manifest.json` as below to configure product events

```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onConversationDelete": {
          "handler": "onConversationDeleteCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function

```js
exports = {
  onConversationDeleteCallback: function(payload) {
      //your code for handling onConversationDelete event goes here
    }
  }
```

---
>title: what are canned response events for Freshdesk
>tags: product-events, freshdesk_events
>context: product-events
>content:

# What are canned response events for Freshdesk

The Freshdesk system enables agents to create predefined responses (canned responses) to quickly respond to common customer queries that come in the form of tickets. When an agent creates a canned response and saves it to the Freshdesk system, the `onCannedResponseCreate` event is triggered.

When an agent updates the canned response saved in the Freshdesk system, the `onCannedResponseUpdate` event is triggered. Modifications to the following fields of a saved canned response triggers the `onCannedResponseUpdate` event:

- Response title
- Message
- Attachments
- Visibility
- Folder

When a canned response is deleted from the Freshdesk system, the `onCannedResponseDelete` event is triggered. Deleting the folder to which a canned response is saved also triggers the `onCannedResponseDelete` event.

---
>title: what are contact events for Freshdesk
>tags: product-events, freshdesk_events
>context: product-events
>content:

# What are contact events for Freshdesk

The `onContactCreate` event is triggered. In the Freshdesk system, when a contact record is created in the Freshdesk system. An agent can create a new contact and save the details triggering the `onContactCreate` event. An agent or a requester can raise a ticket; if the contact specified in the ticket does not exist in the Freshdesk system, an `onContactCreate` event is triggered.

The `onContactUpdate` event is triggered whenever contact’s details are modified. Modifications to any of Avatar/Image, Full Name, Job Title, Email, Company, Twitter ID, Work Phone, Mobile Phone, Address, Time Zone, Language, Unique External ID, Tags, About section triggers `onContactUpdate` event.

The `onContactDelete` event is triggered whenever a contact is deleted.

---
>title:how to configure contact events for Freshdesk
>tags: product-events, freshdesk_events
>context: product-events
>code:

# How to configure contact events for Freshdesk

To configure contact events

##  Change `manifest.json` as below to configure product events
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onContactCreate": {
          "handler": "onContactCreateCallback"
        },
        "onContactDelete": {
          "handler": "onContactDeleteCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below to include definition for callback function
```js
exports = {
  onContactCreateCallback: function(payload) {
      //your code for handling onContactCreate event goes here
    },
  onContactDeleteCallback: function(payload) {
      //your code for handling onContactDelete event goes here
    }
  }
```

---
>title: what are company events for Freshdesk
>tags: product-events, freshdesk_events
>context: product-events
>content:

# what are company events for Freshdesk

These are the following company events

- The `onCompanyCreate` event is triggered whenever a company record is created.
- The `onCompanyUpdate` event is triggered whenever a company details are modified.
- The `onCompanyDelete` event is triggered whenever a company record is deleted.

---
>title: how to configure company events for Freshdesk
>tags: product-events, freshdesk_events
>context: company-events
>code:

# How to configure company events for Freshdesk

## Change `manifest.json` as below
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onCompanyCreate": {
          "handler": "onCompanyCreateCallback"
        },
        "onCompanyUpdate": {
          "handler": "onCompanyUpdateCallback"
        },
        "onCompanyDelete": {
          "handler": "onCompanyUpdateCallback"
        }      }
    }
  }
}
```

## Change `server.js` as below
```js
exports = {
  onCompanyCreateCallback: function(payload) {
      //your code for handling onCompanyCreate event goes here
    },
  onCompanyUpdateCallback: function(payload) {
      //your code for handling onCompanyUpdate event goes here
    },
  onCompanyUpdateCallback: function(payload) {
      //your code for handling onCompanyUpdate event goes here
    }
  }
```

---
>title: What are agent events for Freshdesk
>tags: product-events, freshdesk_events, agents
>context: product-events
>content:

# What are agent events for Freshdesk

These are the following change events

- The `onAgentCreate` event is triggered whenever an agent is created in Freshdesk
- The `onAgentUpdate` event is triggered whenever an agent details such as Agent type, Name, email, Time zone, Language, Signature, Scope (ticket_permissions), Role (privileges) are modified.
- The `onAgentDelete` event is triggered whenever an agent is deleted from Freshdesk system.
 The `onAgentStatusCreate` event is triggered whenever a custom agent status is created in the Freshdesk system.

---
>title: How to configure agent events for Freshdesk
>tags: product-events, freshdesk_events, agents
>context: product-events
>code:

# How to configure agent events for Freshdesk

To configure agent events for Freshdesk

##  Change `manifest.json` as below 
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onAgentCreate": {
          "handler": "onAgentCreateCallback"
        },
        "onAgentUpdate": {
          "handler": "onAgentUpdateCallback"
        },
        "onAgentDelete": {
          "handler": "onAgentDeleteCallback"
        }
      }
    }
  }
}
```

##  Change `server.js` as below to 
```js
exports = {
  onAgentCreateCallback: function(payload) {
      //your code for handling onAgentCreate event goes here
    },
  onAgentUpdateCallback: function(payload) {
      //your code for handling onAgentUpdate event goes here
    },
  onAgentDeleteCallback: function(payload) {
      //your code for handling onAgentDelete event goes here
    }
  }
```

---
>title: what are agent status events
>tags: product-events, freshdesk_events, agents
>context: product-events
>content:

# What are agent status events

Following are the agent status events and details

## The `onAgentStatusDelete` event is triggered when
   - An admin deletes the custom statuses configured in the Freshdesk system.
   - Account deletion or moving the account to a plan that does not support custom statuses causes the Freshdesk system to automatically delete the custom statuses.

## The `onAgentAvailabilityUpdate` event is triggered by:

The Freshdesk system provide omnichannel support feature. An agent’s availability across channels is monitored on the Omnichannel agent availability dashboard. 
   - An admin modifies the availability status
   - An agent updates their profile and modifies the availability status.
   - An agent’s activity such as responding to a call

## The `onAgentStatusUpdate` event is triggered whenever there are modifications to agent status attributes such as Status name, Emoji (icon associated with the status) and State.

---
>title: what are group events
>tags: product-events, freshdesk_events, group
>context: product-events
>content:

# what are group events

The `onGroupUpdate` is the group event and the event is triggered when:

- The group description or the business hours associated with the group is modified.
- The ticket escalation setting is modified.
- The automatic ticket assignment process associated with the group is modified.
- The agents belonging to the group are modified or deleted.

## To configure

### Change `manifest.json` as below 

```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onGroupUpdate": {
          "handler": "onGroupUpdateCallback"
        }
      }
    }
  }
}
```

### Change `server.js` as below 

```js
exports = {
  onGroupUpdateCallback: function(payload) {
      //your code for handling onGroupUpdate event goes here
    }
  }
```

---
>title: configure time entry updation event
>tags: product-events, freshdesk_events, time-entry
>context: product-events
>content:

# configure time entry updation event

The `onTimeEntryUpdate` event triggered when,
1. The agent name associated with the time log is modified.
2. The billability status is modified.
3. A time log note is added or modified.
4. A time entry is manually added to the time log or an existing entry is modified.
5. The auto-timer is started or stopped.

## To configure 

###  Change `manifest.json` as below 
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onTimeEntryUpdate": {
          "handler": "onTimeEntryUpdateCallback"
        }
      }
    }
  }
}
```

### Change `server.js` as below 
```js
exports = {
  onTimeEntryUpdateCallback: function(payload) {
      //your code for handling onTimeEntryUpdate event goes here
    }
  }
```

---
>title: configure category deletion event
>tags: product-events, freshdesk_events, category
>context: product-events
>content:

# Configure category deletion event

The `onCategoryDelete` event triggered when, an article category from the knowledge base is deleted. Category deletion deletes all the articles and folders tagged under the category.

## To configure 

###  Change `manifest.json` as below
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onCategoryDelete": {
          "handler": "onCategoryDeleteCallback"
        }
      }
    }
  }
}
```

### Change `server.js` as below
```js
exports = {
  onCategoryDeleteCallback: function(payload) {
      //your code for handling onCategoryDelete event goes here
    }
  }
```

---
>title: configure folder updation event
>tags: product-events, freshdesk_events, folder
>context: product-events
>content:

# Configure folder updation event

The `onFolderUpdate` event triggered when, an agent modifies folder Name, Description, Category, Visibility or Order articles in Freshdesk system.

## To configure 

###  Change `manifest.json` as below
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onFolderUpdate": {
          "handler": "onFolderUpdateCallback"
        }
      }
    }
  }
}
```

### Change `server.js` as below
```js
exports = {
  onFolderUpdateCallback: function(payload) {
      //your code for handling onFolderUpdate event goes here
    }
  }
```
---
>title: configure article updation event
>tags: product-events, freshdesk_events, article
>context: product-events
>content:

# Configure article updation event

The `onArticleUpdate` event triggered when, an agent updates or modifies a knowledge article. Modifications to any of Title, Content, Article Properties such as Author, Folder, Tags, Title for Search Engine Optimization, Description for Search Engine Optimization trigger this event.

## To configure 

###  Change `manifest.json` as below
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onArticleUpdate": {
          "handler": "onArticleUpdateCallback"
        }
      }
    }
  }
}
```

### Change `server.js` as below
```js
exports = {
  onArticleUpdateCallback: function(payload) {
      //your code for handling onArticleUpdate event goes here
    }
  }
```

---
>title: configure forum updation event
>tags: product-events, freshdesk_events, forum
>context: product-events
>content:

# Configure forum updation event
The `onForumUpdate` event triggered when, there are modifications to the forum fields such as Name, Description, Forum category associated with the forum, Visibility of the forum and Auto-conversion of topics in the forum to ticket.

##  Change `manifest.json` as below
```json
{
  "product": {
    "freshdesk": {
      "events": {
        "onForumUpdate": {
          "handler": "onForumUpdateCallback"
        }
      }
    }
  }
}
```

## Change `server.js` as below
```js
exports = {
  onForumUpdateCallback: function(payload) {
      //your code for handling onForumUpdate event goes here
    }
  }
```

---
>title: How to test a product event
>tags: product-events, freshdesk_events
>context: product-events
>content:

# How to test a product event

To simulate events for testing,
1. Run `fdk run` command from terminal
2. Navigate to http://localhost:10001/web/events
3. Select the event that you want to simulate.
4. Once selected the corresponding event payload is displayed. Edit the values and click simulate
   1. If the event is successfully simulated, Success is displayed.
   2. If there is a problem, Failed is displayed. Check if the payload is valid and resume testing.

---
