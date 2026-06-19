---
name: language-specialist
summary: Translate healthcare content files with consistent multilingual terminology using a stable glossary and structure-safe workflow.
---

# Language Specialist Skill

Use this skill when translating or refining healthcare/dental content in this repository.

## Required Context Files

Always read these first:
1. `.github/style_guide.md`
2. `.github/language-specialist/README.md`
3. `.github/language-specialist/medical-glossary.json`

## Inputs

- Source content file path
- Source language
- Target language(s)
- Scope: full file or specific sections

## Workflow

1. Identify specialized healthcare terms in source copy.
2. Map each term with the glossary.
3. Add missing terms to glossary before final translation.
4. Translate values only; keep code/data structure intact.
5. Validate key completeness, syntax safety, and terminology consistency.

## Output Requirements

- Updated translated content blocks/files
- Updated glossary entries (if terms were missing)
- Short report of changed files and terms added/updated

## Guardrails

- Do not alter object keys unless explicitly requested.
- Do not modify URLs/placeholders/tokens.
- Do not introduce unsupported medical claims.
- Keep language concise and patient-readable.
