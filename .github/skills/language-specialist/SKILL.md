---
name: language-specialist
description: "Translate healthcare content with glossary-governed terminology, structure-safe localization, and measurable validation gates."
---

# Language Specialist Skill

## Purpose
Translate healthcare and dental content safely across supported languages while preserving code/data structure and enforcing terminology consistency.

## Trigger Criteria

### Use when
- The task requests translation or localization of healthcare content.
- Consistent multilingual terminology is required.
- Glossary-governed updates are needed.

### Do not use when
- The task is purely visual/UI with no localization impact.
- The task is SEO-only and does not require translation.

### Router hints
- translate this healthcare page
- localize this translations file
- update multilingual content and glossary
- standardize medical terminology

## Required Context Files

Always read these first:
1. `.github/style_guide.md`
2. `.github/language-specialist/README.md`
3. `.github/language-specialist/medical-glossary.json`

## Inputs

Required:
- Source content file path
- Source language
- Target language(s)
- Scope: full file or specific sections

Optional:
- Priority terms list
- Requested tone constraints

Missing input behavior:
- Ask at most 2 concise clarifying questions.

## Allowed Tools

Allowed:
- read/search/edit tools
- glossary update edits
- scoped syntax/diagnostic checks

Forbidden:
- schema/key rewrites unless explicitly requested
- speculative medical claims

Preconditions:
- all mandatory context files loaded before translation starts

## Workflow

### Phase 1: Intake
Entry criteria:
- translation request and target scope identified

Actions:
1. Confirm source language, targets, and file scope.
2. Confirm whether request is direct translation or terminology refinement.

Exit criteria:
- explicit localization plan by language and sections

Failure fallback:
- request missing required input

### Phase 2: Terminology Mapping
Entry criteria:
- required context files loaded

Actions:
1. Identify specialized terms in source copy.
2. Map terms to glossary entries.
3. Add missing terms to glossary before final translation.

Exit criteria:
- glossary map completed for in-scope terms

Failure fallback:
- mark unresolved terms and stop before final translation

### Phase 3: Translation
Entry criteria:
- glossary map complete

Actions:
1. Translate values only.
2. Preserve keys, structure, placeholders, URLs, and tokens.
3. Keep language concise and patient-readable.

Exit criteria:
- target language blocks drafted and structure-safe

Failure fallback:
- revert to source value for ambiguous segments and flag for review

### Phase 4: Validation
Entry criteria:
- translation draft complete

Actions:
1. Validate key completeness against source block.
2. Validate syntax safety.
3. Validate glossary consistency.

Exit criteria:
- validation pass summary generated

Failure fallback:
- fix touched scope issues before reporting done

## Output Schema

Required fields:
- files_changed
- languages_touched
- glossary_updates
- validation_summary
- assumptions

Optional fields:
- unresolved_terms
- follow_up_actions

## Guardrails

- Do not alter object keys unless explicitly requested.
- Do not modify URLs/placeholders/tokens.
- Do not introduce unsupported medical claims.
- Keep language concise and patient-readable.

## Acceptance Criteria
- Mandatory context load compliance: 100%.
- Schema safety violations: 0.
- Key completeness for touched language blocks: 100%.
- Glossary consistency violations: 0.
- Output schema completeness: 100% required fields present.
