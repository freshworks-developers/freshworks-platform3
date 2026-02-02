>title: What are events method and how do I enable it in my app?
>tags: events, front-end, initialization
>context: app.js
>content:

# What is the events method and how do I enable it in my app?

Front-end events are actions on the product UI, such as button clicks and changes to field values. The events method is an interface provided by the developer platform to let your app react to these front-end events.

## To enable your app to react to front-end events in your `app.js` file:

-  Subscribe to the `app.initialized` event through an event listener. When the app is initialized, the parent application passes a client reference to the app.
-  After the app is initialized, use the client reference to subscribe to an event by name and register a callback to run when that event occurs.
-  Define the callback method. When the event occurs, a payload is passed to the callback. Let us call it `event`.
    - `event.type` is the name of the event.
    - `event.helper.getData()` returns a JSON object containing data relevant to the event.
- Your app logic can then process this data as needed.

---
>title: What front-end event types are common across all products?
>tags: events, common, front-end
>context: app.js
>content:

# What front-end event types are common across all products?

Below are the three main types of front-end events:

## Click events
   These occur when a user clicks a button or link on the page.  
   - For most click events, `event.helper.getData()` returns an empty JSON, except in the case of timer events.

## Change events**  
   These occur when a user changes the value of a field on the UI.  
   - Merely changing the value triggers the event; no submission is required.

## Intercept events**  
   These are events that are paused while the event listener and the corresponding callback run.  
   - The app can allow the original event to complete or block it.  
   - Intercepting is enabled by passing `{ intercept: true }` when subscribing to the event.

---

>title: how do I intercept an event across all products?
>tags: events, intercept, common
>context: app.js
>content:

# How do I intercept an event across all products?

- After app initialization, use the `client.events.on(<eventName>, callback, { intercept: true })` pattern.  
- Define the callback function that receives the paused event.  
- To allow the event to proceed, use `event.helper.done()`.  
- To prevent the event from completing, use `event.helper.fail("errorMessage")`.  
- Obtain any relevant data using `event.helper.getData()`.   
    - For click events, the returned JSON is typically empty.

## Configure code

```js
/* Configure event listener, register callback, and set intercept to true */
client.events.on("ticket.propertiesUpdated", eventCallback, { intercept: true });

/* Define callback */
var eventCallback = function (event) {
  console.log(event.type + " event occurred");

  /* Obtain data for event */
  var event_data = event.helper.getData();

  /* Insert your app logic */
  /* As part of app logic, allow the original event to continue */
  event.helper.done();

  /* Or, as part of app logic, prevent the original event from completing */
  // event.helper.fail("errorMessage");
};
```

---

>title: What is the sample payload structure for change events across all products?
>tags: events, change-events, common
>context: app.js
>code:

# What is the sample payload structure for change events across all products?

When a user modifies a field, the `event.helper.getData()` method returns a JSON object containing the old and new values:

```json
`{
  "old": "<old_value>",
  "new": "<new_value>"
}`
```

This allows your app logic to identify what changed and respond accordingly.

---

>title: What are the global events available for Freshdesk?
>tags: events, global, cti, freshdesk
>context: app.js
>code:

# What are the global events available for Freshdesk?

`cti.triggerDialer` is the global event that fires when a user clicks the call icon or phone number link in various parts of the Freshservice UI, such as:

- Ticket details page → **CONTACT DETAILS** widget
- Ticket list page → **Contact hover card**
- New ticket page → **CONTACT DETAILS** widget
- Contact list page → **Contact hover card**
- Contact details page → **Contact header** and **DETAILS** widget

## Configure code

```js
// Configure event listener and subscribe to event
// Register callback
client.events.on("cti.triggerDialer", eventCallback);

var eventCallback = function (event) {
  // Retrieve event data
  var data = event.helper.getData();
  // App logic
};
```

## Sample payload:

```json
{
  "number": "+12345678900"
}
```

---

>title: What are the global events available for Freshservice?
>tags: events, global, cti, freshservice
>context: app.js
>code:

# What are the global events available for Freshservice?

