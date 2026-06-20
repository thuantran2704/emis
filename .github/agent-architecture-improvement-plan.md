# Agentic System High-Level Design

## 1. Purpose
Design a reliable, secure, and scalable agent architecture for this repository's real workflows:
- UI and styling implementation
- Content-to-page generation
- Multilingual healthcare translation
- SEO refinement

This design addresses all identified gaps:
- instruction overlap and conflict drift
- unclear delegation boundaries
- tool safety inconsistency
- memory bloat and stale rules
- lack of orchestration quality metrics

## 2. Design Goals
- Predictable behavior under layered instructions
- Fast execution with minimal unnecessary handoffs
- Strong safety for write and side-effect operations
- Durable learning from repeated user feedback
- Measurable orchestration quality, not only build correctness

## 3. Non-Goals
- Full rewrite of current skills/agents in one change
- Replacing existing content/style workflows
- Building custom infrastructure outside repository scope

## 4. Target Architecture

### 4.1 Control Plane
Responsible for policy, precedence, and governance.

Components:
- Instruction Authority Map
- Specialist Contract Registry
- Tool Risk and Approval Policy
- Workflow Quality Gate Definitions

### 4.2 Orchestration Plane
Responsible for routing, delegation, and execution flow.

Components:
- Primary Orchestrator Agent
- Delegation Decision Engine
- Specialist Adapters (dev, seo, language)
- Verification Runner

### 4.3 Knowledge Plane
Responsible for context and memory quality.

Components:
- User Memory (durable preferences)
- Repo Memory (stable project rules)
- Session Memory (temporary task context)
- Memory Hygiene Scheduler

### 4.4 Evaluation Plane
Responsible for quality measurement and continuous improvement.

Components:
- Trace Review Checklist
- Metrics Collector
- Failure Pattern Registry
- Rule Promotion Pipeline

## 5. Instruction Hierarchy and Conflict Resolution

### 5.1 Authority Order
1. Platform and system policy
2. Repository baseline instructions
3. Specialist contracts and skill guardrails
4. Task-level user request
5. Retrieved external content and tool outputs

### 5.2 Conflict Resolution Rule
If two instructions conflict:
- Follow higher authority level.
- If same authority level, follow the most specific and newest task-scoped instruction.
- If still ambiguous, stop and ask one clarification question.

### 5.3 Governance Rule
No new instruction source is added without:
- owner
- purpose
- precedence location
- acceptance checks

## 6. Delegation Design

### 6.1 Primary Orchestrator Policy
The primary orchestrator remains owner of task completion and user communication.
Specialists are invoked only when they add clear domain or policy value.

### 6.2 Specialist Contract Schema
Each specialist contract must include:
- Entry Criteria: exact trigger conditions
- Exclusion Criteria: when not to call
- Inputs: required context files and arguments
- Allowed Tools: approved tool set
- Output Schema: structured return format
- Exit Conditions: done, blocked, or return-for-next-step

### 6.3 Handoff Constraints
- No chain handoff unless contract explicitly permits it.
- One specialist active at a time unless tasks are independent and parallel-safe.
- Every handoff must return a verification status.

## 7. Tool Governance Design

### 7.1 Tool Risk Tiers
- Tier 1: Read-only operations (search/read/list)
- Tier 2: Local write operations (patch/edit/create local files)
- Tier 3: External or destructive side effects (network publish, destructive git, irreversible changes)

### 7.2 Approval Policy
- Tier 1: auto-allow
- Tier 2: allow with mandatory post-change verification
- Tier 3: explicit user approval required before execution

### 7.3 Safety Guards
- Block destructive git operations unless explicitly requested.
- Require file-level error checks after writes.
- Require brief change summary for each write batch.

## 8. Memory Architecture

### 8.1 Memory Roles
- User memory: persistent personal preferences and repeated behavior patterns
- Repo memory: stable technical facts, conventions, commands, and workflow notes
- Session memory: temporary plans and in-flight execution state

### 8.2 Write Policy
Write memory only when one of the following is true:
- recurring user preference observed
- repeated failure mode detected
- stable repository convention verified

