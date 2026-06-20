---
name: research-update-skills-commands
user-invocable: true
description: "Research and update repository skills, commands, and agent specs using evidence-backed templates and measurable quality gates."
---

# Research Update Skills and Commands

## Purpose
Maintain and improve skills, commands, and agent customization artifacts with a research-based, low-risk rewrite workflow.

Primary targets:
- .github/skills/**/SKILL.md
- .github/commands/**
- .github/agents/*.agent.md
- related prompt/instruction files only when consistency requires it

## Trigger Criteria

### Use when
- multiple skill/command/agent artifacts need consistency improvements
- trigger, input, output, or validation contracts are ambiguous
- measurable acceptance criteria are missing

### Do not use when
- only one minor wording fix is needed in a single file
- task scope is unrelated to customization artifacts

### Router hints
- rewrite all skills and agents
- standardize customization contracts
- research-based update for skills and commands
- improve agent instructions with measurable checks

## Inputs

Required:
- Scope (all or specific files/folders)
- Update goal (for example: routing clarity, safety, output schema, metrics)

Optional:
- Priority (P0, P1, P2)
- Constraints (minimal diff only, no new files, preserve naming)
- Required evidence sources

Missing input behavior:
- ask at most 2 concise clarifying questions

## Allowed Tools

Allowed:
- workspace discovery and read tools
- local file edit tools
- scoped validation checks
- research subagent for external evidence

Forbidden:
- unrelated code rewrites outside declared scope
- safety downgrades for high-risk operations

Preconditions:
- inventory all target files before edits
- gather repository context and at least one external best-practice evidence set

## Workflow

### Phase 1: Discovery
Entry criteria:
- scope and goal identified

Actions:
1. inventory all target files in scope
2. extract current patterns and gaps
3. prioritize gaps by impact and risk

Exit criteria:
- gap list and target list finalized

Failure fallback:
- narrow to highest-impact files and report deferred scope

### Phase 2: Research and Mapping
Entry criteria:
- discovery gap list complete

Actions:
1. collect relevant best-practice findings
2. map findings to concrete change candidates
3. rank changes by impact and implementation risk

Exit criteria:
- evidence-to-change map completed

Failure fallback:
- proceed with repository-local consistency fixes and flag missing evidence

### Phase 3: Design Updates
Entry criteria:
- ranked change candidates available

Actions:
1. define minimal rewrite plan per artifact
2. unify section names and contracts across files
3. add measurable acceptance checks

Exit criteria:
- rewrite plan finalized

Failure fallback:
- split by artifact type and deliver in batches

### Phase 4: Implementation
Entry criteria:
- rewrite plan approved by scope

Actions:
1. apply changes in small reviewable batches
2. preserve naming/folder conventions unless explicitly changed
3. avoid unrelated rewrites

Exit criteria:
- in-scope files updated

Failure fallback:
- stop at stable partial batch and report remaining files

### Phase 5: Validation
Entry criteria:
- current batch implementation complete

Actions:
1. validate syntax/format integrity
2. validate internal links/paths in touched docs
3. validate coherence and non-conflict across touched artifacts

Exit criteria:
- validation summary generated

Failure fallback:
- fix touched-scope issues before final report

### Phase 6: Report
Required report fields:
- files changed
- top gaps fixed
- evidence-backed rationale by gap
- remaining gaps and recommended next steps

## Output Schema

Required:
- files_changed
- gap_summary
- evidence_summary
- validation_summary
- remaining_gaps

Optional:
- deferred_scope
- follow_up_actions

## Guardrails
- Do not introduce incompatible naming or folder conventions without explicit request.
- Do not weaken safety requirements for destructive or external-effect actions.
- Do not inflate scope beyond requested targets.
- Do not remove existing workflows unless equivalent replacement is provided.

## Acceptance Criteria
- Every touched artifact has clear trigger, inputs, tools, workflow, outputs, and guardrails.
- Required output schema fields are present (100%).
- Non-scope file modifications are zero.
- Changes are traceable to explicit research findings.
- Diff remains focused and reviewable.
