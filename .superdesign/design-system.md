# Div Agarwal Portfolio — Design System

## Product context

This is an AI/ML engineer's personal portfolio. Its job is to communicate technical credibility in under ten seconds, then reward deeper exploration with evidence: current work, research experience, production systems, selected projects, writing, and clear contact actions. The primary audience is engineering leaders, founders, recruiters, researchers, and technical collaborators.

Key routes are the long-form home page, detailed projects, blog index, and MDX article pages. The redesign must remain readable, fast, accessible, and statically exportable in Next.js.

## Direction: Signal Orange / Computational Swiss

Use Kinetic Orange as the primary style source, tempered with Swiss editorial discipline and precise developer-tool detail. The result should feel like a small technical journal crossed with a high-end systems console: assertive, structured, warm, and unmistakably computational. It must not feel like a generic SaaS landing page, a gaming interface, or a neon cyberpunk template.

The memorable signature is a reactive “computational object”: a compact dimensional stack/network/grid that responds to pointer or scroll and communicates layers, vectors, models, and systems. It occupies one purposeful hero region and may recur only as tiny diagrammatic motifs.

## Color

### Light theme

- Canvas: `#F3F0E8` warm paper
- Surface: `#FBF8F1`
- Raised surface: `#FFFFFF`
- Ink: `#171512`
- Secondary ink: `#5E594F`
- Quiet ink: `#858074`
- Signal orange: `#FF5A1F`
- Orange hover: `#E7470C`
- Orange wash: `#FFE1D3`
- Hairline: `rgba(23, 21, 18, 0.18)`
- Strong line: `#171512`
- Success/data accent: `#2C7A63` used sparingly for status only

### Dark theme

- Canvas: `#11100E`
- Surface: `#181613`
- Raised surface: `#201D19`
- Ink: `#F5F0E7`
- Secondary ink: `#B9B1A4`
- Quiet ink: `#817A70`
- Signal orange: `#FF6A2A`
- Orange hover: `#FF7D45`
- Orange wash: `rgba(255, 106, 42, 0.15)`
- Hairline: `rgba(245, 240, 231, 0.16)`
- Strong line: `#F5F0E7`
- Success/data accent: `#5BC5A7` used sparingly for status only

Orange is the only brand accent. Do not introduce purple, pink, blue gradients, or rainbow chroma. No gradients except subtle neutral transparency used to mask grid/noise edges.

## Typography

- Display: `Archivo Black`, uppercase only for hero and major section statements; tight tracking `-0.045em`, line-height `0.86–0.94`.
- Body/UI: `IBM Plex Sans`, weights 400/500/600; highly readable, slightly editorial, compact at UI sizes.
- Data/metadata/code: `JetBrains Mono`, weights 400/500/600; uppercase labels with tracking `0.08–0.16em`.
- Hero display uses responsive `clamp(4rem, 10.5vw, 10rem)` rather than unbounded viewport text.
- Body measure stays between 58 and 72 characters.

## Grid and composition

- Desktop uses a 12-column editorial grid within a maximum width of 1440px.
- Main margins: 24px mobile, 40px tablet, 56–72px desktop.
- Sections use generous vertical rhythm: 96–144px desktop, 64–88px mobile.
- Preserve visible grid logic with hairlines, index numbers, baselines, and deliberate asymmetry.
- Hero is split asymmetrically: identity and proposition on the left; computational object plus live-status metadata on the right.
- Avoid a stack of rounded cards. Most content lives in open grid rows separated by rules. Rounded corners are reserved for pills, small controls, and the dimensional object frame.
- Project summaries use editorial rows with a numerical index, title, outcome, tags, and one clear action.

## Components

### Navigation

A fixed 56px shell with a compact monogram/name at left, section index in the center on desktop, and projects/blog/theme actions at right. Use warm paper/graphite with 85–92% opacity and a backdrop blur. A 2px orange progress line tracks page position. Mobile navigation opens as a full-width ruled panel, not a floating generic drawer.

