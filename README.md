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

### For Cursor IDE

The skill auto-loads when you clone/open this repository. It includes:
- `.cursor/rules/freshworks-platform3.mdc` - Cursor Rules format
- `.cursor/skills/freshworks-platform3/SKILL.md` - Cursor Skills format

### For Other Agent Frameworks

- `.agents/skills/freshworks-platform3/SKILL.md` - Generic agent skill format

### For skills.sh

```bash
# Add from GitHub
npx skills add https://github.com/freshworks-developers/freshworks-platform3
```

### Manual Installation

1. Clone this repository
2. The skill consists of `SKILL.md` and `references/` directory (aliased as `knowledge/`)
3. For Cursor: Rules auto-load from `.cursor/rules/`
4. For other tools: Use the appropriate skill file from `.agents/` or root `SKILL.md`

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
