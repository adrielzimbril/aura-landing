"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const telemetryFrames = [
  [
    ["Latency", "8.2ms", "BUFFER_OK"],
    ["Uptime", "99.98%", "STABLE"],
    ["Recall depth", "18.4y", "MEM_LOCKED"],
    ["Safety", "100%", "KERNEL_ON"],
  ],
  [
    ["Latency", "11.4ms", "SYNC_WAIT"],
    ["Uptime", "99.97%", "STABLE"],
    ["Recall depth", "18.7y", "MEM_LOCKED"],
    ["Safety", "99.99%", "KERNEL_ON"],
  ],
  [
    ["Latency", "6.1ms", "ROOT_FAST"],
    ["Uptime", "100.0%", "STABLE"],
    ["Recall depth", "19.1y", "MEM_LOCKED"],
    ["Safety", "100%", "KERNEL_ON"],
  ],
];

const scalingFrames = [
  [
    ["Compute_alloc", 84],
    ["Memory_pool", 67],
    ["Motor_guard", 91],
  ],
  [
    ["Compute_alloc", 76],
    ["Memory_pool", 72],
    ["Motor_guard", 88],
  ],
  [
    ["Compute_alloc", 93],
    ["Memory_pool", 64],
    ["Motor_guard", 96],
  ],
];

const loadFrames = [
  [34, 48, 68, 92, 52, 36],
  [46, 61, 78, 58, 84, 49],
  [28, 72, 55, 96, 63, 82],
];
const loadSlots = ["load-a", "load-b", "load-c", "load-d", "load-e", "load-f"];

export function LiveTelemetryGrid() {
  const [frame, setFrame] = useState(0);
  const telemetry = telemetryFrames[frame % telemetryFrames.length];
  const load = loadFrames[frame % loadFrames.length];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFrame((current) => current + 1);
    }, 1800); // Faster pace for "active" simulation

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {telemetry.map(([label, value, state]) => (
          <div className="metric-card card-bg-animated animate-bg-drift group relative border border-white/10 p-4" key={label}>
            <div className="shimmer-overlay" />
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
              {label}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="metric-value mt-3 font-orbitron text-xl text-white"
              >
                {value}
              </motion.div>
            </AnimatePresence>
            <div className="mt-2 font-mono text-[9px] uppercase text-cyan-300 animate-blink-cyan">
              {state}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 border border-white/10 p-4 bg-white/[0.01]">
        <div className="mb-4 flex justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 bg-cyan-400 animate-pulse" />
            Request load
          </span>
          <span className="text-cyan-300 animate-blink-cyan">HIGH_SECURE</span>
        </div>
        <div className="flex h-10 items-end gap-1.5">
          {load.map((height, index) => (
            <motion.span
              animate={{ height: `${height}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className={`flex-1 ${
                index === frame % load.length ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)]" : "bg-neutral-800"
              }`}
              key={loadSlots[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function LiveScalingMetrics() {
  const [frame, setFrame] = useState(0);
  const scaling = scalingFrames[frame % scalingFrames.length];
  const multiplier = useMemo(() => `${10 + (frame % 3)}x`, [frame]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFrame((current) => current + 1);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-12 flex items-center justify-between">
        <div>
          <h3 className="font-orbitron text-lg uppercase text-white">
            Auto-scaling
          </h3>
          <p className="mt-2 font-mono text-[11px] text-neutral-500">
            Cognitive elasticity active
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={multiplier}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-orbitron text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
          >
            {multiplier}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="mt-8 space-y-6">
        {scaling.map(([label, value]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between font-mono text-[9px] uppercase text-neutral-500 tracking-wider">
              <span>{label}</span>
              <span className="text-neutral-300 animate-blink-cyan">{value}%</span>
            </div>
            <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${value}%` }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-1 bg-gradient-to-r from-cyan-600 to-cyan-300"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function LiveThroughput() {
  const [frame, setFrame] = useState(0);
  const values = [
    ["4.2 gb/s", 60],
    ["4.8 gb/s", 72],
    ["3.9 gb/s", 54],
    ["5.1 gb/s", 80],
  ] as const;
  const [value, width] = values[frame % values.length];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFrame((current) => current + 1);
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 lg:absolute lg:right-6 lg:bottom-8 lg:left-6">
      <div className="mb-3 flex justify-between font-mono text-[9px] uppercase text-neutral-500">
        <span>Throughput</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white animate-blink-cyan"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="h-px bg-white/5">
        <motion.div
          animate={{ width: `${width}%` }}
          transition={{ duration: 0.6 }}
          className="h-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
        />
      </div>
    </div>
  );
}
