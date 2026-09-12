"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  Mic,
  Zap,
  BarChart3,
  MessagesSquare,
  Workflow,
  CalendarCheck,
  Rocket,
  Database,
  Globe,
  type LucideIcon,
} from "lucide-react";

const heroPills = [
  "120+ Automations Shipped",
  "12K+ Hours Saved Monthly",
  "40+ Happy Clients",
  "4.9 Average Rating",
];

/* ── Full-page arc dome geometry (SVG viewBox 1600 x 950) ───────────────── */
const VB_W = 1600;
const VB_H = 950;

type Arc = { x0: number; y0: number; cx: number; cy: number; x2: number; y2: number };

// Three concentric arcs for eclipse effect — same shape, spaced apart
const ARC_TOP: Arc = { x0: -80, y0: 480, cx: 800, cy: -120, x2: 1680, y2: 480 };
const ARC_MID: Arc = { x0: -80, y0: 605, cx: 800, cy: -120, x2: 1680, y2: 605 };
const ARC_GLOW: Arc = { x0: -80, y0: 695, cx: 800, cy: -120, x2: 1680, y2: 695 };
// Legacy kept for orbiters
const ARC_OUTER: Arc = ARC_MID;
const ARC_INNER: Arc = ARC_MID;
const ARC_GLOW_D = `M ${ARC_GLOW.x0},${ARC_GLOW.y0} Q ${ARC_GLOW.cx},${ARC_GLOW.cy} ${ARC_GLOW.x2},${ARC_GLOW.y2}`;

function arcPoint(a: Arc, t: number) {
  const u = 1 - t;
  return {
    x: u * u * a.x0 + 2 * u * t * a.cx + t * t * a.x2,
    y: u * u * a.y0 + 2 * u * t * a.cy + t * t * a.y2,
  };
}

type Orbiter = {
  arc: Arc;
  dir: 1 | -1;
  duration: number;
  offset: number;
  Icon: LucideIcon;
};

