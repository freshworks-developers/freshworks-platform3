# Cursor Rules for Freshworks Platform 3.0 Skill

This directory contains coding rules and guidelines for Freshworks Platform 3.0 app development. These rules are structured according to Cursor's Project Rules system using MDC format.

## 📁 Rule Structure

### Project Rules (.cursor/rules/)

All rules are properly structured in the `.cursor/rules/` directory with MDC format:

#### `rules/freshworks-platform3.mdc`
- **Type:** Agent Requestable
- **Purpose:** Core Platform 3.0 development rules and patterns
- **Scope:** All Freshworks app files (manifest.json, server.js, app.js, etc.)
- **Contains:** Platform 3.0 enforcement, Crayons UI requirements, code quality rules, validation checklist

#### `rules/app-templates.mdc`
- **Type:** Always Applied
- **Purpose:** Complete working app templates for different app types
- **Scope:** New app creation, manifest.json, server.js, app.js
- **Contains:** 4 app templates (Frontend, Serverless, Hybrid, OAuth), decision matrix, code patterns

#### `rules/platform3-modules-locations.mdc`
- **Type:** Agent Requestable
- **Purpose:** Complete guide for Platform 3.0 modules and locations
- **Scope:** manifest.json, location configuration
- **Contains:** All Freshdesk/Freshservice/Freshsales modules, location mappings, background apps

---

## 🎯 How Rules Work in Cursor

### Automatic Application

With the Project Rules system:

- **Always Applied:** `app-templates.mdc` automatically applies when creating apps
- **Agent Requestable:** Other rules apply when AI determines they're relevant
- **Contextual:** Rules appear in Agent sidebar when active
- **Scoped:** Each rule targets specific file types and patterns

---

## 🔧 How Rules Auto-Apply

### Automatic Rule Activation

Rules automatically activate when you work with matching files:

| Action | Rules Applied |
|--------|---------------|
| Creating manifest.json | `freshworks-platform3.mdc` + `app-templates.mdc` |
| Writing server.js | `freshworks-platform3.mdc` + `app-templates.mdc` |
| Creating app.js | `freshworks-platform3.mdc` + `app-templates.mdc` |
| Configuring locations | `platform3-modules-locations.mdc` |
| Building any Freshworks app | All rules available |

### No Manual Action Required

- ✅ Just code normally - Rules activate automatically based on context
- ✅ Cursor AI follows rules - No need to mention rule files in prompts
- ✅ Consistent patterns - All developers get the same guidance automatically

### Example: What Happens Automatically

```
Open manifest.json → freshworks-platform3.mdc + app-templates.mdc activate
Create server/server.js → freshworks-platform3.mdc activates
Edit app/scripts/app.js → freshworks-platform3.mdc + app-templates.mdc activate
Ask "create Freshdesk app" → All rules activate for complete guidance
```

---

## 📋 Rule Types and Behavior

### Always Applied Rules

- `app-templates.mdc` - Applied when creating new Freshworks apps
- Provides complete working templates and patterns

### Agent Requestable Rules

- Automatically included when AI determines relevance
- `freshworks-platform3.mdc` - Core Platform 3.0 rules
- `platform3-modules-locations.mdc` - Module and location reference

### Rule Content Summary

| Rule | Focus | Key Contents |
|------|-------|--------------|
| `freshworks-platform3.mdc` | Core development | Platform 3.0 enforcement, Crayons, validation |
| `app-templates.mdc` | App creation | 4 complete templates, code patterns |
| `platform3-modules-locations.mdc` | Configuration | Modules, locations, products |

---

## 👁️ Viewing Active Rules in Cursor

### How to See Which Rules Are Active

**Method 1: Agent Sidebar**
1. Open Cursor IDE
2. Look for the Agent sidebar (right side)
3. Active rules appear when working on matching files
4. See rule names and descriptions for currently applied rules

**Method 2: Cursor Settings**
1. Press `Cmd+,` (Mac) or `Ctrl+,` (Windows/Linux)
2. Look for "Rules & Memories" in the left sidebar
3. Click to see all project rules and their status
4. View which rules are active, inactive, or always applied

**Method 3: Chat Context**
- When using Cursor Chat, active rules are automatically included
- Rules appear at the start of the model context

### Visual Indicators

```
Agent Sidebar:
├── 📄 freshworks-platform3.mdc ✅
│   └── Platform 3.0 development rules
├── 📄 app-templates.mdc ✅  
│   └── Complete app templates (triggered by manifest.json)
└── 📄 platform3-modules-locations.mdc ✅
    └── Module and location reference
```

---

## 🚀 Quick Reference

### Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Open Settings | `Cmd+,` | `Ctrl+,` |
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Open Chat | `Cmd+L` | `Ctrl+L` |

### Menu Navigation

- **Mac:** Cursor → Settings → Rules & Memories
- **Windows/Linux:** File → Preferences → Rules & Memories
- **Command Palette:** Type "Settings" → "Rules & Memories"

### Where to Look for Active Rules

1. **Agent Sidebar** (right side) - Shows active rules while coding
2. **Settings → Rules & Memories** - Management interface
3. **Chat Context** - Rules automatically included in AI context

---

## 📚 Rule Contents Overview

### freshworks-platform3.mdc

**Enforces:**
- ❌ NO `whitelisted-domains` (deprecated)
- ❌ NO `product` structure (use `modules`)
- ❌ NO `$request.post()` (use `$request.invokeTemplate()`)
- ❌ NO plain HTML UI (use Crayons)
- ✅ Platform 3.0 manifest structure
- ✅ Crayons CDN and components
- ✅ Proper async/await patterns
- ✅ Function complexity ≤ 7

### app-templates.mdc

**Provides:**
- Template 1: Frontend App (UI only)
- Template 2: Serverless App (backend only)
- Template 3: Hybrid App (Frontend + SMI)
- Template 4: OAuth App (third-party integration)
- Decision matrix for template selection
- Complete file structures and code examples

### platform3-modules-locations.mdc

**Covers:**
- Freshdesk modules: `support_ticket`, `support_contact`, etc.
- Freshservice modules: `service_ticket`, `service_asset`, etc.
- Freshsales modules: `deal`, `contact`, `account`, etc.
- Common locations: `full_page_app`, `cti_global_sidebar`
- Product-specific locations and their modules

---

## 🔍 Troubleshooting

### If Rules Aren't Showing

1. Check that files are in `.cursor/rules/` directory
2. Verify MDC format is correct
3. Ensure file patterns match your working files
4. Restart Cursor if rules aren't loading

### Common Issues

| Issue | Solution |
|-------|----------|
| Rules not activating | Check file is in workspace, restart Cursor |
| Wrong template used | Specify app type in prompt |
| Platform 2.x patterns appearing | Rules may not be loaded, check sidebar |
| Missing Crayons | Ensure `app-templates.mdc` is active |
