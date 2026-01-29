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

## Installation

### Using Skills Framework

```bash
npx skills add <repository-url> --skill freshworks-platform3
```

### Manual Installation

1. Clone this repository
2. The skill consists of `SKILL.md` and `knowledge/` directory
3. Use with Skills framework compatible tools

## Skill Structure

```
freshworks-platform3/
├── SKILL.md              # Main skill file (required)
└── knowledge/            # Reference documentation
    ├── platform3.rules.md
    ├── error.taxonomy.json
    ├── cli.behavior.md
    ├── react-meta.md
    ├── fdk/              # FDK documentation
    ├── server/           # Server-side topics
    ├── migration/        # Migration guides
    ├── ui/               # UI components
    └── use-cases/        # Use case examples
```

## Usage

The skill automatically triggers when Claude needs to:
- Create new Platform 3.0 apps
- Debug Platform 3.0 errors
- Review code for Platform 3.0 compliance
- Understand Platform 3.0 execution model
- Develop with React Meta Framework
- Configure API integrations, OAuth, SMI, scheduled events
- Work with key-value storage

## Capabilities

- **Build** - Generate Platform 3.0 compliant code
- **Debug** - Classify errors and identify violations
- **Review** - Validate code against Platform 3.0 rules
- **Explain** - Clarify Platform 3.0 concepts

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
- FDK topics (OAuth, request methods, installation parameters)
- Server-side patterns (SMI, scheduled events, key-value storage)
- UI components (Crayons)
- Migration guides
- Use case examples

## Requirements

- Freshworks Platform 3.0
- Skills framework compatible environment

## License

[Add your license here]

## Contributing

[Add contribution guidelines if applicable]

---

**Note:** This skill follows the Skills framework structure. The `SKILL.md` file contains the core skill definition, while `knowledge/` contains reference documentation loaded as needed.
