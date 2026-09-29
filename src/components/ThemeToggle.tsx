"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const THEME_ANIM_MS = 320;

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  // null = belum mounted (SSR & render pertama) — render netral agar tidak hydration mismatch
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("light") ? "dark" : "light";

    // Cross-fade halus saat pergantian tema
    root.classList.add("theme-anim");
    root.classList.toggle("light", next === "light");

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage bisa gagal (private mode) — tema tetap berubah untuk sesi ini
    }

    window.setTimeout(() => root.classList.remove("theme-anim"), THEME_ANIM_MS);
    setTheme(next);
  }, []);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === null ? "Toggle color theme" : isLight ? "Switch to dark mode" : "Switch to light mode"
      }
      aria-pressed={theme === null ? undefined : isLight}
      title={theme === null ? "Toggle color theme" : isLight ? "Dark mode" : "Light mode"}
      className={`group relative flex h-9 w-9 shrink-0 items-center justify-center border border-line-subtle text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${className}`}
    >
      <Sun
        aria-hidden="true"
        className={`absolute h-4 w-4 transition-all duration-300 ease-out-soft ${
          isLight ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-4 w-4 transition-all duration-300 ease-out-soft ${
          isLight ? "-rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
