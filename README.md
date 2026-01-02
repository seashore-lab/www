# Seashore Lab Website

Official website for Seashore Lab, built with React, Vite, and TanStack Router.

## Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **TanStack Router** - File-based routing with SSR support
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm typecheck
```

## Project Structure

```
website/
├── config/           # Site configuration files
│   ├── site.yaml     # Navigation, footer, links
│   ├── resources.yaml # Resource cards content
│   ├── examples.yaml # Code examples
│   └── about.md      # About page content
├── public/           # Static assets
├── src/
│   ├── app/          # Route components
│   ├── components/   # Reusable UI components
│   └── lib/          # Utilities and config
├── index.html
├── vite.config.ts
└── package.json
```

## Configuration

All site content is configured in the `config/` directory:

- **`config/site.yaml`** - Site metadata, navigation links, footer content
- **`config/resources.yaml`** - Resource cards for the Resources page
- **`config/examples.yaml`** - Code examples for the showcase
- **`config/about.md`** - About page content (Markdown)

To update site content, edit these files rather than modifying React components directly.

## Deployment

The site is configured to deploy to GitHub Pages via GitHub Actions.

### Setup GitHub Pages

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to the `main` or `master` branch to trigger deployment

The workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies with pnpm
2. Build the site with Vite
3. Deploy the `dist/` folder to GitHub Pages

## Customization

### Colors

Edit `src/index.css` to customize the color scheme:

```css
--color-bg: var(--color-sand-50);      /* Light mode background */
--color-bg: var(--color-ocean-900);    /* Dark mode background */
--color-accent: var(--color-coral-500); /* Primary accent */
```

### Fonts

The site uses:
- **Instrument Serif** (display/headings)
- **DM Sans** (body text)
- **JetBrains Mono** (code)

Fonts are loaded via `@fontsource` packages in `package.json`.

### Content

Edit files in `config/` to update:
- Navigation items and links
- Resources and their content
- Code examples
- About page text

## License

MIT
