# Extractable Components

## Navigation

- Source: `src/components/Navigation.tsx`
- Category: layout
- Description: Persistent responsive portfolio navigation with route-aware subpage mode, section links, mobile menu, progress indicator, and theme control.
- Extractable props: `activeSection` (string, default `""`), `isSubPage` (boolean, default `false`), `mobileOpen` (boolean, default `false`)
- Hardcoded: Name mark, route links, Lucide icon choices, labels, all visual classes

## Footer

- Source: `src/components/Footer.tsx`
- Category: layout
- Description: Social/contact footer with document download actions.
- Extractable props: none
- Hardcoded: Contact destinations, document names, Lucide icons, all visual classes

## ThemeToggle

- Source: `src/components/ThemeToggle.tsx`
- Category: basic
- Description: Three-state dark/system/light theme control.
- Extractable props: `theme` (string, default `"dark"`)
- Hardcoded: Moon/Sun/Laptop icons, labels, all visual classes

## ProjectRow

- Source: `src/components/ProjectsCompact.tsx`
- Category: basic
- Description: Compact featured-project entry with external links, summary, and technology tags.
- Extractable props: `title`, `description`, `tags`, `githubUrl`, `demoUrl`
- Hardcoded: Lucide icon choices and visual classes
