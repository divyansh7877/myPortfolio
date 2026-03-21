import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import { BASE_PATH, SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Div Agarwal | Portfolio",
    template: "%s | Div Agarwal",
  },
  description: "AI/ML Engineer building intelligent systems across research and product. Full-stack execution, RAG systems, applied ML, and data products.",
  keywords: [
    "Div Agarwal",
    "Portfolio",
    "Computer Science",
    "NYU",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "Web Development",
    "Software Engineer",
    "Data Science",
  ],
  authors: [{ name: "Div Agarwal" }],
  creator: "Div Agarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Div Agarwal | Portfolio",
    description: "AI/ML Engineer building intelligent systems across research and product. Explore projects, experience, and writing.",
    siteName: "Div Agarwal Portfolio",
    images: [
      {
        url: `${BASE_PATH}/globe.svg`,
        width: 1200,
        height: 630,
        alt: "Div Agarwal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Div Agarwal | Portfolio",
    description: "AI/ML Engineer building intelligent systems across research and product. Explore projects, experience, and writing.",
    creator: "@divyansh7877",
    images: [`${BASE_PATH}/globe.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
