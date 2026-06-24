"use client";

import { topics } from "@/lib/data/topics";

const seededRadii = [
  0.78, 0.62, 0.91, 0.55, 0.83, 0.68, 0.74, 0.59, 0.87, 0.71, 0.66, 0.64,
];

const seededNodeRadii = [10, 7, 12, 6, 9, 8, 11, 7, 13, 8, 9, 8];

export function SpectrumGraphic() {
  const size = 320;
  const center = size / 2;
  const maxRadius = size * 0.38;

  const nodes = topics.map((topic, index) => {
    const angle = (index / topics.length) * Math.PI * 2 - Math.PI / 2;
    const radius = maxRadius * seededRadii[index];
    return {
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
      color: topic.color,
      radius: seededNodeRadii[index],
    };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[280px] opacity-90"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((other, j) => {
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance > maxRadius * 1.2) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={other.x}
              y2={other.y}
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={1}
            />
          );
        })
      )}

      <circle
        cx={center}
        cy={center}
        r={maxRadius * 0.12}
        fill="currentColor"
        fillOpacity={0.06}
      />

      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.radius + 4}
            fill={node.color}
            fillOpacity={0.12}
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.radius}
            fill={node.color}
            filter="url(#glow)"
          />
        </g>
      ))}
    </svg>
  );
}
