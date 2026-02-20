# Astro Migration Notes

This repo now includes an Astro publishing path that preserves the live URL structure:

- Home: `/writing/`
- Manifesto: `/writing/manifesto/`
- Literary archive index: `/writing/literary/`
- Literary entries: `/writing/literary/:slug/`
- Ideas index: `/writing/ideas/`

## What changed

- Added Astro app scaffolding (`src`, `astro.config.mjs`, `package.json`, `tsconfig.json`)
- Added typed content collections (`src/content/config.ts`):
  - `literary` (publishDate/isDraft/type/description)
  - `ideas` (lastEdited/status/description)
- Added literary content folder (`src/content/literary`)
- Added ideas content folder (`src/content/ideas`)
- Isolated manifesto as static page (`src/pages/manifesto.astro`)
- Added literary archive routes (`src/pages/literary/index.astro`, `src/pages/literary/[slug].astro`)
- Added ideas route (`src/pages/ideas/index.astro`)
- Added LeonOS base layout (`src/layouts/Layout.astro`)
- Added GitHub Pages deploy workflow (`.github/workflows/deploy.yml`)
- Added structured essay schema in Content Collections (`src/content/config.ts`)

## Next production polish

- Add real WOFF2 font files in `public/fonts/` and keep preload in base layout
- Add tag/series index pages
- Add RSS and sitemap generation
