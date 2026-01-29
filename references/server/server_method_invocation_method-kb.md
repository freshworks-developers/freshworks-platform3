>title: Server Method Invocation (SMI) Example in fdk
>tags: serverless, smi
>content:

The SMI feature enables interaction between front-end (app.js) and serverless/server-side components (server.js), allowing for efficient app functionality.

We define a server method in server.js which app.js invokes.

### Here's a concise example how Server Method Invocation (SMI) is used with the following snippets

**`manifest.json` with the declaration of the method to be invoke the serverless component i.e (server.js) code:**
```json
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "location": {},
      "events": {},
      "requests": {},
      "functions": {
        "bookmarkTicket": {"timeout": 10},
        "serverMethodName2": {"timeout": 15}
      }
    }
  }
}
```

**This is how `app.js` uses the definition to invoke the server side (server.js):**
```js
// Invoking the SMI
function bookmarkTicket() {
    getCurrentTicket().then(ticket => {
        const data = {
            'agentId': loggedInUser.id,
            'ticketId': ticket.id,
            'ticketSubject': ticket.subject
        };
        client.request.invoke("bookmarkTicket", data)
            .then(data => console.log(data))
            .catch(err => console.error(err));
    });
}

// Getting the current ticket
function getCurrentTicket() {
    return client.data.get("ticket")
        .then(data => data.ticket)
        .catch(error => {
            // Handle error
        });
}
```

**This is how the the SMI is declared in `server.js` file:**
```js
exports = {
    // SMI for bookmarking a ticket
    bookmarkTicket: async function (request) {
        try {
            const saveTicketResponse = await saveTicketInDb(request.agentId, request.ticketId, request.ticketSubject);
            renderData(null, saveTicketResponse);
        } catch (error) {
            renderData(error, null);
        }
    }
};

// Save ticket in the database
async function saveTicketInDb(agentId, ticketId, ticketSubject) {
    return $db.update("agentId: " + agentId, "append", { savedTickets: [{ 'ticketId': ticketId, 'ticketSubject': ticketSubject }] });
}
```

**This is what SMI function declared in server.js recieves Sample JSON request Payload:**
```json
{
  "url": "https://api.github.com/users/sample",
  "iparams": {
    "<iparam1>": "<value1>",
    "<iparam2>": "<value2>"
  }
}
```
Yes it has iparams as part of the payload, so that it can utilized
