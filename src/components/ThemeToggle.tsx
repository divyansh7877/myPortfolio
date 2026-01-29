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

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] shadow-lg hover:shadow-xl transition-all md:top-6 md:right-6 max-md:top-20 max-md:right-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : theme === "light" ? 180 : 90,
          scale: 1
        }}
        key={theme}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5 text-white" />
        ) : theme === "light" ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Laptop className="w-5 h-5 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
}
