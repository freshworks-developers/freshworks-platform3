>title: Fixing reserved keyword used for iparams error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing reserved keyword used for iparams error

## FDK validation fails with the error
```
Do not use reserved keywords, <keyword>, as keys.
```

## Steps to fix the error
1. In `config/iparams.json`, identify the iparam key `<keyword>` which is a reserved keyword.
2. Replace the `<keyword>` with a new key and also update the app code where the iparam key is referenced.

---

>title: Fixing iparam key should be non-empty string error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing iparam key should be non-empty string error

## FDK validation fails with the error
```
The iparam key should be a non-empty string.
```

## Steps to fix the error
In `config/iparams.json`, identify the iparam key and update the key with a non-empty string.
```json
{
  "contact": {
    "display_name": "Contact Details",
    "description": "Please enter the contact details",
    "type": "text",
    "required": true
  }
}
```

---

>title: Fixing mandatory keys missing error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing mandatory keys missing error

## FDK validation fails with the error
```
The mandatory key(s), <mandatory_keys> , missing for the '<key>' field.
```

## Steps to fix the error
1. In `config/iparams.json`, ensure all the iparams keys have `display_name` and valid `type`.
2. If the `type` of iparam is `radio`, `multiselect` or `dropdown` ensure `options` keys are defined.

---

>title: Fixing mandatory keys missing error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing mandatory keys missing error

## FDK validation fails with the error
```
Options must not be specified for <type of field> type in the '<key>' field.
```

## Steps to fix the error
For the iparams of the `type` - `radio`, `multiselect` or `dropdown` ensure `options` keys are defined, update the `config/iparams.json` accordingly for the mentioned fields.

---

>title: Fixing invalid type error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing invalid type error

## FDK validation fails with the error
```
Invalid type, <type of key>, found in the '<key>' field.
```

## Steps to fix the error
In `config/iparams.json`, the possible values supported in `type` are - `text`, `paragraph`, `dropdown`, `email`, `number`, `phone_number`, `date`, `url`, `radio`, `checkbox`, `multiselect`.

---

>title: Fixing invalid value for required key error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing invalid value for required key error

## FDK validation fails with the error
```
Specify either true or false for the required key in the '<key>' field.
```

## Steps to fix the error
In `config/iparams.json`, the `required` key accepts boolean values - `true` or `false` only.
```json
{
  "Birthday": {
    "display_name": "Birthday",
    "description": "Please enter your birthday",
    "type": "date",
    "required": true
  }
}
```

---

>title: Fixing invalid value for secure key error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing invalid value for secure key error

## FDK validation fails with the error
```
Specify either true or false for the secure key in the '<key>' field.
```

## Steps to fix the error
In `config/iparams.json`, the `secure` key accepts boolean values - `true` or `false` only.
```json
{
  "apikey": {
    "display_name": "API Key",
    "description": "Please enter your API key",
    "type": "text",
    "required": true,
    "secure": true
  }
}
```

---

>title: Fixing invalid value for default_value key error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing invalid value for default_value key error

## FDK validation fails with the error
```
Specify either true or false for the default_value key in the '<key>' field.
```

## Steps to fix the error
In `config/iparams.json`, the `default_value` key for `checkbox` type accepts boolean values - `true` or `false` only.
```json
{
  "ArchiveTicket": {
    "display_name": "Archive ticket",
    "description": "Check this option if the tickets are to be archived",
    "type": "checkbox",
    "default_value": true
  }
}
```

---

>title: Fixing events key error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing events key error

## FDK validation fails with the error
```
For the '<key>' <type> type, add the Events as an array.
```

## Steps to fix the error
In `config/iparams.json`, when you are using `events` to make iparams dynamic and validations, ensure the `events` is passed as an array of JSON objects.
```json
{
  "firstname": {
    "display_name": "First Name",
    "description": "Please enter your business name",
    "type": "text",
    "required": true,
    "events": [
      {"change": "firstnameChange"}
    ]
  }
}
```

----

>title: Fixing event not allowed in events key error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing event not allowed in events key error

## FDK validation fails with the error
```
The <event name> event is not supported in the '<key>' field
```

## Steps to fix the error
In `config/iparams.json`, iparams `events` supports only `change` events accepted as an array of JSON objects.
```json
{
  "firstname": {
    "display_name": "First Name",
    "description": "Please enter your business name",
    "type": "text",
    "required": true,
    "events": [
      {"change": "firstnameChange"}
    ]
  }
}
```

---

>title: Fixing events callback funtion not found error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json, iparams.js
>content:

# Fixing events callback funtion not found error

## FDK validation fails with the error
```
The <callback function name> function does not exist for the '<key>' field.
```

## Steps to fix the error
In `config/iparams.json`, the callback function for `events` key should be defined in `config/assets/iparams.js`.
```json
{
  "firstname": {
    "display_name": "First Name",
    "description": "Please enter your business name",
    "type": "text",
    "required": true,
    "events": [
      {"change": "firstnameChange"}
    ]
  }
}
```

```js
  function firstnameChange(arg) {
    //validation logic and subsequent action performed
    //arg is the iparam value passed to the callback function
    console.log(arg);
  }
```

---

>title: Fixing a secure parameter which isn't marked as secure
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing a secure parameter which isn't marked as secure

## FDK validation fails with the error
```
iparam '<key>' appears to be a secure param but it isn't marked as secure.
```

## Steps to fix the error
In `config/iparams.json`, the mentioned key appears to be a credential and should be marked as `"secure": true`.

---

>title: Fixing supported files errors
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing supported files errors

## FDK validation fails with the error
```
`Unsupported File(s). Specify either <html file> or <json file>
```

## Steps to fix the error
To define the iparams for the app, it should either be defined in `iparams.json` or `iparams.html`, defining both is not allowed.

---

>title: Fixing iparams.json mandatory error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing supported files errors

## FDK validation fails with the error
```
iparams.json is mandatory.
```

## Steps to fix the error
For any app to be successfully validated, it requires `iparams.json` as a mandatory file with empty JSON object if no installation parameters are required for the app.

---

>title: Fixing config error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing supported files errors

## FDK validation fails with the error
```
Mandatory folder(s) missing: config
```

## Steps to fix the error
The installation parameters with `iparams.json` or `iparams.html` should be defined in `config` directory. Ensure the app follows the directory structure. 
```
app_name
- config
-- iparams.json
- manifest.json
- app
-- index.html
-- script
--- app.js
- server
-- server.js
```

---

>title: Fixing client.iparams.set is not a function error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing client.iparams.set is not a function error

## FDK validation fails with the error
```
client.iparams.set is not a function
```

## Steps to fix the error
Installation parameters (iparams) cannot be dynamically set from the app using app client and `client.iparams.set` is not supported. However, you can retrieve the set iparam values with `client.iparams.get()` in `app.js`.

---