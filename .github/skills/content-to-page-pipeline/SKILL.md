---
name: content-to-page-pipeline
user-invocable: true
description: "Use when: building a new page from .github/content.md, applying .github/style_guide.md, populating with home_content data, then running dev-agent and seo-agent in sequence."
---

# Content To Page Pipeline

## Purpose

Create a new website page from a content source file with a repeatable implementation workflow:
1. Read content from `.github/content.md` (or user-provided content file in `.github`).
2. Build the page using repository standards from `.github/style_guide.md`.
3. Populate and map page copy using `home_content` data patterns.
4. Use `dev-agent` for implementation and verification.
5. Use `seo-agent` for SEO refinement after the page is functionally complete.

## When To Use

- You need a new page generated from a markdown content source.
- You want style-guide-compliant layout and copy integration.
- You want implementation first, then SEO pass.

## Inputs

Required:
- Content source markdown file in `.github` (default: `.github/content.md`).
- Target page path (for example `src/pages/NewPage.jsx`).

Optional:
- Target translation file(s) if content should be localized.
- Preferred route or navbar link target.

## Workflow

### Phase 1: Intake and Source Discovery

1. Confirm content source file path in `.github`.
2. Confirm target page file path and route destination.
3. Load `.github/style_guide.md` and relevant existing page patterns.
4. Load `home_content` to identify reusable content schema and section structure.

Decision points:
- If `.github/content.md` is missing, ask for the exact content filename.
- If route target is missing, implement page file first and report pending route wiring.

### Phase 2: Content Modeling

1. Parse content into section blocks (hero, body, CTA, FAQ, etc. as available).
2. Map each block to existing page/component patterns in the repo.
3. Reorder sections when needed for usability and visual hierarchy.

Decision points:
- Content does not need strict sequential rendering; prioritize clarity and user flow.
- If a section is unclear, preserve source wording and place in the most semantically correct section.

### Phase 3: Implementation via Dev Agent

1. Hand off implementation to `dev-agent`.
2. Create or update page component(s) with smallest viable structure first.
3. Reuse existing components before creating new ones.
4. Apply style-guide constraints for typography, color, spacing, accessibility, and size guardrails.
5. Add translation-safe optional rendering and fallback patterns where needed.

Decision points:
- If page/component size exceeds soft limits, split into section components.
- If hard limits are reached, split is mandatory before finalization.

### Phase 4: Verification via Dev Agent

1. Run relevant checks for touched files.
2. Validate no compile/lint/type errors in edited scope.
3. Validate no broken optional-field rendering or translation regressions.

### Phase 5: SEO Pass via SEO Agent

1. Hand off finalized page to `seo-agent`.
2. Optimize title/meta/heading hierarchy and intent alignment.
3. Improve scanability without changing factual meaning.
4. Validate semantic structure and avoid spammy tactics.

## Completion Criteria

- New page is created and styled according to `.github/style_guide.md`.
- Content is populated from the `.github` source and `home_content` patterns.
- Implementation and validation are completed by `dev-agent`.
- SEO refinement is completed by `seo-agent`.
- Edited scope has no unresolved errors.

## Output Format

Return:
1. Files created/updated.
2. Route wiring status.
3. Verification status from `dev-agent`.
4. SEO changes summary from `seo-agent`.
5. Assumptions or pending inputs.

## Prompt Examples

- "Use content-to-page-pipeline with `.github/content.md` to create `src/pages/landingPage2.jsx`, then route it under `/landing-2`."
- "Run content-to-page-pipeline for `.github/new_implant_page.md`, reuse existing Home/About style patterns, then run dev-agent and seo-agent."
