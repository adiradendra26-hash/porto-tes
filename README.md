# Dendra Adira Pratama — Portfolio

Personal portfolio for **Dendra Adira Pratama**, an aspiring Backend Developer (Jakarta Barat, Indonesia). Built with Next.js 14 (App Router), TypeScript (strict), Tailwind CSS, and Framer Motion.

Design direction: **calm, precise, premium** — a modern developer portfolio, not a template. Two fonts (Inter + JetBrains Mono), one muted navy accent, controlled type scale, no decorative noise.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Features

- **Dark / Light mode** — follows system preference on first visit, manual choice persists in `localStorage`, smooth 350 ms cross-fade, no flash of wrong theme, no hydration mismatch.
- **Working social links** — GitHub, LinkedIn, and WhatsApp (with a pre-filled intro message) all open their real destinations. WhatsApp is presented as the primary **"Let's Talk"** CTA.
- **Project showcase** — alternating editorial rows with miniature product-interface previews (login UI / API request) and a case-study modal. Projects without repositories show `SOURCE COMING SOON`.
- **Grouped stack list** — Backend / Database / Tools, no fake progress bars.
- **Mobile-first** — fluid type scale, safe-area insets, fullscreen navigation, no horizontal overflow from 320 px up.
- **Accessible** — semantic landmarks, focus-visible rings, aria labels, `prefers-reduced-motion` support.

## Customizing

All content lives in **`src/data/portfolio.ts`**.

| What                          | Where                                                      |
| ----------------------------- | ---------------------------------------------------------- |
| GitHub / LinkedIn / WhatsApp  | `GITHUB_URL`, `LINKEDIN_URL`, `WHATSAPP_URL` (top of file) |
| WhatsApp intro message        | `WHATSAPP_MESSAGE`                                         |
| Email / major / cohort        | `PERSONAL_DATA.placeholders`                               |
| Hero metadata                 | `HERO_META`                                                |
| Projects, stack, journey, bio | `PROJECTS`, `STACK_GROUPS`, `JOURNEY`, `ABOUT_SECTION`     |

Email is intentionally left as a placeholder (`[YOUR_EMAIL]`) until provided. WhatsApp numbers must be in international format without `+` or leading `0` (e.g. `0858…` → `62858…`).

## Theming

- Tokens live once per theme in `src/app/globals.css` (`:root` = dark, `html.light` = light).
- Tailwind maps them to semantic utilities (`charcoal-*`, `offwhite-*`, `accent`, `line-faint/subtle/strong`) via `rgb(var(--…-rgb) / <alpha-value>)`.
- Accent: muted **navy** (`#33507A` light / steel-blue `#7D99B8` dark) — used only for active states, small labels, and interactive details.
- Toggle: `src/components/ThemeToggle.tsx` — navbar right on desktop, next to MENU on mobile.

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Fonts (Inter + JetBrains Mono), metadata, anti-FOUC script
│   ├── page.tsx        # Section order: Hero → About → Work → Stack → Journey → Contact
│   ├── icon.svg        # Monogram favicon
│   └── globals.css     # Theme tokens + shared primitives (.btn, .label, .u-reveal)
├── components/
│   ├── Navbar.tsx          # Compact sticky nav + fullscreen mobile menu
│   ├── ThemeToggle.tsx     # Sun/Moon, persists to localStorage
│   ├── Hero.tsx            # Name, role, intro, CTAs, metadata column
│   ├── SectionHeader.tsx   # 01 / Title pattern
│   ├── About.tsx           # 01 — About (prose + profile metadata)
│   ├── Projects.tsx        # 02 — Selected Work (showcase + case-study modal)
│   ├── ProjectPreview.tsx  # Miniature UI previews (auth / rental)
│   ├── Stack.tsx           # 03 — Stack (grouped list)
│   ├── Journey.tsx         # 04 — Journey (timeline + currently learning)
│   ├── Contact.tsx         # 05 — Contact (statement + channels)
│   └── Footer.tsx
├── data/
│   └── portfolio.ts    # ← All content, links & placeholders
└── lib/
    └── utils.ts        # cn() class merge helper
```
# porto-tes
