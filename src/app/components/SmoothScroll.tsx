"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        lerp: 0.08,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}
