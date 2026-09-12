"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import HeroScene from "@/components/3d/HeroScene";

const heroPills = [
  "120+ Automations Shipped",
  "12K+ Hours Saved Monthly",
  "40+ Happy Clients",
  "4.9 Average Rating",
];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] pt-52 pb-24 text-center"
    >
      {/* Interactive 3D backdrop */}
      <HeroScene />

      <div className="container-page relative z-10">
        {/* Clean headline */}
        <div data-fade>
          <h1 className="heading-h1 mx-auto max-w-4xl">
            AI Automation Solutions That Do the Work Your Team Doesn&apos;t
            Have Time For
          </h1>
        </div>

        <p
          data-fade
          className="text-medium mx-auto mt-6 max-w-2xl text-[var(--text-muted)]"
        >
          We design, build, and deploy custom AI automation, software, and
          workflows that eliminate repetitive work, cut operational costs, and
          help your company run faster—without hiring more people.
        </p>

        <p
          data-fade
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]"
        >
          NexaFlow AI is an AI automation company that helps businesses replace
          manual, repetitive tasks with intelligent software and
          workflows—including customer support automation, sales and lead
          automation, data entry automation, reporting automation, and custom AI
          agents built around your existing tools and processes.
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
            className="btn-shine rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,244,255,0.3)]"
          >
            Book a Free AI Automation Audit
          </Link>
          <Link
            href="/use-cases"
            className="rounded-full border border-[var(--accent)] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10"
          >
            See Use Cases
          </Link>
        </div>
      </div>
    </section>
  );
}
