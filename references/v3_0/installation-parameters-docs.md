>title: How to configure installation parameters or iparams
>tags: iparams, installation-parameters, installation-page
>context: iparams.json, iparams.js, app.js
>content:

# How to configure installation parameters or iparams
Define the iparams in `config/iparams.json` as a JSON structure.
```json
{
  "contact": {
    "display_name": "Contact Details",
    "description": "Please enter the contact details",
    "type": "text",
    "required": true
  },
  "age": {
    "display_name": "Age",
    "description": "Please enter your age in years",
    "type": "number",
    "modules": ["support_ticket", "service_ticket" ]
  },
  "contactType": {
    "display_name": "Contact Type",
    "description": "Please select the contact type",
    "type": "dropdown",
    "modules": ["support_ticket" ],
    "options": [
      "Phone",
      "Email"
    ],
    "default_value": "Email"
  }
}
```

---

>title: What are installation parameters attributes
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# What are installation parameters attributes
1. `modules`: (array of string) - From the modules registered in the App Manifest, names of the modules for which the iparam is applicable. For an app built for multiple modules, only if the iparam is applicable to the module on which the app is deployed, the iparam is displayed on the Settings page of the app.

---

>title: How to configure iparams during development
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# How to configure iparams during development
1. Run the app with `fdk run`.
2. Navigate to system settings page - `http://localhost:10001/system_settings`.
3. In systems settings page, select the modules and enter the *account URL*. During app testing, this URL plays the role of `currentHost` and the values of `currentHost.subscribed_modules` and `currentHost.endpoint_urls` would be defined.
4. To configure iparams, visit - `http://localhost:10001/custom_configs`.

---