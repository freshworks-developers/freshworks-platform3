>title: Fixing requested function name validation error
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing requested function name validation error

## FDK validation failed with the error 
```
Requested function '<methodName>' must be of length 2-40 and can only contain alphanumeric characters and underscores
```

## Steps to resolve the validation errors
1. Ensure the SMI method name defined in `server.js`, `manifest.json` and invoked from `app.js` has a lenght of 2-40 characters.
2. SMI method names can contain alphanumberic characters and underscores.

---

>title: Fixing requested function not found error
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing requested function not found error

## FDK validation failed with the error 
```
Requested function '<methodName>' not found or registered
```

## Steps to resolve the validation errors
1. Ensure the name defined for SMI in `server.js`, `manifest.json` and `server.js` matches. 
2. This error occures when the name doesn't match in `client.request.invoke("smiName", {>)` and declared SMI function in `manifest.json`.

---

>title: Fixing timeout error
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing timeout error

## FDK validation failed with the error 
```
{status: 504, message: ‘Timeout error while processing the request.’, errorSource: ‘APP’}
```

## Steps to resolve the validation errors
1. In `server.js`, ensure the function returns `renderData()` for returning success or error messages.
2. If the SMI function requires longer timeout, update the timeout for the function in `manifest.json`, valid options are 20, 25 and 30 seconds.

---

>title: Fixing error from SMI
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing error from SMI

## SMI invocation failed with the error 
```
 {
   "requestID": "2edc13f8-3b81-4ade-b857-8d8e316fa87c",
   "status": 400,
   "message": "The error should be a JSON Object with a message or a status parameter."
 }
```

## Steps to resolve the errors
1. In `server.js`, ensure the function returns `renderData()` for returning error.
2. The format for errors, should be JSON object that contains `status` and `message` - `renderData({ status: 403, message: "Error while processing the request" })`

---

>title: Fixing invoke is not a function error
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing invoke is not a function error

## SMI invocation failed with the error 
```
Error: $request.invoke is not a function
```

## Steps to resolve the errors
1. `$request.invoke()` is not a supported function.
2. SMI invocation is supported from front-end to `server.js`.
3. For front-end invocation, use `client.request.invoke()`.

---

>title: Fixing DOMException while invoking SMI
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing DOMException while invoking SMI

## SMI invocation failed with the error 
```
The browser returns an error “Uncaught (in promise) DOMException: Failed to execute ‘postMessage’ on ‘MessagePort’: Event object could not be cloned.”
```

## Steps to resolve the errors
In `index.html`, use `<script defer src="{{{appclient}}}"></script> to ensure the app client is loaded correctly.

---

>title: Fixing dependencies not listed in manifest error
>tags: serverless-offerings, smi
>context: server.js, manifest.json
>content:

# Fixing dependencies not listed in manifest error

## FDK run with dependencies throw error
```
<dependency> is not listed in manifest
```

## Steps to resolve the error
Listing the depenency in `manifest.json` under `dependencies` key
```json
"dependencies": {
  "http": "1.7.5"
}
```

---

>title: Fixing invalid feature or feature not enabled error
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing invalid feature or feature not enabled error

## FDK run with error
```
Invalid feature or feature not enabled
```

## Steps to resolve the error
Ensure the app follows a directory structure as below -
```md
app_dir
- app
-- app.js
- server
-- server.js
- manifest.json
```
And the SMI function defined in `server/server.js` and declared in `manifest.json`.

Remember that installation page with SMI is best tested end-to-end from your Freshworks instance instead of `http://localhost:10001/custom_configs`.