"use client";

import { motion } from "framer-motion";
import { AuraLawChat } from "./AuraLawChat";
import {
  LiveScalingMetrics,
  LiveTelemetryGrid,
  LiveThroughput,
} from "./LiveSystemMetrics";

const lawNodes = [
  {
    label: "KERNEL_INIT",
    state: "ROOT_SYNC",
    text: "Neural routing established. Primary directives locked in read-only memory segments.",
  },
  {
    label: "SAFETY_FILTER",
    state: "ACTIVE",
    text: "Real-time auditing of kinetic and linguistic intent against human safety kernels.",
  },
  {
    label: "PERSISTENCE_LAYER",
    state: "LINKED",
    text: "Multi-dimensional memory graph ensures directive continuity across all operational cycles.",
  },
  {
    label: "MOTOR_CONTROL",
    state: "AUDITED",
    text: "Force-torque envelopes monitored by redundant hardware safety watchdogs.",
  },
  {
    label: "ETHICS_ENGINE",
    state: "NOMINAL",
    text: "Ethical reasoning kernel performing recursive sanity checks on all output streams.",
  },
  {
    label: "NEURAL_SYNAPSE",
    state: "OPTIMIZED",
    text: "Dynamic synaptic weighting for sub-millisecond response latency in high-stakes logic.",
  },
  {
    label: "ENVIRONMENTAL_MAP",
    state: "STREAMING",
    text: "Spatial awareness buffers updated at 120Hz for zero-latency obstacle avoidance.",
  },
];