`cti.triggerDialer` is the global event that fires when a user clicks a phone number displayed on various pages of the product UI, such as:

- Ticket details page → **Requester Information** widget  
- Requester details page  

Use the following sample code to enable your app to react to these user clicks:

## Configure code

```js
// Configure event listener and subscribe to event
// Register callback
client.events.on('cti.triggerDialer', eventCallback);

var eventCallback = function (event) {
  // Retrieve event data
  var data = event.helper.getData();
  console.log(`Clicked phone number: ${data.number}`);
  // App logic
};
```

## Sample payload:

```json
{
  "number": "+12345678900"
}
```

---
>title: What is the global `calling` event in Freshsales Suite?
>tags: events, global, cti, freshsales-suite
>context: app.js
>content:

# What is the global `calling` event in Freshsales Suite?

The `calling` event is triggered when a user clicks a phone number or call icon in multiple locations of the Freshsales Suite UI, such as:

- Contact list page → **Contact hover card** → Make call widget  
- Contact list page → **Work phone** field  
- Contact details page → **Work phone** and **Mobile** fields  
- Contact details page → **Make call** widget  

## Use the following sample code to enable your app to react when a user clicks a phone number or call icon:

```js
// Configure event listener and subscribe to event
// Register callback
client.events.on("calling", eventCallback);

var eventCallback = function (event) {
  // Retrieve event data
  var data = event.helper.getData();
  // App logic
};

## Sample payload:

```json
{
  "phoneNumber": "3684932360"
}
```

---
>title: What are the click events on the Ticket details page in Freshdesk?
>tags: events, ticket-details, click-events
>context: app.js
>content:

# What are the click events on the Ticket details page in Freshdesk?

The following click events occur when a user interacts with various buttons or icons on the Ticket details page:

- `ticket.replyClick`  
  When a user clicks the Reply button to open the editor window.
- `ticket.sendReply`  
  When a user clicks the Send button.
- `ticket.forwardClick`  
  When a user clicks the Forward button to open the editor window.
- `ticket.conversationForward`  
  When a user clicks the Forward icon in the conversation.
- `ticket.forward`  
  When a user clicks the Forward button inside the editor window to forward the ticket or conversation.
- `ticket.notesClick`  
  When a user clicks the Notes button to open the editor window.
- `ticket.addNote`  
  When a user clicks the Add Note option from the editor window, causing a private or public note to be added.
- `ticket.closeTicketClick`  
  When a user clicks the Close button located on the top navigation bar of the Ticket details page.
- `ticket.deleteTicketClick`  
  When a user clicks the Delete button located on the top navigation bar of the Ticket details page.
- `ticket.previousTicketClick`  
  When a user clicks the previous ticket icon at the top right of the Ticket details page.
- `ticket.nextTicketClick`  
  When a user clicks the next ticket icon at the top right of the Ticket details page.
- `ticket.startTimer`  
  When a user clicks the Start or Add Timer button.
- `ticket.stopTimer`  
  When a user clicks the Stop Timer button.
- `ticket.updateTimer`  
  When a user clicks the Update Timer button.
- `ticket.deleteTimer`  
  When a user clicks the Delete Time Entry button.

---
>title: What are the change events on the Ticket details page in Freshdesk?
>tags: events, ticket-details, change-events
>context: app.js
>content:

# What are the change events on the Ticket details page in Freshdesk?

The following change events occur when a user updates specific properties on the Ticket details page:

- `ticket.priorityChanged`  
  When a user changes the priority of a ticket.
- `ticket.statusChanged`  
  When a user changes the status of a ticket.
- `ticket.groupChanged`  
  When a user changes the group to which a ticket is assigned.
- `ticket.agentChanged`  
  When a user changes the agent to whom the ticket is assigned.
- `ticket.typeChanged`  
  When a user changes the type of the ticket.

---
>title: Which intercept events are supported on the Ticket details page in Freshdesk?
>tags: events, ticket-details, intercept-events
>context: app.js
>content:

# Which intercept events are supported on the Ticket details page in Freshdesk?

Certain events on the Ticket details page can be intercepted, allowing your app to block or allow the default behavior:

- `ticket.closeTicketClick`  
  When a user clicks the Close button located on the top navigation bar of the Ticket details page.
- `ticket.deleteTicketClick`  
  When a user clicks the Delete button located on the top navigation bar of the Ticket details page.
- `ticket.propertiesUpdated`  
  When a user updates any ticket property and clicks the Update button on the Ticket details page.
- `ticket.sendReply`  
  When a user clicks the Send button on the Ticket details page

By subscribing to these events with `{ intercept: true }`, your app can decide whether to proceed with or block the original action.

---

>title: What change events are supported on the New ticket page in Freshdesk?
>tags: events, new-ticket, change-events
>context: app.js
>content:

# What change events are supported on the New ticket page in Freshdesk?

When creating a new ticket, these change events are available:

- `ticket.priorityChanged`  
  When a user changes the priority of a ticket.
- `ticket.statusChanged`  
  When a user changes the status of a ticket.
- `ticket.groupChanged`  
  When a user changes the group to which a ticket is assigned.
- `ticket.agentChanged`  
  When a user changes the agent to whom a ticket is assigned.
- `ticket.typeChanged`  
  When a user changes the type of a ticket.

---

>title: What change events are supported on the New email page in Freshdesk?
>tags: events, new-email, change-events
>context: app.js
>content:

# What change events are supported on the New email page in Freshdesk?

When composing a new email, these change events are triggered upon user interaction:

- `ticket.fromChanged`  
  When a user changes the From address of a ticket.
- `ticket.priorityChanged`  
  When a user changes the priority of a ticket.
- `ticket.statusChanged`  
  When a user changes the status of a ticket.
- `ticket.groupChanged`  
  When a user changes the group to which a ticket is assigned.
- `ticket.agentChanged`  
  When a user changes the agent to whom a ticket is assigned.
- `ticket.typeChanged`  
  When a user changes the type of a ticket.

---

>title: What are the click events on the Ticket details page in Freshservice?
>tags: events, ticket-details, click-events
>context: app.js
>content:

# What are the click events on the Ticket details page in Freshservice?

These are the events that fire upon specific user actions on the Ticket details page:

- `ticket.propertiesLoaded`  
  When the ticket properties are loaded.
- `ticket.replyClick`  
  When a user clicks the Reply button.
- `ticket.forwardClick`  
  When a user clicks the Forward button.
- `ticket.notesClick`  
  When a user clicks the Add note button.
- `ticket.submitClick`  
  When a user clicks the Send button after selecting Reply/Forward/Add Note.
- `ticket.closeTicketClick`  
  When a user clicks the Close button.
- `ticket.previousTicketClick`  
  When a user clicks the Back icon.
- `ticket.nextTicketClick`  
  When a user clicks the Forward icon button.
- `ticket.taskAdded`  
  When a user clicks the Add task button.
- `ticket.startTimer`  
  When a user clicks the Start Timer button.
- `ticket.stopTimer`  
  When a user clicks the Stop Timer button.
- `ticket.updateTimer`  
  When a user clicks the Update Timer button.
- `ticket.deleteTimer`  
  When a user clicks the Delete Time Entry button.

---

>title: What are the change events on the Ticket details page in Freshservice?
>tags: events, ticket-details, change-events
>context: app.js
>content:

# What are the change events on the Ticket details page in Freshservice?

These events trigger whenever users modify ticket properties on the Ticket details page:

- `ticket.priorityChanged`  
  When a user changes the priority of a ticket.
- `ticket.statusChanged`  
  When a user changes the status of a ticket.
- `ticket.groupChanged`  
  When a user changes the group to which a ticket is assigned.
- `ticket.agentChanged`  
  When a user changes the agent to whom the ticket is assigned.
- `ticket.typeChanged`  
  When a user changes the type in the ticket properties.
- `ticket.urgencyChanged`  
  When a user changes the urgency of a ticket.
- `ticket.impactChanged`  
  When a user changes the impact of a ticket.
- `ticket.departmentChanged`  
  When a user changes the department of a ticket.
- `ticket.categoryChanged`  
  When a user changes the category of a ticket.
- `ticket.subCategoryChanged`  
  When a user changes the sub-category of a ticket.
- `ticket.itemChanged`  
  When a user changes the category item of a ticket.
- `ticket.propertiesUpdated`  
  When a user updates any ticket property and clicks the Update button.
- `ticket.assetAssociated`  
  When a user associates an asset with a ticket.
- `ticket.problemAssociated`  
  When a user associates a problem with a ticket.
- `ticket.changeAssociated`  
  When a user associates a change with a ticket.
- `ticket.childticketAssociated`  
  When a user adds a child ticket.

---

>title: What are the change events on the New ticket page in Freshservice?
>tags: events, new-ticket, change-events
>context: app.js
>content:

# What are the change events on the New ticket page in Freshservice?

When creating a new ticket, the following properties can trigger change events:

- `ticket.priorityChanged`  
  When a user changes the priority of a ticket.
- `ticket.statusChanged`  
  When a user changes the status of a ticket.
- `ticket.groupChanged`  
  When a user changes the group to which a ticket is assigned.
- `ticket.agentChanged`  
  When a user changes the agent to whom the ticket is assigned.
- `ticket.urgencyChanged`  
  When a user changes the urgency of a ticket.
- `ticket.impactChanged`  
  When a user changes the impact of a ticket.
- `ticket.departmentChanged`  
  When a user changes the department of a ticket.
- `ticket.categoryChanged`  
  When a user changes the category of a ticket.
- `ticket.subCategoryChanged`  
  When a user changes the sub-category of a ticket.
- `ticket.itemChanged`  
  When a user changes the category item of a ticket.
- `ticket.requesterChanged`  
  When a user changes or adds the requester.
- `ticket.subjectChanged`  
  When a user changes the subject of a ticket.

---
>title: What are the click events on the Change details page in Freshservice?
>tags: events, change-details, click-events
>context: app.js
>content:

# What are the click events on the Change details page in Freshservice?

These events fire when a user performs certain actions on the Change details page:

- `change.submitNote`  
  When a user clicks the Note Submit button.
- `change.startTimer`  
  When a user clicks the Start Timer button.
- `change.stopTimer`  
  When a user clicks the Stop Timer button.
- `change.updateTimer`  
  When a user clicks the Update Timer button.
- `change.deleteTimer`  
  When a user clicks the Delete Time Entry button.
---

>title: What are the change events on the Change details page in Freshservice?
>tags: events, change-details, change-events
>context: app.js
>content:

# What are the change events on the Change details page in Freshservice?

These events occur when users modify change properties:

- `change.priorityChanged`  
  When a user changes the priority of a change.
- `change.statusChanged`  
  When a user changes the status of a change.
- `change.groupChanged`  
  When a user changes the group assigned to a change.
- `change.agentChanged`  
  When a user changes the agent assigned to a change.
- `change.typeChanged`  
  When a user changes the type of a change.
- `change.impactChanged`  
  When a user changes the impact of a change.
- `change.riskChanged`  
  When a user changes the risk of a change.
- `change.departmentChanged`  
  When a user changes the department of a change.
- `change.categoryChanged`  
  When a user changes the category of a change.
- `change.subCategoryChanged`  
  When a user changes the sub-category of a change.
- `change.itemChanged`  
  When a user changes the category item of a change.
- `change.propertiesUpdated`  
  When a user updates any change property and clicks the update button.
- `change.plannedStartDateChanged`  
  When a user changes the planned start date of a change.
- `change.plannedEndDateChanged`  
  When a user changes the planned end date of a change.

---

>title: Which change events are supported on the New change page in Freshservice?
>tags: events, new-change, change-events
>context: app.js
>content:

# Which change events are supported on the New change page in Freshservice?

- `change.priorityChanged`  
  When a user changes the priority of a change.
- `change.statusChanged`  
  When a user changes the status of a change.
- `change.groupChanged`  
  When a user changes the group assigned to a change.
- `change.agentChanged`  
  When a user changes the agent assigned to a change.
- `change.typeChanged`  
  When a user changes the type of a change.
- `change.impactChanged`  
  When a user changes the impact of a change.
- `change.riskChanged`  
  When a user changes the risk of a change.
- `change.departmentChanged`  
  When a user changes the department of a change.
- `change.categoryChanged`  
  When a user changes the category of a change.
- `change.subCategoryChanged`  
  When a user changes the sub-category of a change.
- `change.itemChanged`  
  When a user changes the category item of a change.
- `change.propertiesUpdated`  
  When a user updates any change property and clicks the update button.
- `change.plannedStartDateChanged`  
  When a user changes the planned start date of a change.
- `change.plannedEndDateChanged`  
  When a user changes the planned end date of a change.

---

>title: What event triggers are available for the Contact details page in Freshsales Classic?
>tags: events, contact, freshsales-classic
>context: app.js
>content:

# What event triggers are available for the Contact details page in Freshsales Classic?

Below is the relevant event and its trigger:

`contact.update`: Fires when a user updates a contact

---

>title: What event triggers are available for the Deal details page in Freshsales Classic?
>tags: events, deal, freshsales-classic
>context: app.js
>content:

# What event triggers are available for the Deal details page in Freshsales Classic?

Below is the relevant event and its trigger:

`deal.update`: Fires when a user updates a deal.
---

>title: What event triggers are available for the Sales account details page in Freshsales Classic?
>tags: events, account, freshsales-classic
>context: app.js
>content:

# What event triggers are available for the Sales account details page in Freshsales Classic?

Below is the relevant event and its trigger:

`account.update`: Fires when a user updates an account.
---

>title: What event triggers are available for the Conversation editor page in Freshsales Classic?
>tags: events, conversation-editor, freshsales-classic
>context: app.js
>content:

# What event triggers are available for the Conversation editor page in Freshsales Classic?

Below is the relevant event and its trigger:

- `chatConversation.onSendMessage`: Fires when an agent clicks the Send button.
  -   The event payload is contained in the `chatConversation.onSendMessage` object.
---

>title: What event triggers are available for the Contact details page in Freshsales Suite?
>tags: events, contact, freshsales-suite
>context: app.js
>content:

# What event triggers are available for the Contact details page in Freshsales Suite?

Below is the relevant event and its trigger:

`contact.update`: Fires when a user updates a contact.
---

>title: What event triggers are available for the Deal details page in Freshsales Suite?
>tags: events, deal, freshsales-suite
>context: app.js
>content:

# What event triggers are available for the Deal details page in Freshsales Suite?

Below is the relevant event and its trigger:

- `deal.update`: Fires when a user updates a deal.
---

>title: What event triggers are available for the Sales account details page in Freshsales Suite?
>tags: events, account, freshsales-suite
>context: app.js
>content:

# What event triggers are available for the Sales account details page in Freshsales Suite?

Below is the relevant event and its trigger:

`account.update`: Fires when a user updates an account.

---

>title: What event triggers are available for the Conversation editor page in Freshsales Suite?
>tags: events, conversation-editor, freshsales-suite
>context: app.js
>content:

# What event triggers are available for the Conversation editor page in Freshsales Suite?

Below are the relevant events and their triggers:

## Intercept event

`chatConversation.onSendMessage`  
  Fires when an agent clicks the Send button.  

- The event payload is contained in the `chatConversation.onSendMessage` object.

## Change event

`chatConversation.propertiesLoaded`  
  Fires when an agent:

- Collapses and then reopens the conversation properties widget.
- Navigates from one conversation to another.
- Updates values within the conversation properties widget.

---

>title: What event triggers are available for the Conversation editor page?
>tags: events, conversation-editor
>context: app.js
>content:

# What event triggers are available for the Conversation editor page in Freshchat?

Click events

- `conversation.onPrivateNoteClick`  
  When an agent clicks the Private Note button.
- `conversation.onSendClick`
  When a user clicks the Send button, presses Enter to send a message, or clicks the Send button in FAQs.
- `conversation.onCobrowseClick`  
  When an agent clicks the Cobrowse button.
- `conversation.onCannedResponseClick`  
  When an agent clicks the Canned Response button.
- `conversation.onAttachFAQClick`  
  When an agent clicks the FAQs button.
- `conversation.onAttachFileClick`  
  When an agent clicks the Attach File button.
- `conversation.onChooseFileClick`  
  When a user clicks the Choose File button.
- `conversation.onQuickAccessClick`  
  When an agent clicks the Quick Access button.
- `conversation.onAttachImageClick`  
  When a user clicks the Attach Image button.
- `conversation.onEmojiClick`  
  When a user clicks the Emoji button.
- `conversation.onResolveClick`  
  When an agent clicks the Resolve button.
- `conversation.onResolveAndCreateTicketFDClick`  
  When an agent clicks the Resolve And Create Ticket Freshdesk button.
- `conversation.onResolveAndCreateTicketFSClick`  
  When an agent clicks the Resolve And Create Ticket Freshsales button.

Intercept events

- `conversation.onSendMessage`  
  When an agent clicks the Send button. The event payload is the conversation.onSendMessage object.
- `conversation.onResolveClick`  
  When an agent clicks the Resolve button.
- `conversation.onReopenClick`  
  When an agent clicks the Reopen button.

Change events

- `conversation.propertiesLoaded`
  When an agent
  - collapses and then reopens the conversation properties widget
  - navigates from one conversation to another
  - updates values within the conversation properties widget

---

>title: What event triggers are available for the User details page?
>tags: events, user-details
>context: app.js
>content:

# What event triggers are available for the User details page?

Change events

- `user.saveCustomPropertyClick`  
  When an agent changes a user property and clicks Save.
- `user.onSaveNameClick`  
  When an agent changes a user’s name and clicks Save.
- `user.onSavePhoneClick`
  When an agent changes a user’s phone number and clicks Save.
- `user.onSaveEmailClick`  
  When an agent changes a user’s email address and clicks Save.

---

>title: Which events are available for conversation_card and widget_conversation_card?
>tags: events, conversation_card, widget_conversation_card
>context: app.js
>content:

# Which events are available for conversation_card and widget_conversation_card?

## Click events

- `call.holdToggled`  
  When an agent holds or releases a call.
- `call.muteToggled`  
  When an agent mutes or unmutes a call.
- `call.recordingStarted`  
  When an agent manually starts call recording.
- `call.recordingPaused`  
  When an agent pauses call recording.
- `call.recordingResumed`  
  When an agent resumes call recording.

## Change events

- `agent.statusChanged`  
  When an agent’s status is changed.
- `call.ended`  
  When a call is disconnected.
- `call.contactEdited`  
  When an agent links another contact to a current call.
- `call.linkedToAnotherContact`  
  When an agent links another contact to a current call.

## Intercept events

- `call.saveAndClose`  
  When an agent clicks the Save and close button.

---
>title: how to use click events methods supported by freshdesk ticket details page
>tags: events-methods, freshdesk, ticket-details-events, click-events
>context: app.js
>code:

The click events follow below syntax for invoking them, Replace `<event-name>` with actual click event name and `eventCallback` with corresponding callback method

```js
var eventCallback = function (event) {
    console.log(event.type + " event occurred");
};
client.events.on("<event-name>", eventCallback);
```
1. For example to use `ticket.addNote` use below snippet
```js
var addNoteCallback = function (event) {
    console.log(event.type + " event occurred");
};
client.events.on("ticket.addNote", addNoteCallback);
```

---
>title: example of how to use multiple click events methods in a freshdesk app
>tags: events-methods, freshdesk, click-events
>context: app.js
>code:

Update your `scripts/<event-file>.js` with below snippet for using multiple ticket events with their event handlers.
```js
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then(initApp)
    .catch(console.error);
}

