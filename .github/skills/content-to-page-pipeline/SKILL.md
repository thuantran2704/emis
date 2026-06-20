---
name: content-to-page-pipeline
user-invocable: true
description: "Build a new page from source content with style-guide compliance, implementation verification, and a post-stability SEO pass."
---

# Content To Page Pipeline

## Purpose
Create page implementations from repository content sources using a deterministic flow: intake, mapping, implementation, verification, and optional SEO refinement after functional stability.

## Trigger Criteria

### Use when
- A new page must be created from a markdown source in .github.
- Existing page content must be remapped to a new layout pattern.
- Route and page creation are requested together.

### Do not use when
- The task is a small single-component bug fix.
- The task is translation-only with no page creation.
- The task is project scaffolding from scratch.

### Router hints
- build page from content file
- create landing page from markdown
- map content doc into src/pages
- add new route and page from .github doc
- run implementation first then seo

## Inputs

Required:
- Content source path in .github.
- Target page path.

Optional:
- Route path to wire in app router.
- Target translation file(s).
- Preferred image mapping per section.
- Constraints such as minimal diff or no new components.

Missing input behavior:
- Ask at most 2 concise clarification questions.
- If route is missing, implement page and report route wiring as pending.

## Allowed Tools

Allowed:
- workspace discovery and read tools
- local file edit tools
- scoped verification tools
- delegated specialist agents for implementation and SEO

Forbidden:
- destructive git operations unless explicitly requested
- external side-effect operations unrelated to page implementation

Preconditions:
- Load style guide and relevant existing page patterns before editing.
- Confirm source file exists before modeling.

## Workflow

### Phase 1: Intake
Entry criteria:
- source file and target page path are known

Actions:
1. Confirm source and target paths.
2. Load style guide and relevant existing page patterns.
3. Identify whether route wiring is required.

Exit criteria:
- clear implementation scope and missing inputs list

Failure fallback:
- request missing critical input with concise question

### Phase 2: Content Modeling
Entry criteria:
- source content is loaded

Actions:
1. Parse source into section blocks.
2. Map sections to existing reusable patterns.
3. Select images from src/pics where available.
4. Apply no-image symmetric fallback layout.

Exit criteria:
- section map and asset map are finalized

Failure fallback:
- keep source wording and use text-first section fallback

### Phase 3: Implement
Entry criteria:
- section model approved by scope

Actions:
1. Implement page with smallest viable structure.
2. Reuse existing components before new abstractions.
3. Add route wiring if requested.
4. Preserve translation-safe optional rendering patterns.

Exit criteria:
- page builds and scope changes are complete

Failure fallback:
- split large changes into smaller reviewable batches

### Phase 4: Validate
Entry criteria:
- all intended edits applied

Actions:
1. Run scoped checks on touched files.
2. Confirm no introduced compile/lint/type errors.
3. Confirm no broken optional rendering in touched sections.

Exit criteria:
- verification status captured

Failure fallback:
- fix errors in touched scope before reporting done

### Phase 5: SEO Pass
Entry criteria:
- functional and content stability confirmed

Actions:
1. Hand off to seo-agent for metadata and hierarchy refinement.
2. Keep SEO changes factual and non-spammy.

Exit criteria:
- SEO summary returned with no structural regression

Failure fallback:
- defer SEO and report exact blocker

## Output Schema

Required fields:
- files_changed
- route_wiring_status
- verification_summary
- seo_summary_or_deferred_reason
- assumptions

Optional fields:
- unresolved_inputs
- follow_up_actions

## Guardrails
- Do not rewrite unrelated architecture during page creation.
- Do not reserve empty media columns when no suitable image exists.
- Do not run SEO before functional stability.
- Do not report completion without scoped verification.

## Acceptance Criteria
- Trigger precision: at least 90% correct routing on internal prompt samples.
- Output schema completeness: 100% required fields present.
- Validation coverage: all touched files checked.
- Structural regressions introduced: 0.
- Unnecessary delegation count: 0 for simple single-file tasks.
