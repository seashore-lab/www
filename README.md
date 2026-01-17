# Seashore Lab Website

Official website for Seashore Lab, built with VitePress, Vue 3, and Tailwind CSS 4.

## Tech Stack

- **VitePress 1.6** - Static site generator
- **Vue 3** - UI framework for custom components
- **Tailwind CSS 4** - Styling with anime-themed pink/blue palette
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

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

Visit `http://localhost:5173` when the dev server is running.

## Project Structure

```
website/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # VitePress configuration
│   │   └── theme/             # Custom theme extension
│   │       ├── index.ts       # Theme entry point
│   │       ├── components/    # Vue components
│   │       ├── styles/        # Custom CSS (anime theme)
│   │       ├── composables/   # Vue composables
│   │       ├── utils/         # Utilities
│   │       └── lib/           # Content data (examples, resources)
│   ├── public/                # Static assets (avatar.png, favicon.svg)
│   ├── index.md               # Homepage
│   ├── resources.md           # Resources page
│   └── about.md               # About page
├── .github/workflows/         # GitHub Actions deployment
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Content Management

### Pages

Pages are Markdown files in the `docs/` directory:

- **`docs/index.md`** - Homepage with Hero, Examples, and ResourcesPreview components
- **`docs/resources.md`** - Resources page with all resource cards
- **`docs/about.md`** - About page with markdown content

### Dynamic Content

Content data is stored in `docs/.vitepress/theme/lib/config.ts`:

- **`examples`** - Code examples showcased on the homepage
- **`resources`** - Resource card data for the Resources page

To update examples or resources, edit the arrays in `config.ts`.

### Site Configuration

Site metadata, navigation, and footer are configured in `docs/.vitepress/config.ts`:

```typescript
export default defineConfig({
  title: 'Seashore Lab',
  description: 'TypeScript AI Agent Development Framework',
  themeConfig: {
    nav: [
      { text: 'Products', items: [...] },
      { text: 'Docs', link: 'https://docs.seashore.ai' },
      { text: 'Resources', link: '/resources' },
      { text: 'About', link: '/about' },
    ],
    // ... more config
  },
})
```

## Customization

### Styling Theme

The site uses an anime-themed pink/blue color palette defined in `docs/.vitepress/theme/styles/tailwind.css`:

```css
@theme {
  --color-pink-50: #FFF5F8;
  --color-pink-500: #FF5CA3;
  --color-blue-500: #0EA5E9;
  /* ... more colors */
}
```

### Custom Components

Vue components in `docs/.vitepress/theme/components/`:

- **`Navigation.vue`** - Sticky header with dropdowns and theme toggle
- **`Footer.vue`** - Footer with social links
- **`Hero.vue`** - Animated hero section
- **`Examples.vue`** - Tabbed code examples with copy button
- **`ResourceCard.vue`** - Individual resource card component
- **`ResourcesPreview.vue`** - Grid of featured resources

### Dark Mode

Dark mode is handled by the `useTheme` composable in `docs/.vitepress/theme/composables/useTheme.ts`. It:

- Persists preference to localStorage
- Respects `prefers-color-scheme` media query
- Toggles `.light` / `.dark` class on `<html>`

## Deployment

The site deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

### Local Deployment Testing

```bash
pnpm build
pnpm preview
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main`/`master` branch to trigger deployment

The workflow will:
1. Install dependencies with pnpm
2. Build the site with VitePress
3. Deploy the `docs/.vitepress/dist/` folder to GitHub Pages

## Adding New Pages

1. Create a new `.md` file in `docs/` (e.g., `docs/blog.md`)
2. Add the page to navigation in `docs/.vitepress/config.ts`
3. Optionally create custom Vue components in `docs/.vitepress/theme/components/`

## License

MIT
