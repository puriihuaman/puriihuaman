# puriihuaman — Portfolio

Personal portfolio built with Astro 5 + Tailwind CSS v4 (Vite plugin).

## Commands

```sh
npm run dev        # start dev server
npm run build      # type-check (astro check) then build
npm run preview    # preview production build
```

## Architecture

- **Astro with View Transitions** — all routes redirect to `/` (302). SPA-like navigation.
- **Tailwind v4** — no `tailwind.config.*` or PostCSS. Config via `@import "tailwindcss"` in `src/assets/styles/styles.css`; Vite plugin in `astro.config.mjs`.
- **Icons** — `astro-icon` reading from `public/assets/icons/`.
- **Components** under `src/components/`, pages in `src/pages/`, shared data/services/models in `src/shared/`.

## Path aliases

Defined in `tsconfig.json` (strict preset): `@components/`, `@layouts/`, `@pages/`, `@data/`, `@models/`, `@services/`, `@markdown/`, `@assets/`.

## Environment

Requires `GITHUB_API_URL` in `.env` (see `.env.example`) — fetches repos at build time. Repos with `default_branch === "start"` are included.

## Testing / Linting

No test framework configured. Prettier (`prettier-plugin-astro`) installed but no npm script or config file. No lint script.

## VS Code

Extension `astro-build.astro-vscode` recommended. Launch config runs `astro dev`.
