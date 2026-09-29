"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECTS_NOTE } from "@/data/portfolio";
import type { ProjectItem } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import ProjectPreview from "@/components/ProjectPreview";
import { ArrowRight, X } from "lucide-react";

const easeOut = [0.25, 0.6, 0.2, 1] as const;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="section-guides border-t border-line-faint py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader
          number="02"
          title="Selected Work"
          note="Proyek yang saya bangun untuk belajar menyelesaikan masalah nyata — dari autentikasi sampai manajemen inventaris."
        />

        <div className="space-y-16 sm:space-y-24">
          {PROJECTS.map((project, index) => {
            const flipped = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.55, ease: easeOut }}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                {/* Info */}
                <div
                  className={`lg:col-span-6 ${
                    flipped ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-2xl font-medium tracking-tight text-accent">
                      {project.number}
                    </span>
                    <span className="h-px flex-1 bg-line-faint" />
                    <span className="label">{project.year}</span>
                  </div>

                  <h3 className="mt-5 text-h2 font-medium tracking-tightest text-offwhite-100">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-offwhite-300">
                    {project.tagline}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="label border border-line-faint px-2 py-1"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center gap-5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-offwhite-100 transition-colors duration-200 hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label={`Lihat detail ${project.title}`}
                    >
                      View Project
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </button>
                    <span className="label">Case Study</span>
                  </div>
                </div>

                {/* Preview */}
                <div className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Buka case study ${project.title}`}
                    className="group block w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    <div className="transition-transform duration-300 ease-out-soft group-hover:scale-[1.01]">
                      <ProjectPreview kind={project.preview} />
                    </div>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-line-subtle" />
          <span className="label">
            More in progress — {PROJECTS_NOTE}
          </span>
        </motion.p>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-start overflow-y-auto overscroll-contain bg-charcoal-950/95 backdrop-blur-sm"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line-faint bg-charcoal-900/90 px-5 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex items-baseline gap-3">
                <span className="label text-accent">
                  {selectedProject.number}
                </span>
                <span className="label">Case Study</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-9 items-center gap-2 border border-line-subtle px-3 text-xs font-mono uppercase tracking-widest text-offwhite-200 transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                aria-label="Tutup case study"
              >
                Close
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mx-auto w-full max-w-3xl space-y-10 px-5 py-10 sm:px-8 sm:py-14">
              <div>
                <p className="label mb-3">
                  {selectedProject.year} · {selectedProject.role}
                </p>
                <h2
                  id="case-study-title"
                  className="text-h1 font-medium tracking-tightest text-offwhite-100"
                >
                  {selectedProject.title}
                </h2>
                <p className="mt-4 max-w-text leading-relaxed text-offwhite-300">
                  {selectedProject.overview}
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 border-y border-line-faint py-6 sm:grid-cols-3">
                <div>
                  <dt className="label mb-1">Status</dt>
                  <dd className="text-sm font-medium text-accent">
                    {selectedProject.status}
                  </dd>
                </div>
                <div>
                  <dt className="label mb-1">Role</dt>
                  <dd className="text-sm font-medium text-offwhite-200">
                    {selectedProject.role}
                  </dd>
                </div>
                <div>
                  <dt className="label mb-1">Source</dt>
                  <dd>
                    {selectedProject.sourceUrl ? (
                      <a
                        href={selectedProject.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:underline underline-offset-4"
                      >
                        View source ↗
                      </a>
                    ) : (
                      <span className="text-sm text-muted">
                        {selectedProject.sourceLinkText}
                      </span>
                    )}
                  </dd>
                </div>
              </dl>

              <div>
                <h3 className="label mb-4 text-accent">Technology</h3>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tool) => (
                    <li
                      key={tool}
                      className="border border-line-faint px-2.5 py-1 text-xs text-offwhite-200"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="label mb-4 text-accent">Implementation</h3>
                <ul className="space-y-0 divide-y divide-line-faint border-y border-line-faint">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-4 py-3 text-sm text-offwhite-300"
                    >
                      <span className="label !text-[10px] text-muted-subtle">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start justify-between gap-4 border-t border-line-faint pt-8 sm:flex-row sm:items-center">
                <span className="label">
                  Source: {selectedProject.sourceUrl ? "available" : "coming soon"}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn"
                >
                  Back to Work
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
