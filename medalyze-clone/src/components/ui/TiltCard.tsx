"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

export default function TiltCard({ children, className = "", max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTransform(
      `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
    );
    setGlare({ x: (px + 0.5) * 100, y: (py + 0.5) * 100, o: 1 });
  }

  function onLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    setGlare((g) => ({ ...g, o: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.o ? 0.12 : 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, #a8f4ff, transparent 60%)`,
        }}
        aria-hidden
      />
    </div>
  );
}
