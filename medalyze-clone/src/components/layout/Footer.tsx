import Link from "next/link";
import Image from "next/image";
import { footerData, contactInfo, logoUrl } from "@/lib/constants";

const footerCols = [
  {
    title: "Solutions",
    links: [
      { label: "Medical RCM", href: "/medical-solutions" },
      { label: "Dental RCM", href: "/dental-solutions" },
      { label: "AI Medical Scribe", href: "/ai-medical-scribe" },
      { label: "Live Claim Tracking", href: "/live-claim-tracking" },
      { label: "Denial Management", href: "/denial-management" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Compliance", href: "/compliance" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
    ],
  },
];

export default function Footer({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <footer className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-heading)]">
      <div className="container-page py-20">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-tiny uppercase tracking-widest text-[var(--text-muted)]">
              Medalyze Medtech LLC
            </p>
            <h2 className="heading-h4 mt-2 max-w-xl">
              Analyze, Automate, Accelerate
            </h2>
          </div>

          <button onClick={onContactOpen} className="btn btn-animated is-small">
            <span className="btn_text-wrap text-[var(--accent)]">
              <span className="btn_text">Let&apos;s Talk</span>
            </span>
          </button>
        </div>

        <div className="my-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src={logoUrl}
              alt="Medalyze"
              width={220}
              height={60}
              className="h-12 w-auto object-contain"
              unoptimized
            />
            <p className="mt-5 text-small text-[var(--text-muted)]">
              {footerData.tagline}
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-small font-black uppercase tracking-wider text-[var(--text-heading)]">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-small text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-2 border-t border-[var(--border-subtle)] pt-8 text-small text-[var(--text-muted)]">
          <span>{contactInfo.address}</span>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-[var(--accent)]">
            US: {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-[var(--accent)]">
            {contactInfo.email}
          </a>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 text-tiny text-[var(--text-muted)] sm:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} Medalyze Medtech LLC. All
            rights reserved.
          </p>
          <p>
            {contactInfo.workingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
