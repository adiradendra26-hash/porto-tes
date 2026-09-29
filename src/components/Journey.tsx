"use client";

import { motion } from "framer-motion";
import { JOURNEY, CURRENTLY_LEARNING } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

const easeOut = [0.25, 0.6, 0.2, 1] as const;

export default function Journey() {
  return (
    <section
      id="journey"
      aria-label="Perjalanan belajar"
      className="border-t border-line-faint py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader
          number="04"
          title="Journey"
          note="Progres belajar saya sejauh ini — tanpa tanggal palsu, tanpa klaim berlebihan."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <ol className="relative border-l border-line-faint pl-8 sm:pl-10">
              {JOURNEY.map((item, index) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: easeOut,
                  }}
                  className="relative pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[37px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border sm:-left-[45px] ${
                      item.status === "Current"
                        ? "border-accent bg-accent"
                        : item.status === "Completed"
                        ? "border-line-strong bg-charcoal-850"
                        : "border-line-faint bg-charcoal-850"
                    }`}
                  />

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-medium tracking-tight text-offwhite-100">
                      {item.title}
                    </h3>
                    <span
                      className={`label shrink-0 ${
                        item.status === "Current" ? "text-accent" : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="label mt-1 !text-[10px]">{item.subtext}</p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
            className="lg:col-span-5"
          >
            <div className="surface p-6 sm:p-8">
              <h3 className="text-base font-medium tracking-tight text-offwhite-100">
                {CURRENTLY_LEARNING.title}
              </h3>
              <ul className="mt-5 space-y-0 divide-y divide-line-faint">
                {CURRENTLY_LEARNING.topics.map((topic, i) => (
                  <li
                    key={topic}
                    className="flex items-baseline gap-4 py-3 text-sm text-offwhite-200"
                  >
                    <span className="label !text-[10px] text-muted-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
