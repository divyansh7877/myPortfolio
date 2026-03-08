"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Home, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blog") || pathname?.startsWith("/myPortfolio/blog");
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = navItems
        .filter((item) => item.href !== "#")
        .map((item) => item.href.replace("#", ""));

      let currentSection = "";

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(window.scrollY < 100 ? "" : currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isBlogPage) {
    return (
      <>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed left-0 right-0 top-0 z-40 px-4 py-4"
        >
          <div className="mx-auto max-w-6xl">
            <div className="shell-panel surface-grid rounded-[1.75rem] px-3 py-3">
              <div className="flex items-center justify-between gap-3 px-2 sm:px-3">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent)]"
                >
                  <Home className="h-4 w-4" />
                  <span>Back to Portfolio</span>
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                  <span className="section-kicker text-[color:var(--muted)]">Journal</span>
                  <span className="status-dot" />
                </div>

                <Link
                  href="/blog"
                  className="data-pill border-[color:var(--accent-soft)] text-[color:var(--accent)]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>

        <motion.div className="fixed left-0 right-0 top-0 z-50 h-px bg-transparent">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-alt)] to-[color:var(--accent)]"
            style={{ scaleX: progressScaleX }}
          />
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 right-0 top-0 z-40 px-4 py-4"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className={`shell-panel surface-grid rounded-[1.75rem] px-3 py-3 transition-all duration-300 ${
              isScrolled ? "border-[color:var(--accent-soft)] shadow-[0_28px_90px_-48px_var(--shadow-accent)]" : ""
            }`}
          >
            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={() => handleNavClick("#")}
                className="group flex items-center gap-3 rounded-2xl px-4 py-2.5 text-left transition-colors hover:text-[color:var(--accent)]"
              >
                <span className="status-dot" />
                <div className="leading-tight">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Portfolio
                  </p>
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">Div Agarwal</p>
                </div>
              </button>

              <div className="h-10 w-px bg-[color:var(--border)]" />

              <div className="flex flex-1 items-center justify-center gap-1">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "#"
                      ? activeSection === "" && isScrolled
                      : activeSection === item.href.replace("#", "");

                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-[color:var(--foreground)]"
                          : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <Link
                href="/blog"
                className="data-pill border-[color:var(--accent-soft)] text-[color:var(--accent)]"
              >
                <FileText className="h-3.5 w-3.5" />
                Blog
              </Link>
            </div>

            <div className="flex items-center justify-between px-2 md:hidden">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-2xl px-2 py-1.5 text-sm font-semibold text-[color:var(--foreground)]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#");
                }}
              >
                <span className="status-dot" />
                <span>Div Agarwal</span>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-2xl border border-[color:var(--border)] bg-[var(--code-bg)] p-2.5 transition-colors hover:border-[color:var(--accent)]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="shell-panel surface-grid absolute left-4 right-4 top-24 rounded-[1.75rem] p-4"
            >
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-3">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    Navigation
                  </p>
                  <p className="text-sm font-medium text-[color:var(--foreground)]">Homepage sections</p>
                </div>

                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="data-pill px-3 py-2 text-[color:var(--accent)]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Blog
                </Link>
              </div>

              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive =
                    item.href === "#"
                      ? activeSection === ""
                      : activeSection === item.href.replace("#", "");

                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
                        isActive
                          ? "border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)] text-[color:var(--foreground)]"
                          : "text-[color:var(--muted)] hover:bg-[var(--code-bg)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      {item.label === "Home" && <Home className="h-4 w-4" />}
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActive"
                          className="ml-auto h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed left-0 right-0 top-0 z-50 h-px bg-transparent">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-alt)] to-[color:var(--accent)]"
          style={{ scaleX: progressScaleX }}
        />
      </motion.div>
    </>
  );
}
