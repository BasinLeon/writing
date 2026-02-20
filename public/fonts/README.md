Self-hosted production fonts used by the site:

- `InstrumentSans-Regular.ttf`
- `InstrumentSans-Bold.ttf`
- `IBMPlexSerif-Regular.ttf`
- `IBMPlexSerif-Bold.ttf`
- `InstrumentSans-Regular.woff2`
- `InstrumentSans-Bold.woff2`
- `IBMPlexSerif-Regular.woff2`
- `IBMPlexSerif-Bold.woff2`

The site preloads `.woff2` first (with `.ttf` fallback) in
`src/layouts/Layout.astro`, then applies metrics tuning in
`src/styles/global.css` via `@font-face` overrides.
