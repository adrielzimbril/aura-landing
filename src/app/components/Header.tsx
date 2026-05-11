"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const ms = now.getMilliseconds().toString().padStart(3, "0");
      setTime(`${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${ms}`);
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="md:px-10 lg:px-16 flex w-full h-16 md:h-20 px-6 items-center">
        <div className="flex items-center gap-6">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 border border-cyan-500/40 animate-pulse" />
            <div className="absolute inset-1.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </div>
          <div className="flex flex-col">
            <a
              href="#home"
              className="font-orbitron text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/90 hover:text-cyan-400 transition-colors"
            >
              ORISYNC // AURA
            </a>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                KERNEL_OS_V4.2.1
              </span>
              <span className="h-px w-4 bg-white/5" />
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [4, 8, 4] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-0.5 bg-cyan-400/40"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-8 md:gap-12">
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex flex-col items-end">
              <a
                href="#experiments"
                className="text-[10px] font-orbitron uppercase tracking-[0.25em] text-neutral-400 hover:text-cyan-300 transition-colors"
              >
                NEURAL_NODES
              </a>
              <span className="text-[7px] font-mono text-neutral-700 uppercase">EVOLUTIONS</span>
            </div>
            <div className="flex flex-col items-end">
              <a
                href="#system"
                className="text-[10px] font-orbitron uppercase tracking-[0.25em] text-neutral-400 hover:text-cyan-300 transition-colors"
              >
                SYNAPSE_MESH
              </a>
              <span className="text-[7px] font-mono text-neutral-700 uppercase">TOPOLOGY</span>
            </div>
            <div className="flex flex-col items-end">
              <a
                href="#licensing"
                className="text-[10px] font-orbitron uppercase tracking-[0.25em] text-neutral-400 hover:text-cyan-300 transition-colors"
              >
                ROOT_DIRECTIVES
              </a>
              <span className="text-[7px] font-mono text-neutral-700 uppercase">ACCESS_KEYS</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-8">
            <div className="flex flex-col text-right">
              <span className="font-mono text-[9px] text-cyan-400/70 tracking-tighter uppercase">system_time</span>
              <span className="font-mono text-[10px] text-white tracking-widest leading-none">
                {time}
              </span>
            </div>
            <a
              href="#contact"
              className="group relative overflow-hidden bg-cyan-400/10 border border-cyan-400/30 px-6 py-2 transition-all hover:bg-cyan-400 hover:border-cyan-400"
            >
              <span className="relative z-10 font-orbitron text-[9px] uppercase tracking-widest text-cyan-400 group-hover:text-black">
                INIT_SEQ
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

