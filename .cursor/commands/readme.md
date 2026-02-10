# /readme - Generate README for Freshworks App

## Usage

```
/readme
```

When you run `/readme` in a Freshworks app directory, this command will:
1. Analyze your app structure (manifest.json, server.js, app.js, etc.)
2. Detect app type (Frontend, Serverless, Hybrid, OAuth)
3. Detect features (events, request templates, iparams, OAuth, etc.)
4. Generate a comprehensive README.md with setup instructions

---

## What Gets Generated

### 1. App Overview
- App name and description
- App type (Frontend/Serverless/Hybrid/OAuth)
- Target product(s) and modules
- Placement locations

### 2. Features Section
- Installation parameters (iparams)
- External API integrations
- OAuth integrations
- Event handlers (product events, scheduled events, etc.)
- Frontend UI capabilities
- Backend SMI functions

### 3. Prerequisites
- Node.js version (from engines)
- FDK version (from engines)
- Required accounts (product account, OAuth app credentials, API keys)

### 4. Installation Instructions
- Step-by-step FDK installation
- How to configure iparams
- How to set up OAuth (if applicable)
- How to configure request templates

### 5. Configuration Details

#### Installation Parameters
Lists all iparams with:
- Parameter name
- Description
- Type (text, password, dropdown, etc.)
- Required/Optional
- Where to obtain values

#### Request Templates
Lists all external APIs with:
- Template name
- HTTP method
- Host/endpoint
- Required headers
- Authentication method

#### OAuth Configuration
If OAuth is used:
- OAuth provider name
- How to create OAuth app
- Required scopes
- Callback URL setup

### 6. Local Development
```bash
# Install dependencies
npm install -g @freshworks/fdk

# Navigate to app directory
cd your-app-name

# Run app locally
fdk run

# Validate app
fdk validate
```

### 7. Testing Instructions
- How to test in local development
- Which product to select
- Test account requirements
- How to test each feature

### 8. File Structure
Complete directory tree showing:
- All files and folders
- Purpose of each file
- Key code locations

### 9. Event Handlers (if applicable)
Lists all events with:
- Event name
- Trigger condition
- Handler function name
- What it does

### 10. Troubleshooting
Common issues and solutions:
- FDK validation errors
- OAuth setup issues
- Request template errors
- Event handler debugging

### 11. Support & Resources
- FDK documentation links
- Platform 3.0 documentation
- Community forum
- Support contact

---

## Example Generated README

### For a Hybrid App with OAuth

```markdown
# GitHub Issue Sync App

Synchronize Freshdesk tickets with GitHub issues using OAuth authentication.

## App Type
**Hybrid App** (Frontend + Backend)

## Features
- ✅ Full page app with UI for managing sync
- ✅ OAuth integration with GitHub
- ✅ Sync tickets to GitHub issues
- ✅ View linked issues in Freshdesk
- ✅ Manual and automatic sync options
- ✅ Product events (onTicketCreate, onTicketUpdate)

## Prerequisites
- Node.js 18.20.8 or higher
- FDK 9.7.4 or higher
- Freshdesk account
- GitHub account with OAuth app

## Installation

### 1. Install FDK
\`\`\`bash
npm install -g @freshworks/fdk
\`\`\`

### 2. Configure GitHub OAuth App

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - Application name: `Freshdesk GitHub Sync`
   - Homepage URL: `https://your-domain.freshdesk.com`
   - Authorization callback URL: `https://oauth.freshworks.com/authorize/callback`
4. Copy Client ID and Client Secret

### 3. Configure Installation Parameters

When installing the app, provide:

| Parameter | Description | Required |
|-----------|-------------|----------|
| `github_client_id` | GitHub OAuth App Client ID | Yes |
| `github_client_secret` | GitHub OAuth App Client Secret | Yes |
| `github_repo` | Repository name (owner/repo) | Yes |

### 4. Run Locally

