# Astro Migration Notes

This repo now includes an Astro publishing path that preserves the live URL structure:

- Home: `/writing/`
- Manifesto: `/writing/manifesto/`
- Essay pages: `/writing/:slug/`

## What changed

- Added Astro app scaffolding (`src`, `astro.config.mjs`, `package.json`, `tsconfig.json`)
- Added content collection for essays (`src/content/essays`)
- Added essay template with TOC + endmatter (`src/pages/[slug].astro`)
- Added LeonOS base layout (`src/layouts/Layout.astro`)
- Added GitHub Pages deploy workflow (`.github/workflows/deploy.yml`)
- Added structured essay schema in Content Collections (`src/content/config.ts`)

## Next production polish

- Add real WOFF2 font files in `public/fonts/` and keep preload in base layout
- Add tag/series index pages
- Add RSS and sitemap generation