The navigation, footer, media diagrams, and all interactive states must use only the neutral ink/paper tokens and Signal Orange. Blue is forbidden, including inherited icon, focus, link, or progress colors. The theme control is always visible and explicit: a sun/moon icon plus `LIGHT` or `DARK` text on desktop, with an accessible label on mobile. It switches directly between the two themes; do not cycle through an ambiguous third state.

### Buttons and links

- Primary: solid ink background with paper text; square-ish 2px border; 8px radius maximum.
- Signal action: orange background with dark ink; used once per section maximum.
- Secondary: transparent with a 1px hairline.
- Text links use a directional arrow or mono index and animate 4–8px horizontally on hover.
- Focus rings are 2px orange plus a 4px translucent offset halo.

### Section headers

Every major section begins with a mono index (`01 / EXPERIENCE`) and a strong horizontal rule. One large editorial statement is allowed per section. Dense metadata remains mono; prose remains body sans.

### Project rows

Use a full-width ruled row rather than a floating card. On hover/focus, shift the title slightly, reveal an orange arrow, and tint the background with a 3–5% orange wash. Project outcome metrics should be visually prominent.

Never use blank media placeholders. When a project needs a visual, draw a compact project-specific technical diagram from simple SVG/CSS primitives: calcium traces and event peaks for Neuro Window Explorer, a query-to-chunks-to-answer retrieval path for the RAG assistant, an event pipeline for AWS automation, and an import-to-strategy timeline for collections. Every clickable element must have visible text or a recognizable icon with an accessible label, a non-placeholder destination, hover/focus feedback, and a useful default state.

### Forms

Persistent visible labels, warm solid fields, strong focus states, inline validation, and an `aria-live` status region. Avoid icon-only placeholder labels.

## Motion and interaction

Motion should convey system behavior, not decorate every surface.

- Entrance choreography: one 500–700ms hero sequence with staggered opacity/translate; sections otherwise reveal through small 12–20px movements.
- Scroll progress: native CSS scroll-driven animation where supported.
- Computational object: pointer/scroll response capped to small rotations and depth translations; no constant GPU animation after settling.
- The computational object should show a meaningful four-stage inference/retrieval pipeline rather than plain stacked bricks: input vectors, embedding field, retrieval/ranking nodes, and grounded output. Use visible connecting paths, sparse orange activation nodes, coordinates, and restrained depth. Cap pointer tilt to approximately 4 degrees and depth travel to 8–12px. It must be interesting while completely still.
- Project rows: 160–220ms transform/color transitions.
- Marquee: optional single finite or user-controlled technical ticker; never multiple infinite bands.
- Respect `prefers-reduced-motion`: remove parallax, 3D rotation, marquees, and large scaling; retain instant state/color feedback.
- Never hijack native scrolling. Do not add Lenis or a continuous requestAnimationFrame loop globally.

## 3D and performance constraints

- Prefer CSS 3D transforms, SVG, or Canvas 2D for the computational object.
- If React Three Fiber is selected during implementation, isolate it in a dynamically loaded client component, load it after primary content, use `frameloop="demand"`, cap DPR at 1.5, reuse geometries/materials, avoid textures and post-processing, stop rendering while offscreen, and show a static CSS/SVG fallback on mobile or reduced-motion devices.
- Keep server components as the default. Client boundaries should wrap only navigation state, the contact form, theme control, and the reactive hero object.
- Defer third-party embeds until near viewport or explicit user action.

## Content hierarchy

1. Name, AI/ML positioning, and concise proof statement.
2. Current work/status and two primary actions: view projects and contact/book.
3. Selected systems with measurable outcomes.
4. Experience and research progression.
5. Skills represented as capability groups, not a logo cloud.
6. Writing and personal texture.
7. Contact and scheduling.

## Anti-patterns

- No purple/blue gradients, glass-card grids, glowing blobs, random terminal windows, Matrix rain, or excessive neon.
- No generic dashboard widgets or fake metrics.
- No full-page WebGL, scroll hijacking, autoplay sound, custom cursor requirement, or motion without a reduced-motion path.
- No excessive pill badges, large corner radii, or identical cards repeated down the page.
- No font, color, spacing, or component style outside this document.
