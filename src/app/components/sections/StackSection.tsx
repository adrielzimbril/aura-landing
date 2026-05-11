"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialStack = [
  { name: "Embodied AGI Core", status: "STABLE", icon: "⚛" },
  { name: "Persistent Memory Graph", status: "SYNCED", icon: "⌘" },
  { name: "Motor Safety Kernel", status: "ACTIVE", icon: "⎋" },
  { name: "Human Interface Layer", status: "READY", icon: "⌥" },
];

export function StackSection() {
  const [stackItems, setStackItems] = useState(initialStack);

  useEffect(() => {
    const interval = setInterval(() => {
      setStackItems(prev => prev.map(item => {
        if (Math.random() > 0.9) {
          const statuses = ["OPTIMIZING", "READY", "ACTIVE", "STABLE", "SYNCED"];
          return { ...item, status: statuses[Math.floor(Math.random() * statuses.length)] };
        }
        return item;
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="stack"
      className="reveal-band border-b border-white/10 bg-black px-6 py-24 md:px-12 lg:px-16 overflow-hidden relative"
    >
      <div className="scanning-line-v opacity-10" />
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 mb-6">
            // Core Architecture
          </p>
          <h2 className="font-orbitron text-3xl uppercase leading-tight md:text-5xl text-white">
            The Aura stack is built around <span className="text-neutral-500">body, memory, and judgment.</span>
          </h2>
          <p className="mt-8 max-w-xl font-mono text-sm leading-7 text-neutral-500">
            A vertical integration of hardware and software protocols ensuring that cognitive intent is safely translated into physical action.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-4"
        >
          {stackItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="interactive-panel card-bg-animated animate-bg-drift group relative flex items-center justify-between border border-white/10 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.05]"
            >
              <div className="shimmer-overlay" />
              <div className="relative z-10 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-black/40 font-mono text-lg text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
                  {item.icon}
                </span>
                <span className="font-orbitron text-sm uppercase tracking-wider text-neutral-200">
                  {item.name}
                </span>
              </div>
              <div className="relative z-10 flex items-center gap-3">
                <motion.span 
                  key={item.status}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="font-mono text-[9px] uppercase tracking-widest text-emerald-400"
                >
                  {item.status}
                </motion.span>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

