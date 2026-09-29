import { Lock } from "lucide-react";

/**
 * Miniature product-interface previews — purely visual, non-functional.
 * Membuat project terasa nyata tanpa gambar palsu.
 */
export default function ProjectPreview({ kind }: { kind: "auth" | "rental" }) {
  return (
    <div
      aria-hidden="true"
      className="surface card-shadow relative overflow-hidden rounded-md p-5 sm:p-6 select-none"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-line-faint pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line-strong opacity-60" />
          <span className="h-2 w-2 rounded-full bg-line-strong opacity-35" />
          <span className="h-2 w-2 rounded-full bg-line-strong opacity-20" />
        </div>
        <span className="label !text-[9px] !tracking-[0.18em] opacity-70">
          {kind === "auth" ? "auth.service" : "rental.api"}
        </span>
      </div>

      <div className="pt-4 font-mono text-[11px] leading-relaxed">
        {kind === "auth" ? (
          <>
            <div className="flex items-center gap-2 text-offwhite-200">
              <Lock className="h-3 w-3 text-accent" />
              <span className="text-[10px] tracking-widest uppercase text-muted">
                Sign in
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex h-7 items-center border border-line-faint bg-charcoal-800/50 px-2.5 text-[10px] text-muted">
                username
              </div>
              <div className="flex h-7 items-center border border-line-faint bg-charcoal-800/50 px-2.5 text-[10px] text-muted">
                ••••••••
              </div>
              <div className="flex h-7 items-center justify-center bg-accent/90 text-[10px] font-semibold tracking-widest uppercase text-[rgb(var(--accent-ink-rgb))]">
                Sign in
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-accent">
                POST
              </span>
              <span className="text-offwhite-200">/api/rentals</span>
            </div>
            <div className="mt-3 space-y-1.5 border-t border-line-faint pt-3">
              <div className="flex items-center justify-between">
                <span className="text-muted">deviceId</span>
                <span className="text-offwhite-300">&quot;STL-042&quot;</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">startDate</span>
                <span className="text-offwhite-300">&quot;2026-03-01&quot;</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">duration</span>
                <span className="text-offwhite-300">14 days</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-line-faint pt-2.5">
              <span className="text-[9px] tracking-widest uppercase text-muted">
                Response
              </span>
              <span className="text-accent">200 OK</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