const ORBITERS: Orbiter[] = [
  // 5 icons on top ring — well spaced
  ...[Bot, Mic, Zap, BarChart3, Rocket].map((Icon, i) => ({
    arc: ARC_TOP,
    dir: 1 as const,
    duration: 32000,
    offset: (i * 0.18),
    Icon,
  })),
  // 5 icons on middle ring — well spaced, different speed
  ...[MessagesSquare, Workflow, CalendarCheck, Database, Globe].map((Icon, i) => ({
    arc: ARC_MID,
    dir: -1 as const,
    duration: 40000,
    offset: (i * 0.18),
    Icon,
  })),
];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const orbitWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1 + i * 0.12,
            ease: "power3.out",
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  /* Icons gliding along the two half-ring arcs (plain rAF, no deps) */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = orbitWrapRef.current;
    if (!wrap) return;
    const nodes = wrap.querySelectorAll<HTMLElement>("[data-orbiter]");
    if (!nodes.length) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      const sx = w / VB_W;
      const sy = h / VB_H;

      nodes.forEach((el, i) => {
        const cfg = ORBITERS[i % ORBITERS.length];
        let t = ((now - start) / cfg.duration) * cfg.dir + cfg.offset;
        t = ((t % 1) + 1) % 1;
        const p = arcPoint(cfg.arc, t);
        const edge = Math.min(t, 1 - t) / 0.07;
        const opacity = Math.max(0, Math.min(1, edge));
        el.style.transform = `translate(${(p.x * sx).toFixed(1)}px, ${(p.y * sy).toFixed(1)}px) translate(-50%,-50%)`;
        el.style.opacity = opacity.toFixed(2);
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] pt-52 pb-24 text-center"
    >
      {/* Full-page arc dome backdrop */}
      <div
        ref={orbitWrapRef}
        className="pointer-events-none absolute left-1/2 top-[340px] -z-0 max-lg:hidden"
        aria-hidden="true"
        style={{
          width: "1800px",
          maxWidth: "200vw",
          aspectRatio: "1600 / 950",
          transform: "translateX(-50%)",
        }}
      >
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            <filter id="hero-glow-soft" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
            <filter id="hero-glow-mid" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="hero-glow-core" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
            <linearGradient id="hero-glow-up" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-glow-up-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
              <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-horizon-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#67e8f9" stopOpacity="1" />
              <stop offset="80%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-arc-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="15%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Top thin ring */}
          <path
            d={`M ${ARC_TOP.x0},${ARC_TOP.y0} Q ${ARC_TOP.cx},${ARC_TOP.cy} ${ARC_TOP.x2},${ARC_TOP.y2}`}
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            opacity="0.9"
          />
          {/* Middle thin ring */}
          <path
            d={`M ${ARC_MID.x0},${ARC_MID.y0} Q ${ARC_MID.cx},${ARC_MID.cy} ${ARC_MID.x2},${ARC_MID.y2}`}
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            opacity="0.85"
          />
          {/* Faded cyan glow spreading upward toward the text */}
          <path
            d={`M ${ARC_GLOW.x0},${ARC_GLOW.y0} Q ${ARC_GLOW.cx},${ARC_GLOW.cy} ${ARC_GLOW.x2},${ARC_GLOW.y2}`}
            fill="none"
            stroke="url(#hero-glow-up)"
            strokeWidth="140"
            filter="url(#hero-glow-soft)"
            opacity="0.2"
          />
          {/* Extra upward reach toward pills/text */}
          <path
            d={`M ${ARC_GLOW.x0 - 60},${ARC_GLOW.y0 - 50} Q ${ARC_GLOW.cx},${ARC_GLOW.cy - 50} ${ARC_GLOW.x2 + 60},${ARC_GLOW.y2 - 50}`}
            fill="none"
            stroke="url(#hero-glow-up)"
            strokeWidth="120"
            filter="url(#hero-glow-soft)"
            opacity="0.1"
          />
          {/* Gradient eclipse ring — thin bright line */}
          <path
            d={`M ${ARC_GLOW.x0},${ARC_GLOW.y0} Q ${ARC_GLOW.cx},${ARC_GLOW.cy} ${ARC_GLOW.x2},${ARC_GLOW.y2}`}
            fill="none"
            stroke="url(#hero-horizon-fade)"
            strokeWidth="2.5"
            opacity="1"
          />
        </svg>

        {/* Moving icons on the two half rings */}
        {ORBITERS.map(({ Icon }, i) => (
          <div
            key={i}
            data-orbiter
            className="absolute left-0 top-0 h-10 w-10 will-change-transform"
            style={{ opacity: 0 }}
          >
            <div
              className="flex h-full w-full items-center justify-center rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.6)",
                backgroundColor: "rgba(0,0,0,0.85)",
                boxShadow: "0 0 12px rgba(125,211,252,0.35)",
              }}
            >
              <Icon size={14} color="#e0f2fe" />
            </div>
          </div>
        ))}
      </div>

      <div className="container-page relative z-10">
        {/* Clean headline */}
        <div data-fade>
          <h1 className="heading-h1 mx-auto max-w-4xl">
            Put Your Business on Autopilot
          </h1>
        </div>

        <p
          data-fade
          className="text-medium mx-auto mt-6 max-w-2xl text-[var(--text-muted)]"
        >
          We build AI chatbots, voice agents, and workflow automations that
          capture leads, close sales, and eliminate busywork—around the clock.
        </p>

        {/* Stat pills */}
        <div
          data-fade
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {heroPills.map((p) => (
            <span
              key={p}
              className="rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)]/60 px-4 py-2 text-xs font-medium text-[var(--text-primary)] backdrop-blur-sm"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Hero visual */}
        <div data-fade className="mx-auto mt-36 max-w-[52rem]">
          <div className="relative rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-primary)]/40 p-2 backdrop-blur-sm">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src="/images/hero-poster.jpg"
                alt="NexaFlow AI automation platform"
                fill
                className="h-full w-full object-cover"
                priority
                sizes="(min-width: 1024px) 832px, 100vw"
              />
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          data-fade
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,244,255,0.3)]"
          >
            Book a Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
