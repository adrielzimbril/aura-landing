"use client";

import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    { title: "Assess", desc: "Environmental scanning and spatial awareness mapping." },
    { title: "Simulate", desc: "Physics-based intent verification in a cognitive sandbox." },
    { title: "Constrain", desc: "Applying multi-layer safety kernels and force envelopes." },
    { title: "Deploy", desc: "Real-time motor actuation with sub-millisecond precision." },
  ];

  return (
    <section
      id="process"
      className="reveal-band relative border-b border-white/10 bg-neutral-950/30 px-6 py-24 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="scanning-line-v opacity-10" />
      <p className="font-orbitron text-xs uppercase tracking-[0.35em] text-cyan-400">
        // Deployment Protocol
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="interactive-panel card-bg-animated animate-bg-drift border border-white/10 p-8 min-h-[220px] flex flex-col justify-between group"
          >
            <div className="shimmer-overlay" />
            <div className="relative z-10 flex justify-between items-start">
              <div className="font-mono text-[10px] text-neutral-500">
                PROTOCOL_0{index + 1}
              </div>
              <div className="h-1 w-8 bg-cyan-400/20 group-hover:bg-cyan-400/60 transition-colors" />
            </div>
            <div className="relative z-10 mt-8">
              <h2 className="font-orbitron text-xl uppercase text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h2>
              <p className="mt-3 font-mono text-[11px] leading-relaxed text-neutral-500">
                {step.desc}
              </p>
            </div>
            <div className="relative z-10 mt-4 h-px w-0 bg-cyan-400/40 group-hover:w-full transition-all duration-700" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