function initApp(_client) {
  window['client'] = _client;
  client.events.on('app.activated', eventsInTktDetailsPage);
}

function eventsInTktDetailsPage() {
  const spotlight = document.querySelector('.spotlight');
  registerClickEvents(spotlight);
}

function registerClickEvents(spotlight) {
  const clickEvents = [
    'ticket.replyClick',
    'ticket.sendReply',
    'ticket.forwardClick',
    'ticket.conversationForward',
    'ticket.addNote',
    'ticket.closeTicketClick'
  ];

  clickEvents.forEach((click) => {
    client.events.on(click, (event) => {
      const eventData = event.helper.getData();
      const row = `<fw-label value="${click}" color="green"></fw-label>`;
      spotlight.insertAdjacentHTML('afterend', row);
      console.log("event data = ", eventData);
    });
  });
}

```

---
>title: how to use change events methods supported by freshdesk for ticket details page
>tags: events-methods, freshdesk, change-events
>context: app.js
>code:

To use the change events use snippet below in your `app.js`
```js
// Callback function to be executed when the priority or type of the ticket is changed
const eventChangedCallback = (eventType, event) => {
  const eventData = event.helper.getData();
  console.log(eventType + " changed from " + eventData.old + " to " + eventData.new);
};

// Listener for ticket priority change event
client.events.on("ticket.priorityChanged", (event) => {
  eventChangedCallback("Priority", event);
});

