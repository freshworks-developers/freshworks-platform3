>title: Detailed instructions for Installing the Freshworks CLI
>tags: cli, fdk, instructions
>context: 
>content:

# Detailed instructions for Installing the Freshworks CLI
For detailed instructions to install the Freshworks CLI, kindly follow the steps available [here](https://community.freshworks.dev/t/234)

---
>title: Install the Freshworks CLI
>tags: cli, fdk, commands
>context:
>content:

# Install the Freshworks CLI

## Steps:

1. Ensure to use npm for CLI installation. Also, ensure to use the npm version that is shipped with Node. For information on supported Node versions, [see FDK and compatible Node.js](https://freshworks.dev/docs/app-sdk/v2.3/freshdesk/migration-guide/#fdk-and-compatible-node.js-versions) versions.
2. If you already have Freshworks CLI installed, then uninstall the previous CLI versions:
   ```sh
   npm uninstall fdk -g
   ```
3. To install the latest CLI version, run the following command:
   ```sh
   npm install https://cdn.freshdev.io/fdk/latest.tgz -g
   ```
4. To install the CLI version that immediately precedes the current FDK version, run the following command:
   ```sh
   npm install https://dl.freshdev.io/cli/fdk.tgz -g
   ```
5. Verify the CLI installation using `fdk version`

---
>title: what are Freshworks CLI commands
>tags: cli, fdk, commands
>context:
>content:

# what are Freshworks CLI commands

The Freshworks CLI enables you to build, test and publish apps on Freshworks Developer Platform. To view the list of CLI commands, after you install the CLI, from the command prompt run `fdk --help`. It will give the list of available commands.

## FDK Command Syntax
The FDK commands follow a syntax as depicted below:

`fdk [global-flag] [command] [command-flags] [arguments]`

## General Commands
The general commands are:
- `create`
- `generate`
- `run`
- `validate`
- `pack`
- `version`
- `search`
- `test`
- `help`

Options:
- `-v`
- `--version`
- `-u`
- `--skip-update-check`
- `-d`
- `--app-dir [directory]`
- `-h`
- `--help`

---
>title: the command help section for fdk
>tags: cli, fdk, commands
>context:
>content:

# the command help section for fdk

To view the information about a CLI command, run the following command:
```sh
fdk COMMAND (-h | --help)
```

For example, to get help on FDK Create command use:
```sh
fdk create --help
```

### Example:
```sh
$ fdk create
$ fdk create --product freshservice --template your_first_app
$ fdk create --app-dir /Users/user/myfirstapp
```

---
>title: how to get detailed logs or skip version updates
>tags: cli, fdk, commands, logs
>context:
>content:

# how to get detailed logs or skip version updates

When you run the Freshworks CLI commands, if no version update check has run in the last 24 hours, the FDK:
1. Checks whether a new FDK version is available.
2. If a new version is available and if you are not on the latest version, displays an update prompt that enables you to move to the latest version.
3. Keeps track of the update check time.

To obtain detailed logs, run the following command
```sh
# debug logs
NODE_DEBUG=fdk fdk COMMAND

# skip the update prompt
fdk < -u or --skip-update-check> <COMMAND>
# Example 1
fdk --skip-update-check create
# Example 2
fdk -u run
```

---
>title: The Create Command
>tags: cli, fdk, commands
>context:
>content:

# The Create Command

The command creates an app in the specified directory, based on the default app template. If no directory is specified, the app is created in the current directory. Ensure that the directory in which the app is to be created is empty. You can learn more details in the [documentation](https://freshworks.dev/docs/app-sdk/v2.3/freshdesk/app-development-process/#create-an-app).

### Example:
```sh
fdk create [--app-dir DIR] [--product PRODUCT] [--template TEMPLATE]
# Example 1 - create app for freshdesk with your_first_app app template
fdk create --product freshdesk --template your_first_app
# Example 2 - create app in the current directory with app directory name being myfirstapp
fdk create --app-dir ./myfirstapp
# Example 3 - create app for with name myfirstapp under location /Users/user/myfirstapp
fdk create --app-dir /Users/user/myfirstapp
```

---
>title: The FDK CLI Generate Command and its attributes
>tags: cli, fdk, commands
>context:
>content:

# The FDK CLI Generate Command and its attributes

This command is used to generate app files with a specific template for an existing app that was created by using the `fdk create` command.

## List of Files
The list of following files is displayed. Select a file and enter the appropriate parameter values. The corresponding file is generated based on the values.
- `oauth_config.json`: Contains the configuration parameters, such as client_id, client_secret, authorize_url, token_url, and account/agent scope, required for OAuth-based authentication.
- `iparams.json`: Contains the installation parameters, such as iparam name and type of iparam, whose values are set when the app is installed.
- `iparams.html`: Contains the html code to build the Custom Installation page. You can enter the page title, select the product css to link, and choose to add jquery, fresh_client.js, and iparam.js and iparam.css.
- `server.js`: Contains the event registration and callback methods. You need to enter the names of the events and callback functions.
- `manifest.json`: Contains app information such as version, product, location, and so on. You need to select the product and app location.

## Generate Command
After you create an app, run the following command to generate app files such as `iparams.json` etc with specific template
```sh
fdk generate
```

---
>title: The `fdk run` command to run and test an app
>tags: cli, fdk, commands, run
>context: manifest.json
>content:

# The `fdk run` command to run and test an app

The `fdk run` command is used to start the local server in order to test your app. If you are running a serverless app that contains dependencies, the packages defined in `manifest.json` are automatically installed.
Once you exit testing, the CLI prints a summary of how extensive your testing was. Each component in the coverage summary should be at least 80% for apps to be submitted in Freshworks Marketplace. See [Code coverage](https://freshworks.dev/docs/app-sdk/v2.3/freshdesk/app-development-guidelines/code-guidelines/#code-coverage) for more information.

### Example:
```sh
fdk run [--app-dir DIR]
# Example 1
fdk run
# Output for Example 1
Starting local testing server at http://*:10001/
Append "dev=true" to your Freshdesk support URL to start testing
e.g. https://domain.freshdesk.com/helpdesk/tickets/1?dev=true
Quit the server with Control-C.

# Example 2
fdk run --app-dir /Users/user/myfirstapp
```

Open the respective page of the Freshworks products to open the app. Add `?dev=true` query parameter to the URL to view the locally running and in-development apps.

---
>title: Run fdk in local with configured request time out
>tags: cli, fdk, request, run
>context: requests.json
>content:

# Run fdk in local with configured request time out

Specify the time in milliseconds after which a [Request Method](https://freshworks.dev/docs/app-sdk/v2.3/freshdesk/advanced-interfaces/request-method/#test-apps-that-use-request-method) call times out during local testing.
- Minimum Value: 15000
- Maximum Value: 30000
If you specify a `REQUEST_TIMEOUT` value that breaches the min or max limits, the timeout is defaulted to the min or max value and a warning message is displayed.

### Example:
```sh
[REQUEST_TIMEOUT=<timeout in milliseconds>] fdk run

# Example 1
REQUEST_TIMEOUT=20000 fdk run
```

---
>title: The fdk validate command
>tags: cli, fdk, commands
>context:
>content:

# The fdk validate command

This command validates whether the app code is error free. If there are errors in the code, corresponding violations are displayed after the command is run.

### Example:
```sh
fdk validate [--app-dir DIR] [--fix]

# example 1 - When validating an app, the option fixes all lint errors for which auto-fix support is available.
fdk validate -fix
```

---
>title: Conditions of validate command
>tags: cli, fdk-validate, commands, validate
>context:
>content:

# Conditions of validate command

1. The `fdk validate` command when used with Node 14 and above, it displays a warning message and a prompt asking whether you want to continue. If you continue with the validation, the FDK:
   - It Deletes the existing `coverage` folder containing the results of the `fdk run` command used to set up the local server and test an app.
   - It Deletes the `node_modules` folder containing the npm dependencies specified in manifest.json
   - Includes or updates the engines attribute in manifest.json. The updated engines.node and engines.fdk values reflect the Node.js and FDK versions on which the app is validated.
2. After a successful validation, ensure to retest the app by using the `fdk run` command. The retesting generates the coverage folder and the coverage summary required to pack your app for submission.
3. If there is a minor Node.js version mismatch between the version used to build the app and the current Node.js runtime version, the FDK automatically updates `manifest.json > engines.node` to reflect the Node.js version on which the app is validated.

---
>title: how to pack or bundle your application
>tags: cli, fdk, commands, pack
>context:
>content:

# how to pack or bundle your application

The `fdk pack` command creates an app package file that can be submitted for the app review process.

### Example:
```sh
fdk pack --app-dir [DIR]

# example 1 - generate app bundle for app named myFirstApp located under user directory using fdk pack command
fdk pack -d /user/myFirstApp
```

---
>title: Usage of version check, search, test
>tags: cli, fdk, commands, check, search, test
>context:
>content:

# Usage of version check, search, test

## Version Command
- `fdk version` command prints the installed and latest CLI versions.

## Search Command
- The `fdk search` command prints the installed and latest CLI versions.

## Test Command
- The FDK includes a testing framework (currently in beta) to help test serverless apps. This enables you to write and maintain unit tests as part of app files. The test command runs these unit tests. Use `fdk test` to test your app test cases from CLI

### Example:
```sh
fdk search [query-string]

# Example 1
fdk search "Serverless app"

# test (beta)
fdk test
```
---