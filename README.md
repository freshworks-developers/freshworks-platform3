# Freshworks Platform 3.0 Development Skills

Expert-level development skills for building, debugging, and reviewing Freshworks Platform 3.0 marketplace applications.

## Available Skills

### 1. **Freshworks App Development Skill** (Main)
Complete Platform 3.0 app development with templates, validation, and enforcement.

### 2. **AI Actions Skill** (Specialized)
Expert skill for creating AI Actions with proper schemas, SMI functions, and request templates.

## Installation

### Install Main Skill (Freshworks App Development)

```bash
npx skills add https://github.com/freshworks-developers/freshworks-platform3 --skill freshworks-app-dev-skill
```

Or install locally:

```bash
npx skills add /path/to/freshworks-platform3/skills/freshworks-app-dev-skill
```

### Install AI Actions Skill

```bash
npx skills add https://github.com/freshworks-developers/freshworks-platform3#ai-actions --skill ai-actions-skill
```

Or install locally:

```bash
npx skills add /path/to/freshworks-platform3/skills/ai-actions-skill
```

## What These Skills Provide

### Freshworks App Development Skill
- **Platform 3.0 Enforcement** - Zero tolerance for Platform 2.x patterns
- **App Generation** - Frontend, Serverless, Hybrid, and OAuth templates
- **Validation** - Automatic `fdk validate` with auto-fix for common errors
- **140+ Reference Files** - Progressive disclosure of Platform 3.0 documentation
- **Cursor Rules** - Auto-installed enforcement rules for your project

### AI Actions Skill
- **AI Actions Expertise** - Specialized for creating `actions.json` and SMI functions
- **Schema Validation** - Flat request schemas, nested response schemas
- **Request Templates** - Proper integration with external APIs
- **Best Practices** - Function naming, parameter validation, error handling
- **Test Data Generation** - Complete test payloads for all actions
- **API Documentation Integration** - Fetches and uses real API docs

## Example Usage

### Example 1: Standard App Development

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

### Example 2: AI Actions App

**Request:**
```
Create a BambooHR AI Actions app with 20 actions for employee management
```

**The AI Actions skill will:**
1. ✅ Generate `actions.json` with flat request schemas
2. ✅ Create 20 SMI functions in `server/server.js`
3. ✅ Add 20 request templates for BambooHR API
4. ✅ Generate test data for all actions
5. ✅ Fetch real BambooHR API documentation
6. ✅ Validate function names match exactly
7. ✅ Include proper authentication (Basic Auth)
8. ✅ Run `fdk validate` and ensure compliance

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

### Freshworks App Development Skill
- **Path:** `skills/freshworks-app-dev-skill/`
- **SKILL.md** - Complete skill documentation (985 lines)
- **references/** - 140+ technical reference files
- **.cursor/rules/** - Always-applied enforcement rules
- **assets/templates/** - App skeleton templates

### AI Actions Skill
- **Path:** `skills/ai-actions-skill/`
- **SKILL.md** - AI Actions expertise (719 lines)
- **references/** - AI Actions documentation and guides
- **ai-actions-skeleton/** - Generic AI Actions template
- **Quick Reference** - One-page AI Actions guide

## Skill Paths

```
freshworks-platform3/
├── skills/
│   ├── freshworks-app-dev-skill/    # Main app development
│   │   ├── SKILL.md
│   │   ├── references/
│   │   ├── .cursor/rules/
│   │   └── assets/templates/
│   └── ai-actions-skill/             # AI Actions specialized
│       ├── SKILL.md
│       ├── references/
│       └── ai-actions-skeleton/
└── README.md
```

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
