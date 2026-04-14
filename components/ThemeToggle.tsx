"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after client mounts
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-14 h-14 rounded-lg flex items-center justify-center
        border border-neutral-200 dark:border-neutral-700
        bg-white dark:bg-neutral-900
        text-neutral-500 dark:text-neutral-400
        hover:border-neutral-400 dark:hover:border-neutral-500
        transition-colors duration-200 font-mono text-sm"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "○" : "●"}
    </button>
  );
}