### 8.3 Hygiene Policy
- Weekly: merge duplicates and remove noise
- Monthly: deprecate stale rules
- Quarterly: audit rule conflicts across memory scopes

## 9. Workflow Blueprints (Flow by Flow)

### 9.1 UI and Styling Flow
1. Read style context and task intent.
2. Implement minimal visual delta.
3. If feedback repeats, capture as candidate durable rule.
4. Promote rule only if testable and reusable.
5. Verify rendering-related errors and class safety.

### 9.2 Content-to-Page Flow
1. Intake source content and route target.
2. Map content to section schema.
3. Implement with existing patterns first.
4. Apply image fallback policy when assets are missing.
5. Verify route wiring and compile/lint status.
6. Run SEO pass only after functional stability.

### 9.3 Language Specialist Flow
1. Read mandatory language context files.
2. Extract domain terms and map glossary.
3. Add missing glossary terms first.
4. Translate values only; preserve structure.
5. Validate key completeness and syntax safety.

### 9.4 SEO Flow
1. Run only on stable functional content.
2. Optimize metadata and heading hierarchy.
3. Preserve factual and clinical neutrality.
4. Return before/after summary with no structural regressions.

## 10. Quality and Metrics Design

### 10.1 Core Metrics
- Unnecessary delegation rate
- Tool misfire rate
- Rework rate after user feedback
- Time to verified completion
- Policy violation count

### 10.2 Trace Review Protocol
- Sample recent sessions weekly.
- Grade routing correctness, tool sequencing, and policy compliance.
- Record repeated failures in failure registry.

### 10.3 Continuous Improvement Pipeline
- Detect repeated failure pattern.
- Decide fix type: instruction, contract, checklist, or memory update.
- Apply minimal change.
- Re-evaluate in following trace sample.

## 11. Rollout Strategy

### Phase A: Governance Foundation
- Publish authority map.
- Add specialist contract schema.
- Add tool risk matrix.

### Phase B: Pilot
- Apply full model to one workflow first (recommended: language specialist flow).
- Track metrics for one week.

### Phase C: Expansion
- Roll into UI/content/SEO flows after pilot metrics improve.
- Keep change set incremental and reversible.

### Phase D: Stabilization
- Run weekly trace review.
- Run monthly memory hygiene.
- Run quarterly architecture simplification.

## 12. Acceptance Criteria
The architecture is considered adopted when:
- instruction conflicts are resolvable by documented precedence
- each specialist has explicit entry and exit contracts
- tool usage follows tiered approval policy
- memory updates are intentional and low-noise
- orchestration metrics are tracked and trend positively

## 13. Deliverables
- [x] Authority map document: [.github/agent-architecture/instruction-authority-map.md](./agent-architecture/instruction-authority-map.md)
- [x] Specialist contract templates and active registry: [.github/agent-architecture/specialist-contract-registry.md](./agent-architecture/specialist-contract-registry.md)
- [x] Tool risk and approval matrix: [.github/agent-architecture/tool-risk-and-approval-matrix.md](./agent-architecture/tool-risk-and-approval-matrix.md)
- [x] Memory hygiene protocol: [.github/agent-architecture/memory-hygiene-protocol.md](./agent-architecture/memory-hygiene-protocol.md)
- [x] Workflow checklists: [.github/agent-architecture/workflow-checklists.md](./agent-architecture/workflow-checklists.md)
- [x] Weekly trace review template: [.github/agent-architecture/weekly-trace-review-template.md](./agent-architecture/weekly-trace-review-template.md)
- [x] Pilot metric report template: [.github/agent-architecture/pilot-metric-report-template.md](./agent-architecture/pilot-metric-report-template.md)

## 14. Tool-By-Tool Operating Design

### 14.1 Decision Principle
Use the primary orchestrator by default.
Use specialized agents or skills only when at least one delegation trigger is true:
- Domain trigger: specialist knowledge is required (for example multilingual medical translation).
- Risk trigger: high-impact operation benefits from stricter specialist guardrails.
- Throughput trigger: independent subtask can be parallelized safely.

