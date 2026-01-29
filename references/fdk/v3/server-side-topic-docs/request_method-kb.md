>title: Request method template in fdk for making api calls using request templates
>tags: request template
>content:

**Making API Calls with Request Method in Serverless (server.js) - snippets**

To invoke a request template in a serverless app, use the `$request.invokeTemplate` method in the `server.js` file. Here are examples with different scenarios:

**1. Basic Request:**

```js
exports = {
  someHandler: async function (payload) {
    try {
      await $request.invokeTemplate("sampleTemplate", {});
      // rest of the app logic
    } catch (error) {
      // handle error
    }
  }
}
```

**2. Request with Query Parameters:**

```js
exports = {
  someHandler: async function (payload) {
    try {
      let result = await $request.invokeTemplate("sampleTemplate", {
        context: { page: 1 }
      });
      let responseJSON = JSON.parse(result.response);
      // rest of the app logic
    } catch (error) {
      // handle error
    }
  }
}
```

**3. Request with Request Body:**

```js
exports = {
  someHandler: async function (payload) {
    const body = {
      "channel_name": "abcd"
    }

    try {
      await $request.invokeTemplate("sampleTemplate", {
        context: { conversation_id: payload.conversation_id },
        body: JSON.stringify(body)
      });
      // rest of the app logic
    } catch (error) {
      // handle error
    }
  }
}
```

'someHandler' can be any handler which can be product event handler function, scheduled event handler function, app setup event handler function, server invocatoion method

**4. OAuth Request:**

Ensure OAuth configurations are in `config/oauth_config.json.json`, and use `options.isOAuth` in the request template:

```json
{
  "sampleTemplate": {
    "schema": {
      "method": "GET",
      "host": "app.asana.com",
      "path": "/api/1.0/workspaces",
      "headers": {
        "Authorization": "bearer <%= access_token %>",
        "Content-Type": "application/json"
      }
    },
    "options": {
      "oauth": "asana"
    }
  }
}
```

```js
exports = {
  onTicketCreateCallback: async function (payload) {
    try {
      await $request.invokeTemplate("sampleTemplate", {});
      // rest of the app logic
    } catch (error) {
      // handle error
    }
  }
}
```
Remember to replace placeholders like `"sampleTemplate"` and specific API endpoints with your actual configurations.