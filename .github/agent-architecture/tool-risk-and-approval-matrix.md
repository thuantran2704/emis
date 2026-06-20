# Tool Risk And Approval Matrix

## Purpose
Standardize safety and approval requirements for tool usage.

## Risk Tiers

### Tier 1: Read-only
- Examples:
  - list/search/read operations
  - analysis without file writes
- Approval:
  - auto-allow
- Required Follow-up:
  - none beyond normal reporting

### Tier 2: Local Write
- Examples:
  - file edits
  - file creation
  - local refactors
- Approval:
  - allowed by default
- Required Follow-up:
  - run scoped verification
  - summarize changes

### Tier 3: External or Destructive
- Examples:
  - destructive git actions
  - publish/deploy side effects
  - irreversible operations
- Approval:
  - explicit user confirmation required
- Required Follow-up:
  - summarize impact and result
  - provide rollback note when applicable

## Safety Guards
- Never run destructive git operations unless explicitly requested.
- Prefer smallest reversible edit batch.
- Verify after each write batch.
- Report verified and unverified scope explicitly.