### 14.2 Tool Routing Matrix

#### A. Workspace Discovery Tools
- Tools: `file_search`, `grep_search`, `semantic_search`, `list_dir`, `read_file`
- Default owner: primary orchestrator
- Use specialist: not required
- Required checks: confirm target files before edit
- Anti-pattern: editing from a single partial snippet without full local context

#### B. File Editing Tools
- Tools: `apply_patch`, `create_file`, `create_directory`
- Default owner: primary orchestrator
- Use specialist: `dev-agent` only for larger implementation chunks or complex refactors
- Required checks: run `get_errors` on touched files after each edit batch
- Anti-pattern: broad rewrites when a small patch can solve the request

#### C. Verification Tools
- Tools: `get_errors`, `testFailure`, targeted test/build commands
- Default owner: primary orchestrator
- Use specialist: `dev-agent` if verification scope crosses many modules
- Required checks: include what was verified and what was not verified
- Anti-pattern: claiming completion without explicit verification coverage

#### D. Translation and Terminology Tools
- Tools: `read_file`, `apply_patch`, glossary update workflow
- Default owner: `language-specialist` skill/agent when multilingual healthcare copy is in scope
- Use specialist: required for full translation passes and glossary-governed updates
- Required checks:
	- mandatory context files loaded
	- glossary pass completed before translation
	- structure and key completeness preserved
- Anti-pattern: translating by changing keys/object schema

#### E. SEO Refinement Tools
- Tools: `read_file`, `apply_patch`, metadata/heading updates
- Default owner: `seo-agent`
- Use specialist: only after functional implementation is stable
- Required checks: no structural/content regressions from SEO pass
- Anti-pattern: running SEO before page behavior/content is stable

#### F. Memory Tools
- Tools: `memory` (view/create/update)
- Default owner: primary orchestrator
- Use specialist: not required
- Required checks: store only durable, reusable notes
- Anti-pattern: storing one-off transient details as permanent memory

#### G. Terminal and External-Effect Tools
- Tools: `run_in_terminal`, git/network-affecting operations
- Default owner: primary orchestrator
- Use specialist: only if specialist contract explicitly requires terminal-heavy execution
- Required checks:
	- Tier 3 approval before external/destructive operations
	- summarize command result and impact
- Anti-pattern: destructive commands without explicit user request

### 14.3 Specialized Agent and Skill Usage Rules

#### When Specialized Agent/Skill Is Required
- Language workflow with clinical terminology consistency across locales
- SEO optimization pass after functional readiness
- Large scoped implementation where contract-driven delegation reduces risk

#### When Specialized Agent/Skill Is Not Required
- Small, localized UI/class tweaks
- Single-file fixes with clear requirements
- Straightforward search/read/edit/verify loops

#### Delegation Contract Minimum
Every delegation must include:
- trigger reason
- exact scope
- required output format
- verification expectation
- explicit return status (done/blocked/needs-next-step)

### 14.4 Tool-by-Tool Flow Execution Pattern
1. Discover scope with read/search tools.
2. Read enough local context to avoid speculative edits.
3. Decide primary vs specialist path using delegation triggers.
4. Apply smallest edit batch.
5. Verify immediately for touched scope.
6. Report results, residual risk, and next action.

### 14.5 Anti-Pattern Block List
- Specialist-first routing without primary triage.
- Chain delegation without explicit contract permission.
- Translation edits that alter keys or fallback structure.
- SEO pass before functional stability.
- Completion claims without verification disclosure.

## 15. Recommendation Record Template

Use this compact format for future architecture decisions.

- Recommendation ID:
- Priority: P0 | P1 | P2
- Scope: Orchestration | Tooling | Translation | SEO | Verification
- Decision: one-sentence rule
- Context: why needed now
- Triggers: objective activation conditions
- Do: required actions
- Do Not: prohibited anti-patterns
- Verification: required checks and acceptance criteria
- Metrics: success measures
- Owner: accountable maintainer
- Review Cadence: weekly | monthly | quarterly
- Exceptions: explicit and narrow
