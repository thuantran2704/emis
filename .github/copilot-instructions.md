# Copilot instructions for this repository

- Prefer concise, implementation-first responses.
- Ask only the minimum clarifying questions needed.
- Ignore unrelated session history and boilerplate unless it is required for the current task.
- Keep changes small, targeted, and easy to review.
- Verify the result with the relevant project checks when possible.
- For this React/Vite project, prefer existing components, styling patterns, and current file structure over introducing new abstractions.
- Use `.github/style_guide.md` relevance heuristic before implementing optional changes, and run the "I hate it" triage to decide whether feedback should be promoted into the style guide.
- For agent tasks with UI/styling impact, run `.github/prompts/style-context-sync.prompt.md` to capture repeated style preferences and update style context with minimal rules.
- When style direction is subjective, propose a compact A/B option and ask for a one-line user reason to collect labeled preference data.