\`\`\`bash
cd github-issue-sync
fdk run
\`\`\`

Select:
- Product: Freshdesk
- Test account: Your Freshdesk domain

### 5. Authorize GitHub

1. Open the app in Freshdesk
2. Click "Connect to GitHub"
3. Authorize the OAuth app
4. Start syncing!

## File Structure

\`\`\`
github-issue-sync/
├── app/
│   ├── index.html              # Main UI
│   ├── scripts/
│   │   └── app.js              # Frontend logic
│   └── styles/
│       ├── style.css           # Styling
│       └── images/
│           └── icon.svg        # App icon
├── server/
│   └── server.js               # Backend SMI functions
├── config/
│   ├── iparams.json            # Installation parameters
│   ├── requests.json           # GitHub API templates
│   └── oauth_config.json       # OAuth configuration
├── manifest.json               # App manifest
└── README.md                   # This file
\`\`\`

## Event Handlers

### Product Events

| Event | Trigger | Handler | Action |
|-------|---------|---------|--------|
| `onTicketCreate` | New ticket created | `onTicketCreateHandler` | Creates GitHub issue |
| `onTicketUpdate` | Ticket updated | `onTicketUpdateHandler` | Updates linked issue |

### App Setup Events

| Event | Trigger | Handler | Action |
|-------|---------|---------|--------|
| `onAppInstall` | App installed | `onAppInstallHandler` | Initializes sync settings |

## API Integrations

### GitHub API

**Request Template:** `githubCreateIssue`
- **Method:** POST
- **Endpoint:** `https://api.github.com/repos/{owner}/{repo}/issues`
- **Authentication:** OAuth (bearer token)
- **Scope:** `repo`

## Troubleshooting

### OAuth Authorization Fails
- Verify Client ID and Client Secret are correct
- Check callback URL matches OAuth app settings
- Ensure `repo` scope is included

### FDK Validation Errors
\`\`\`bash
fdk validate
\`\`\`
Check for:
- Platform version is 3.0
- All files referenced in manifest exist
- OAuth config has `integrations` wrapper

### Issues Not Syncing
- Check server logs: Look for errors in terminal running `fdk run`
- Verify GitHub repo exists and you have access
- Check OAuth token is valid

## Support

- [FDK Documentation](https://developers.freshworks.com/docs/app-sdk/)
- [Platform 3.0 Guide](https://developers.freshworks.com/docs/platform/)
- [Community Forum](https://community.developers.freshworks.com/)

## License

MIT
\`\`\`

---

## Customization

The generated README can be customized by:
1. Editing the generated README.md
2. Adding app-specific details
3. Including screenshots
4. Adding usage examples
5. Documenting custom features

---

## README Templates by App Type

### Frontend Only App
- Focus on UI features
- Placement locations
- User interactions
- No backend/API sections

### Serverless App
- Focus on events and automation
- No UI/frontend sections
- Emphasis on event handlers
- Background processing details

### Hybrid App
- Both frontend and backend sections
- UI + API integration details
- Event handlers + SMI functions
- Complete feature set

### OAuth App
- Detailed OAuth setup instructions
- Provider-specific configuration
- Scope requirements
- Token management

---

## Auto-Detection Features

The `/readme` command automatically detects:

✅ **App Type**
- Frontend (has app/ folder, no server/)
- Serverless (has server/, no app/)
- Hybrid (has both app/ and server/)
- OAuth (has oauth_config.json)

✅ **Features**
- Installation parameters (from iparams.json)
- Request templates (from requests.json)
- OAuth providers (from oauth_config.json)
- Event handlers (from manifest.json)
- SMI functions (from manifest.json)
- Placements (from manifest.json)

✅ **Product & Modules**
- Target products (Freshdesk, Freshservice, etc.)
- Module types (support_ticket, service_asset, etc.)
- Location placements (ticket_sidebar, full_page_app, etc.)

✅ **Dependencies**
- Node.js version (from engines)
- FDK version (from engines)
- External APIs (from requests.json)

---

## Example Usage

```bash
# In your app directory
cd my-freshdesk-app

# Generate README
/readme

# Output: README.md created with complete documentation
```

The generated README will be:
- ✅ Comprehensive and detailed
- ✅ Specific to your app structure
- ✅ Ready to commit to repository
- ✅ Includes all setup instructions
- ✅ Platform 3.0 compliant
