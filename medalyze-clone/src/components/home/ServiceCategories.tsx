"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCategories } from "@/lib/constants";
import { ArrowRight, Smartphone, Monitor, Tablet } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const visuals = [
  "https://medalyzeus.com/wp-content/uploads/2026/01/1.png",
  "https://medalyzeus.com/wp-content/uploads/2026/03/mazdoc1.jpg",
  "https://medalyzeus.com/wp-content/uploads/2026/01/Your-paragraph-text.png",
];

const deviceIcons = [Smartphone, Monitor, Tablet];

function DashedConnector({ index }: { index: number }) {
  const goRight = index % 2 === 1;
  return (
    <div className="relative py-6" aria-hidden>
      <svg
        className="mx-auto"
        style={{ width: "60%", height: "5rem" }}
        viewBox="0 0 600 80"
        fill="none"
      >
        <path
          d={goRight
            ? "M 50 0 L 450 0 L 450 70"
            : "M 550 0 L 150 0 L 150 70"
          }
          stroke="var(--border-medium)"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
        <path
          d={goRight
            ? "M 443 64 L 450 76 L 457 64"
            : "M 143 64 L 150 76 L 157 64"
          }
          stroke="var(--border-medium)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ServiceCategories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[var(--bg-primary)] py-24 md:py-32"
    >
      <div className="container-page">
        {/* Section header - Commure style */}
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 className="heading-h3">
            One Data Model. End-to-End RCM Automation.
          </h2>
          <p className="text-medium mx-auto mt-6 max-w-2xl text-[var(--text-muted)]">
            Connect the patient&apos;s first call and the doctor&apos;s note
            directly to the ledger. Integrated across 60+ EHR platforms.
          </p>
        </div>

        {/* Service categories with device mockups - Commure style */}
        <div className="mt-20 md:mt-28">
          {serviceCategories.categories.map((category, i) => {
            const flipped = i % 2 === 1;
            const DeviceIcon = deviceIcons[i];
            return (
              <div key={category.title}>
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                  {/* Text content */}
                  <div
                    className={flipped ? "md:order-2" : "md:order-1"}
                    data-reveal
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                        <DeviceIcon className="h-5 w-5 text-[var(--accent)]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                        {i === 0 ? "Front End" : i === 1 ? "Mid Cycle" : "Back End"}
                      </span>
                    </div>
                    <h3 className="text-xlarge">
                      {category.title}
                    </h3>
                    <p className="text-medium mt-6 max-w-xl text-[var(--text-muted)]">
                      {category.description}
                    </p>

                    {/* Interactive chips - Commure style */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {category.items.map((item, idx) => (
                        <button
                          key={item}
                          onClick={() => setActiveCategory(i * 10 + idx)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                            activeCategory === i * 10 + idx
                              ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                              : "border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-muted)] hover:border-[var(--text-muted)]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all hover:gap-3"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Device mockup - Commure style */}
                  <div
                    className={flipped ? "md:order-1" : "md:order-2"}
                    data-reveal
                  >
                    <div className="relative">
                      {/* Subtle glow behind device */}
                      <div className="absolute inset-0 rounded-3xl bg-[var(--accent)]/5 blur-3xl" />
                      <div className="relative rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-primary)]/60 p-3 backdrop-blur-sm">
                        <div className="overflow-hidden rounded-xl">
                          <Image
                            src={visuals[i]}
                            alt={category.title}
                            width={800}
                            height={600}
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashed connector */}
                {i < serviceCategories.categories.length - 1 && (
                  <div data-reveal>
                    <DashedConnector index={i} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
