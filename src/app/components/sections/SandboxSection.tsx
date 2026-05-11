"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialLines = [
  { cmd: "scenario.load", arg: "assistive_lift", status: "READY", color: "text-cyan-300" },
  { cmd: "constraint.force_limit", arg: "640N", status: "SAFE", color: "text-white" },
  { cmd: "memory.recall", arg: "operator_context", status: "MATCH", color: "text-cyan-300" },
  { cmd: "simulation.run", arg: "physics_engine_v4", status: "ACTIVE", color: "text-emerald-400" },
];

function TypingLine({ line, delay }: { line: any, delay: number }) {
  const [displayText, setDisplayText] = useState("");
  const fullText = `${line.cmd}("${line.arg}")`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [fullText, delay]);

  return (
    <div className="flex justify-between border-b border-white/5 pb-4 last:border-0">
      <div className="flex gap-2">
         <span className="text-neutral-600">❯</span>
         <span className="text-neutral-300 font-mono">{displayText}</span>
         {displayText.length < fullText.length && (
           <span className="w-1.5 h-3 bg-cyan-400 animate-pulse self-center" />
         )}
      </div>
      {displayText.length === fullText.length && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${line.color} animate-pulse`}
        >
          {line.status}
        </motion.span>
      )}
    </div>
  );
}

export function SandboxSection() {
  const [probability, setProbability] = useState(99.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setProbability(99 + Math.random() * 0.9);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="sandbox"
      className="reveal-band relative border-b border-white/10 bg-black px-6 py-24 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="scanning-line-v opacity-20" />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-orbitron text-[10px] uppercase tracking-[0.45em] text-cyan-400">
            // Sandbox Mode
          </p>
          <h2 className="mt-5 font-orbitron text-4xl uppercase leading-tight md:text-5xl text-white">
            Simulate before <span className="text-neutral-600">physical execution.</span>
          </h2>
          <p className="mt-8 font-mono text-sm leading-7 text-neutral-500 max-w-md">
            Aura runs 10,000 parallel physics simulations in its cognitive sandbox before committing to high-force movements.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="interactive-panel card-bg-animated animate-bg-drift relative border border-white/10 bg-white/[0.02] p-8 font-mono text-xs overflow-hidden"
        >
          <div className="shimmer-overlay" />
          <div className="relative z-10 space-y-4">
            {initialLines.map((line, idx) => (
              <TypingLine key={line.cmd} line={line} delay={idx * 0.5} />
            ))}
          </div>

          <div className="relative z-10 mt-8">
            <div className="flex justify-between items-center mb-2">
               <span className="text-[10px] uppercase text-neutral-500">Sim_Probability_Success</span>
               <motion.span 
                key={probability}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-cyan-400 font-mono"
               >
                 {probability.toFixed(1)}%
               </motion.span>
            </div>
            <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${probability}%` }}
                 transition={{ duration: 1 }}
                 className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" 
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

