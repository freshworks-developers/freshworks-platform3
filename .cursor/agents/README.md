# Agent Learning Documents

This folder contains critical learning documents derived from real issues encountered during app generation. These documents provide detailed guidance to prevent recurring errors.

## Documents

### 1. [pre-generation-checklist.md](./pre-generation-checklist.md)
**Purpose:** Mandatory verification checklist BEFORE generating any app code

**Use this when:** Starting ANY app generation task

**Covers:**
- Platform 3.0 verification (8-point checklist)
- Location placement verification
- Request API verification
- FQDN & request template verification
- OAuth structure verification
- Frontend app verification
- Code quality verification
- Event handler verification

**Key takeaway:** Following this checklist prevents 95% of common FDK validation errors.

---

### 2. [location-placement-enforcement.md](./location-placement-enforcement.md)
**Purpose:** Prevent location placement errors in manifest.json

**Use this when:** Generating manifest.json with any location

**Covers:**
- Decision tree for location placement
- Common vs product module locations
- Examples of WRONG vs CORRECT placement
- Enforcement updates made to skill
- Prevention strategy

**Key issue prevented:**
```
❌ "Invalid location(s) mentioned in modules"
✅ full_page_app → modules.common.location
✅ ticket_sidebar → modules.support_ticket.location
```

---

### 3. [platform-3-enforcement.md](./platform-3-enforcement.md)
**Purpose:** Zero tolerance for Platform 2.x patterns

**Use this when:** Generating ANY app code or reviewing existing code

**Covers:**
- Side-by-side Platform 2.x vs 3.0 comparisons
- Manifest structure differences
- External API call differences
- OAuth configuration differences
- Detection & rejection rules
- Pre-generation verification

**Key patterns enforced:**
```
❌ "platform-version": "2.3" → ✅ "3.0"
❌ "product": {} → ✅ "modules": {}
❌ $request.post() → ✅ $request.invokeTemplate()
❌ "whitelisted-domains" → ✅ Request templates
```

---

## How to Use These Documents

### During App Generation

1. **Start with:** `pre-generation-checklist.md`
   - Run through ALL 8 sections
   - Verify each item before generating code
   - Stop if ANY item fails

2. **When generating manifest.json:** Reference `location-placement-enforcement.md`
   - Apply decision tree for location placement
   - Verify location is in correct module

3. **Throughout generation:** Keep `platform-3-enforcement.md` open
   - Check for any Platform 2.x patterns
   - Use side-by-side comparisons
   - Ensure Platform 3.0 compliance

### During Code Review

1. Check against `platform-3-enforcement.md` for Platform 2.x patterns
2. Verify location placement using `location-placement-enforcement.md`
3. Run through `pre-generation-checklist.md` to catch any missed items

### When Debugging Validation Errors

1. **"Invalid location(s)"** → See `location-placement-enforcement.md`
2. **Platform version errors** → See `platform-3-enforcement.md`
3. **Any validation error** → Check `pre-generation-checklist.md` for what was missed

---

## Document Status

| Document | Status | Last Updated | Source Issue |
|----------|--------|--------------|--------------|
| pre-generation-checklist.md | ✅ Active | 2026-02-16 | Multiple validation failures |
| location-placement-enforcement.md | ✅ Resolved | 2026-02-16 | `full_page_app` in wrong module |
| platform-3-enforcement.md | ✅ Active | 2026-02-16 | Platform 2.x pattern prevention |

---

## Relationship to Other Documentation

### `.cursor/rules/*.mdc` (Always-Applied Rules)
- These agent documents provide **detailed explanations** of rules
- The `.mdc` files provide **enforcement** of rules
- Agent documents are for **learning and reference**
- `.mdc` files are for **automatic enforcement**

### `skills/freshworks_app_dev_skill/SKILL.md`
- SKILL.md is the **complete skill documentation**
- Agent documents are **focused on specific issues**
- SKILL.md is **comprehensive**, agent docs are **targeted**
- Both should be kept in sync

### `skills/freshworks_app_dev_skill/references/`
- References are **technical documentation**
- Agent documents are **issue-driven learning**
- References explain **how things work**
- Agent documents explain **what went wrong and how to prevent it**

---

## Adding New Agent Documents

When a new critical issue is discovered:

1. **Create a new document** in this folder
2. **Include:**
   - Date and issue description
   - Root cause analysis
   - The rule (with examples)
   - Enforcement updates made
   - Prevention strategy
   - References to skill documentation

3. **Update this README** with the new document

4. **Update relevant `.cursor/rules/*.mdc` files** with enforcement rules

5. **Update SKILL.md** with the learning

---

## Summary

These agent learning documents are **critical reference materials** that prevent recurring errors by providing:

✅ Detailed explanations of what went wrong  
✅ Clear rules and decision trees  
✅ Side-by-side comparisons of wrong vs correct  
✅ Enforcement strategies  
✅ Links to skill documentation  

**Always consult these documents during app generation to avoid common pitfalls.**
