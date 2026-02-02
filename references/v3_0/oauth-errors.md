>title: Fixing OAuth configurations with invalid additional properties
>tags: request-method, request-template, oauth, oauth_configs.json
>context: oauth_configs.json
>content:

# Fixing OAuth configurations with invalid additional properties

## Error message during fdk run:
```
✖ OAuth config must NOT have additional properties in configs/oauth.json
```
Here the `configs/oauth.json` refers to the `configs/oauth_config.json`


## Steps to resolve the error message:
1. Ensure the OAuth configurations are defined in `config/oauth_config.json`. 
2. Remove any configuration property which is not supported.

>code:
### Ensure the OAuth configurations are defined in `config/oauth_config.json`.
When defining the multi OAuth resources, ensure the configurations are defined in `config/oauth_config.json` which has `oauth_configuration_name` key defined in `integrations`.

Here is a sample OAuth configuration - 
```json
{
  "integrations": {
    "<oauth_configuration_name1>": {
      "display_name": "value",
      "client_id": "value",
      "client_secret": "value",
      "authorize_url": "url value",
      "token_url": "url value",
      "options": {
        "scope": "read"
      },
      "token_type": "account"
    },
    "<oauth_configuration_name2>": {
      "display_name": "value",
      "client_id": "value",
      "client_secret": "value",
      "authorize_url": "url value",
      "token_url": "url value",
      "options": {
        "scope": "read"
      },
      "token_type": "agent"
    }
  }
}
```

### Remove any configuration property which is not supported
In `config/oauth_config.json`, each `oauth_configuration_name` object requires the following child attributes defined - `display_name`, `client_id`, `client_secret`, `authorize_url`, `token_url` and `token_type`. And when passing additional parameters, `options` object with a key-value pair is to be used. And any parameter other than these are invalid and should be removed.