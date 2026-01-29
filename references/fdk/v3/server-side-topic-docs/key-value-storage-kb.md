>title: Key-value storage, data storage in fdk
>tags: feature-key-value, key-value, KV-store, storage
>content:

The key-value (KV) storage in Freshworks developer platform enables data persistence with options like `add`, `update`, `retrieve`, and `delete`. It allows developers to efficiently manage the data storage & retrival workflow in the app logic.


1. Use `$db` in `server.js` to store data in the backend.
```js
$db.set( "contact:101", { "jiraIssueId": 15213 }).then (
  function(data) {
    // success operation
    // "data" value is { "Created" : true }
  },
  function(error) {
    // failure operation
    console.log(error)
});
```

[Notes for key value storage]
The system supports UTF-8 encoded data storage, allows updates to existing entries, enforces key constraints (non-blank, max 30 characters), and limits combined key and value size to 8 KB. Values must be non-blank JSON objects, with special values like empty strings or NaN being converted to null.

**Key-Value Storage Operations: Snippet EXAMPLES**

**Storing Data:**

- **With TTL:**

   Store data with an expiration time (TTL):

   ```js
   try {
     const db_resp = await $db.set("ticket:101", { "issueId": 15234 }, { "ttl": 60 });
   } catch (error) {
     // Handle error
   }
   ```

- **With Set-If:**

   Store data conditionally if the key exists:

   ```js
   try {
     const db_resp = await $db.set("ticket:101", { "issueId": 15234 }, { "setIf": "exist" });
   } catch (error) {
     // Handle error
   }
   ```

**Retrieving Data:**

Retrieve stored data using the key:

```js
try {
  const db_resp = await $db.get("ticket:101");
} catch (error) {
  // Handle error
}
```

**Updating Data:**

- **Incrementing Data:**

   Increment a numerical value within the data:

   ```js
   try {
     const db_resp = await $db.update("ticket:101", "increment", { "interactions": 1 });
   } catch (error) {
     // Handle error
   }
   ```

- **Appending Data:**

   Append data to an existing array:

   ```js
   try {
     const db_resp = await $db.update("agent_id:100", "append", { "associated_customers": ["customer4"] });
   } catch (error) {
     // Handle error
   }
   ```

- **Updating Data Attributes:**

   Update attributes within the data:

   ```js
   try {
     const db_resp = await $db.update("agent_id:100", "set", {
       "logs.ticket_id:11233.timelog": 500,
       "logs.ticket_id:11233.updated": true
     });
   } catch (error) {
     // Handle error
   }
   ```

**Deleting Data:**

- **Deleting Data:**

   Delete data using the provided key:

   ```js
   try {
     const db_resp = await $db.delete("ticket:101");
   } catch (error) {
     // Handle error
   }
   ```

- **Removing Attributes:**

   Remove attributes from the data:

   ```js
   try {
     const db_resp = await $db.update("agent_id:100", "remove", ["logs.ticket_id:11233", "logs.ticket_id:12312"]);
   } catch (error) {
     // Handle error
   }
   ```
[Some note to make while writing code for db operaions]
Below are the actions allowed for existing attribute value in the attributes object.
1. `Increment` - Adds a new value.
   1. Supports only number data type
   2. Can be used on top-level attributes, not nested attributes
2. `Append` - Appends a new value.
   1. Supports only array data type.
   2. Can be used on top-level attributes, not nested attributes.
3. `Set` - Adds one or more top-level or nested attributes and values
4. `Remove` - Removes one or more attributes

For updating, provide a JSON object in the "attributes" field with the desired path-value pairs. Use a non-empty string path for top-level or nested attributes in dot notation. For deletion, use an array in the "attributes" field with non-empty string paths, either at the top level or in dot notation, to remove specific attributes.

KV Storage - Time-to-live (TTL) and Set-If attributes:
- Time-to-Live (TTL):
1. Expiration Period: Denotes key expiration in seconds.
2. Supports Integer and Float: TTL works with integer and float data.
3. Unlimited Expiration: No TTL/negative TTL = indefinite key existence.
- Set-If Attribute:
1 .Accepted Values: "exist" or "not_exist".
2. {setIf: "exist"}: Store if key exists, error if not.
3. {setIf: "not_exist"}: Store if key doesn't exist, error if it does.
