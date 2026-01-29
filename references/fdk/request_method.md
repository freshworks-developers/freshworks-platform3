>title: How to configure request template in requests.json for Platform 3.0
>tags: request-template, external-api, http-requests
>content:

Request templates enable secure third-party HTTP calls from your Freshworks app. Here's the request template schema added to the `config/requests.json` file:

```json
{
  "requestTemplateName1": {
    "schema": {
      "protocol": "protocol",
      "method": "method",
      "host": "subdomain.host.com",
      "path": "/api/path",
      "headers": {}
    },
    "options": {
      "maxAttempts": 0,
      "retryDelay": 1000
    }
  },
  "requestTemplateName2": {
    "schema": {},
    "options": {}
  }
}
```

`requestTemplateName1` defines the request template which would be invoked from the app. The template name should contain alphanumeric characters, underscore and hyphen.

## `config/requests.json` attributes for each request template

The request `schema` contains attributes such as `protocol`, `method`, `host`, `path`, `headers`, and `query` for the request. Additionally, the request `options` allow you to specify additional attributes like `maxAttempts`, `retryDelay` etc.

- `protocol`: If specified, the value must be HTTPS. You can use HTTP during local testing of the app. Ensure that the app submitted for review does not contain a protocol value of HTTP.
- `method`: A required attribute with the valid values - `GET`, `POST`, `PUT`, `DELETE` and `PATCH`.
- `host`: A required attribute which is an absolute domain name of the domain to which the app sends the HTTP request. Must not be an IP address; must be a Fully Qualified Domain Name. Ensure not to specify the protocol nor to append a trailing slash as part of the host value. This value can be substituted with installation parameters (iparams) or context for installation page requests and Serverless.
- `path`: Path to the resource on the host domain. Ensure to construct the path with a leading slash. Default value is `/` if no path is specified.
- `headers`: A valid HTTP headers (such as Authorization, Content-Type, and so on) and the corresponding values, specified as key-value pairs of `<header-name>:<header-value>`. 
  - The supported `Content-Type` headers are `application/json`, `application/xml`, `text/html`, `text/xml`, `application/jsonp`, `text/plain`, `text/javascript` and `application/vnd.api+json`.
  - Authorization headers value can be substituted with secure and non-secure installation parameters (iparams) or context for installation page requests and Serverless.

Additionally, the request `options` allow you to specify additional attributes like `maxAttempts` and `retryDelay`.
- `maxAttempts` - Maximum number of times that a request can be resent if a network or 429/5xx HTTP error occurs. The default value is `1` and valid options ranges from minimum value `1` to maximum value `5`.
- `retryDelay` - Time in milliseconds after which a request can be resent. The default value is `0` and valid values are multiple of `100` upto maximum `1500`.

---
>title: Support of installation parameters (iparams) substitution in request templates
>tags: request-template, iparams
>content:

Installation parameters (iparams) variable substitution in request templates is supported only in -
1. `schema.host`: Only non-secure values from the front-end or serverless apps after successful installation.
2. `schema.path`: Only non-secure values from the front-end or serverless apps after successful installation.
3. `schema.header`: Both secure and non-secure values from the front-end or serverless apps after successful installation.
4. `schema.query`: Only non-secure values from the front-end or serverless apps after successful installation.

## Sample request template with iparams substitution

The below request template uses non-secure value in `schema.host` and secure value in `schema.headers.Authorization`.
```json
{
  "schema": {
    "method": "GET",
    "host": "<%= iparam.domain %>.freshchat.com",
    "path": "/api/v2/conversations/1234/messages",
    "headers": {
      "Authorization": "Bearer <%= iparam.api_key %>",
      "Content-Type": "application/json"
    },
    "query": {
        "page": "<%= context.page %>",
        "items_per_page": "20"
    }
  }
}
```

---
>title: Example of making API call with request method using query parameters
>tags: request-template, api-calls
>content:

## Update `config/requests.json` file

```json
{
  "sampleTemplate": {
    "schema": {
      "protocol": "https",
      "method": "GET",
      "host": "northstar.freshchat.com",
      "path": "/api/v2/conversations/1234/messages",
      "query": {
        "page": "<%= context.page %>",
        "per_page": "20"
      }
    }
  }
}
```

## Update `app.js` file to call template with `client.request.invokeTemplate` from frontend:

```js
try {
  let result = await client.request.invokeTemplate("sampleTemplate", { context: {page: 1} });
  let responseJSON = JSON.parse(result.response);
  // rest of the app logic
} catch (err) {
  // handle error
}
```

---
>title: Example of sending an API request using request body
>tags: request-template, api-calls
>content:

## Update `config/requests.json` file
```json
{
  "sampleTemplate": {
    "schema": {
      "protocol": "https",
      "method": "GET",
      "host": "northstar.freshchat.com",
      "path": "/api/v2/conversations/1234/messages",
      "query": {
        "page": "<%= context.page %>",
        "per_page": "20"
      }
    }
  }
}
```

## Update `app.js` file to call template with `client.request.invokeTemplate` from frontend:

```js
const body = {
  "channel_name": "abcd"
}

try {
  let sampleTemplateResponse = await client.request.invokeTemplate(
    "sampleTemplate", {
      context: {conversation_id: payload.conversation_id},
      body: JSON.stringify(body)
      });
  let responseJSON = JSON.parse(sampleTemplateResponse.response);
  // rest of the app logic
} catch (err) {
  // handle error
}
```

---
