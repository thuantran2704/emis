# Language Specialist Workflow (Healthcare Content)

This document defines how translation work must be done for healthcare pages in this repository.

## Scope

Use this workflow when translating any content source used by pages, including:
- `src/Translations/*.jsx`
- `.github/home_content.md`
- page-level content objects inside `src/pages/*.jsx`

Supported repository languages (verified from `src/Translations/navbarContent.jsx`):
- `english`
- `vietnamese`
- `french`
- `simplified`
- `traditional`
- `korean`

## Mandatory Inputs Before Translating

1. Read `.github/style_guide.md`.
2. Read this file (`.github/language-specialist/README.md`).
3. Load terminology from `.github/language-specialist/medical-glossary.json`.

Do not translate healthcare copy without these three inputs.

If a request includes a language not in the supported set above, stop and ask for approval before adding it to glossary or translation files.

## Translation Rules

1. Preserve code structure exactly:
- Keep keys, object shape, arrays, and ordering unless asked to restructure.
- Keep placeholders and tokens unchanged (examples: `{name}`, `%s`, URLs, API paths).
- Keep JSX syntax, punctuation needed by code, and escaping rules valid.

2. Apply term consistency:
- Prefer glossary terms for specialized clinical vocabulary.
- Use one canonical translation per term per language unless page context requires a different medical meaning.
- If a term is missing from glossary, add it first to `medical-glossary.json`, then translate.

3. Clinical safety and neutrality:
- Keep claims objective and non-exaggerated.
- Avoid introducing unverified medical promises.
- Preserve contraindication and risk wording when present.

4. Accessibility and readability:
- Keep sentences concise and scannable.
- Avoid slang for clinical terms.
- Prefer patient-facing plain language when not changing medical meaning.

## Content Translation Pipeline

1. Intake
- Identify source file, target language(s), and expected output file(s).
- Identify healthcare terms in scope.

2. Terminology pass
- Map each healthcare term to glossary entries.
- Add missing terms to glossary before final translation.

3. Structure-safe translation
- Translate values only.
- Keep key names and code structures intact.

4. Validation
- Verify no missing keys vs source language.
- Verify no duplicate keys.
- Verify no syntax errors in touched files.
- Verify no glossary conflicts for reused terms.

5. Report
- List files changed.
- List new glossary terms added.
- List unresolved terms or assumptions.

## Research Basis (Why This Exists)

This workflow aligns with:
- WHO multilingual health communication guidance (clarity and terminology consistency).
- ISO 17100 translation service process principles (controlled terminology and QA traceability).
- Microsoft Writing Style Guide and Google technical writing guidance (plain language and consistency).
- W3C Internationalization practices (structure-safe localization and token preservation).

## Quick Checklist

- [ ] Read style guide and language specialist README.
- [ ] Loaded glossary JSON.
- [ ] Preserved code structure exactly.
- [ ] Applied glossary terms consistently.
- [ ] Added missing terms to glossary if needed.
- [ ] Validated syntax and key completeness.
