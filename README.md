# Freshworks Platform 3.0 Development Skill

An AI-powered development skill for building Freshworks Platform 3.0 marketplace applications with strict enforcement of best practices and modern patterns.

## Features

- ✅ **Platform 3.0 Enforcement** - Automatically rejects legacy 2.x patterns
- ✅ **Complete App Templates** - Frontend, Serverless, Hybrid, and OAuth apps
- ✅ **Crayons UI Components** - 59+ documented UI components
- ✅ **Smart App Type Selection** - Automatically determines when frontend is needed
- ✅ **Request Template Generation** - Proper external API integration patterns
- ✅ **OAuth Integration Support** - Complete OAuth flow implementation
- ✅ **Event Handler Patterns** - Product events, scheduled events, app lifecycle

## Installation

### Option 1: Install from GitHub (Recommended)

```bash
# Using Cursor AI/Windsurf skills manager
npx skills add https://github.com/freshworks-developers/freshworks-platform3 --skill freshworks-app-dev-skill

# Restart your IDE
```

### Option 2: Manual Installation

```bash
# Clone the repository
git clone https://github.com/freshworks-developers/freshworks-platform3.git

# Copy skill files to your project
cd your-freshworks-app-project
cp -r /path/to/freshworks-platform3/skills/freshworks_app_dev_skill/.cursor .
cp -r /path/to/freshworks-platform3/skills/freshworks_app_dev_skill/.agents .

# Restart your IDE
```

## Usage

Once installed, the skill automatically activates when working with Freshworks app files. Simply describe what you want to build:

### Example Prompts

```
"Create a Freshdesk ticket sidebar app"
"Build a Freshservice app that syncs assets with ServiceNow"
"Create a serverless app that sends Slack notifications on ticket creation"
"Build an OAuth app to integrate with GitHub issues"
```

### App Types

The skill automatically selects the right template based on your requirements:

| Type | When to Use | Example |
|------|-------------|---------|
| **Frontend** | UI-only apps without backend logic | Display ticket information, show dashboards |
| **Serverless** | Background automation, no UI needed | Auto-respond to tickets, scheduled sync |
| **Hybrid** | UI + external API integration | Zapier sync with status dashboard, GitHub issue linking |
| **OAuth** | Third-party service integration | Connect to GitHub, Jira, Salesforce |

### Smart Frontend Detection

The skill automatically includes frontend (Hybrid) when you need to:
- ✅ View sync status or logs
- ✅ Manually trigger actions
- ✅ Configure settings beyond installation parameters
- ✅ Display dashboards or reports
- ✅ Interact with external services

It uses serverless-only when:
- ❌ Pure automation with zero user interaction
- ❌ Background tasks that never need monitoring

### Supported Products

| Product | Modules |
|---------|---------|
| Freshdesk | `support_ticket`, `support_contact`, `support_company` |
| Freshservice | `service_ticket`, `service_asset`, `service_change` |
| Freshsales | `deal`, `contact`, `account`, `lead` |
| Freshcaller | `call`, `caller_agent`, `notification` |
| Freshchat | `chat_conversation`, `chat_user` |

## Key Patterns

### Platform 3.0 Manifest

```json
{
  "platform-version": "3.0",
  "modules": {
    "common": { "requests": {} },
    "support_ticket": {
      "location": {
        "ticket_sidebar": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      }
    }
  },
  "engines": { "node": "18.20.8", "fdk": "9.7.4" }
}
```

### Request Templates

```javascript
// ✅ CORRECT (Platform 3.0)
await $request.invokeTemplate('myApi', { body: JSON.stringify(data) });

// ❌ WRONG (Deprecated)
await $request.post('https://api.example.com', options);
```

### Crayons UI

```html
<!-- ✅ CORRECT -->
<fw-button color="primary">Submit</fw-button>

<!-- ❌ WRONG -->
<button>Submit</button>
```

## Troubleshooting

| Error | Solution |
|-------|----------|
| "Invalid location(s)" | Move location to product module, not `common` |
| "post is no longer supported" | Use `$request.invokeTemplate()` |
| "OAuth config must have 'integrations'" | Add `{ "integrations": { ... } }` wrapper |
| "Missing icon.svg" | Create `app/styles/images/icon.svg` |

## What Gets Enforced

The skill automatically enforces Platform 3.0 best practices:

### ✅ Always Required
- `"platform-version": "3.0"` in manifest
- `modules` structure (not `product`)
- `engines` block with Node.js and FDK versions
- Request templates for external APIs (no `whitelisted-domains`)
- Crayons components for UI (no plain HTML buttons/inputs)
- Proper file structure (`app/scripts/`, `app/styles/images/`)
- `icon.svg` in correct location

### ❌ Always Rejected
- Platform 2.x patterns (`"platform-version": "2.3"`)
- `whitelisted-domains` (deprecated)
- `$request.post()`, `.get()`, `.put()`, `.delete()` (use `$request.invokeTemplate()`)
- Plain HTML form elements (use Crayons)
- OAuth without `integrations` wrapper
- Locations in wrong modules

## Supported Products & Modules

| Product | Modules |
|---------|---------|
| **Freshdesk** | `support_ticket`, `support_contact`, `support_company`, `support_email` |
| **Freshservice** | `service_ticket`, `service_asset`, `service_change`, `service_requester` |
| **Freshsales** | `deal`, `contact`, `account`, `lead`, `appointment` |
| **Freshcaller** | `call`, `caller_agent`, `notification` |
| **Freshchat** | `chat_conversation`, `chat_user` |

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Invalid location(s) mentioned in modules" | Move location to product module (e.g., `support_ticket`), not `common` |
| "post is no longer supported in Request API" | Replace `$request.post()` with `$request.invokeTemplate()` |
| "OAuth config must have required property 'integrations'" | Wrap OAuth config in `{ "integrations": { "provider": { ... } } }` |
| "icon.svg not found" | Create file at `app/styles/images/icon.svg` |
| FDK validation fails | Run `fdk validate` to see specific errors |

## Resources

- [Freshworks Developer Documentation](https://developers.freshworks.com)
- [Platform 3.0 Migration Guide](https://developers.freshworks.com/docs/platform/migration/)
- [Crayons Component Library](https://crayons.freshworks.com)
- [Freshworks Developer Community](https://community.developers.freshworks.com)

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Follow Platform 3.0 standards
4. Test with `fdk validate`
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) for details

## Support

- **Issues**: [GitHub Issues](https://github.com/freshworks-developers/freshworks-platform3/issues)
- **Community**: [Freshworks Developer Community](https://community.developers.freshworks.com)
- **Documentation**: [Freshworks Developer Docs](https://developers.freshworks.com)
