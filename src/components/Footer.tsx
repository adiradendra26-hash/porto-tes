"use client";

import { FOOTER_DATA } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line-faint bg-charcoal-950/60">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium tracking-tight text-offwhite-100">
            {FOOTER_DATA.name}
          </p>
          <p className="label mt-1">
            {FOOTER_DATA.role} · {FOOTER_DATA.location}
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <span className="label">© {FOOTER_DATA.year}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex h-9 items-center gap-2 border border-line-subtle px-3 text-xs font-mono uppercase tracking-widest text-offwhite-200 transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label="Kembali ke atas"
          >
            {FOOTER_DATA.backToTop}
            <ArrowUp
              aria-hidden="true"
              className="h-3.5 w-3.5 text-accent transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
