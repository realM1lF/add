"use client";

import * as React from "react";
import { dimensions } from "@/lib/data/dimensions";
import { cn } from "@/lib/utils";

interface SpectrumGlowProps {
  className?: string;
}

export function SpectrumGlow({ className }: SpectrumGlowProps) {
  const size = 420;
  const center = size / 2;
  const radius = size * 0.36;
  const count = dimensions.length;

  const points = dimensions.map((_, i) => {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const value = 0.45 + Math.sin(i * 2.7) * 0.18;
    const r = radius * value;
    return [center + Math.cos(angle) * r, center + Math.sin(angle) * r];
  });

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ") + " Z";

  const gridRings = [0.25, 0.5, 0.75, 1].map((f) => radius * f);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-[140%] w-[140%] max-w-none animate-spectrum-rotate opacity-[0.14] sm:opacity-[0.18]"
      >
        <defs>
          <radialGradient id="spectrum-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx={center}
          cy={center}
          r={radius * 1.2}
          fill="url(#spectrum-gradient)"
        />

        {gridRings.map((r, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            className="text-foreground/10"
          />
        ))}

        {points.map((p, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p[0]}
            y2={p[1]}
            stroke="currentColor"
            strokeWidth={1}
            className="text-foreground/10"
          />
        ))}

        <path
          d={path}
          fill="var(--primary)"
          fillOpacity={0.12}
          stroke="var(--primary)"
          strokeWidth={2}
          strokeOpacity={0.35}
        />
      </svg>
    </div>
  );
}
