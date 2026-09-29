"use client";

import { motion } from "framer-motion";
import { STACK_GROUPS } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

const easeOut = [0.25, 0.6, 0.2, 1] as const;

export default function Stack() {
  return (
    <section
      id="stack"
      aria-label="Technical stack"
      className="border-t border-line-faint py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader
          number="03"
          title="Stack"
          note="Tools yang saya gunakan untuk belajar dan membangun backend — tanpa peringkat, tanpa progress bar."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STACK_GROUPS.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: gi * 0.07, ease: easeOut }}
            >
              <h3 className="label mb-4 text-accent">{group.title}</h3>
              <ul className="divide-y divide-line-faint border-y border-line-faint">
                {group.items.map((item, idx) => (
                  <li
                    key={item.name}
                    className="group flex items-baseline justify-between gap-4 py-3 transition-colors duration-200"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="label !text-[10px] text-muted-subtle transition-colors duration-200 group-hover:text-accent">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-offwhite-200 transition-colors duration-200 group-hover:text-offwhite-100">
                        {item.name}
                      </span>
                    </span>
                    <span className="text-right text-xs text-muted">
                      {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
