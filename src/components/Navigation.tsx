"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { index: "01", label: "Experience", id: "experience" },
  { index: "02", label: "Projects", id: "projects" },
  { index: "03", label: "Skills", id: "skills" },
  { index: "04", label: "Contact", id: "contact" },
];

function ThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-button"
      aria-label="Toggle color theme"
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <span className="hidden sm:inline">
        <span className="dark:hidden">Light</span>
        <span className="hidden dark:inline">Dark</span>
      </span>
    </button>
  );
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isSubPage = pathname !== "/";

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frame = window.requestAnimationFrame(updateProgress);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (isSubPage) return;

    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isSubPage]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  if (isSubPage) {
    const sectionName = pathname.startsWith("/projects") ? "Projects" : "Journal";
    return (
      <header className="site-header">
        <div className="nav-inner">
          <Link href="/" className="brand-mark" aria-label="Back to portfolio home">
            <span className="brand-monogram">DA</span>
            <span>Div Agarwal</span>
          </Link>
          <span className="nav-route-label">{sectionName}</span>
          <div className="flex items-center gap-1">
            <Link href="/blog" className="nav-utility-link">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              Blog
            </Link>
            <ThemeButton />
          </div>
        </div>
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      </header>
    );
  }

  return (
    <header className="site-header">
      <div className="nav-inner">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="brand-mark">
          <span className="brand-monogram">DA</span>
          <span>Div Agarwal</span>
        </button>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-index-link ${activeSection === item.id ? "is-active" : ""}`}
                >
                  {item.index} {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/projects" className="nav-utility-link">
            All projects <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link href="/blog" className="nav-utility-link">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Blog
          </Link>
          <ThemeButton />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeButton />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className="mobile-nav-link">
              <span>{item.index}</span>
              <span>{item.label}</span>
            </button>
          ))}
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
            <span>05</span><span>All projects</span>
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
            <span>06</span><span>Journal</span>
          </Link>
        </nav>
      ) : null}

      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
    </header>
  );
}
