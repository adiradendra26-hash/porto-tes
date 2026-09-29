import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Semantic tokens — di-mapping ke CSS variables per tema (globals.css).
        // Format RGB triplet agar modifier opacity tetap bekerja.
        charcoal: {
          950: "rgb(var(--bg-page-rgb) / <alpha-value>)",
          900: "rgb(var(--bg-primary-rgb) / <alpha-value>)",
          850: "rgb(var(--bg-surface-rgb) / <alpha-value>)",
          800: "rgb(var(--bg-raised-rgb) / <alpha-value>)",
          700: "rgb(var(--bg-overlay-rgb) / <alpha-value>)",
        },
        offwhite: {
          100: "rgb(var(--text-primary-rgb) / <alpha-value>)",
          200: "rgb(var(--text-secondary-rgb) / <alpha-value>)",
          300: "rgb(var(--text-tertiary-rgb) / <alpha-value>)",
          400: "rgb(var(--text-muted-rgb) / <alpha-value>)",
        },
        muted: "rgb(var(--text-muted-rgb) / <alpha-value>)",
        "muted-subtle": "rgb(var(--text-faint-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        line: {
          faint: "var(--border-faint)",
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Controlled heading scale — nama tidak lagi mendominasi layar.
        "name-lg": "clamp(2.625rem, 1.4rem + 5.2vw, 5.25rem)", // 42 → 84
        h1: "clamp(2rem, 1.35rem + 2.6vw, 3rem)", // 32 → 48
        h2: "clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem)", // 26 → 36
        h3: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", // 20 → 24
        lead: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)", // 17 → 20
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      maxWidth: {
        content: "68rem",
        text: "42rem",
      },
      lineHeight: {
        tight: "1.15",
        snug: "1.35",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.25, 0.6, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
