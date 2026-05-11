"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tiers = [
  { name: "Research", description: "Controlled Aura access for approved academic partners.", status: "VERIFIED" },
  { name: "Industrial", description: "High-scale deployment for manufacturing and logistics.", status: "RESTRICTED" },
  { name: "Executive", description: "Full-spectrum integration for personal and corporate AGI.", status: "PROTOCOL_X" },
];

export function LicensingSection() {
  const [safetyScore, setSafetyScore] = useState(99.99);

  useEffect(() => {
    const interval = setInterval(() => {
      setSafetyScore(99.98 + Math.random() * 0.02);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="licensing"
      className="reveal-band relative border-b border-white/10 bg-[#050505] overflow-hidden"
    >
      <div className="scanning-line-v opacity-10" />
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/5 via-white/0 to-cyan-500/5 px-6 py-12 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-orbitron text-[10px] uppercase tracking-[0.45em] text-cyan-400">
            // Validation console
          </p>
          <h2 className="mt-4 font-orbitron text-4xl uppercase md:text-5xl text-white">
            Deployment <span className="text-neutral-600">Channels</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="interactive-panel card-bg-animated animate-bg-drift relative border-b border-white/10 p-8 md:p-12 lg:col-span-8 lg:border-r lg:border-b-0"
        >
          <div className="shimmer-overlay" />
          <div className="relative z-10 inline-flex items-center gap-3 border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 font-mono text-[10px] uppercase text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Production environment verified
          </div>

          <h3 className="relative z-10 mt-8 font-orbitron text-4xl uppercase leading-none text-white md:text-7xl">
            Human
            <span className="block text-neutral-800">Integrity</span>
          </h3>

          <div className="relative z-10 mt-12 grid gap-8 md:grid-cols-2 items-center">
            <p className="border-l-2 border-cyan-400/30 pl-6 font-mono text-sm leading-7 text-neutral-400">
              Every deployment tier requires physical safety envelopes, memory
              governance, identity controls, and audit-ready reasoning traces.
              Zero-latency policy enforcement is standard.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                  Safety checks
                </div>
                <motion.div 
                  key={safetyScore}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 font-orbitron text-3xl text-white"
                >
                  {safetyScore.toFixed(2)}%
                </motion.div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                  Response
                </div>
                <div className="mt-2 font-orbitron text-3xl text-cyan-400">&lt;5ms</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:col-span-4 bg-black/40">
          {tiers.map((tier, idx) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="interactive-panel card-bg-animated animate-bg-drift group relative border-b border-white/10 p-10 last:border-b-0 transition-all hover:bg-white/[0.03]"
            >
              <div className="shimmer-overlay" />
              <div className="relative z-10 flex justify-between items-start mb-4">
                <h3 className="font-orbitron text-2xl uppercase tracking-[0.2em] text-white group-hover:text-cyan-300 transition-colors">
                  {tier.name}
                </h3>
                <span className="font-mono text-[9px] border border-white/10 px-2 py-0.5 text-neutral-500">
                  {tier.status}
                </span>
              </div>
              <p className="relative z-10 font-mono text-xs leading-7 text-neutral-500">
                {tier.description}
              </p>
              <div className="relative z-10 mt-6 flex items-center gap-2 overflow-hidden">
                 <div className="h-px flex-1 bg-white/10" />
                 <span className="text-[10px] font-mono text-cyan-400/40 uppercase">Aura_Access_v1</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

