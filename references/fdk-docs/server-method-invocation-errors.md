>title: Fixing function name is not defined in `common` module
>tags: serverless-offerings, smi
>context: server.js, manifest.json, app.js
>content:

# Fixing function name is not defined in `common` module

## FDK validation failed with the error 
```
Requests, functions can only be defined in the "common" module
```

## Steps to resolve the validation errors
1. SMI functions are declared in `modules.common.functions` in `manifest.json`.
2. Irrespective of the module that uses SMI, it has to be declared to in `common` modules.

---