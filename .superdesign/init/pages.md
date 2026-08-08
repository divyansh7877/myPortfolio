# Page Dependency Trees

## `/` — Home

Entry: `src/app/page.tsx`

- `src/lib/constants.ts`
- `src/components/Hero.tsx`
  - `src/lib/constants.ts`
- `src/components/Experience.tsx`
- `src/components/Education.tsx`
- `src/components/Skills.tsx`
- `src/components/ProjectsCompact.tsx`
- `src/components/Personal.tsx`
- `src/components/Contact.tsx`
- `src/components/CalEmbed.tsx`
- `src/components/Footer.tsx`
  - `src/lib/supabase.ts`
- Global layout `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/components/ThemeProvider.tsx`
  - `src/components/Navigation.tsx`

## `/projects`

Entry: `src/app/projects/page.tsx`

- Global layout `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/components/ThemeProvider.tsx`
  - `src/components/Navigation.tsx`

## `/blog`

Entry: `src/app/blog/page.tsx`

- `src/lib/mdx.ts`
- `src/components/SubstackPosts.tsx`
- Global layout `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/components/ThemeProvider.tsx`
  - `src/components/Navigation.tsx`

## `/blog/[slug]`

Entry: `src/app/blog/[slug]/page.tsx`

- `src/lib/mdx.ts`
- `src/content/blogs/*.mdx`
- Global layout `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/components/ThemeProvider.tsx`
  - `src/components/Navigation.tsx`
