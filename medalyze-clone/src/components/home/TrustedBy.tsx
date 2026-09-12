"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { trustedByData, assets } from "@/lib/constants";

const partnerLogos = [
  { name: "Vertex SaaS", abbr: "VX" },
  { name: "Bloom E-commerce", abbr: "BL" },
  { name: "NorthPeak Realty", abbr: "NP" },
  { name: "Brightline Agency", abbr: "BA" },
  { name: "CoreFit Studios", abbr: "CF" },
  { name: "Lumen Legal", abbr: "LL" },
];

interface CountUpStatProps {
  value: string;
  label: string;
}

function parseValue(value: string) {
  const match = value.match(/^([^\d.]*)([\d.]+)(.*)$/);
  return {
    prefix: match ? match[1] : "",
    target: match ? parseFloat(match[2]) : 0,
    suffix: match ? match[3] : "",
  };
}

function CountUpStat({ value, label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const { target } = parseValue(value);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const startTime = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const { prefix, suffix } = parseValue(value);
  const formatted = Number.isInteger(display)
    ? display.toString()
    : display.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <div className="heading-h2 !text-[var(--accent)]">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <p className="text-small mt-3 text-[var(--text-muted)]">{label}</p>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-[var(--bg-primary)]">
      {/* Partner logos - Commure style clean row */}
      <div className="border-b border-[var(--border-subtle)] py-16 md:py-20">
        <div className="container-page">
          <p className="text-small text-center uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Trusted by Forward-Thinking Businesses
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 text-[var(--text-muted)] opacity-50 transition-opacity hover:opacity-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--text-muted)]/10 text-xs font-bold">
                  {partner.abbr}
                </div>
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section - Commure style with map background */}
      <div className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src={assets.usMap}
            alt=""
            width={900}
            height={600}
            className="h-full w-full max-w-4xl object-contain opacity-[0.08]"
          />
        </div>

        <div className="container-page relative">
          <h2 className="heading-h3 text-center">
            Proven Outcomes from Deploying NexaFlow
          </h2>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            {trustedByData.stats.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