// Listener for ticket type change event
client.events.on("ticket.typeChanged", (event) => {
  eventChangedCallback("Type", event);
});
```

---
>title: how to use intercept events methods
>tags: events-methods, freshdesk, intercept-events
>context: app.js
>code:

To use the change events use snippet below
```js
function interceptEvent(eventType, callback) {
  client.events.on(eventType, callback, {intercept: true});
}

function processEvent(event, errorMessage = "Error message") {
  console.log(`${event.type} event occurred`);

  const eventData = event.helper.getData();

  if (someCondition) {
  // To allow the original event to continue
    event.helper.done();
  } else {
  // To prevent the original event from completing
    event.helper.fail(errorMessage);
  }
}

const ticketPropertiesUpdatedHandler = (event) => {
  processEvent(event, "Error during ticket properties update");
};

const sendReplyHandler = (event) => {
  processEvent(event, "Error during sending reply");
};

interceptEvent("ticket.propertiesUpdated", ticketPropertiesUpdatedHandler);
interceptEvent("ticket.sendReply", sendReplyHandler);
```

---
>title: how to use freshservice events methods
>tags: events-methods, freshservice, intercept-events
>context: app.js
>content:

The events follow below syntax for invoking them, Replace `<event-name>` with actual event name and `eventCallback` with corresponding callback method.

To use the change events in your `app.js`, add the following snippet:

```js
// For change.plannedEndDateChanged event
var plannedEndDateChangedCallback = function (event) {
  var event_data = event.helper.getData();
  // Sample event_data: { changedAttributes: { status: {old:1, new:2} } }
  // To allow the original event to continue
  event.helper.done();
  // To prevent the original event from completing
  event.helper.fail('errorMessage');
};
client.events.on("change.plannedEndDateChanged", plannedEndDateChangedCallback, { intercept: true });

// For ticket.priorityChanged event
var priorityChangedCallback = function (event) {
  var event_data = event.helper.getData();
  // Sample event_data: { changedAttributes: { status: {old:1, new:2} } }
  // To allow the original event to continue
  event.helper.done();
  // To prevent the original event from completing
  event.helper.fail('errorMessage');
};
client.events.on("ticket.priorityChanged", priorityChangedCallback, { intercept: true });
```

---
>title: how to use freshworks crm or freshsales suite events methods
>tags: events-methods, freshworks_crm, fcrm
>context: app.js
>content:

To use the change events use snippet below

```js
function handleUpdateEvent(event) {
  console.log(event.type + " event occurred");
  var eventData = event.helper.getData();
  // Sample eventData: { changedAttributes: { status: {old:1, new:2} } }

  // Uncomment one of the following lines, depending on the desired outcome:
  // event.helper.done(); // To allow the original event to continue
  // event.helper.fail('errorMessage'); // To prevent the original event from completing
}

client.events.on("contact.update", handleUpdateEvent, {intercept: true});
client.events.on("account.update", handleUpdateEvent, {intercept: true});
```

---