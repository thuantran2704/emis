# Specialist Contract Registry

## Purpose
Define and standardize delegation contracts for specialized agents and skills.

## Contract Template
- Specialist:
- Owner:
- Scope:
- Entry Criteria:
- Exclusion Criteria:
- Required Inputs:
- Allowed Tools:
- Output Schema:
- Exit Conditions:
- Verification Requirements:

## Active Contracts

### Contract: DEV-001
- Specialist: dev-agent
- Owner: repository maintainers
- Scope: implementation-heavy changes and multi-file refactors
- Entry Criteria:
  - change touches multiple modules, or
  - implementation risk is high, or
  - verification scope exceeds single-file sanity checks
- Exclusion Criteria:
  - single-file minor edits
  - straightforward class or copy tweaks
- Required Inputs:
  - task objective
  - target files
  - constraints
- Allowed Tools:
  - read/search/edit and verification tools
- Output Schema:
  - changed files
  - key edits
  - verification results
  - residual risks
- Exit Conditions:
  - done
  - blocked with reason
  - returns to orchestrator for next step
- Verification Requirements:
  - run scoped checks for touched files

### Contract: SEO-001
- Specialist: seo-agent
- Owner: repository maintainers
- Scope: on-page SEO refinement after feature content is stable
- Entry Criteria:
  - page is functionally complete
  - metadata or heading optimization is requested
- Exclusion Criteria:
  - ongoing functional or layout instability
- Required Inputs:
  - target page/component
  - current metadata/headings
- Allowed Tools:
  - read/search/edit tools for SEO-safe changes
- Output Schema:
  - metadata and hierarchy changes
  - before/after SEO summary
- Exit Conditions:
  - done
  - blocked for missing stable baseline
- Verification Requirements:
  - no structural regressions
  - no factual drift

### Contract: LANG-001
- Specialist: language-specialist
- Owner: repository maintainers
- Scope: multilingual healthcare translation and glossary governance
- Entry Criteria:
  - translation or localization request in healthcare content
  - glossary consistency required
- Exclusion Criteria:
  - non-translation pure UI tasks
- Required Inputs:
  - source file
  - source language
  - target languages
  - scope (full file or sections)
- Allowed Tools:
  - read/search/edit tools and glossary updates
- Output Schema:
  - translated blocks
  - glossary updates
  - validation summary
- Exit Conditions:
  - done
  - blocked due to missing source or unsupported language
- Verification Requirements:
  - keys preserved
  - structure preserved
  - syntax valid
  - terminology consistent
