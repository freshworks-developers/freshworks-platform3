>title: Defining SMI in manifest
>tags: serverless-offerings, smi
>context: manifest.json
>code:

# Defining SMI in manifest
```js
{
  "platform-version": "2.3",
  "product": {
    "freshdesk": {
      "location": {
        "ticket_sidebar": {
          "url": "template.html",
          "icon": "logo.svg"
        }
      },
      "functions": {
        "serverMethod": {}
      },
      "requests": {
        "createTicket": {},
        "getTickets": {}
      }
    }
  }
}
```

---