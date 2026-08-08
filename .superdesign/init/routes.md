# Route Map

All routes use `src/app/layout.tsx` and are statically exported.

| URL | Entry file | Summary |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Long-form portfolio: hero, experience, education, skills, featured projects, personal interests, contact form, Cal.com, footer. |
| `/projects` | `src/app/projects/page.tsx` | Detailed project case studies and smaller experiments. |
| `/blog` | `src/app/blog/page.tsx` | Local MDX post index plus Substack posts. |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Statically generated MDX article. |
| `/robots.txt` | `src/app/robots.ts` | Static crawler policy. |
| `/sitemap.xml` | `src/app/sitemap.ts` | Static sitemap. |

There is no separate router configuration; routing is provided by the Next.js App Router filesystem.
