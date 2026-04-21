"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "trc_theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme | null) ??
      "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  if (!mounted) {
    return <div aria-hidden className="w-16 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="relative inline-flex h-8 w-16 shrink-0 items-center rounded-full border border-border bg-card-hover transition-colors hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <Sun
        size={12}
        className={`absolute left-2.5 top-1/2 -translate-y-1/2 text-muted transition-opacity ${
          isDark ? "opacity-60" : "opacity-0"
        }`}
      />
      <Moon
        size={12}
        className={`absolute right-2.5 top-1/2 -translate-y-1/2 text-muted transition-opacity ${
          isDark ? "opacity-0" : "opacity-60"
        }`}
      />
      <motion.span
        initial={false}
        animate={{ x: isDark ? 34 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="absolute top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-sm"
      >
        {isDark ? (
          <Moon size={12} className="text-on-accent" />
        ) : (
          <Sun size={12} className="text-on-accent" />
        )}
      </motion.span>
    </button>
  );
}
