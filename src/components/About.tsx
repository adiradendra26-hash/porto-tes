"use client";

import { motion } from "framer-motion";
import { ABOUT_SECTION, PERSONAL_DATA } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

const easeOut = [0.25, 0.6, 0.2, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-label="Tentang Dendra Adira Pratama"
      className="section-guides border-t border-line-faint py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader
          number={ABOUT_SECTION.number}
          title={ABOUT_SECTION.title}
          note="A short profile — who I am and what I focus on."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Prose */}
          <div className="lg:col-span-7">
            {ABOUT_SECTION.body.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: easeOut }}
                className="max-w-text text-lead leading-relaxed text-offwhite-300"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.14, ease: easeOut }}
              className="mt-6 max-w-text text-sm leading-relaxed text-muted"
            >
              Saat ini saya sedang membangun fondasi melalui proyek nyata —
              bukan sekadar mengejar judul, tetapi memahami setiap sistem yang
              saya bangun.
            </motion.p>
          </div>

          {/* Profile metadata */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
            className="lg:col-span-5 lg:border-l lg:border-line-faint lg:pl-12"
          >
            {ABOUT_SECTION.metadata.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-6 border-b border-line-faint py-3.5 first:border-t lg:first:border-t-0"
              >
                <dt className="label">{item.label}</dt>
                <dd className="text-right text-sm font-medium text-offwhite-200">
                  {item.value}
                </dd>
              </div>
            ))}

            <div className="mt-4 flex items-baseline justify-between gap-6">
              <span className="label">Major</span>
              <span className="text-sm text-muted">
                {PERSONAL_DATA.placeholders.major}
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-6">
              <span className="label">Cohort</span>
              <span className="text-sm text-muted">
                {PERSONAL_DATA.placeholders.schoolYears}
              </span>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
