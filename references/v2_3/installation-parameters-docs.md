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
    "type": "number"
  },
  "contactType": {
    "display_name": "Contact Type",
    "description": "Please select the contact type",
    "type": "dropdown",
    "options": [
      "Phone",
      "Email"
    ],
    "default_value": "Email"
  },
  "domainName": {
    "display_name": "Domain Name",
    "description": "Please enter your domain name",
    "type": "domain",
    "type_attributes": {
      "product": "freshdesk"
    },
    "required": true
  },
  "apiKey": {
    "display_name": "API Key",
    "description": "Please enter your api_key",
    "type": "api_key",
    "secure": true,
    "required": true,
    "type_attributes": {
      "product": "freshdesk"
    }
  }
}
```

---

>title: What are installation parameters attributes
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# What are installation parameters attributes
1. `type_attributes`: (object, optional) - Required for domain or API key input fields.
2. `data-bind`: (string, optional) - Product values used to pre-populate an iparam field.

---

>title: What are different installation parameter types supported
>tags: iparams, installation-parameters
>context: iparams.json
>content: 

# What are different installation parameter types supported

The different installation parameters types supported are `text`, `paragraph`, `dropdown`, `email`, `number`, `phone_number`, `date`, `url`, `radio`, `checkbox`, `multiselect`, `domain`, `api_key`.

---

>title: Example of domain installation parameter type
>tags: iparams, installation-parameters
>context: iparams.json
>content: 

# Example of domain installation parameter type
An input box to enter the sub-domain part of a domain URL is displayed. By default, the protocol and domain name part of the URL are displayed in the input box and are not editable. The domain name is generated based on the `type_attributes.product` value that is specified as part of the JSON object used to define the iparam.

```json
{
  "domainName": {
    "display_name": "domain_name",
    "description": "Please enter your domain name",
    "type": "domain",
    "type_attributes": {
      "product": "freshdesk"
    },
    "required": true
  }
}
```

---

>title: Example of api_key installation parameter type
>tags: iparams, installation-parameters
>context: iparams.json
>content: 

# Example of api_key installation parameter type
A single-line text box to enter the product’s API key is displayed.

```json
{
  "apiKey": {
    "display_name": "api_key",
    "description": "Please enter your api_key",
    "type": "api_key",
    "secure": true,
    "required": true,
    "type_attributes": {
       "product": "freshdesk"
    }
  }
}
```

---

>title: Example of using data-bind for iparam key
>tags: iparams, installation-parameters
>context: iparams.json
>content: 

# using data-bind for iparam key
Prepopulate the iparam field with product values (`api_key`, `domain` and `url`).

```json
{
  "apikey": {
    "display_name": "API key",
    "description": "Please enter your account’s API key",
    "type": "text",
    "data-bind": "product.api_key",
    "required": true
  },
  "domain": {
    "display_name": "Product Domain",
    "description": "Please enter your account’s Domain",
    "type": "text",
    "data-bind": "product.domain",
    "required": true
  },
  "url": {
    "display_name": "Product URL",
    "description": "Please enter your product URL",
    "type": "text",
    "data-bind": "product.url",
    "required": true
  }
}
```

---

>title: How to validate API keys during app installation
>tags: iparams, installation-parameters
>context: iparams.json
>content: 

# How to validate API keys during app installation
1. In `config/iparams.json`, define the iparams with type `domain` and `api_key` associated with the respective product.
2. Add the values and click on install.

## In `config/iparams.json`, define the iparams with type `domain` and `api_key` associated with the respective product
```json
{
  "domainName": {
    "display_name": "domain_name",
    "description": "Please enter your domain name",
    "type": "domain",
    "type_attributes": {
      "product": "freshdesk"
    },
    "required": true
  },
  "apiKey": {
    "display_name": "api_key",
    "description": "Please enter your api_key",
    "type": "api_key",
    "secure": true,
    "required": true,
    "type_attributes": {
       "product": "freshdesk"
    }
  }
}
```

## Add the values and click on install
In app installating page, enter the respective values and click on *install*. The iparams of `domain` and `api_key` types are validated when the app is installed.

---

>title: How to configure iparams in request method with `domain` and `api_key` types
>tags: iparams, installation-parameters
>context: iparams.json
>content:

# How to configure iparams in request method with `domain` and `api_key` types
1. Define the iparam values in `config/iparams.json`.
2. Reference the iparam values in `config/requests.json`.

## Define the iparam values in `config/iparams.json`
```json
{
  "domainName": {
    "display_name": "domain_name",
    "description": "Please enter your domain name",
    "type": "domain",
    "type_attributes": {
      "product": "freshdesk"
    },
    "required": true
  },
  "apiKey": {
    "display_name": "api_key",
    "description": "Please enter your api_key",
    "type": "api_key",
    "secure": true,
    "required": true,
    "type_attributes": {
       "product": "freshdesk"
    }
  }
}
```

## Reference the iparam values in `config/requests.json`
```json
{
  "sampleTemplate": {
    "schema": {
    "protocol": "https",
    "method": "GET",
    "host": "<%=iparam.domainName %>",
    "path": "/api/v2/tickets",
    "headers": {
        "Authorization": "Bearer <%=iparam.apiKey %>",
        "Content-Type": "application/json"
      }
    }
  }
}
```