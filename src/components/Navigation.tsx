"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const isBlogPage = pathname?.startsWith("/blog");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navItems
        .filter((item) => item.href !== "#")
        .map((item) => item.href.replace("#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

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

  // Don't show nav on blog pages (except back button)
  if (isBlogPage) {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
      >
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-[var(--card-bg)]/80 border border-[color:var(--border)] rounded-full px-2 py-2 shadow-lg">
            <div className="flex items-center justify-between px-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--accent)] transition-colors"
              >
                <Home className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <a
                href="/myPortfolio/blog"
                className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]"
              >
                <FileText className="w-4 h-4" />
                Blog
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
      >
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-[var(--card-bg)]/80 border border-[color:var(--border)] rounded-full px-2 py-2 shadow-lg">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "#"
                    ? activeSection === "" && isScrolled
                    : activeSection === item.href.replace("#", "");

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[color:var(--accent)] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Blog Link */}
              <a
                href="/myPortfolio/blog"
                className="relative px-4 py-2 text-sm font-medium rounded-full text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  Blog
                </span>
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden items-center justify-between px-2">
              <Link
                href="/"
                className="text-sm font-semibold text-[color:var(--foreground)]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#");
                }}
              >
                Div Agarwal
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-[var(--code-bg)] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-[var(--card-bg)] border border-[color:var(--border)] rounded-2xl p-4 shadow-2xl"
            >
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
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        isActive
                          ? "bg-[color:var(--accent)] text-white"
                          : "text-[color:var(--muted)] hover:bg-[var(--code-bg)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      {item.label === "Home" && <Home className="w-4 h-4" />}
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActive"
                          className="ml-auto w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </motion.button>
                  );
                })}
                
                {/* Blog Link Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <a
                    href="/myPortfolio/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-[color:var(--muted)] hover:bg-[var(--code-bg)] hover:text-[color:var(--foreground)] transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Blog</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-[var(--border)]"
      >
        <motion.div
          className="h-full bg-[color:var(--accent)] origin-left"
          style={{
            scaleX: typeof window !== "undefined" 
              ? (activeSection ? 1 : 0) 
              : 0,
          }}
        />
      </motion.div>
    </>
  );
}