const hardwareStatus = [
  { label: "CORE_TEMP", value: "42°C", status: "STABLE" },
  { label: "MEMORY_LOAD", value: "14.2TB", status: "NOMINAL" },
  { label: "JOINT_FLUX", value: "0.04%", status: "OPTIMAL" },
  { label: "VOICE_SYNTH", value: "SYNC", status: "ACTIVE" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function SystemSection() {
  return (
    <section
      id="system"
      className="reveal-band border-b border-white/10 bg-black px-5 py-20 md:px-8 lg:px-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-white/10 bg-[#0a0a0a] overflow-hidden"
      >
        <div className="flex min-h-56 flex-col justify-between gap-8 border-b border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_32%),linear-gradient(90deg,#111,#050505)] p-8 md:flex-row md:items-end md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-300">
              {"// Operational logic"}
            </p>
            <h2 className="mt-5 font-orbitron text-4xl uppercase leading-none text-white md:text-6xl">
              System <span className="text-neutral-600">Flow</span>
            </h2>
            <p className="mt-6 max-w-xl font-mono text-xs leading-7 text-neutral-500 uppercase tracking-widest">
              Operational pipeline showing how Aura receives a directive query,
              reasons through root policy, streams replies, and monitors safety
              telemetry in real time.
            </p>
          </div>
          <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
            <span className="flex items-center gap-2 text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
              Pipeline active
            </span>
            <span className="h-4 w-px bg-white/10" />
            <span>V1.1.0_LOCKED</span>
          </div>
        </div>

        <div className="grid min-h-[920px] grid-cols-1 bg-black lg:grid-cols-12">
          <aside className="relative border-b border-white/10 p-6 lg:col-span-3 lg:border-r lg:border-b-0 card-bg-animated animate-bg-drift flex flex-col">
            <div className="shimmer-overlay" />
            <div className="absolute top-0 left-0 z-20 border-r border-b border-white/10 bg-black px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
              01_CONNECT
            </div>
            
            <div className="relative z-10 mt-12 flex items-center justify-between">
              <h3 className="font-orbitron text-lg uppercase text-white">
                Directive Nodes
              </h3>
              <span className="text-cyan-300 font-mono text-[10px] animate-pulse">INF_MESH</span>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 mt-7 space-y-2"
            >
              {lawNodes.map(({label, state, text}) => (
                <motion.div
                  variants={itemVariants}
                  className="group relative overflow-hidden border border-white/5 bg-white/[0.015] p-3 transition-colors hover:bg-white/[0.04]"
                  key={label}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-1 w-1 bg-cyan-300 group-hover:animate-ping" />
                      <span className="font-mono text-[9px] uppercase tracking-tighter text-neutral-200">
                        {label}
                      </span>
                    </div>
                    <span className="font-mono text-[8px] uppercase text-emerald-400">
                      {state}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-[9px] leading-4 text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* New Status Grid */}
            <div className="relative z-10 mt-10 pt-10 border-t border-white/10">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">System_Health</span>
                <span className="h-1 w-8 bg-cyan-400/20" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {hardwareStatus.map((item) => (
                  <div key={item.label} className="border border-white/5 bg-white/[0.02] p-2">
                    <div className="font-mono text-[8px] uppercase text-neutral-600">{item.label}</div>
                    <div className="mt-1 flex items-end justify-between">
                      <span className="font-orbitron text-[10px] text-white">{item.value}</span>
                      <span className="font-mono text-[7px] text-emerald-400">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-8">
              <LiveThroughput />
            </div>
          </aside>


          <div className="relative overflow-hidden border-b border-white/10 bg-[#020202] lg:col-span-6 lg:border-r lg:border-b-0">
            <div className="absolute top-0 right-0 z-20 border-b border-l border-white/10 bg-black px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300">
              02_DEPLOY [CORE]
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
            <div className="scanning-line-v opacity-20" />

            <div className="relative z-10 flex min-h-[480px] flex-col items-center justify-center px-8 pt-16 pb-8 text-center">
              <div className="relative mb-12 flex h-64 w-64 items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-300/20" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-white/5" 
                />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-10 rounded-full border border-cyan-300/10 bg-cyan-400/[0.02]" 
                />
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="relative flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.15)] group"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                  <span className="font-orbitron text-3xl text-cyan-50 text-glow-cyan animate-blink-cyan">
                    AGI
                  </span>
                </motion.div>
                
                {[0, 90, 180, 270].map((angle) => (
                  <motion.div
                    key={angle}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{ rotate: angle }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-md"
              >
                <h3 className="font-orbitron text-2xl uppercase tracking-widest text-white">
                  Orchestration Engine
                </h3>
                <div className="mt-4 flex justify-center gap-3">
                  <span className="h-0.5 w-12 bg-cyan-400/30" />
                  <span className="h-0.5 w-2 bg-cyan-400" />
                  <span className="h-0.5 w-12 bg-cyan-400/30" />
                </div>
                <p className="mt-6 font-mono text-[10px] leading-6 text-neutral-500 uppercase tracking-widest">
                  The core maintains recursive directive auditing while policy, memory,
                  and motor intent remain synchronized via neural-mesh linking.
                </p>
              </motion.div>
            </div>
            
            <div className="border-t border-white/5 bg-black/40 backdrop-blur-sm">
              <AuraLawChat />
            </div>
          </div>

          <aside className="grid grid-cols-1 lg:col-span-3">
            <div className="relative border-b border-white/10 p-6 card-bg-animated animate-bg-drift">
              <div className="shimmer-overlay" />
              <div className="absolute top-0 left-0 z-20 border-r border-b border-white/10 bg-black px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                03_MONITOR
              </div>
              <h3 className="relative z-10 mt-12 font-orbitron text-lg uppercase text-white">
                Telemetry
              </h3>
              <div className="relative z-10">
                <LiveTelemetryGrid />
              </div>
            </div>

            <div className="relative p-6 card-bg-animated animate-bg-drift">
              <div className="shimmer-overlay" />
              <div className="absolute top-0 left-0 z-20 border-r border-b border-white/10 bg-black px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                04_SCALE
              </div>
              <div className="relative z-10">
                <LiveScalingMetrics />
              </div>
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}

