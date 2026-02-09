#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Installation script for Freshworks Platform 3.0 Skill
 * Automatically installs skill files to the correct locations for:
 * - Cursor IDE (.cursor/rules/ and .cursor/skills/)
 * - Other agent frameworks (.agents/skills/)
 */

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(message, color = COLORS.reset) {
  console.log(`${color}${message}${COLORS.reset}`);
}

function findProjectRoot() {
  let currentDir = process.cwd();
  
  // Look for common project indicators
  while (currentDir !== path.parse(currentDir).root) {
    const hasPackageJson = fs.existsSync(path.join(currentDir, 'package.json'));
    const hasGitFolder = fs.existsSync(path.join(currentDir, '.git'));
    const hasCursorFolder = fs.existsSync(path.join(currentDir, '.cursor'));
    
    if (hasPackageJson || hasGitFolder || hasCursorFolder) {
      return currentDir;
    }
    
    currentDir = path.dirname(currentDir);
  }
  
  // Default to current working directory
  return process.cwd();
}

function copyDirectory(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }
  
  const entries = fs.readdirSync(source, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, destPath);
    } else if (entry.isSymbolicLink()) {
      const linkTarget = fs.readlinkSync(sourcePath);
      // Remove existing file/symlink if it exists
      if (fs.existsSync(destPath) || fs.lstatSync(destPath, { throwIfNoEntry: false })) {
        try {
          const stats = fs.lstatSync(destPath);
          if (stats.isDirectory()) {
            fs.rmSync(destPath, { recursive: true, force: true });
          } else {
            fs.unlinkSync(destPath);
          }
        } catch (err) {
          // Ignore errors, file might not exist
        }
      }
      fs.symlinkSync(linkTarget, destPath);
    }
  }
}

function installSkill() {
  // Display ASCII art banner
  log('\n' + COLORS.bright + COLORS.blue);
  log('╔════════════════════════════════════════════════════════════════════╗');
  log('║                                                                    ║');
  log('║   _____ ____  _____ ____  _   ___        ______  ____  _  ______  ║');
  log('║  |  ___|  _ \\| ____/ ___|| | | \\ \\      / / __ \\|  _ \\| |/ / ___| ║');
  log('║  | |_  | |_) |  _| \\___ \\| |_| |\\ \\ /\\ / / |  | | |_) | \' /\\___ \\ ║');
  log('║  |  _| |  _ <| |___ ___) |  _  | \\ V  V /| |  | |  _ <| . \\ ___) |║');
  log('║  |_|   |_| \\_\\_____|____/|_| |_|  \\_/\\_/ |_|  |_|_| \\_\\_|\\_\\____/ ║');
  log('║                                                                    ║');
  log('║              🚀 Platform 3.0 Development Skill 🚀                  ║');
  log('║                    Ready to Build Apps!                            ║');
  log('╚════════════════════════════════════════════════════════════════════╝');
  log(COLORS.reset);
  
  log('\n🚀 Installing Freshworks Platform 3.0 Skill...', COLORS.bright + COLORS.blue);
  
  // Find the skill source directory (where this script is)
  const scriptDir = __dirname;
  const skillSourceDir = path.dirname(scriptDir);
  
  // Find the target project directory
  const projectRoot = findProjectRoot();
  
  log(`📁 Project root: ${projectRoot}`, COLORS.blue);
  log(`📦 Skill source: ${skillSourceDir}`, COLORS.blue);
  
  let installCount = 0;
  
  // Install for Cursor IDE
  try {
    const cursorRulesSource = path.join(skillSourceDir, '.cursor', 'rules');
    const cursorRulesTarget = path.join(projectRoot, '.cursor', 'rules');
    
    if (fs.existsSync(cursorRulesSource)) {
      log('\n📋 Installing Cursor Rules...', COLORS.yellow);
      copyDirectory(cursorRulesSource, cursorRulesTarget);
      log('   ✓ Installed to .cursor/rules/', COLORS.green);
      installCount++;
    }
    
    const cursorSkillsSource = path.join(skillSourceDir, '.cursor', 'skills');
    const cursorSkillsTarget = path.join(projectRoot, '.cursor', 'skills');
    
    if (fs.existsSync(cursorSkillsSource)) {
      log('📋 Installing Cursor Skills...', COLORS.yellow);
      copyDirectory(cursorSkillsSource, cursorSkillsTarget);
      log('   ✓ Installed to .cursor/skills/', COLORS.green);
      installCount++;
    }
  } catch (error) {
    log(`   ⚠ Warning: Could not install Cursor files: ${error.message}`, COLORS.yellow);
  }
  
  // Install for other agent frameworks
  try {
    const agentsSkillsSource = path.join(skillSourceDir, '.agents', 'skills');
    const agentsSkillsTarget = path.join(projectRoot, '.agents', 'skills');
    
    if (fs.existsSync(agentsSkillsSource)) {
      log('🤖 Installing Agent Skills...', COLORS.yellow);
      copyDirectory(agentsSkillsSource, agentsSkillsTarget);
      log('   ✓ Installed to .agents/skills/', COLORS.green);
      installCount++;
    }
  } catch (error) {
    log(`   ⚠ Warning: Could not install agent files: ${error.message}`, COLORS.yellow);
  }
  
  // Summary
  log('\n' + '='.repeat(60), COLORS.bright);
  if (installCount > 0) {
    log('✅ Installation Complete!', COLORS.bright + COLORS.green);
    log(`\nInstalled ${installCount} skill component(s) to:`, COLORS.green);
    log(`   ${projectRoot}`, COLORS.blue);
    log('\n📖 Next Steps:', COLORS.bright);
    log('   1. Restart Cursor IDE to load the skill', COLORS.reset);
    log('   2. Check Settings → Rules to verify installation', COLORS.reset);
    log('   3. Start using the Freshworks Platform 3.0 skill!', COLORS.reset);
  } else {
    log('⚠️  No skill files were installed', COLORS.yellow);
    log('   The skill source directory may be incomplete.', COLORS.reset);
  }
  log('='.repeat(60) + '\n', COLORS.bright);
}

// Run installation
if (require.main === module) {
  try {
    installSkill();
  } catch (error) {
    log('\n❌ Installation failed:', COLORS.red);
    log(error.message, COLORS.red);
    log('\nPlease report this issue at:', COLORS.yellow);
    log('https://github.com/freshworks-developers/freshworks-platform3/issues\n', COLORS.blue);
    process.exit(1);
  }
}

module.exports = { installSkill };
