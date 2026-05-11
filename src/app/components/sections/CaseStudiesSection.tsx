export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="reveal-band border-b border-white/10 bg-neutral-950/30 px-6 py-24 md:px-12 lg:px-16"
    >
      <p className="font-orbitron text-xs uppercase tracking-[0.35em] text-cyan-400">
        Case studies
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {["Autonomous lab assistant", "Industrial inspection pilot"].map(
          (title) => (
            <article
              key={title}
              className="interactive-panel border border-white/10 p-8"
            >
              <h2 className="font-orbitron text-2xl uppercase text-white">
                {title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-500">
                A controlled deployment path measuring continuity, safety
                handling, and measurable productivity gains against human-only
                baselines.
              </p>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
