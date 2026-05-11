"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const auditLogs = [
  "SECURE_KERNEL_BOOT: OK",
  "NEURAL_MESH_SYNC: 99.98%",
  "ACTUATOR_ENVELOPE_LOCK: ACTIVE",
  "DIRECTIVE_AUDIT: NO_DIVERGENCE",
  "SENSORY_LATENCY: 0.12ms",
  "POWER_CELL_STATUS: NOMINAL",
  "ENVIRONMENTAL_MAPPING: STABLE",
];

export function Footer() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % auditLogs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="reveal-band relative overflow-hidden bg-[#050505] px-6 pt-32 pb-16 md:px-12 lg:px-16 border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.2]" />
      
      <div className="relative z-10 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-5 w-5 border border-cyan-400/40 flex items-center justify-center">
              <div className="h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </div>
            <div className="font-orbitron text-xl uppercase tracking-[0.4em] text-white">
              ORISYNC <span className="text-cyan-400">/</span> AURA
            </div>
          </div>
          
          <p className="max-w-md font-mono text-[10px] leading-8 text-neutral-500 uppercase tracking-widest border-l border-white/10 pl-6">
            Pioneering embodied artificial general intelligence. 
            Engineered for precision, governed by safety, 
            built for the future of industrial synergy.
          </p>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4 border border-white/5 bg-white/[0.02] px-4 py-3 max-w-sm group">
              <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
              <div className="flex-1 font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                SYSTEM_AUDIT_LOG
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  className="font-mono text-[9px] text-cyan-300"
                >
                  {auditLogs[logIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="grid grid-cols-4 gap-1 max-w-sm">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="h-1 bg-cyan-400/20"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:col-span-5">
          <div className="space-y-6">
             <h4 className="font-orbitron text-[10px] uppercase tracking-[0.4em] text-neutral-600">Structure</h4>
             <ul className="grid gap-4 font-mono text-[10px] uppercase text-neutral-400">
                <li><a href="#home" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Deployment</a></li>
                <li><a href="#system" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Architecture</a></li>
                <li><a href="#experiments" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Protocols</a></li>
                <li><a href="#licensing" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Compliance</a></li>
             </ul>
          </div>
          <div className="space-y-6">
             <h4 className="font-orbitron text-[10px] uppercase tracking-[0.4em] text-neutral-600">Connectivity</h4>
             <ul className="grid gap-4 font-mono text-[10px] uppercase text-neutral-400">
                <li><a href="#" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Terminal / X</a></li>
                <li><a href="#" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Repository</a></li>
                <li><a href="#" className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"><span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />Secure_Relay</a></li>
             </ul>
          </div>
        </div>

        <div className="lg:col-span-3 lg:text-right flex flex-col justify-between items-end border-l lg:border-l-0 lg:border-r border-white/5 pr-6">
          <div className="space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-700">
               STABLE_BUILD_4.2.0
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 animate-pulse">
               LINK_ESTABLISHED_ORBIT
            </div>
          </div>
          
          <div className="mt-20 font-mono text-[9px] text-neutral-800 uppercase tracking-[0.3em]">
             &copy; 2024 Orisync_Systems. <br className="hidden lg:block" /> Rights_Reserved.
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
        <div className="flex gap-12 font-mono text-[8px] uppercase tracking-[0.5em] text-neutral-700">
          <span>privacy_policy</span>
          <span>compliance_audit</span>
          <span>export_control</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8 hidden md:block" />
        <div className="font-orbitron text-[9px] uppercase tracking-[0.4em] text-neutral-800">
          AURA_ENGINE_V4.2
        </div>
      </div>
    </footer>
  );
}

