>title: Defining SMI in manifest
>tags: serverless-offerings, smi
>context: manifest.json
>code:

# Defining SMI in manifest
```js
{
  "platform-version": "3.0",
  "modules": {
    "common": {
      "functions": {
        "serverMethodName1": {},
        "serverMethodName2": {}
      }
    },
    "support_ticket": {
      "events": {
        "onTicketCreate": {
          "handler": "onTicketCreateHandler"
        }
      }
    }
  }
}
```

---