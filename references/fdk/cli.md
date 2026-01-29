>title: What are Freshworks CLI commands in Platform 3.0
>tags: cli, fdk, commands
>content:

## Overview
The Freshworks CLI enables you to build, test and publish apps on Freshworks Developer Platform. To view the list of CLI commands, after you install the CLI, from the command prompt run `fdk --help`. It will give the list of available commands.

## Syntax
The FDK commands follow a syntax as depicted below

`fdk [global-flag] [command] [command-flags] [arguments]`

## General Commands
The general commands are `create`, `generate`, `run`, `validate`, `pack`, `version`, `search`, `test`, `help` with options such as `-v`, `--version`, `-u`, `--skip-update-check`, `-d`, `--app-dir [directory]`, `-h` or `--help`

---
>title: The fdk run command to run and test an app in Platform 3.0
>tags: cli, fdk, run, local-development
>content:

## Overview
The `fdk run` command is used to start the local server in order to test your app. If you are running a serverless app that contains dependencies, the packages defined in `manifest.json` are automatically installed.
Once you exit testing, the CLI prints a summary of how extensive your testing was. Each component in the coverage summary should be at least 80% for apps to be submitted in Freshworks Marketplace.

### Command
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

## In Development Mode
Open the respective page of the Freshworks products to open the app. Add `?dev=true` query parameter to the URL to view the locally running and in-development apps.

---
>title: The fdk validate command in Platform 3.0
>tags: cli, fdk, validate
>content:

## Overview
This command validates whether the app code is error free. If there are errors in the code, corresponding violations are displayed after the command is run.

### Command
```sh
fdk validate [--app-dir DIR] [--fix]

# example 1 - When validating an app, the option fixes all lint errors for which auto-fix support is available.
fdk validate -fix
```

---
>title: Usage of version check, search, test commands in Platform 3.0
>tags: cli, fdk, version, search, test
>content:

## Version Command
- `fdk version` command prints the installed and latest CLI versions.

## Search Command
- The `fdk search` command prints the installed and latest CLI versions.

## Test Command
- The FDK includes a testing framework (currently in beta) to help test serverless apps. This enables you to write and maintain unit tests as part of app files. The test command runs these unit tests. Use `fdk test` to test your app test cases from CLI

### Commands
```sh
fdk search [query-string]

# Example 1
fdk search "Serverless app"

# test (beta)
fdk test
```

---
>title: The FDK CLI Generate Command and its attributes in Platform 3.0
>tags: cli, fdk, generate
>content:

## Overview
This command is used to generate app files with a specific template for an existing app that was created by using the `fdk create` command.

The list of following files is displayed. Select a file and enter the appropriate parameter values. The corresponding file is generated based on the values.
- `oauth_config.json`: Contains the configuration parameters, such as client_id, client_secret, authorize_url, token_url, and account/agent scope, required for OAuth-based authentication.
- `iparams.json`: Contains the installation parameters, such as iparam name and type of iparam, whose values are set when the app is installed.
- `iparams.html`: Contains the html code to build the Custom Installation page. You can enter the page title, select the product css to link, and choose to add jquery, fresh_client.js, and iparam.js and iparam.css.
- `server.js`: Contains the event registration and callback methods. You need to enter the names of the events and callback functions.
- `manifest.json`: Selecting this option enables you to reconfigure the default App Manifest that is created as part of the app creation using `common-starter-template` or `serverless-starter-template`. You can select modules, select and add corresponding placeholders from the list of placeholders displayed for the selected module, select and add corresponding product events from the list of serverless events displayed for the selected module.

## Command
After you create an app, run the following command to generate app files such as `iparams.json` etc with specific template
```sh
fdk generate
```

---
>title: The command help section for fdk
>tags: cli, fdk, help
>content:

## To view the information about a CLI command

Run the following command `fdk COMMAND (-h | --help)`

## Example
To get help on FDK Create command use `fdk create --help`

### Example Commands
```sh
$ fdk create
$ fdk create --template common-starter-template
$ fdk create --app-dir ./myfirstapp --template serverless-starter-template
```

---
