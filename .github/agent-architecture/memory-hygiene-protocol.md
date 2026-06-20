# Memory Hygiene Protocol

## Purpose
Keep memory useful, low-noise, and conflict-free.

## Memory Roles
- User memory:
  - persistent user preferences and durable behavior patterns
- Repo memory:
  - stable project conventions, verified commands, architecture notes
- Session memory:
  - temporary task context and in-flight execution notes

## Write Rules
Write memory only when one condition is true:
- repeated preference observed
- repeated failure mode identified
- stable repository convention verified

Do not write memory for:
- one-off execution details
- transient debugging noise
- speculative assumptions

## Cadence
- Weekly:
  - merge duplicate notes
  - remove noisy entries
- Monthly:
  - mark stale guidance as deprecated
  - keep only current conventions
- Quarterly:
  - audit for cross-scope conflicts

## Entry Format
Each memory note should include:
- date
- scope
- concise rule
- evidence source
- expiry or review trigger
