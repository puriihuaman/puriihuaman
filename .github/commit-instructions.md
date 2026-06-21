Generate commit messages following the Conventional Commits format.

Commit type rules:

- `feat:` for new features.
- `fix:` for bug fixes.
- `perf:` for performance improvements.
- `style:` for formatting, styling, or layout changes with no logic changes.
- `chore:` for minor maintenance tasks with no significant impact.
- `docs:` for documentation changes.
- `refactor:` for code changes that do not fit any of the above categories.

Requirements:

- The first line must follow the format: `<type>: <short message>`.
- The short message must be concise, clear, and no longer than 100 characters.
- Use imperative mood.
- Do not end the short message with a period.
- Always include the sections `Why`, `What`, and `Impact`.
- Use the same language as the repository commit history.

Language:

- Use the same language as the repository's existing commit history.
- Do not mix languages within a single commit message.

Template:

<type>: <short message>

Why:

- Brief description explaining the reason for the change.
- Focus on the problem being solved, business need, bug, requirement, or improvement objective.
- Write as a paragraph, not as a list.
- Maximum 100 words.

What:

- List of implemented changes.
- Each item must describe a specific modification made in the codebase.
- Use bullet points.
- Do not explain motivations or business reasons.

Impact:

- Brief description of the expected impact on the system, users, maintainability, or performance.
- Maximum 50 words.

Example:

feat: add user profile avatar upload

What:

- Added avatar upload endpoint.
- Implemented image validation rules.
- Updated profile page to display uploaded avatars.

Why:
Users need a way to personalize their profiles and the feature was required by the profile enhancement initiative.

Impact:
Improves user experience and introduces image storage dependencies.
