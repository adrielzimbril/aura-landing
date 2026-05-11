"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    category: "CORE_MECHANICS",
    items: [
      {
        q: "What defines Aura's Surhuman intelligence?",
        a: "Aura utilizes the Neuro-Mesh architecture, allowing for 10x faster cognitive processing and a surhuman memory capacity that transcends traditional database limits.",
      },
      {
        q: "How does the locomotion system compare to humans?",
        a: "Our proprietary force-torque envelopes allow for movement precision within 0.02mm, with kinetic latency lower than human neural transmission speeds.",
      },
    ],
  },
  {
    category: "SAFETY_ISOLATION",
    items: [
      {
        q: "Are the robotic directives hard-coded?",
        a: "Yes. The Robotic Directive Alignment Protocol is locked in read-only hardware memory segments, ensuring safety logic cannot be overwritten by external software layers.",
      },
      {
        q: "What happens during a power failure?",
        a: "Redundant mechanical brakes lock all joints in a safe state, while the ethics engine performs a graceful state-save to a local persistence layer.",
      },
    ],
  },
  {
    category: "NEURAL_STABILITY",
    items: [
      {
        q: "Does Aura experience cognitive drift?",
        a: "No. Recursive sanity checks and a multi-dimensional memory graph prevent hallucinatory drift, maintaining logical consistency across infinite operational cycles.",
      },
    ],
  },
];

export function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>("CORE_MECHANICS-0");

  return (
    <section id="faq" className="relative overflow-hidden border-b border-white/10 bg-black py-24 md:py-32">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-cyan-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-300">
              QUERY_REGISTRY
            </span>
            <span className="h-px w-8 bg-cyan-400" />
          </motion.div>
          <h2 className="mt-6 font-orbitron text-5xl uppercase text-white md:text-7xl">
            Technical <span className="text-neutral-700">FAQ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {faqData.map((section, sIdx) => (
            <div key={section.category} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 px-2">
                <span className="font-mono text-[10px] text-neutral-600">[{String(sIdx + 1).padStart(2, '0')}]</span>
                <span className="h-px flex-grow bg-white/10" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">{section.category}</h3>
              </div>
              
              {section.items.map((item, iIdx) => {
                const id = `${section.category}-${iIdx}`;
                const isExpanded = expandedIndex === id;

                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden border transition-all duration-500 ${
                      isExpanded 
                        ? "border-cyan-400/30 bg-cyan-400/[0.03] shadow-[0_0_40px_rgba(34,211,238,0.05)]" 
                        : "border-white/5 bg-white/[0.01] hover:border-white/10"
                    } card-bg-animated animate-bg-drift`}
                  >
                    <div className="shimmer-overlay" />
                    
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : id)}
                      className="flex w-full flex-col p-6 text-left"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-orbitron text-sm uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                          {item.q}
                        </span>
                        <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border ${
                          isExpanded ? "border-cyan-400 text-cyan-400" : "border-neutral-700 text-neutral-700"
                        }`}>
                          {isExpanded ? <Minus size={10} /> : <Plus size={10} />}
                        </div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-5 font-mono text-[11px] leading-6 text-neutral-500 uppercase tracking-wide">
                          {item.a}
                        </p>
                        
                        <div className="mt-6 flex items-center gap-4 text-[8px] font-mono text-cyan-400/40">
                          <span>STATUS: VERIFIED</span>
                          <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
                          <span>SOURCE: CORE_DOCS_V4</span>
                        </div>
                      </motion.div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
