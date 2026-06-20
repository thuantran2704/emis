# Workflow Checklists

## UI and Styling Checklist
- Read style context and user intent first.
- Apply smallest visual delta needed.
- Keep existing patterns before introducing new abstractions.
- If preference repeats, mark as candidate durable rule.
- Verify touched files for errors.
- Report what changed and what was verified.

## Content-to-Page Checklist
- Confirm source content file.
- Confirm route and target page path.
- Map content to section structure.
- Use existing components/patterns first.
- Apply image fallback rule if no relevant assets exist.
- Verify route wiring and touched-file checks.
- Run SEO pass only after functional stability.

## Language Specialist Checklist
- Read required context files:
  - style guide
  - language specialist README
  - medical glossary
- Identify domain terms.
- Update missing glossary terms before translation.
- Translate values only.
- Preserve keys and object structure.
- Validate syntax and key completeness.
- Report glossary updates and changed blocks.

## SEO Checklist
- Confirm feature and content are stable first.
- Optimize metadata and heading hierarchy.
- Preserve factual and clinical neutrality.
- Avoid structural rewrites in SEO pass.
- Verify no regressions in touched scope.
- Provide concise before/after summary.
