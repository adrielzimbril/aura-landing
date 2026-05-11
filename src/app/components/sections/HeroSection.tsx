"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type MouseEvent,
  useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelBlast from "../PixelBlast";

const slides = [
  {
    image: "/img/hightech-helmets-humanoid-being-generative-ai.png",
    eyebrow: "ORISYNC // UNIT_AURA",
    title: "AGI Body",
    accent: "Human Mind.",
    copy: "Aura is the pinnacle of embodied cognition. Built with superhuman memory, 10x faster response loops, and a biological-limit bypass protocol.",
    position: "object-[center_20%]",
  },
  {
    image:
      "/img/Airbrush-image-extender.jpeg",
    eyebrow: "MEMORY // RECURSIVE",
    title: "Infinite",
    accent: "Recall.",
    copy: "Aura maintains a persistent multi-dimensional memory graph. Context is never lost; experiences are indexed and retrievable in milliseconds.",
    position: "object-[center_35%]",
  },
  {
    image: "/img/Airbrush-image-extender (1).jpeg",
    eyebrow: "FORCE // PRECISION",
    title: "Strength",
    accent: "Governed.",
    copy: "Every motor intent is audited by real-time safety kernels. Power without compromise, governed by the Three Laws.",
    position: "object-[center_15%]",
  },
];

const initialMetrics = [
  { label: "Throughput", value: 10, unit: "x", target: 10 },
  { label: "Cognition", value: 100, unit: "AGI", target: 100 },
  { label: "Persistence", value: 24, unit: "/7", target: 24 },
  { label: "Latency", value: 0.1, unit: "ms", target: 0.1 },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [motionPos, setMotionPos] = useState({ x: 0, y: 0 });
  const [metrics, setMetrics] = useState(initialMetrics);
  const slide = slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    const metricsInterval = window.setInterval(() => {
      setMetrics(prev => prev.map(m => {
        if (m.label === "Latency") {
          const jitter = (Math.random() * 0.04 - 0.02).toFixed(2);
          return { ...m, value: parseFloat((m.target + parseFloat(jitter)).toFixed(2)) };
        }
        if (m.label === "Throughput") {
          const jitter = (Math.random() * 2 - 1).toFixed(1);
          return { ...m, value: parseFloat((m.target + parseFloat(jitter)).toFixed(1)) };
        }
        return m;
      }));
    }, 2000);

    return () => {
      window.clearInterval(interval);
      window.clearInterval(metricsInterval);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 20;
    setMotionPos({ x, y });
  };

  const heroMotionStyle = {
    "--hero-mx": `${motionPos.x.toFixed(2)}px`,
    "--hero-my": `${motionPos.y.toFixed(2)}px`,
  } as CSSProperties;

  return (
    <section
      id="home"
      aria-label="Aura hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMotionPos({ x: 0, y: 0 })}
      style={heroMotionStyle}
      className="group relative flex min-h-screen items-end overflow-hidden border-b border-white/10 px-6 pb-12 pt-32 md:px-12 lg:px-16"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <div className="scanning-line-v opacity-30" />
          <Image
            src={slide.image}
            alt="Aura AGI Platform"
            fill
            priority
            className={`hero-bg-motion object-cover transition-all duration-1000 contrast-125 brightness-[0.85] ${slide.position}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Viewfinder Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 border border-cyan-400/10">
        <div className="absolute top-8 left-8 flex flex-col gap-1 font-mono text-[9px] uppercase tracking-widest text-cyan-400/40">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            REC // 24FPS
          </span>
          <span>ISO 400 // SHUTTER 1/50</span>
        </div>
        <div className="absolute top-8 right-8 font-mono text-[9px] uppercase tracking-widest text-cyan-400/40">
          BAT: 98.4% // MEM: 1.2PB
        </div>
        
        {/* Corner Markers */}
        <div className="absolute top-4 left-4 h-6 w-6 border-t border-l border-cyan-400/30" />
        <div className="absolute top-4 right-4 h-6 w-6 border-t border-r border-cyan-400/30" />
        <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-cyan-400/30" />
        <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-cyan-400/30" />
      </div>

      <div className="absolute inset-0 z-[1] opacity-30">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#67e8f9"
          patternScale={1.45}
          patternDensity={0.32}
          enableRipples
          rippleSpeed={0.38}
          rippleThickness={0.14}
          rippleIntensityScale={0.62}
          speed={0.018}
          transparent
          edgeFade={0.62}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-20 w-full max-w-6xl">
        <div className="mb-10 flex items-center gap-5">
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            className="h-px bg-cyan-400/60" 
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.eyebrow}
              initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              className="font-orbitron text-[10px] uppercase tracking-[0.6em] text-cyan-300"
            >
              {slide.eyebrow}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slide.title}
              initial={{ y: "110%", rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              exit={{ y: "-110%", rotate: -2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-orbitron text-7xl uppercase leading-[0.9] text-white md:text-8xl lg:text-9xl"
            >
              {slide.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-neutral-600">
                {slide.accent}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="mt-10 max-w-2xl border-l-2 border-cyan-400/40 py-3 pl-8 text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
          {slide.copy}
        </p>

        <div className="card-bg-animated animate-bg-drift relative mt-12 grid max-w-5xl grid-cols-2 border border-white/10 bg-black/60 backdrop-blur-2xl md:grid-cols-4">
          <div className="shimmer-overlay" />
          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative z-10 border-white/10 p-8 md:border-r md:last:border-r-0 group overflow-hidden"
            >
              <div className="flex items-baseline gap-2">
                <motion.div 
                  key={m.value}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  className="font-orbitron text-4xl text-cyan-300 animate-blink-cyan"
                >
                  {m.value}
                </motion.div>
                <span className="font-orbitron text-[10px] text-cyan-600 tracking-widest">{m.unit}</span>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-medium group-hover:text-cyan-400/60 transition-colors">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Status Card - Positioned carefully to avoid overlaps */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-none card-bg-animated animate-bg-drift absolute right-12 bottom-32 z-30 hidden w-80 border border-white/10 bg-black/80 p-6 shadow-2xl backdrop-blur-3xl md:block lg:right-24"
        style={{
          transform: `translate3d(calc(var(--hero-mx) * -0.3), calc(var(--hero-my) * -0.3), 0)`
        }}
      >
        <div className="shimmer-overlay" />
        <div className="relative z-10">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-orbitron text-[10px] uppercase tracking-[0.4em] text-white/80">
              CORE_NODE_A1
            </span>
            <span className="h-2 w-2 bg-cyan-400 animate-pulse shadow-[0_0_12px_#22d3ee]" />
          </div>
          <div className="space-y-5 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
            <div className="flex justify-between items-center">
              <span>SYNAPSE_LOAD</span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={metrics.find(m => m.label === "Throughput")?.value}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyan-400"
                >
                  {((metrics.find(m => m.label === "Throughput")?.value || 10) * 9.2).toFixed(1)}%
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "92.4%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_8px_#22d3ee]" 
              />
            </div>
            <div className="flex justify-between items-center">
              <span>NEURAL_SYNC</span>
              <span className="text-emerald-500 animate-pulse">OPTIMIZED</span>
            </div>
            <div className="flex justify-between items-center text-[9px] text-neutral-700">
              <span>TEMP_CORE</span>
              <span>32.4°C</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-10 border border-cyan-400/5" />
    </section>
  );
}

