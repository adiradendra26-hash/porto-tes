"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  HERO_META,
  PERSONAL_DATA,
  WHATSAPP_URL,
} from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.6, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[88svh] flex-col justify-center pb-16 pt-28 sm:pb-20 sm:pt-36"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-content grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10"
      >
        {/* LEFT — identity & introduction */}
        <div className="lg:col-span-7">
          <motion.h1
            variants={itemVariants}
            className="text-name-lg font-medium leading-tight tracking-tightest text-offwhite-100"
          >
            Dendra Adira
            <br />
            Pratama
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-5 space-y-1">
            <p className="text-lead font-medium text-offwhite-200">
              {PERSONAL_DATA.role}
              <span className="text-muted"> — in progress</span>
            </p>
            <p className="text-sm text-muted">
              Student at {PERSONAL_DATA.education} · {PERSONAL_DATA.subLocation},{" "}
              Indonesia
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-lead leading-relaxed text-offwhite-300"
          >
            {PERSONAL_DATA.intro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 xs:flex-row"
          >
            <a href="#work" className="btn btn-solid group">
              View Work
              <ArrowDown
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn group"
            >
              Let&apos;s Talk
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — visual identity & metadata (desktop) */}
        <motion.aside
          variants={itemVariants}
          className="lg:col-span-5 lg:border-l lg:border-line-faint lg:pl-10"
        >
          {/* Monogram placeholder — ganti dengan foto saat tersedia */}
          <div className="hidden items-center gap-4 lg:flex">
            <div
              aria-hidden="true"
              className="surface flex h-20 w-20 items-center justify-center"
            >
              <span className="font-mono text-lg tracking-widest text-accent">
                {PERSONAL_DATA.moniker}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-offwhite-200">
                {PERSONAL_DATA.name}
              </p>
              <p className="label mt-1">Open to connect</p>
            </div>
          </div>

          <dl className="mt-0 lg:mt-8">
            {HERO_META.map((meta) => (
              <div
                key={meta.label}
                className="flex items-baseline justify-between gap-6 border-b border-line-faint py-3.5 first:border-t lg:first:border-t-0"
              >
                <dt className="label">{meta.label}</dt>
                <dd className="text-right text-sm font-medium text-offwhite-200">
                  {meta.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </motion.div>

      {/* Scroll hint — kecil, di kiri bawah */}
      <motion.a
        href="#about"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        aria-label="Scroll ke bagian About"
        className="group absolute bottom-6 left-5 hidden items-center gap-2 sm:left-8 md:flex"
      >
        <ArrowDown
          aria-hidden="true"
          className="h-3.5 w-3.5 text-muted transition-colors duration-200 group-hover:text-accent"
        />
        <span className="label transition-colors duration-200 group-hover:text-accent">
          Scroll
        </span>
      </motion.a>
    </section>
  );
}
