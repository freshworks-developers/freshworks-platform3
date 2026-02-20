<h1  align="center">Freshworks App Development Skill</h1>

<p  align="center"><strong>Expert-level Cursor AI skill for building Freshworks Platform 3.0 marketplace applications</strong>

  

<p  align="center">

<img  src="https://img.shields.io/badge/Platform-3.0-blue?style=for-the-badge"  alt="Platform 3.0">

<img  src="https://img.shields.io/badge/Cursor-Skill-00a67e?style=for-the-badge"  alt="Cursor Skill">

<img  src="https://img.shields.io/badge/Crayons-4.x-00a67e?style=for-the-badge"  alt="Crayons">

<img  src="https://img.shields.io/badge/FDK-9.x-0052cc?style=for-the-badge"  alt="FDK">

</p>

<p  align="center">

<img  src="https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=nodedotjs&logoColor=white"  alt="Node.js">

<img  src="https://img.shields.io/badge/FDK-9.6+-0052cc?style=flat-square"  alt="FDK">

<img  src="https://img.shields.io/badge/References-140+-764abc?style=flat-square"  alt="References">

</p>

  

<p  align="center">A production-ready Cursor skill for building Freshworks apps.<br></p>

  

<p  align="center">Enforces <strong>Platform 3.0 patterns</strong> with zero tolerance for legacy code.

  

</p>

  

  

<p  align="center"><code>Platform 3.0</code> · <code>Cursor Rules</code> · <code>Crayons</code> · <code>Request Templates</code> · <code>OAuth</code> · <code>fdk validate</code></p>  

  

## Features

  

  

- ✅ Platform 3.0 enforcement with zero tolerance for legacy patterns

  

- ✅ Complete app templates (Frontend, Serverless, Hybrid, OAuth)

  

- ✅ Crayons v4.x component library integration

  

- ✅ Automatic validation and error fixing

  

- ✅ Request template patterns

  

- ✅ Module and location reference for all products

  

  

## Local Setup (npx)

  
### Install Locally

```bash
# Navigate to your project
cd  /path/to/your/freshworks-app

# Install the skill locally
npx  @freshworks-developers/freshworks_app_dev_skill
```
### Manual Installation
```bash
# Clone this repository
git  clone  https://github.com/freshworks-developers/freshworks-platform3.git

# Navigate to the skill
cd  freshworks-platform3/skills/freshworks_app_dev_skill

# Link to Cursor's global skills directory
ln  -s  "$(pwd)"  ~/.cursor/skills/freshworks-app-dev-skill
```

### Verify Installation

The skill should now appear in Cursor Settings → Features → Cursor Skills.

## What's Included

  
-  **SKILL.md** - Main skill file with enforcement rules

  

-  **.cursor/rules/** - Context rules for code generation

  

-  `app-templates.mdc` - Complete app templates

  

-  `freshworks-platform3.mdc` - Platform 3.0 rules

  

-  `platform3-modules-locations.mdc` - Module reference

  

-  `validation-autofix.mdc` - Validation patterns

  

-  `validation-workflow.mdc` - Autofix workflow

  

-  **references/** - Progressive disclosure documentation

  

-  **assets/templates/** - App skeleton templates

  

  

## Usage

  

  

When working on Freshworks Platform 3.0 apps, this skill automatically:

  

- Enforces Platform 3.0 patterns

  

- Generates correct manifest structure

  

- Uses proper request templates

  

- Implements Crayons components

  

- Validates and autofixes errors

  

  

## Requirements

  

  

- Cursor IDE

  

- Node.js >= 18.0.0

  

- FDK >= 9.6.0

  

## Support

  

For reporting issues, information about known issues or questions:

  

- 📖 [Freshworks Developer Docs](https://developers.freshworks.com/)

  

- 🐛 [Report Issues](https://github.com/freshworks-developers/freshworks-platform3/issues)

  

  

## License

  

MIT
