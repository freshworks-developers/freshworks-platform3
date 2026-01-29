>title: Adding logs to SMI functions in Platform 3.0
>tags: logging, smi, serverless
>content:

1. The developer platform supports usage of `console.log`, `console.info` or `console.error` to add logs in `server.js`.
2. Whenever the `console` statements are executed, the logs would be available in your Freshworks instance or terminal if it's running the app locally.

---
>title: Viewing SMI logs locally during app development in Platform 3.0
>tags: logging, smi, local-development
>content:

1. To test the app and locally run, use `fdk run`.
2. From the front-end app, trigger actions that invoke SMI function. If the SMI function includes `console.log` or `console.info` or `console.error`, as and when the statement is executed the logs would appear in the terminal running the app.

---
>title: Adding logs to Job functions in Platform 3.0
>tags: logging, jobs, serverless
>content:

1. Use `console.log`, `console.info`, `console.error` in the Job function.
2. Logs are viewable via local `fdk run` or in the Freshworks app logs after installation.
3. You can also send the error for the job with `$job.updateStatusMessage("Processing data...")` method to the frontend.

---
>title: Viewing Job logs locally during app development in Platform 3.0
>tags: logging, jobs, local-development
>content:

Steps to view the logs in the local environment:

1. Run the app locally using `fdk run`.
2. Trigger the Job from `app.js`.
3. Any `console` statements will appear in your terminal running the local server.

---
