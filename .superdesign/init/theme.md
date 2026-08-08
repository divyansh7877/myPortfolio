# Theme and Design Tokens

## Compact token summary

### Typography

- Body: Inter via `--font-sans`
- Display: Space Grotesk via `--font-display`
- Code/data: JetBrains Mono via `--font-mono`
- Base size/leading: 16px / 1.6

### Light palette

- Background `#f4f7fb`; surface `#fbfdff`; strong surface `#eaf1fb`
- Text `#0f172a`; secondary `#475569`
- Accent `#2563eb`; accent hover `#1d4ed8`; alternate `#0891b2`
- Border `rgba(148,163,184,.28)`

### Dark palette

- Background `#08111f`; surface `#101a2d`; strong surface `#14223a`
- Text `#e5eefc`; secondary `#8aa0c2`
- Accent `#60a5fa`; accent hover `#3b82f6`; alternate `#22d3ee`
- Border `rgba(96,165,250,.18)`

### Shape and effects

- Common radii: 8px controls, 12px inputs, 24–28px feature panels, pill badges
- Panels use translucent surfaces, 18–22px backdrop blur, thin borders, and broad low-opacity accent shadows
- Layout breakpoints use Tailwind defaults; primary content widths are `max-w-2xl`, `max-w-4xl`, and `max-w-6xl`

## Raw source locations

The complete current sources are:

- `src/app/globals.css` — all CSS variables, typography, panels, grids, MDX styling, focus styling, and scrollbar styling (351 lines)
- `src/components/ThemeProvider.tsx` — complete theme state implementation (87 lines)
- `src/app/layout.tsx` — complete font declarations and global layout (106 lines)
- `postcss.config.mjs` — Tailwind CSS 4 PostCSS configuration

These source files are passed directly and in full to Superdesign because each is under the 900-line payload threshold.
