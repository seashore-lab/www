# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Development
pnpm dev              # Start dev server (Vite)

# Building
pnpm build            # Build for production (outputs to dist/)
pnpm preview          # Preview production build locally

# Type Checking
pnpm typecheck        # Run TypeScript type checking
```

## Architecture

### Tech Stack
- **React 18** + **Vite 6** for the frontend
- **TanStack Router** for file-based routing with SSR support
- **Tailwind CSS 4** for styling (uses Vite plugin, not PostCSS)
- **TypeScript** with strict mode enabled

### Project Structure

```
src/
├── app/              # TanStack Router file-based routes
│   ├── __root.tsx    # Root layout (Navigation, Footer, ThemeProvider)
│   ├── __index.tsx   # Home page
│   ├── resources.tsx # Resources page
│   └── about.tsx     # About page
├── components/       # Reusable UI components
├── lib/              # Utilities and configuration
│   ├── config.ts     # Site config, examples, resources (static data)
│   ├── theme.tsx     # Theme provider (light/dark mode)
│   └── utils.ts      # cn() utility for class merging
└── index.css         # Tailwind theme with custom color palette
```

### Content-Driven Design

Most site content is configured in `src/lib/config.ts`:
- `siteConfig` - Site metadata, navigation structure, footer links
- `examples` - Code examples displayed on the homepage
- `resources` - Resource cards for the Resources page
- `aboutContent` - About page markdown content

When updating content, prefer editing `config.ts` over modifying React components.

### Styling System

The theme uses an anime-inspired pink/blue color palette defined in `src/index.css`:
- Primary colors: `pink-*`, `blue-*`, `lavender-*`, `mint-*`, `peach-*`
- Semantic tokens: `--color-bg`, `--color-fg`, `--color-accent`, etc.
- Dark mode: Toggle adds `.dark` class to `<html>`, token values change accordingly

Fonts used: Fredoka (display), Nunito (body), JetBrains Mono (code).

### Routing

TanStack Router file-based routing via `@tanstack/router-plugin/vite`:
- Routes auto-generated from `src/app/` directory
- Route tree generated at `src/routeTree.gen.ts`
- Use `createFileRoute()` to define route components
- Link with `<Link to="/path">` from `@tanstack/react-router`

### Path Aliases

The `@/*` alias maps to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

### Theme System

The `ThemeProvider` in `src/lib/theme.tsx`:
- Wraps the entire app in `__root.tsx`
- Persists preference to localStorage
- Respects `prefers-color-scheme` media query on first visit
- Use `useTheme()` hook in components to access theme state

### Components

Key components:
- `Navigation` - Sticky header with dropdowns, mobile menu, theme toggle
- `Footer` - Footer with links and copyright
- `Hero` - Homepage hero section
- `Examples` - Tabbed code examples showcase
- `ResourceCard` - Individual resource card component
- `AboutContent` - Markdown-rendered about content

## Deployment

The site deploys to GitHub Pages via the `.github/workflows/deploy.yml` workflow. Pushing to main/master triggers the build and deploy.
