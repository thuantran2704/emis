# EMIS Frontend Style Guide

Default rulebook for marketing pages (Home, About, Doctors, service landing pages).

## 1) Priority Order and Decision Hierarchy

Engineering priorities (in order):
- Scale: optimize for growth and long-term maintainability.
- Reusability: prefer shared patterns/components over duplication.
- Clean code: keep modules cohesive, predictable, and easy to review.

Decision hierarchy:
1. This repository guide.
2. Task-specific source docs (for example .github/home_content.md).
3. Team conventions already present in the touched files.
4. General external best practice.

If two rules conflict, follow the higher item in the hierarchy.

## 2) Non-Negotiables

- Keep copy objective, concise, and scannable.
- Keep visual hierarchy clear: eyebrow -> title -> body -> CTA.
- Keep accessibility baseline: no low-contrast text or controls.
- Keep translation rendering safe: no missing keys, no undefined crashes.
- Keep changes incremental: avoid broad rewrites unless requested.

## 3) Architecture and Reuse Standards

- Prefer composition over large monolithic page files.
- Keep components single-responsibility:
  - presentational component
  - section container/composition
  - data mapping/transform helper
- Extract repeatable structures after the second clear reuse (rows, media blocks, CTA strips).
- Shared components may contain UI logic, not page/domain business rules.
- Keep cross-section coupling low: pass explicit props, avoid hidden global assumptions.

## 4) Size Budgets and Split Rules

- Page file soft limit: 300 lines.
- Page file hard limit: 450 lines.
- Component file soft limit: 200 lines.
- Component file hard limit: 300 lines.
- Single render block/function target: <= 80 lines when practical.

Split policy:
- Above soft limit: split into smaller section/presentational components in the same PR when feasible.
- At hard limit: splitting is mandatory before merge.
- If deferring a split, document why and create a follow-up task.

## 5) Content Standards

- If a source copy doc exists, match wording exactly unless user asks for rewrite.
- Use short paragraphs (one idea per paragraph).
- Prefer bullets for grouped facts and process steps.
- Avoid hype language and vague claims.
- Write for scanning first: meaningful headings, clear first sentence, concise body.

## 6) Visual and Typography Standards

Typography roles:
- Headings: Playfair Display.
- UI labels/buttons: Be Vietnam Pro.
- Narrative body: Cormorant.
- For premium editorial pages, prefer slightly smaller type with more line-height and whitespace rather than larger display copy.
- Let small labels and CTAs rely on tracking and spacing for emphasis before increasing font size.

Color system:
- Primary gold: #d4af37 (hover #c19d30).
- Label gold: #C5AF73.
- Main text: #2a3439.
- Neutral surfaces: #ffffff, #f1f5f9, #f7fafc.

Layout:
- Page shell: min-h viewport minus navbar, pt-20 for fixed nav.
- Keep section rhythm generous and consistent.
- Prefer editorial rows/lists over dense card walls for long-form content.
- Avoid muddy yellow section backgrounds.
- On luxury-oriented pages, keep text blocks narrower and let whitespace carry hierarchy.

## 7) Accessibility Baseline (WCAG-Oriented)

- Contrast minimums:
  - normal text: 4.5:1
  - large text: 3:1
  - non-text UI/borders/icons: 3:1
- Do not use color alone to communicate meaning.
- All meaningful images require informative alt text.
- Maintain keyboard-visible focus states for interactive elements.
- Support responsive reflow without two-axis scrolling for standard content.

## 8) Internationalization and Data Safety

- Translation fallback pattern:
  - content = dict[language] || dict.english
- Optional fields must be conditionally rendered.
- No duplicate keys in translation objects.
- Locale additions must not break existing language toggles.

## 9) Dark Mode Standards

- Use dark slate/navy surfaces, not yellow-brown tints.
- Preserve equivalent hierarchy and spacing from light mode.
- Validate contrast in dark mode with the same thresholds.

## 10) Quality Gates Before Merge

- Scope:
  - Request fully covered with minimal unrelated edits.
- Reuse/scale:
  - Size budgets respected, or split rationale documented.
- Content:
  - Source wording fidelity preserved (if provided).
- Accessibility:
  - Contrast targets met; alt text and focus visibility present.
- Reliability:
  - No duplicate translation keys.
  - No unsafe optional field renders.
  - No compile/lint/type errors in touched files.

## 11) Industry Basis (Short)

- Nielsen Norman Group: concise, scannable, objective writing improves usability.
- WCAG 2.2: enforce measurable contrast, semantics, focus, and robustness.
- Google and Microsoft style guidance: clear structure, plain language, global audience.
- Modern frontend architecture practice: smaller cohesive modules improve scale and maintainability.

## 12) Relevance Heuristic (Use Before Implementing)

Use this heuristic to decide whether a proposed change is relevant to the user request.

Scoring model:
- Goal match (0-3): does this directly solve the requested outcome?
- Scope fit (0-2): is it inside requested files/features and current PR scope?
- Hierarchy fit (0-2): does it follow this guide and task source docs?
- User signal fit (0-2): does it align with explicit user preferences/feedback?
- Risk penalty (-2 to 0): subtract points for regression risk, complexity, or speculative work.

Total score = Goal + Scope + Hierarchy + User signal + Risk penalty.

Decision thresholds:
- 7-9: implement now.
- 5-6: implement only if low-cost and clearly beneficial.
- 0-4: do not implement unless explicitly requested.

Tie-breakers:
- Prefer smaller, reversible changes.
- Prefer reuse over new abstractions.
- Prefer clarity and accessibility over visual novelty.

## 13) "I Hate It" Feedback Loop (Doc Update Rule)

When the user says they dislike an output (for example: "I hate this", "this is wrong", "don\'t do this again"), run this triage:

1. Classify the reason:
- content/tone
- visual design
- architecture/splitting
- accessibility
- i18n/data safety
- process/scope discipline

2. Check repeatability:
- Is this likely to recur across pages/tasks?
- Is the feedback specific enough to become a reusable rule?

3. Decide doc action:
- Update style guide if both are true:
  - repeatability: yes
  - rule can be stated as a clear, testable directive
- Keep as task-local preference if one-off or highly contextual.

4. If updating the guide, add all of:
- rule statement (must/should)
- rationale (one line)
- acceptance check (how to verify)

5. Apply and verify in the same change set:
- update affected code/content
- run relevant checks
- confirm the new rule is reflected in future decisions

Quick anti-bloat rule:
- Do not add a new guide rule for a single subjective preference unless the user explicitly asks to make it permanent.
