"use client";

import { motion } from "framer-motion";

export function EvaluationsSection() {
  const evals = [
    { label: "Memory continuity", status: "VERIFIED", score: "99.8%" },
    { label: "Task completion", status: "VERIFIED", score: "96.4%" },
    { label: "Force compliance", status: "VERIFIED", score: "100.0%" },
  ];

  return (
    <section
      id="evaluations"
      className="reveal-band relative border-b border-white/10 bg-neutral-950/30 px-6 py-24 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="scanning-line-v opacity-10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="interactive-panel card-bg-animated animate-bg-drift border border-white/10 bg-black/50 p-8 md:p-12 relative overflow-hidden"
      >
        <div className="shimmer-overlay" />
        <p className="relative z-10 font-orbitron text-xs uppercase tracking-[0.35em] text-cyan-400">
          // Performance Metrics
        </p>
        <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-3">
          {evals.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="interactive-panel border border-white/10 bg-white/[0.02] p-6 group hover:bg-white/[0.05] transition-all"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                  <span className="h-1 w-1 bg-emerald-400 rounded-full animate-pulse" />
                  {item.status}
                </div>
                <div className="font-mono text-[10px] text-cyan-400/60">{item.score}</div>
              </div>
              <h2 className="font-orbitron text-lg uppercase text-white group-hover:text-cyan-300 transition-colors">
                {item.label}
              </h2>
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: item.score }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-cyan-400/40" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

