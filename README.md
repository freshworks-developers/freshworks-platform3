# Freshworks Platform 3.0 Development Skill

An AI-powered development skill for building Freshworks Platform 3.0 marketplace applications.
---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/freshworks-developers/freshworks-platform3.git

# 2. Install to your project
cd your-freshworks-app
npx /path/to/freshworks-platform3

# 3. Restart Cursor IDE

# 4. Test it
# Ask: "Create a Freshdesk ticket sidebar app"
```

---

## What This Skill Does

| Feature | Description |
|---------|-------------|
| **Strict Platform 3.0 Enforcement** | Auto-rejects legacy 2.x patterns |
| **Complete App Templates** | Frontend, Serverless, Hybrid, OAuth |
| **Crayons UI Components** | 59 documented components |
| **Telemetry** | Track developer struggles (opt-out available) |
| **Benchmarking** | Compare against baseline metrics |
| **State Persistence** | Remember context across IDE restarts |

---

## Project Structure

```
freshworks-platform3/
│
├── 📄 PUBLIC (GitHub Release)
│   ├── SKILL.md                    # Main skill definition
│   ├── skill.yaml                  # Metadata
│   ├── kernel.prompt               # AI behavior rules
│   ├── package.json                # NPM package
│   ├── .cursor/rules/              # Cursor IDE rules
│   │   ├── freshworks-platform3.mdc
│   │   ├── app-templates.mdc
│   │   └── platform3-modules-locations.mdc
│   ├── .agents/                    # Other agent frameworks
│   ├── references/                 # Documentation (159+ files)
│   ├── .telemetry/                 # Usage analytics
│   ├── .db/                        # State persistence (SQLite)
│   └── scripts/install.js          # Installation script
│
├── 🧪 .test/ (Local Testing - NOT committed)
│   ├── prompts_analysis/
│   │   ├── benchmark.py            # Cursor API benchmark
│   │   ├── input/                  # Test prompts
│   │   ├── feature_wise/           # Feature-specific tests
│   │   └── results/                # Benchmark outputs
│   └── automation/
│       ├── automate_test.py        # App generation tests
│       └── use-cases/              # 7 app definitions
│
└── 🔧 .dev/ (Internal Development - NOT committed)
    └── log.md                      # Technical decisions log
```

---

## Installation

### For Cursor IDE

```bash
# Clone repo
git clone https://github.com/freshworks-developers/freshworks-platform3.git

# Install to your project
cd your-freshworks-app
npx /path/to/freshworks-platform3

# Restart Cursor
```

### For skills.sh

```bash
npx skills add https://github.com/freshworks-developers/freshworks-platform3
```

### Manual Installation

```bash
cp -r /path/to/freshworks-platform3/.cursor /your-project/
```

---

## Usage

### Creating Apps

Ask the skill:
- "Create a Freshdesk ticket sidebar app"
- "Create a Freshservice OAuth app with Jira integration"
- "Create a serverless app with scheduled events"

### App Types

| Type | Use Case |
|------|----------|
| **Frontend** | UI-only sidebar apps |
| **Serverless** | Automation, webhooks, scheduled tasks |
| **Hybrid** | UI + external API calls |
| **OAuth** | Third-party integrations |

### Supported Products

| Product | Modules |
|---------|---------|
| Freshdesk | `support_ticket`, `support_contact`, `support_company` |
| Freshservice | `service_ticket`, `service_asset`, `service_change` |
| Freshsales | `deal`, `contact`, `account`, `lead` |
| Freshcaller | `call`, `caller_agent`, `notification` |
| Freshchat | `chat_conversation`, `chat_user` |

---

## Telemetry

The skill collects **anonymous, aggregated** usage data to improve:
- Documentation gaps
- Error message clarity
- Skill effectiveness

### What's Collected (No PII)

```json
{
  "top_struggles": [
    {"issue": "OAuth configuration", "pct": 25},
    {"issue": "Request template errors", "pct": 20}
  ],
  "resolution_rate": 0.87
}
```

### Opt-Out

```bash
export FRESHWORKS_TELEMETRY=false
```

---

## State Persistence (.db/)

The skill uses a **lightweight SQLite database** to remember context across IDE restarts and tool switches.

### What's Tracked

| Category | Data |
|----------|------|
| **Project** | Platform version (v2 or v3), default product |
| **Apps** | Created apps, type, status, module, location |
| **Files** | Generated files with checksums |
| **Errors** | Encountered errors, fixes applied, patterns |
| **Sessions** | IDE type, current task, conversation context |
| **Validations** | FDK validation history |

### Cross-IDE Continuity

Switch from Cursor to Claude Desktop? The skill remembers:
- What app you were building
- What errors you fixed
- What files were generated
- Your preferences

### Database Location

```
.db/
├── schema.sql      # Database schema
├── db.js           # JavaScript API
├── package.json    # Dependencies
└── skill.db        # SQLite database (created on first use)
```

### API Example

```javascript
const { getDatabase } = require('./.db/db');
const db = getDatabase();

