>title: Freshworks CRM product events
>tags: product-events, freshworks_crm
>context: product-events
>content:

# Freshworks CRM product events

Currently the Freshworks CRM supports the following events

- `onConversationCreate`

- `onConversationUpdate`

- `onContactCreate`

- `onContactUpdate`

- `onDealCreate`

- `onDealUpdate`

- `onSalesAccountCreate`

- `onSalesAccountUpdate`

- `onCustomModuleCreate`

- `onCustomModuleUpdate`

- `onAppointmentCreate`

- `onAppointmentUpdate`

- `onTaskCreate`

- `onTaskUpdate`

- `onCpqDocumentCreate`

- `onCpqDocumentUpdate`

- `onCpqDocumentDelete`

- `onProductCreate`

- `onProductUpdate`
---

>title: when is the onproductupdate event triggered
>tags: product-events, freshworks_crm
>context: product-events
>code:

# When is the onproductupdate event triggered

## The `onProductUpdate` event is triggered when,

- A product’s details are modified.
- A product is soft deleted.
- A product’s pricing details are modified.

### Register the `onProductUpdate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onProductUpdate": {
          "handler": "onProductUpdateCallback"
        }
      }
    }
  }
}
```
### Update `server.js` as follows
```js
exports = {
    onProductUpdateCallback: function(payload) {
    // your code goes in here
    }
  }
```


---
>title: configure contact events for crm
>tags: product-events, freshworks_crm
>context: product-events
>code:

# Configure contact events for crm

## When a new contact is created `onContactCreate` event is invoked and the registered callback method is executed.

### Register the `onContactCreate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onContactCreate": {
          "handler": "onContactCreateCallback"
        }
      }
    }
  }
}
```

### Update `server.js` as follows, do not include the events array in `server.js`
```js
exports = {
  onContactCreateCallback: function(payload) {
    // your code goes in here
    }
  }
```

## When an existing contact is updated `onContactUpdate` event is invoked and the registered callback method is executed.

### Register the `onContactUpdate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onContactUpdate": {
          "handler": "onContactUpdateCallback"
        }
      }
    }
  }
}
```

### Update `server.js` as follows

```js
exports = {
  onContactUpdateCallback: function(payload) {
    // your code goes in here
    }
  }
```

---
>title: configure deal creation event
>tags: product-events, freshworks_crm
>context: product-events
>code:

# Configure deal creation event

When a new deal is created `onDealCreate` event is invoked and the registered callback method is executed.

## Register the `onDealCreate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onDealCreate": {
          "handler": "onDealCreateCallback"
        }
      }
    }
  }
}
```
## Update `server.js` as follows
```js
exports = {
  onDealCreateCallback: function(payload) {
    // your code goes in here
    }
  }
```

---
>title: configure sales account updation event
>tags: product-events, freshworks_crm
>context: product-events
>code:

# Configure sales account updation event

When an existing sales account is updated `onSalesAccountUpdate` event is invoked and the registered callback method is executed.

## Register the `onSalesAccountUpdate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onSalesAccountUpdate": {
          "handler": "onSalesAccountUpdateCallback"
        }
      }
    }
  }
}
```
## Update `server.js` as follows
```js
exports = {
  onSalesAccountUpdateCallback: function(payload) {
    // your code goes in here
    }
  }
```

---
>title: configure custom module creation event
>tags: product-events, freshworks_crm
>context: product-events
>content:

# Configure custom module creation event

When a custom module record is created `onCustomModuleCreate` event is invoked.

## Register the `onCustomModuleCreate` event by using the following sample `manifest.json` content

```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onCustomModuleCreate": {
          "handler": "onCustomModuleCreateCallback"
        }
      }
    }
  }
}
```
## Update `server.js` as follows

```js
exports = {
  onCustomModuleCreateCallback: function(payload) {
    // your code goes in here
    }
  }
```

---
>title: configure appointment creation event
>tags: product-events, freshworks_crm
>context: product-events
>content:

# Configure appointment creation event

When an appointment is created `onAppointmentCreate` event is invoked.

## Register the `onAppointmentCreate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onAppointmentCreate": {
          "handler": "onAppointmentCreateCallback"
        }
      }
    }
  }
}
```
## Update `server.js` as follows
```js
exports = {
  onAppointmentCreateCallback: function(payload) {
    // your code goes in here
    }
  }
```

---
>title: configure task creation event
>tags: product-events, freshworks_crm, task
>context: product-events
>content:

# Configure task creation event

When an appointment is created ` onTaskCreate` event is invoked.

## Register the ` onTaskCreate` event by using the following sample `manifest.json` content.
```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        " onTaskCreate": {
          "handler": " onTaskCreateCallback"
        }
      }
    }
  }
}
```

## Update `server.js` as follows
```js
exports = {
   onTaskCreateCallback: function(payload) {
    // your code goes in here
    }
  }
```

---
>title: what is cpq feature and how to configure any cpq event
>tags: product-events, freshworks_crm
>context: product-events
>content:

# what is cpq feature

The Freshsales Suite's Configure, Price, Quote (CPQ) feature  has 2 events and allows users to create customer-specific quotes for products/services and generate standardized documents like proposals, NDAs, and MSAs using predefined templates. Two events, `onCpqDocumentCreate` and `onCpqDocumentUpdate`, are triggered in the system for specific actions.

## The `onCpqDocumentUpdate` event is triggered when,

1. The details of the document are updated.
2. The details of the products associated with the document are modified.
3. The document is previewed or saved as a PDF file.
4. The document is soft deleted.

---

>title: how to configure any cpq event
>tags: product-events, freshworks_crm
>context: product-events
>code:

# how to configure any cpq event

## Register event in your app's `manifest.json`

```json
{
  "product": {
    "freshworks_crm": {
      "events": {
        "onCpqDocumentCreate": {
          "handler": "onCpqDocumentCreateCallback"
        },
        "onCpqDocumentUpdate": {
          "handler": "onCpqDocumentUpdateCallback"
        }
      }
    }
  }
}
```

## Update `server.js`:

```js
// Update server.js to handle onCpqDocumentCreate event
exports = {
  onCpqDocumentCreateCallback: function(payload) {
    // Your code for handling onCpqDocumentCreate event goes here
  },

  // Add the function to handle onCpqDocumentUpdate event
  onCpqDocumentUpdateCallback: function(payload) {
    // Your code for handling onCpqDocumentUpdate event goes here
  }
}
```

---