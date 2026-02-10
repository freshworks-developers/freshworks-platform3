# Freshworks Platform 3.0 Development Skill

An AI-powered development skill for building Freshworks Platform 3.0 marketplace applications.

## Quick Start

```bash
# Install from GitHub
npx skills add https://github.com/freshworks-developers/freshworks-platform3 --skill freshworks-app-dev-skill

# Or install from local path
cd your-freshworks-app
npx skills add /path/to/freshworks-platform3/skills/freshworks_app_dev_skill

# Restart Cursor IDE
```

## What This Skill Does

| Feature | Description |
|---------|-------------|
| **Strict Platform 3.0 Enforcement** | Auto-rejects legacy 2.x patterns |
| **Complete App Templates** | Frontend, Serverless, Hybrid, OAuth |
| **Crayons UI Components** | 59 documented components |

## Installation

### From GitHub (Recommended)

```bash
npx skills add https://github.com/freshworks-developers/freshworks-platform3 --skill freshworks-app-dev-skill
```

### From Local Path

```bash
# Clone repo
git clone https://github.com/freshworks-developers/freshworks-platform3.git

# Install to your project
cd your-freshworks-app
npx skills add /path/to/freshworks-platform3/skills/freshworks_app_dev_skill

# Restart Cursor
```

### Manual Installation

```bash
cp -r /path/to/freshworks-platform3/skills/freshworks_app_dev_skill/.cursor /your-project/
```

## Usage

### Creating Apps

Ask the skill:
- "Create a Freshdesk ticket sidebar app"
- "Create a Freshservice OAuth app with Jira integration"
- "Create a serverless app with scheduled events"

### App Types

| Type | Use Case |
|------|----------|
| **Frontend** | UI-only sidebar apps |
| **Serverless** | Automation, webhooks, scheduled tasks |
| **Hybrid** | UI + external API calls |
| **OAuth** | Third-party integrations |

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

## Contributing

1. Fork the repository
2. Create feature branch
3. Follow Platform 3.0 standards
4. Test with `fdk validate`
5. Submit pull request

## License

MIT

## Links

- [Freshworks Developer Docs](https://developers.freshworks.com)
- [Freshworks Community](https://community.freshworks.com)
- [GitHub Issues](https://github.com/freshworks-developers/freshworks-platform3/issues)
