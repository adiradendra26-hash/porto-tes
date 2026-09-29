"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_LINKS, PERSONAL_DATA } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-line-faint bg-charcoal-900/90 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="Dendra Adira Pratama — kembali ke atas"
          >
            <span className="flex h-7 w-7 items-center justify-center border border-line-subtle font-mono text-[10px] font-semibold tracking-widest text-offwhite-100 transition-colors duration-200 group-hover:border-accent/60 group-hover:text-accent">
              {PERSONAL_DATA.moniker}
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-offwhite-100 transition-colors duration-200 group-hover:text-accent xs:inline-block">
              Dendra
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 sm:flex">
            <nav
              aria-label="Navigasi utama"
              className="flex items-center gap-6 lg:gap-7"
            >
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.number}
                  href={link.href}
                  className="u-reveal label py-1 transition-colors duration-200 hover:text-offwhite-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile: toggle + menu */}
          <div className="flex items-center gap-2.5 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center border border-line-subtle text-offwhite-200 transition-colors duration-200 hover:border-line-strong focus:outline-none focus-visible:ring-1 focus-visible:ring-accent touch-manipulation"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? (
                <X className="h-4 w-4 text-accent" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-charcoal-900 px-6 pb-10 pt-24 sm:hidden"
          >
            <div className="absolute inset-x-6 top-5 flex items-center justify-between border-b border-line-faint pb-4">
              <span className="label">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-line-subtle transition-colors hover:border-line-strong"
                aria-label="Tutup menu"
              >
                <X className="h-4 w-4 text-accent" />
              </button>
            </div>

            <nav aria-label="Navigasi mobile" className="my-auto flex flex-col">
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.a
                  key={item.number}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.22 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex items-baseline justify-between border-b border-line-faint py-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent touch-manipulation"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label text-accent">{item.number}</span>
                    <span className="text-xl font-medium tracking-tight text-offwhite-100 transition-colors group-active:text-accent">
                      {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                    </span>
                  </span>
                  <span className="label opacity-50 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-line-faint pt-5 pb-safe">
              <div>
                <p className="text-xs font-medium text-offwhite-200">
                  {PERSONAL_DATA.name}
                </p>
                <p className="label mt-0.5">{PERSONAL_DATA.location}</p>
              </div>
              <span className="label">{PERSONAL_DATA.currentYear}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
