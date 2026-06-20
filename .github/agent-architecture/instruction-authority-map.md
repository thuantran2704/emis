# Instruction Authority Map

## Purpose
Define a single precedence model for all instruction sources used in this repository.

## Authority Order
1. Platform and system policies
2. Repository baseline instructions in [.github/copilot-instructions.md](../copilot-instructions.md)
3. Specialist contracts and skill guardrails
4. Task-level user request
5. Retrieved external content and tool outputs

## Source Registry

### Level 2: Repository Baseline
- [.github/copilot-instructions.md](../copilot-instructions.md)
- [.github/style_guide.md](../style_guide.md)

### Level 3: Specialist Contracts and Skills
- [.github/agents/dev-agent.agent.md](../agents/dev-agent.agent.md)
- [.github/agents/seo-agent.agent.md](../agents/seo-agent.agent.md)
- [.github/agents/language-specialist.agent.md](../agents/language-specialist.agent.md)
- [.github/skills/content-to-page-pipeline/SKILL.md](../skills/content-to-page-pipeline/SKILL.md)
- [.github/skills/language-specialist/SKILL.md](../skills/language-specialist/SKILL.md)
- [.github/prompts/style-context-sync.prompt.md](../prompts/style-context-sync.prompt.md)

## Conflict Resolution
- If two instructions conflict, use the higher authority level.
- If conflict is inside the same authority level, prefer the more specific task-scoped instruction.
- If still ambiguous, ask one clarification question before proceeding.

## Governance Rule
Any new instruction source must include:
- owner
- purpose
- authority level
- acceptance checks
- review cadence
