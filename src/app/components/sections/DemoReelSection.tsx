"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function DemoReelSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)]" />
        <div className="vertical-streaks opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative aspect-video overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
              <div className="shimmer-overlay" />
              <Image
                src="/img/robot-with-blue-light-it.jpg"
                alt="Aura movement reel"
                fill
                className="object-cover object-[center_25%] transition-transform duration-1000 group-hover:scale-110 brightness-90"
              />
              
              {/* Technical Viewfinder Overlay */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div className="absolute inset-4 border border-white/10">
                  {/* Corner Crosshairs */}
                  <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-cyan-400" />
                  <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-cyan-400" />
                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-cyan-400" />
                  <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-cyan-400" />
                  
                  {/* Center Crosshair */}
                  <div className="absolute top-1/2 left-1/2 h-4 w-px -translate-y-1/2 bg-cyan-400/50" />
                  <div className="absolute top-1/2 left-1/2 w-4 h-px -translate-x-1/2 bg-cyan-400/50" />
                </div>
                
                <div className="absolute top-8 left-8 flex items-center gap-3 font-mono text-[8px] uppercase tracking-widest text-cyan-400">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE_FEED // AURA_EYE_01
                </div>
                
                <div className="absolute bottom-8 right-8 font-mono text-[8px] uppercase tracking-[0.3em] text-neutral-400">
                  FOV: 120° // AF_LOCKED
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform hover:scale-110 cursor-pointer">
                  <div className="ml-1 h-0 w-0 border-y-8 border-l-[12px] border-y-transparent border-l-white" />
                </div>
                <div className="font-orbitron text-xs uppercase tracking-widest text-white">
                  Watch Aura move
                </div>
              </div>
            </div>
            
            {/* Ambient decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full border border-cyan-400/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-cyan-400/5 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-cyan-400/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-300">
                // MOTION_CAP
              </span>
            </div>
            <h2 className="font-orbitron text-5xl uppercase leading-[0.9] text-white md:text-7xl">
              From Instruction <br />
              <span className="text-neutral-700">To Action.</span>
            </h2>
            <p className="mt-10 font-mono text-xs uppercase leading-8 tracking-[0.2em] text-neutral-500">
              The reel frames live locomotion, environmental mapping, and memory recall as one continuous human-facing workflow. 
              Aura translates abstract intent into precise physical reality with zero-drift accuracy.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <div className="font-orbitron text-lg text-white">99.8%</div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-neutral-600">
                  Movement Accuracy
                </div>
              </div>
              <div>
                <div className="font-orbitron text-lg text-white">4.2ms</div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-neutral-600">
                  Kinetics Latency
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
