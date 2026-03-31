"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, FileText, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-8 w-8" />;

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-md text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isBlogPage =
    pathname?.startsWith("/blog") ||
    pathname?.startsWith("/myPortfolio/blog");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 40);
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      const sections = navItems.map((i) => i.href.replace("#", ""));
      let current = "";
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  if (isBlogPage) {
    return (
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-sm font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text)]"
          >
            &larr; Portfolio
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--text-secondary)]">
            Journal
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-sm text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              Blog
            </Link>
            <ThemeButton />
          </div>
        </div>
        <div
          className="h-px origin-left bg-[color:var(--accent)] transition-transform duration-100"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </header>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${
        scrolled
          ? "border-[color:var(--border)] bg-[color:var(--bg)]/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* Desktop nav */}
      <div className="mx-auto hidden h-14 max-w-5xl items-center justify-between px-6 md:flex">
        {/* Logo / name */}
        <button
          onClick={() => scrollTo("#")}
          className="font-display text-sm font-semibold tracking-tight text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]"
        >
          Div Agarwal
        </button>

        {/* Links */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`rounded px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "text-[color:var(--text)] font-medium"
                        : "text-[color:var(--text-secondary)] hover:text-[color:var(--text)]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="sr-only">(current section)</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/projects"
            className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
          >
            All Projects
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
          >
            <FileText className="h-3.5 w-3.5" />
            Blog
          </Link>
          <ThemeButton />
        </div>
      </div>

      {/* Mobile nav */}
      <div className="flex h-14 items-center justify-between px-4 md:hidden">
        <button
          onClick={() => scrollTo("#")}
          className="font-display text-sm font-semibold text-[color:var(--text)]"
        >
          Div Agarwal
        </button>
        <div className="flex items-center gap-1">
          <ThemeButton />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--bg)] px-4 pb-4 md:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1 pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className={`w-full rounded px-3 py-2.5 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-[color:var(--surface)] font-medium text-[color:var(--text)]"
                          : "text-[color:var(--text-secondary)] hover:text-[color:var(--text)]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center gap-2 rounded px-3 py-2.5 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Scroll progress */}
      <div
        className="h-px origin-left bg-[color:var(--accent)] transition-transform duration-100"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
