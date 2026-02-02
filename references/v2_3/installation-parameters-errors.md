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
2. If the `type` of iparam is `radio`, `multiselect` or `dorpdown` ensure `options` keys are defined.
3. If iparams have `domain` and `api_key` type defined, ensure `type_attributes` are also defined for those iparam keys.

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
In `config/iparams.json`, the possible values supported in `type` are - `text`, `paragraph`, `dropdown`, `email`, `number`, `phone_number`, `date`, `url`, `radio`, `checkbox`, `multiselect`, `domain`, `api_key`.

---


>title: Fixing missing `type_attributes` error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing missing `type_attributes` error

## FDK validation fails with the error
```
`type_attributes` must be specified for type <type> in `config/iparams.json`.
```

## Steps to fix the error
If iparams have `domain` and `api_key` type defined, ensure `type_attributes` are also defined for those iparam keys in `config/iparams.json`.

---

>title: Fixing missing `type_attributes` error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing missing `type_attributes` error

## FDK validation fails with the error
```
Mandatory key(s) `product` missing in `type_attributes` for <key> in `config/iparams.json`.
```

## Steps to fix the error
In `config/iparams.json`, have `domain` and `api_key` type defined, ensure `type_attributes` also has a valid `product` associated with it. Valid options are - `freshdesk`, `freshservice`, `freshsales`, `freshworks_crm`.
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

>title: Fixing missing `type_attributes` error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing missing `type_attributes` error

## FDK validation fails with the error
```
Invalid product name format '<product name>'. Use lowercase without space
```

## Steps to fix the error
In `config/iparams.json`, have `domain` and `api_key` type defined, ensure `type_attributes` also has a valid `product` associated with it. Valid options are - `freshdesk`, `freshservice`, `freshsales`, `freshworks_crm`.
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

>title: Fixing `type_attributes.product` name error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json, manifest.json
>content:

# Fixing `type_attributes.product` name error

## FDK validation fails with the error
```
In iparams.json, type_attributes.product is "<product name>". It must be the same as the product name mentioned in manifest.json. Please modify it.
```

## Steps to fix the error
In `config/iparams.json`, ensure the product mentioned in `type_attributes.product` is same as the product mentioned in `manifest.json`.

---

