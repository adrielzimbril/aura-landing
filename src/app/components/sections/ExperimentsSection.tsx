"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ExperimentsSection() {
  const [memoryStats, setMemoryStats] = useState([
    { label: "PROCEDURE_RECALL", value: "[OK]", color: "text-cyan-300" },
    { label: "RELATION_GRAPH", value: "LIVE", color: "text-cyan-300" },
    { label: "CONTEXT_SPAN", value: "YEARS", color: "text-white" },
  ]);

  const [actuation, setActuation] = useState(10.0);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setMemoryStats(prev => prev.map(stat => {
        if (stat.label === "RELATION_GRAPH") {
          return { ...stat, value: Math.random() > 0.8 ? "SYNCING..." : "LIVE" };
        }
        return stat;
      }));
    }, 1500);

    const actuationInterval = setInterval(() => {
      setActuation(10 + (Math.random() * 0.4 - 0.2));
    }, 1800);

    return () => {
      clearInterval(statsInterval);
      clearInterval(actuationInterval);
    };
  }, []);

  return (
    <section
      id="experiments"
      className="reveal-band relative border-b border-white/10 bg-[#050505] overflow-hidden"
    >
      <div className="scanning-line-v" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <motion.article 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="interactive-panel card-bg-animated animate-bg-drift flex h-80 flex-col justify-between border-r border-b border-white/10 p-8 lg:border-b-0"
        >
          <div className="shimmer-overlay" />
          <span className="relative z-10 w-fit border border-white/10 px-2 py-1 font-mono text-[10px] text-neutral-500">
            FIG. 01
          </span>
          <div className="relative z-10">
            <h2 className="font-orbitron text-xl uppercase text-white">
              Embodied cognition
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-500 font-mono">
              Aura converts human interaction into executable intent across
              speech, environment, memory, and movement.
            </p>
            
            {/* Added Telemetry to fill space */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
              <div className="space-y-1">
                <span className="block font-mono text-[8px] text-neutral-600 uppercase">Input_Flux</span>
                <span className="block font-orbitron text-xs text-cyan-400">88.4GB/s</span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[8px] text-neutral-600 uppercase">Sync_Stat</span>
                <span className="block font-orbitron text-xs text-emerald-400">STABLE</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 h-px bg-cyan-400/40 w-full animate-pulse" />
        </motion.article>

        {/* Card 2 */}
        <article className="group relative h-80 overflow-hidden border-r border-b border-white/10 lg:border-b-0">
          <Image
            src="/img/portrait-fashionable-robot.jpg"
            alt="Aura faceplate close-up"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top brightness-75 contrast-110 transition duration-700 group-hover:scale-105 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-4 left-4 z-20 border border-white/20 bg-black/80 backdrop-blur-md px-2 py-1 font-mono text-[10px] uppercase text-white">
            Core Identity
          </div>
          <div className="absolute inset-4 z-10 border border-white/10 pointer-events-none" />
          
          {/* Scanning line effect inside the image card */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-cyan-400/50 z-20 shadow-[0_0_15px_#22d3ee]"
          />
        </article>

        {/* Card 3 */}
        <motion.article 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="interactive-panel card-bg-animated animate-bg-drift flex h-80 flex-col justify-between border-r border-b border-white/10 bg-white/[0.03] p-8 md:border-b-0"
        >
          <div className="shimmer-overlay" />
          <h3 className="relative z-10 font-orbitron text-2xl uppercase leading-8 text-white">
            Superhuman memory
          </h3>
          <div className="relative z-10 space-y-3 border-t border-white/10 pt-5 font-mono text-[10px] text-neutral-500">
            {memoryStats.map((stat, idx) => (
              <div key={stat.label} className="flex justify-between items-center group/item">
                <span className="group-hover/item:text-neutral-300 transition-colors">{stat.label}</span>
                <motion.span 
                  key={stat.value}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className={`${stat.color} ${stat.value !== "YEARS" ? "animate-pulse" : ""}`}
                >
                  {stat.value}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.article>

        {/* Card 4 */}
        <motion.article 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="interactive-panel card-bg-animated animate-bg-drift flex h-80 flex-col justify-between border-b border-white/10 p-8 md:border-b-0"
        >
          <div className="shimmer-overlay" />
          <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
            04_ACTUATION
          </span>
          <div className="relative z-10 flex items-baseline gap-2">
            <motion.p 
              key={actuation}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-6xl font-orbitron text-white"
            >
              {actuation.toFixed(1)}
            </motion.p>
            <span className="font-orbitron text-2xl text-cyan-500/40">X</span>
          </div>
          <p className="relative z-10 text-sm leading-6 text-neutral-500 font-mono">
            Strength amplification with safe force envelopes and live
            environmental restraint.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

