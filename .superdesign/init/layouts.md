# Shared Layouts

## RootLayout

- Source: `src/app/layout.tsx`
- Renders the font variables, global theme provider, persistent navigation, and route content.

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-variable-stack antialiased">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Navigation

- Source: `src/components/Navigation.tsx`
- Persistent 56px fixed header. Desktop has section buttons, projects/blog links, and theme control. Mobile has a name mark, theme control, and collapsible menu. Subpages render a back link, route label, blog link, and theme control.
- Full implementation source is 221 lines and is passed directly to design calls from `src/components/Navigation.tsx`.

## Footer

- Source: `src/components/Footer.tsx`
- Centered contact/social links, resume/transcript download actions, and copyright line.
- Full implementation source is passed directly to design calls from `src/components/Footer.tsx`.

## ThemeProvider

- Source: `src/components/ThemeProvider.tsx`
- Applies `dark`, `light`, or system-resolved classes to the document root and persists the selection.
- Full implementation source is passed directly to design calls from `src/components/ThemeProvider.tsx`.
