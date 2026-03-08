"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import { Moon, Sun, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeToggleClient />;
}

function ThemeToggleClient() {
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "Auto";

  return (
    <motion.button
      onClick={toggleTheme}
      className="shell-panel fixed right-4 top-20 z-50 flex items-center gap-2 rounded-2xl px-3 py-2.5 text-[color:var(--foreground)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] md:right-5 md:top-5"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--muted)] md:block">
        {themeLabel}
      </span>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : theme === "light" ? 180 : 90,
          scale: 1,
        }}
        key={theme}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-[color:var(--accent)]" />
        ) : theme === "light" ? (
          <Sun className="h-5 w-5 text-[color:var(--accent)]" />
        ) : (
          <Laptop className="h-5 w-5 text-[color:var(--accent)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