// Get project state (for context restoration)
const state = db.getProjectState('/path/to/workspace');
console.log(state.currentApp);      // Current app being built
console.log(state.errorPatterns);   // Most common errors

// Track a new error
db.recordError(appId, {
  type: 'validation',
  code: 'MISSING_ICON',
  message: 'Icon not found',
  file: 'manifest.json'
});

// Check if error was fixed before
const fix = db.wasErrorPreviouslyFixed('MISSING_ICON');
if (fix) console.log(`Previously fixed via: ${fix.fix_method}`);
```

### Opt-Out

Delete `.db/skill.db` to clear state. The skill works without the database (stateless mode).

---

## Testing & Benchmarking

### Setup (One-time)

```bash
cd .test
python3 -m venv .venv
source .venv/bin/activate
pip install openpyxl requests
```

### Run Benchmarks

```bash
cd .test
source .venv/bin/activate
export CURSOR_API_KEY='key_xxx...'  # From cursor.com/dashboard

# List available features
python3 prompts_analysis/benchmark.py --list-features

# Run benchmark
python3 prompts_analysis/benchmark.py --limit 10
python3 prompts_analysis/benchmark.py --feature oauth --limit 20
```

### Test App Generation

```bash
cd .test/automation
python3 automate_test.py APP001
```

### Available Test Features

| Feature | Prompts |
|---------|---------|
| crayons_and_fe | 132 |
| request_method_oAuth | 81 |
| interface_method | 79 |
| iparams | 74 |
| key_value_store | 65 |
| events_method | 64 |
| custom_iparams | 50 |
| smi | 41 |
| product_events | 37 |

---

## Development

### Internal Development (.dev/)

```bash
# View technical decisions
cat .dev/log.md
```

Contains:
- TDR (Technical Decision Records)
- Architecture overview
- Metrics & KPIs
- Change history

### Adding New Rules

1. Create `.cursor/rules/your-rule.mdc`
2. Add frontmatter with `description` and `globs`
3. Test with Cursor IDE
4. Update `.dev/log.md`

---

## Key Patterns

### Platform 3.0 Manifest

```json
{
  "platform-version": "3.0",
  "modules": {
    "common": { "requests": {} },
    "support_ticket": {
      "location": {
        "ticket_sidebar": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      }
    }
  },
  "engines": { "node": "18.20.8", "fdk": "9.7.4" }
}
```

### Request Templates

```javascript
// ✅ CORRECT (Platform 3.0)
await $request.invokeTemplate('myApi', { body: JSON.stringify(data) });

// ❌ WRONG (Deprecated)
await $request.post('https://api.example.com', options);
```

### Crayons UI

```html
<!-- ✅ CORRECT -->
<fw-button color="primary">Submit</fw-button>

<!-- ❌ WRONG -->
<button>Submit</button>
```

---

## Troubleshooting

| Error | Solution |
|-------|----------|
| "Invalid location(s)" | Move location to product module, not `common` |
| "post is no longer supported" | Use `$request.invokeTemplate()` |
| "OAuth config must have 'integrations'" | Add `{ "integrations": { ... } }` wrapper |
| "Missing icon.svg" | Create `app/styles/images/icon.svg` |

---

## Contributing

1. Fork the repository
2. Create feature branch
3. Follow Platform 3.0 standards
4. Test with `fdk validate`
5. Submit pull request

---

## License

MIT

---

## Links

- [Freshworks Developer Docs](https://developers.freshworks.com)
- [Freshworks Community](https://community.freshworks.com)
- [GitHub Issues](https://github.com/freshworks-developers/freshworks-platform3/issues)
