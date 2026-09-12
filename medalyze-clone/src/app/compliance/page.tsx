import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Server,
  Eye,
  KeyRound,
  ChevronRight,
} from "lucide-react";

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "GDPR & Privacy Ready",
    description:
      "Privacy-first builds with data minimization, clear consent flows, and regional compliance for GDPR and CCPA from day one.",
  },
  {
    icon: FileCheck,
    title: "Security Reviews",
    description:
      "Documented controls across security, availability, and confidentiality—reviewed regularly as our automations evolve.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "End-to-end encryption for data in transit and at rest, using industry-standard cryptographic protocols to protect your business data.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade hosting with redundancy, intrusion detection, and continuous monitoring across our entire infrastructure.",
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    description:
      "Role-based access, least-privilege principles, and multi-factor authentication ensuring only authorized personnel reach your systems.",
  },
  {
    icon: Eye,
    title: "Auditing & Monitoring",
    description:
      "Comprehensive logging, real-time monitoring, and regular reviews to detect and respond to issues proactively.",
  },
];

const securityFeatures = [
  {
    title: "Data Processing Agreements",
    description:
      "We sign DPAs with every client, formally documenting how your business data is handled, stored, and protected.",
  },
  {
    title: "Secure API Handling",
    description:
      "Credentials and tokens are stored encrypted, scoped to least privilege, and rotated—never hardcoded or exposed.",
  },
  {
    title: "Employee Security Training",
    description:
      "Our team undergoes regular, mandatory security and privacy training to maintain a security-first culture across the organization.",
  },
  {
    title: "Incident Response",
    description:
      "A defined incident response plan ensures timely detection, containment, and notification in the unlikely event of a security event.",
  },
];

export default function CompliancePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--bg-primary)] text-[var(--text-heading)]">
        <div className="container-page py-20 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]"
          >
            <Link href="/" className="transition-colors hover:text-[var(--text-heading)]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[var(--text-heading)]">Trust Center</span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">Trust Center</span>
              </span>
            </span>
            <h1 className="mt-6 heading-h3">
              Security, Privacy, and Compliance
            </h1>
            <p className="mt-6 text-medium text-[var(--text-primary)]">
              Your business data deserves enterprise-grade protection. We build
              security and privacy into every automation we ship—so you can
              focus on growth, not risk.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="bg-[var(--bg-primary)] py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="hairline group"
                >
                  <div className="hairline-inner p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[#a8f4ff] group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-[var(--text-heading)]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-primary)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Details */}
      <section className="bg-[var(--bg-primary)] py-20 lg:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-[var(--text-heading)]">
              Enterprise-grade security built into every layer
            </h2>
            <p className="mt-6 text-medium text-[var(--text-primary)]">
              NexaFlow connects to the systems that run your business—your CRM,
              inbox, calendar, and payment tools. That responsibility drives
              every decision we make. We apply robust data protection measures,
              encrypt credentials end to end, and ensure every member of our
              team is trained and accountable for safeguarding client
              data—from first lead to closed deal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="hairline"
              >
                <div className="hairline-inner p-7">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[var(--accent)]" />
                    <h3 className="font-semibold text-[var(--text-heading)]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-primary)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
