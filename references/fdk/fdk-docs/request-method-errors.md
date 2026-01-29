>title: Fixing request template with validation failed for `schema/path` and `schema/query` errors.
>tags: request-method, request-template, requests.json
>context: requests.json
>content:

# Fixing request template with validation failed for `schema/path` and `schema/query` errors

## FDK validation failed with the error 
```
"The local server could not be started due to the following issue(s):
✖ Request template 'requestTemplateName' schema/path must start with '/': shorten in config/requests.json.
✖ Request template 'requestTemplateName' schema/query must be object in config/requests.json.
✖ validation failed"
```

## Steps to resolve the `schema/path` and `schema/host` errors.
1. Defining the `path` of the API endpoint.
2. For the query parameters used in the API endpint, using `query` as an object.


### Defining the `path` of the API endpoint
The `requestTemplateName.schema.path` contains the complete path of the API endpoint prefixed with trailing slash.

### For the query parameters used in the API endpint, using `query` as an object
The `requestTemplateName.schema.query` requires an object with key-value pairs of the query parameter appended to the API request. This supports values to be assigned while declaring and alos substituted from `context` which passed duing the request template invocation.

The request template for `requestTemplateName` with `path` and `query` is as follows -
```json
{
  "requestTemplateName": {
    "schema": {
      "method": "POST",
      "host": "<%= iparam.domain %>",
      "path": "/v4/shorten",
      "headers": {
        "Authorization": "Bearer <%= iparam.apiKey %>",
        "Content-Type": "application/json"
      },
      "query": {
        "key1": "value",
        "key2": "<%= context.key2 %>"
      }
    }
  }
}
```

---

>title: Fixing request template with `schema/host` runtime validation failed error
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing request template with `schema/host` runtime validation failed error

## Runtime FDK validation failed with the error 
```
  status: 400,
  headers: {},
  response: 'runtime validation failed.',
  errors: [
    {
      message: 'must not have path: null',
      instancePath: '/schema/host'
    },
  ]
```

## Steps to resolve `schema/host` must not have path error.
In `config/requests.json`, ensure the `requestTemplateName.schema.host` is a mandatory value and contains the valid domain name of the API endpoint without protocol or trailing slash. This does not support IP Address. The `host` can be directly assigned while declaring the request template or substituted from `iparams` for request method invocation from the app and `context` for request method invocation from installation page.

>code: 
Defining the `schmea/host` with an assigned value that is a valid domain name.
```json
{
  "shortenLink": {
    "schema": {
      "method": "POST",
      "host": "api-ssl.bitly.com",
      "path": "/v4/shorten",
      "headers": {
        "Authorization": "Bearer <%= iparam.apiKey %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```

---

>title: Fixing request template with `schema/host` runtime validation failed error
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing request template with `schema/host` runtime validation failed error

## Runtime FDK validation failed with the error 
```
"{
    ""status"": 400,
    ""headers"": {},
    ""response"": ""runtime validation failed."",
    ""errors"": [
        {
            ""message"": ""must not be empty"",
            ""instancePath"": ""/schema/host""
        }
    ],
    ""errorSource"": ""APP"",
    ""attempts"": 1
}"
```

## Steps to resolve `schema/host` must not have path error.
In `config/requests.json`, ensure the `requestTemplateName.schema.host` is a mandatory value and contains the valid domain name of the API endpoint without protocol or trailing slash. This does not support IP Address. The `host` can be directly assigned while declaring the request template or substituted from `iparams` for request method invocation from the app and `context` for request method invocation from installation page.

>code: 
### Defining the `schmea/host` with an assigned value that is a valid domain name.
```json
{
  "shortenLink": {
    "schema": {
      "method": "POST",
      "host": "api-ssl.bitly.com",
      "path": "/v4/shorten",
      "headers": {
        "Authorization": "Bearer <%= iparam.apiKey %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```

---

>title: Fixing the unsupported `Content-Type` error
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing the unsupported `Content-Type` error

## Runtime error with request method for unsupported `Content-Type`
```
response: ""Unsupported content type""
status: 415
```

