>title: Fixing invalid type `domain`/`api_key` error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing invalid type error

## FDK validation fails with the error
```
<type> `domain`/`api_key` is not valid from platform version 3.0. Please use type 'text' in <key> field`
```

## Steps to fix the error
From platform version 3.0 and above, `domain` and `api_key` types for iparam keys are depcreated, instead use `text` to accept the values in `config/iparams.json`.

---

>title: Fixing unsupported key `data-bind` error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing unsupported key `data-bind` error

## FDK validation fails with the error
```
Found unsupported key 'data-bind' in <key>. Data-bind is not supported from platform version 3.0
```

## Steps to fix the error
Form platform version 3.0 and above, `data-bind` key is deprecated, remove the attribute for the key from `config/iparams.json`. 

---

>title: Fixing unsupported key `type_attributes` error
>tags: iparams, installation-parameters, installation-page
>context: iparams.json
>content:

# Fixing unsupported key `type_attributes` error

## FDK validation fails with the error
```
Found unsupported key 'type_attributes' in <key>. type_attributes is not supported from platform version 3.0
```

## Steps to fix the error
Form platform version 3.0 and above, `type_attributes` key is deprecated, remove the attribute for the key from `config/iparams.json`. 
