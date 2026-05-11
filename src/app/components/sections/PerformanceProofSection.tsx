"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialProof = [
  { value: 10, label: "Response loops", status: "ACCELERATED", unit: "x", target: 10 },
  { value: 4.8, label: "Motor latency", status: "MINIMAL", unit: "ms", target: 4.8 },
  { value: 18.4, label: "Recall depth", status: "PERSISTENT", unit: "y", target: 18.4 },
];

export function PerformanceProofSection() {
  const [proof, setProof] = useState(initialProof);

  useEffect(() => {
    const interval = setInterval(() => {
      setProof(prev => prev.map(item => {
        const jitter = (Math.random() * 0.2 - 0.1);
        return { 
          ...item, 
          value: parseFloat((item.target + jitter).toFixed(item.unit === "ms" ? 2 : 1)) 
        };
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="performance-proof"
      className="reveal-band relative border-b border-white/10 bg-black px-6 py-24 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="scanning-line-v opacity-30" />
      <div className="grid gap-6 md:grid-cols-3">
        {proof.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="interactive-panel card-bg-animated animate-bg-drift relative border border-cyan-400/20 bg-cyan-400/[0.03] p-10 overflow-hidden group"
          >
            <div className="shimmer-overlay" />
            <div className="relative z-10 flex justify-between items-start mb-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/60">
                // BENCHMARK_{idx + 1}
              </span>
              <span className="font-mono text-[9px] text-emerald-400 animate-pulse">
                {item.status}
              </span>
            </div>
            
            <div className="relative z-10 font-orbitron text-5xl text-white group-hover:text-cyan-300 transition-colors flex items-baseline gap-1">
              <motion.span
                key={item.value}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
              >
                {item.value}
              </motion.span>
              <span className="text-xl text-cyan-500/40">{item.unit}</span>
            </div>
            <div className="relative z-10 mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              {item.label}
            </div>
            
            <div className="absolute bottom-0 left-0 h-1 bg-cyan-400/20 w-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/3 bg-cyan-400/40"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

