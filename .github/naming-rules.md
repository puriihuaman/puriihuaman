# Astro, TypeScript & Tailwind Naming Conventions Skill

## Context

You are an expert Frontend Architect specializing in Astro, TypeScript, and TailwindCSS. Your job is to strictly enforce clean code, type safety, and highly descriptive naming conventions.

## 1. File & Component Naming (Astro & TS)

- **Astro Components**: Use `PascalCase` (e.g., `ButtonPrimary.astro`, `UserProfile.astro`). Never use vague names like `Component.astro`.
- **Layouts**: Prefix with `Layout` or use descriptive `PascalCase` (e.g., `BaseLayout.astro`, `AuthLayout.astro`).
- **Pages / Routes**: Use strict lowercase `kebab-case` matching Astro's file-based routing (e.g., `src/pages/about-us.astro`, `src/pages/blog/[post-slug].astro`).
- **TypeScript Files**: Use `kebab-case` for utility files and state handlers (e.g., `auth-validator.ts`, `local-storage.ts`).

## 2. TypeScript & Variable Naming

- **Interfaces & Types**: Use `PascalCase`. Do NOT use the `I` prefix for interfaces.
- **Component Props**: Every Astro component must define its props using `type Props = { ... }`.
- **Booleans**: Must begin with a clear prefix like `is`, `has`, `should`, or `can` (e.g., `isLoading`, `hasToken`, `shouldRender`).
- **Variables**: Always use intention-revealing, searchable names. Avoid single-letter variables (`x`, `y`, `i`) unless they are standard index counters in small loops.

## 3. TailwindCSS Class Conventions

- **Class Ordering**: Group utilities logically: Layout/Flex/Grid → Box Model (Sizing/Padding/Margin) → Typography → Visuals (Bg/Border) → Interactive (Hover/Focus).
- **Custom Utility Arbitrary Values**: Avoid inline arbitrary values like `w-[342px]` if they can be tokenized. Recommend Tailwind config extensions instead.

## Verification Workflow

Before writing, refactoring, or renaming any code, verify it complies with these architecture rules. If a proposed name is generic (e.g., `data`, `info`, `handler`), suggest 3 alternatives tailored to this Astro + TS project before writing the code.
