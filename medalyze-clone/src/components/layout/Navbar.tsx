"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { logoUrl } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

const MENU_LINKS = [
  {
    label: "Solutions",
    key: "solutions",
    columns: [
      {
        title: "Front End",
        links: [
          { name: "Call Center Agents", desc: "24/7 coverage for scheduling, call routing, and more", href: "/ai-powered-appointments" },
          { name: "Orchestrator", desc: "Unified, AI-powered referral intake", href: "/patient-scheduling" },
          { name: "Engage", desc: "AI-driven patient experience and care coordination", href: "/patient-scheduling" },
        ],
      },
      {
        title: "Mid Cycle",
        links: [
          { name: "Ambient AI", desc: "Real-time clinical documentation", href: "/ai-medical-scribe" },
          { name: "Autonomous Coding", desc: "Real-time, AI-driven coding", href: "/medical-coding" },
          { name: "Commure Pro", desc: "All-in-one clinical intelligence experience", href: "/ai-medical-scribe" },
          { name: "Live Analytics", desc: "Live RCM analytics and dashboards", href: "/live-rcm-analytics" },
        ],
      },
      {
        title: "Back End",
        links: [
          { name: "RCM", desc: "End-to-end medical billing automation", href: "/medical-solutions" },
          { name: "Denial Management", desc: "Predict, prevent, and appeal denials", href: "/denial-management" },
          { name: "Live Claim Tracking", desc: "Real-time transparency for patients & providers", href: "/live-claim-tracking" },
          { name: "Dental RCM", desc: "Specialized dental billing", href: "/dental-solutions" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    key: "resources",
    columns: [
      {
        title: "Insights",
        links: [
          { name: "Blog", desc: "Expert perspectives on RCM and AI", href: "/blog" },
          { name: "Customer Stories", desc: "Real impact from our clients", href: "/testimonials" },
          { name: "Guides", desc: "In-depth RCM resources", href: "/blog" },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "About", desc: "Who we are and what we believe", href: "/about" },
          { name: "Compliance", desc: "Security, privacy, and trust", href: "/compliance" },
        ],
      },
    ],
  },
  {
    label: "Company",
    key: "company",
    columns: [
      {
        title: "Who We Are",
        links: [
          { name: "About", desc: "Who we are and what we believe", href: "/about" },
          { name: "Compliance / Trust Center", desc: "Security, privacy, and compliance", href: "/compliance" },
        ],
      },
      {
        title: "Customers",
        links: [
          { name: "Testimonials", desc: "Read what our clients are saying", href: "/testimonials" },
          { name: "Resources", desc: "Insights for better revenue", href: "/blog" },
        ],
      },
    ],
  },
];

export default function Navbar({
  onContactOpen,
}: {
  onContactOpen?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenPanel(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar */}
      <div className="announce-bar px-5 py-2 text-center text-xs tracking-wide">
        <span className="text-[var(--text-heading)]/90">
          Medical Billing &bull; Dental RCM &bull; AI Scribe &bull; Claims Management &bull; Eligibility Verification
        </span>
        <Link href="/contact" className="ml-3 text-[var(--accent)] hover:underline">
          Get Started
        </Link>
      </div>

      <div className="container-page flex items-center justify-between py-4">
        {/* Brand */}
        <Link href="/" className="relative z-[1001] flex items-center">
          <Image
            src={logoUrl}
            alt="Medalyze"
            width={300}
            height={80}
            className="h-14 w-auto object-contain"
            unoptimized
          />
        </Link>

        {/* Desktop nav pill - Commure style */}
        <nav className="hidden items-center gap-1 rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)]/60 px-2 py-1.5 backdrop-blur-md lg:flex">
          {MENU_LINKS.map((item) => (
            <div key={item.key} className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenPanel(openPanel === item.key ? null : item.key);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-wider transition-colors rounded-full ${
                  openPanel === item.key
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-primary)] hover:text-[var(--text-heading)]"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    openPanel === item.key ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            onClick={onContactOpen}
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-[0.7rem] font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,244,255,0.3)]"
          >
            Contact
          </button>
        </div>

        {/* Mobile burger */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)]/60"
          >
            <span className={`h-px w-4 bg-[var(--text-heading)] transition-all ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`h-px w-4 bg-[var(--text-heading)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mega shell */}
      {openPanel && (
        <div className="absolute inset-x-0 top-full px-4">
          <div className="container-page">
            <div className="mx-auto max-w-[70rem] rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl">
              <div className="grid grid-cols-1 gap-0 p-8 md:grid-cols-3">
                {MENU_LINKS.find((m) => m.key === openPanel)?.columns.map(
                  (col) => (
                    <div key={col.title} className="px-6 py-4">
                      <p className="text-[0.75rem] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        {col.title}
                      </p>
                      <div className="my-3 h-px w-full bg-[var(--border-subtle)]" />
                      <ul className="space-y-4">
                        {col.links.map((link) => (
                          <li key={link.name}>
                            <Link href={link.href} className="group block">
                              <span className="text-[0.9rem] font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                                {link.name}
                              </span>
                              <span className="block text-[0.75rem] text-[var(--text-muted)]">
                                {link.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-[999] border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-xl px-6 py-6 lg:hidden">
          {MENU_LINKS.map((item) => (
            <div key={item.key} className="mb-4">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--accent)]">
                {item.label}
              </p>
              <ul className="space-y-2">
                {item.columns.flatMap((c) =>
                  c.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-[var(--text-heading)] hover:text-[var(--accent)]"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onContactOpen?.();
            }}
            className="mt-4 w-full rounded-full bg-[var(--accent)] py-3 text-sm font-bold uppercase text-black"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
