# Freshworks Platform 3.0 Development Skills

Expert-level development skills for building, debugging, and reviewing Freshworks Platform 3.0 marketplace applications.

## Available Skills

### 1. **Freshworks App Development Skill** (Main)
Complete Platform 3.0 app development with templates, validation, and enforcement.

## Installation

### Install Main Skill (Freshworks App Development)

```bash
npx skills add https://github.com/freshworks-developers/freshworks-platform3 --skill freshworks-app-dev-skill
```

Or install locally:

```bash
npx skills add /path/to/freshworks-platform3/skills/freshworks-app-dev-skill
```

## What These Skills Provide

### Freshworks App Development Skill
- **Platform 3.0 Enforcement** - Zero tolerance for Platform 2.x patterns
- **App Generation** - Frontend, Serverless, Hybrid, and OAuth templates
- **Validation** - Automatic `fdk validate` with auto-fix for common errors
- **140+ Reference Files** - Progressive disclosure of Platform 3.0 documentation
- **Cursor Rules** - Auto-installed enforcement rules for your project

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

## Documentation

### Freshworks App Development Skill
- **Path:** `skills/freshworks-app-dev-skill/`
- **SKILL.md** - Complete skill documentation (985 lines)
- **references/** - 140+ technical reference files
- **.cursor/rules/** - Always-applied enforcement rules
- **assets/templates/** - App skeleton templates

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
