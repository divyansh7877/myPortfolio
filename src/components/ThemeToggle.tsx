"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button type="button" onClick={toggleTheme} className="theme-button" aria-label="Toggle light and dark theme">
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden />
      <Sun className="h-4 w-4 dark:hidden" aria-hidden />
    </button>
  );
}
