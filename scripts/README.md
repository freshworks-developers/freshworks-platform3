# Installation Scripts

This folder contains automated installation scripts for the Freshworks Platform 3.0 Skill.

## Files

### install.js
Automatic installation script that:
- Detects the project root directory
- Copies `.cursor/rules/` and `.cursor/skills/` for Cursor IDE
- Copies `.agents/skills/` for other agent frameworks
- Runs automatically with `npm install` or `npx`

## Usage

### Via npm/npx
```bash
# From npm registry (when published)
npx @freshworks-developers/freshworks-platform3-skill

# From GitHub
npx github:freshworks-developers/freshworks-platform3

# Or install as dependency
npm install @freshworks-developers/freshworks-platform3-skill
```

### Manual Installation
```bash
node scripts/install.js
```

## How It Works

1. **Finds project root**: Looks for `package.json`, `.git`, or `.cursor` folder
2. **Copies skill files**: Installs to appropriate directories
3. **Creates structure**: Makes `.cursor/` and `.agents/` folders if needed
4. **Reports status**: Shows what was installed and where

## Troubleshooting

If installation fails:
- Check you have write permissions to the project directory
- Ensure Node.js v14+ is installed
- Try running with `--verbose` flag for debug info
- Report issues at: https://github.com/freshworks-developers/freshworks-platform3/issues
