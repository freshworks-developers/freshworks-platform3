# Location Placement Enforcement - Critical Learning

**Date:** 2026-02-16  
**Issue:** Generated manifest with `full_page_app` in `support_contact` module instead of `common` module  
**Impact:** FDK validation error - "Invalid location(s) mentioned in modules"  
**Status:** ✅ RESOLVED - Enhanced enforcement in SKILL.md and app-templates.mdc

## Root Cause

Failed to verify location placement before generating manifest.json, despite clear documentation in skill rules.

**This was a process failure, not a documentation failure.** The skill had the correct rules, but they weren't being checked during the pre-generation phase.

## The Rule (ZERO TOLERANCE)

### Decision Tree (MUST use before generating ANY manifest)

```
IF location is full_page_app OR cti_global_sidebar:
  → MUST be in modules.common.location
  → NEVER in product modules (support_ticket, support_contact, service_asset, deal, etc.)

IF location is ticket_sidebar, contact_sidebar, asset_sidebar, deal_entity_menu, etc.:
  → MUST be in product module (support_ticket, support_contact, service_asset, deal, etc.)
  → NEVER in modules.common.location
```

### Common Module Locations (ONLY these)
- `modules.common.location.full_page_app` ✅
- `modules.common.location.cti_global_sidebar` ✅

### Product Module Locations (NEVER in common)
- `modules.support_ticket.location.ticket_sidebar` ✅
- `modules.support_contact.location.contact_sidebar` ✅
- `modules.service_ticket.location.ticket_sidebar` ✅
- `modules.service_asset.location.asset_sidebar` ✅
- `modules.deal.location.deal_entity_menu` ✅

## Examples

### ❌ WRONG (causes validation error)
```json
{
  "modules": {
    "support_contact": {
      "location": {
        "full_page_app": { ... }  // ❌ INVALID!
      }
    }
  }
}
```

### ✅ CORRECT
```json
{
  "modules": {
    "common": {
      "location": {
        "full_page_app": { ... }  // ✅ CORRECT!
      }
    },
    "support_contact": {}
  }
}
```

## Enforcement Updates

### `.cursor/rules/app-templates.mdc`

1. **Added to "NEVER Generate" list:**
   - ❌ `full_page_app` or `cti_global_sidebar` in product modules
   - ❌ Product-specific locations in `common` module

2. **Added to validation checklist:**
   - [ ] **LOCATION PLACEMENT VERIFIED** ✅ - **MANDATORY PRE-GENERATION CHECK**

3. **Enhanced Location Placement section:**
   - Added decision tree
   - Added more examples (both WRONG and CORRECT)
   - Added explicit "ZERO TOLERANCE" enforcement language

4. **Updated Template Selection Logic:**
   - Step 8: **VERIFY location placement BEFORE generation**

## Prevention Strategy

**BEFORE generating manifest.json:**

1. ✅ Identify the location type (full_page_app, ticket_sidebar, etc.)
2. ✅ Apply decision tree to determine correct module
3. ✅ Verify placement matches the rule
4. ✅ Generate manifest with correct structure

**This check is MANDATORY and NON-NEGOTIABLE.**

## References

- `.cursor/rules/app-templates.mdc` - Lines 10-24 (NEVER Generate), 1041-1078 (Location Rules)
- `.cursor/rules/platform3-modules-locations.mdc` - Complete location reference
- `.cursor/rules/freshworks-platform3.mdc` - Lines 561-567 (Location errors)

## Lesson Learned

**The skill documentation was complete and correct. The failure was in not following the documented validation checklist before code generation.**

This is a process failure, not a documentation failure. The fix is to enforce stricter adherence to the pre-generation validation checklist.
