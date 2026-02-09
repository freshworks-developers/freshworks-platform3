#!/bin/bash
# Simple installation script for Freshworks Platform 3.0 Skill

set -e

SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(pwd)"

echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║              🚀 Installing Platform 3.0 Skill 🚀                   ║"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo ""
echo "📦 Skill source: $SKILL_DIR"
echo "📁 Installing to: $PROJECT_ROOT"
echo ""

# Check if we're in the skill directory itself
if [ "$SKILL_DIR" = "$PROJECT_ROOT" ]; then
    echo "⚠️  You're running this from the skill directory itself."
    echo "Please run this from your Freshworks app project directory."
    echo ""
    echo "Usage:"
    echo "  cd /path/to/your/freshworks-app"
    echo "  bash $SKILL_DIR/install.sh"
    exit 1
fi

# Install Cursor rules
if [ -d "$SKILL_DIR/.cursor/rules" ]; then
    echo "📋 Installing Cursor Rules..."
    mkdir -p "$PROJECT_ROOT/.cursor/rules"
    cp -r "$SKILL_DIR/.cursor/rules/"* "$PROJECT_ROOT/.cursor/rules/"
    echo "   ✓ Installed to $PROJECT_ROOT/.cursor/rules/"
else
    echo "⚠️  Warning: .cursor/rules not found in skill directory"
fi

# Install Cursor skills
if [ -d "$SKILL_DIR/.cursor/skills" ]; then
    echo "📋 Installing Cursor Skills..."
    mkdir -p "$PROJECT_ROOT/.cursor/skills"
    cp -r "$SKILL_DIR/.cursor/skills/"* "$PROJECT_ROOT/.cursor/skills/"
    echo "   ✓ Installed to $PROJECT_ROOT/.cursor/skills/"
else
    echo "⚠️  Warning: .cursor/skills not found in skill directory"
fi

# Install agent skills
if [ -d "$SKILL_DIR/.agents/skills" ]; then
    echo "🤖 Installing Agent Skills..."
    mkdir -p "$PROJECT_ROOT/.agents/skills"
    cp -r "$SKILL_DIR/.agents/skills/"* "$PROJECT_ROOT/.agents/skills/"
    echo "   ✓ Installed to $PROJECT_ROOT/.agents/skills/"
fi

echo ""
echo "════════════════════════════════════════════════════════════════════"
echo "✅ Installation Complete!"
echo ""
echo "📖 Next Steps:"
echo "   1. Restart Cursor IDE completely (Cmd+Q and reopen)"
echo "   2. Open Cursor Settings → Rules"
echo "   3. You should see:"
echo "      • freshworks-platform3.mdc"
echo "      • app-templates.mdc"
echo "      • platform3-modules-locations.mdc"
echo "   4. Start building Platform 3.0 apps!"
echo "════════════════════════════════════════════════════════════════════"
echo ""
