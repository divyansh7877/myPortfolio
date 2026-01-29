import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

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
  title: {
    default: "Div Agarwal | Portfolio",
    template: "%s | Div Agarwal",
  },
  description: "Computer Science Graduate from NYU. AI/ML Enthusiast. Specializing in Machine Learning, Deep Learning, and Full Stack Development.",
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
    url: "https://divyansh7877.github.io/myPortfolio",
    title: "Div Agarwal | Portfolio",
    description: "Computer Science Graduate from NYU. AI/ML Enthusiast. Explore my projects and experience.",
    siteName: "Div Agarwal Portfolio",
    images: [
      {
        url: "/myPortfolio/globe.svg", // Using an existing asset as a placeholder or we could generate one. 
        width: 1200,
        height: 630,
        alt: "Div Agarwal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Div Agarwal | Portfolio",
    description: "Computer Science Graduate from NYU. AI/ML Enthusiast. Explore my projects and experience.",
    creator: "@divyansh7877", // Assuming this handle, or generic
    images: ["/myPortfolio/globe.svg"],
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
    canonical: "https://divyansh7877.github.io/myPortfolio",
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
