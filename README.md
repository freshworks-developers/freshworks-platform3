# Freshworks Platform 3.0 Development Skill

Expert-level development skill for building, debugging, and reviewing Freshworks Platform 3.0 marketplace applications.

## Installation

Install the skill using npx:

```bash
npx skills add https://github.com/freshworks-developers/freshworks-platform3
```git switch 

Or install locally:

```bash
npx skills add /path/to/freshworks-platform3/skills/freshworks-app-dev-skill
```

## What This Skill Provides

- **Platform 3.0 Enforcement** - Zero tolerance for Platform 2.x patterns
- **App Generation** - Frontend, Serverless, Hybrid, and OAuth templates
- **Validation** - Automatic `fdk validate` with auto-fix for common errors
- **140+ Reference Files** - Progressive disclosure of Platform 3.0 documentation
- **Cursor Rules** - Auto-installed enforcement rules for your project

## Example Usage

**Request:**
```
Create a Freshdesk ticket sidebar app that fetches GitHub issues using OAuth
```

**The skill will:**
1. ✅ Generate Platform 3.0 manifest with correct `modules` structure
2. ✅ Create OAuth config with `integrations` wrapper
3. ✅ Add request templates for GitHub API
4. ✅ Generate Crayons UI components (not plain HTML)
5. ✅ Include `app/styles/images/icon.svg` (required)
6. ✅ Use `$request.invokeTemplate()` (not deprecated `.post()`)
7. ✅ Run `fdk validate` and auto-fix errors
8. ✅ Provide complete, production-ready app

## Core Enforcement

The skill enforces Platform 3.0 patterns and rejects Platform 2.x:

| Platform 2.x (Rejected) | Platform 3.0 (Required) |
|------------------------|------------------------|
| `"platform-version": "2.3"` | `"platform-version": "3.0"` |
| `"product": { "freshdesk": {} }` | `"modules": { "common": {}, "support_ticket": {} }` |
| `"whitelisted-domains"` | Request templates in `config/requests.json` |
| `$request.post()` | `$request.invokeTemplate()` |
| `<button>` | `<fw-button>` (Crayons) |
| OAuth without wrapper | `{ "integrations": { ... } }` |

## Documentation

- **SKILL.md** - Complete skill documentation (984 lines)
- **references/** - 140+ technical reference files
- **.cursor/rules/** - Always-applied enforcement rules
- **.cursor/agents/** - Learning documents from real issues

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
