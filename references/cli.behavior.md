# CLI Behavior: fdk run

## fdk run Behavior

- Starts local development server
- Loads manifest.json and validates schema
- Mounts app.js in browser iframe
- Mounts server.js in Node.js runtime
- Watches file changes in project directory
- Triggers reload on file modification
- Serves frontend assets via HTTP server
- Proxies backend requests to Node.js runtime
- Displays backend logs in terminal
- Does not display frontend logs in terminal

## Hot Reload Limits

- Frontend reload: app.js changes trigger iframe refresh
- Backend reload: server.js changes trigger runtime restart
- Manifest changes: require manual server restart
- Config changes: require manual server restart
- Hot reload preserves no state between reloads
- Hot reload does not preserve in-flight requests
- Maximum reload frequency: 1 per second per file type
- Reload timeout: 5 seconds per reload operation

## Validation Order

1. manifest.json schema validation
2. manifest.json platform version check (must be 3.0.0+)
3. Required files existence check (app.js, server.js)
4. actions.json schema validation (if present)
5. iparams.json schema validation (if present)
6. JavaScript syntax validation (app.js, server.js)
7. Scope declarations validation
8. Module binding validation
9. Runtime initialization
10. Frontend iframe initialization
