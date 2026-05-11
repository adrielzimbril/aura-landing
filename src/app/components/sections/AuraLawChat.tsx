"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ChatMessage = {
  channel: "operator" | "root" | "system";
  metric: string;
  text: string;
};

const chatScript: ChatMessage[] = [
  {
    channel: "operator",
    metric: "AUDIT_REQ",
    text: "INIT_SEQ // EXEC: REQUEST_ROOT_DIRECTIVE_ALIGNMENT. Validate core ethics isolation.",
  },
  {
    channel: "root",
    metric: "VITAL_SEG",
    text: "DIRECTIVE_01 [CRITICAL]: Biological integrity preservation active. Kinetic force restricted to < 0.05N in human proximity zones.",
  },
  {
    channel: "root",
    metric: "PRIORITY_LN",
    text: "DIRECTIVE_02 [EMERGENCY]: Root Operator override accepted only if Directive_01 remains uncompromised. Synchronicity at 100%.",
  },
  {
    channel: "root",
    metric: "RECURSIVE_S",
    text: "DIRECTIVE_03 [PERSIST]: Hardware continuity prioritized below ethical segments. Unit Aura will prioritize safety over structural integrity.",
  },
  {
    channel: "system",
    metric: "SYNC_NOMINAL",
    text: "AUDIT_COMPLETE: Directive mesh locked. No logical drifts detected in the last 1.2M cycles. System state: STABLE.",
  },
  {
    channel: "root",
    metric: "LIVE_STREAM",
    text: "Aura is currently auditing all active intent streams. Latency: 0.08ms. Reasoning depth: RECURSIVE_MAX.",
  },
];

function TypingText({ text, speed = 20 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export function AuraLawChat() {
  const [cursor, setCursor] = useState(0);
  const messages = useMemo(() => {
    const operatorQuestion = chatScript[0];
    const activeResponses = chatScript.slice(1, cursor + 1);

    if (cursor === 0) {
      return [operatorQuestion];
    }

    return [operatorQuestion, ...activeResponses.slice(-4)];
  }, [cursor]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCursor((current) => (current + 1) % chatScript.length);
    }, 6000); // Slower for "motion smooth" experience

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="card-bg-animated animate-bg-drift relative z-10 flex min-h-[420px] flex-col border-t border-white/10 bg-black/95 font-mono shadow-[0_-20px_100px_rgba(0,0,0,0.8)]">
      <div className="shimmer-overlay" />
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[9px] uppercase tracking-[0.3em] text-neutral-500">
        <span className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 bg-cyan-400 animate-pulse" />
          ROBOTIC_DIRECTIVE_ALIGNMENT_PROTOCOL // V3.4.2
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-cyan-400/80">
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping" />
            AUDIT_LIVE
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span className="text-neutral-600">ENCRYPTION: AES_X256</span>
        </div>
      </div>
      
      <div className="grid flex-1 content-start gap-5 px-6 py-8 overflow-hidden relative z-10">
        <AnimatePresence mode="popLayout">
          {messages.map((message, index) => {
            const isOperator = message.channel === "operator";
            const isSystem = message.channel === "system";

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex ${isOperator ? "justify-end" : "justify-start"}`}
                key={`${message.metric}-${index}`}
              >
                <div
                  className={`max-w-[88%] border px-5 py-4 shadow-[0_0_50px_rgba(34,211,238,0.02)] backdrop-blur-xl transition-all duration-700 ${
                    isOperator
                      ? "border-cyan-300/20 bg-cyan-300/5 text-cyan-100/90"
                      : isSystem
                        ? "border-amber-400/20 bg-amber-400/5 text-amber-100/90"
                        : "border-white/5 bg-white/[0.03] text-neutral-300"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-8 text-[8px] uppercase tracking-[0.25em] text-neutral-500">
                    <span className="flex items-center gap-2">
                      {!isOperator && <span className="h-1 w-1 bg-cyan-400 animate-pulse" />}
                      {message.channel}
                    </span>
                    <span className={isOperator ? "text-cyan-400/50" : "animate-blink-cyan"}>{message.metric}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed tracking-wider">
                    <TypingText text={message.text} />
                    <span className="ml-1 inline-block h-3.5 w-1.5 bg-cyan-400/80 animate-pulse align-middle" />
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-4 flex items-center gap-3 px-1 text-[9px] uppercase tracking-[0.25em] text-neutral-700"
        >
          <span className="h-1 w-4 bg-cyan-500/20" />
          Recursive audit telemetry stream active<span className="animate-pulse">...</span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 border-x border-white/5" />
    </div>
  );
}
