# Freshworks Platform 3.0 Development Skill

A comprehensive development skill for building Freshworks Platform 3.0 applications with strict enforcement of platform rules and best practices.

## Overview

This skill provides specialized guidance for developing apps on Freshworks Platform 3.0. It acts as an enforcement layer, ensuring all code and patterns strictly adhere to Platform 3.0 specifications while rejecting legacy 2.x patterns automatically.

## Features

- ✅ **Strict Platform 3.0 Enforcement** - Rejects legacy 2.x patterns automatically
- ✅ **Execution Model Awareness** - Understands frontend/backend boundaries
- ✅ **Error Classification** - Categorizes errors for better debugging
- ✅ **React Meta Framework Support** - Comprehensive React development guidance
- ✅ **Production-Ready Patterns** - Bias toward production-ready architecture
- ✅ **Migration Support** - Platform 2.x to 3.0/3.1 migration guidance
- ✅ **Security Auditing** - Secure iparams and vulnerability checks

## Installation

### Option 1: Local Installation (For Development)

**Prerequisites:**
- Cursor IDE installed
- Node.js (for npx command)

**Steps:**

1. **Clone the repository:**
   ```bash
   cd /path/to/your-workspace
   git clone https://github.com/freshworks-developers/freshworks-platform3.git
   ```

2. **Install skill locally using npx:**
   ```bash
   cd your-freshworks-app
   npx /path/to/freshworks-platform3
   ```
   
   This will automatically:
   - ✅ Copy skill files to `.cursor/rules/`
   - ✅ Copy skill files to `.cursor/skills/freshworks-platform3/`
   - ✅ Copy agent files to `.agents/skills/freshworks-platform3/`
   - ✅ Show installation summary

3. **Restart Cursor IDE** to load the skill

4. **Verify installation:**
   - Open Cursor Settings → Rules
   - You should see `freshworks-platform3.mdc` listed

**Manual Local Installation:**

If you prefer manual installation:

```bash
# For Cursor IDE
cp -r /path/to/freshworks-platform3/.cursor /path/to/your-project/

# For other agent frameworks
cp -r /path/to/freshworks-platform3/.agents /path/to/your-project/
```

Then restart Cursor IDE.

### Option 2: NPM Installation (When Published)

> **Note:** This package is not yet published to npm. Use local installation above.

Once published, you'll be able to install via:

```bash
# From npm
npm install @freshworks-developers/freshworks-platform3-skill

# Or use npx directly
npx @freshworks-developers/freshworks-platform3-skill
```

### Option 3: For skills.sh

```bash
# Add from GitHub
npx skills add https://github.com/freshworks-developers/freshworks-platform3
```

## Skill Structure

```
freshworks-platform3/
├── SKILL.md                    # Main skill (skills.sh format)
├── skill.yaml                  # Skill metadata
├── kernel.prompt               # Core prompt
├── knowledge/                  # Symlink to references/
├── .cursor/                    # Cursor IDE integration
│   ├── rules/
│   │   └── freshworks-platform3.mdc
│   └── skills/
│       └── freshworks-platform3/SKILL.md
├── .agents/                    # Other agent frameworks
│   └── skills/
│       └── freshworks-platform3/SKILL.md
└── references/                 # Reference documentation
    ├── platform3.rules.md
    ├── error.taxonomy.json
    ├── cli.behavior.md
    ├── react-meta.md
    ├── fdk/                    # FDK documentation
    ├── server/                 # Server-side topics
    ├── migration/              # Migration guides
    ├── ui/                     # UI components (Crayons)
    └── use-cases/              # Use case examples
```

## Usage

The skill automatically triggers when working with:
- Creating new Platform 3.0 apps
- Debugging Platform 3.0 errors
- Reviewing code for Platform 3.0 compliance
- Understanding Platform 3.0 execution model
- Developing with React Meta Framework
- Configuring API integrations, OAuth, SMI, scheduled events
- Working with key-value storage, entity storage, object store
- Migrating from Platform 2.x to 3.0/3.1

## Capabilities

| Capability | Description |
|------------|-------------|
| **Build** | Generate Platform 3.0 compliant code |
| **Debug** | Classify errors and identify violations |
| **Review** | Validate code against Platform 3.0 rules |
| **Explain** | Clarify Platform 3.0 concepts |
| **Error-Fix** | Automatically identify and fix errors |
| **Migrate** | Guide Platform 2.x to 3.0 migrations |
| **Security-Audit** | Check for security issues |

## Key Principles

- Frontend (`app.js`) executes in browser iframe context
- Backend (`server.js`) executes in Node.js runtime
- No shared memory between frontend and backend
- Strict execution boundaries enforced
- Legacy Platform 2.x patterns rejected automatically

## Refusal Logic

The skill will refuse and respond with "Insufficient platform certainty." when:
- User mixes Platform 2.x and 3.0 APIs or patterns
- User asks "guess why" or requests speculation without source
- User discusses logs without execution context
- User requests undocumented behavior
- User asks for workarounds violating execution boundaries

## Knowledge Base

The skill includes comprehensive documentation covering:
- Platform 3.0 execution model and rules
- Error taxonomy and classification
- CLI behavior and commands
- React Meta Framework patterns
- FDK topics (OAuth, request methods, installation parameters, actions)
- Server-side patterns (SMI, scheduled events, key-value storage)
- UI components (Crayons)
- Migration guides (Platform 2.x → 3.0/3.1)
- Use case examples

## Requirements

- Freshworks Platform 3.0
- Skills framework compatible environment (e.g., Cursor IDE)

## License

MIT

## Contributing

Contributions are welcome! Please ensure any changes maintain Platform 3.0 compliance and follow the established patterns.

---

**Note:** This skill follows the Skills framework structure. The `SKILL.md` file contains the core skill definition, while `references/` (aliased as `knowledge/`) contains reference documentation loaded as needed.
