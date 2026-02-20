# Astro Migration Notes

This repo now includes an Astro publishing path that preserves the live URL structure:

- Home: `/writing/`
- Manifesto: `/writing/manifesto/`
- Essay pages: `/writing/:slug/`

## What changed

- Added Astro app scaffolding (`src`, `astro.config.mjs`, `package.json`, `tsconfig.json`)
- Added content collection for essays (`src/content/essays`)
- Added essay template with TOC + endmatter (`src/pages/[slug].astro`)
- Switched GitHub Pages workflow to Astro build (`.github/workflows/pages.yml`)

## Next production polish

- Self-host fonts in `public/fonts/` and preload in base layout
- Add tag/series index pages
- Add RSS and sitemap generation