## The supported `Content-Type` of the request method are
The `requestTemplateName.schema.headers.Content-Type` supports `application/json`, `application/xml`, `text/html`, `text/xml`, `application/jsonp`, `text/plain`, `application/javascript`, `application/vnd.api+json`, if the `Content-Type` doesn't match supported content types, the request template would throw a validation error.

>code: 
### A sample request template with Content-Type `application/json`.
```json
{
  "getContacts": {
    "schema": {
      "method": "GET",
      "host": "<%= iparam.subdomain %>.freshdesk.com",
      "path": "/api/v2/contacts",
      "headers": {
        "Authorization": "Basic <%= encode(iparam.api_key) %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```

---

>title: Fixing the error while substituting the templates
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing the error while substituting the templates

## Runtime error with request method substitution
```
Error while substituting the templates
```

## How to fix the substitution error
In `config/requests.json`, identify if the `iparams` or `context` is used to substitute values in `templateName.schema.host`, `templateName.schema.path` or `templateName.schema.headers.Authorization`.

>code: 
### A sample request template with substitutions
```json
{
  "getContacts": {
    "schema": {
      "method": "GET",
      "host": "<%= iparam.subdomain %>.freshdesk.com",
      "path": "/api/v2/contacts/<%= context.contact_id %>",
      "headers": {
        "Authorization": "Basic <%= encode(iparam.api_key) %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```

---

>title: Fixing the request method rate limit error
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing the request method rate-limit error

## Runtime error with request method rate-limit
```
{status: 429, headers: {…}, message: 'You have exceeded the limit of 50 requests per minute', errorSource: 'APP'}
```

## How to fix the request method rate-limit error
The request method has a default rate-limit of 50 requests per minute but can be increased for an app in an account by raising a serivce request - https://dev-assist.freshworks.com/a/catalog/request-items/44. The request would be increased on a case-by-case basis. 

---

>title: Fixing the request method timeout error
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing the request method timeout error

## Runtime error with request method timeout
```
Timeout error while processing the request
```

## How to fix the request method timeout error
The request method has a default timeout of 15s. Timeout can be configured with 15s (15000), 20s (20000), 25s (25000) and 30s (30000).

To test this locally, `REQUEST_TIMEOUT=20000 fdk run`. 

For production request, you can raise a service request - https://dev-assist.freshworks.com/a/catalog/request-items/45.

---

>title: Fixing the request method error in establishing connection
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing the request method error in establishing connection

## Runtime error with request error in establishing connection
```
"Error in establishing connection" error 502
```

## How to fix the request method error in establishing connection
The request method error in establishing connection is because of an incorrect `host` value, verify if the `host` value in `config/requests.json` is correct or the value in installation page (iparams) is correct along with the `path` value.

---

>title: Fixing the request template not found error
>tags: request-method, request-template, schema, requests.json
>context: requests.json
>content:

# Fixing the request template not found error

## Runtime error of request template not found 
```
Request template not found
```

## How to fix the request template not found error
Ensure if the request template name `requestTemplateName` is defined in `config/requests.json` matches the request template name defined in `manifest.json` and also in the app where the request template is being invoked.
- In front-end, `client.request.invokeTemplate("requestTemplateName", {})`
- In serverless, `$request.invokeTemplate("requestTemplateName", {})`

---

>title: Fixing the get is no longer supported in Request API error
>tags: request-method, request-template, requests.json
>context: requests.json, app.js, server.js
>content:

# Fixing the get is no longer supported in Request API error

## Runtime error of request template not found 
```
get is no longer supported in Request API, please refer https://developers.freshdesk.com/v2/docs/migration-overview/#latest_platform_version_migration for more details
```

## How to fix this runtime error
`request.get()` method is deprecated in platform version 2.3 and above to resolve this migrate the request method which requires you to - 
1. Define the request snapshot in `config/requests.json`.
2. Use the `requestTemplateName` in app for invoking request method in `app.js` or `server.js`.
3. Update `manifest.json` with request template declarations and remove `whitelisted_domains`.
