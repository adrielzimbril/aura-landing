"use client";

import { motion } from "framer-motion";

const cases = [
  { title: "Private operations", desc: "Discreet AGI assistance for high-security personal and corporate environments." },
  { title: "Clinical assistance", desc: "Precise motor control and patient context memory for advanced healthcare support." },
  { title: "Hazard response", desc: "Safe exploration and interaction in environments beyond human biological limits." }
];

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="reveal-band relative border-b border-white/10 bg-black px-6 py-24 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="scanning-line-v opacity-10" />
      <p className="font-orbitron text-xs uppercase tracking-[0.35em] text-cyan-400">
        // Operational Domains
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {cases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="interactive-panel card-bg-animated animate-bg-drift border border-white/10 bg-white/[0.03] p-10 group"
          >
            <div className="shimmer-overlay" />
            <div className="relative z-10 font-mono text-[10px] text-neutral-500">
              CASE_0{index + 1}
            </div>
            <h2 className="relative z-10 mt-8 font-orbitron text-2xl uppercase text-white group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h2>
            <p className="relative z-10 mt-4 text-sm font-mono leading-7 text-neutral-500">
              {item.desc}
            </p>
            
            {/* Added detail to fill space */}
            <div className="relative z-10 mt-8 space-y-2 border-t border-white/5 pt-6">
              <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-tighter text-neutral-600">
                <span>Latency_Target</span>
                <span className="text-cyan-400">{"< 0.1ms"}</span>
              </div>
              <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-tighter text-neutral-600">
                <span>Encryption_Auth</span>
                <span className="text-cyan-400">RSA_4096</span>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-2">
               <span className="h-1 w-1 bg-cyan-400 animate-pulse" />
               <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/40">Active_Protocol</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

