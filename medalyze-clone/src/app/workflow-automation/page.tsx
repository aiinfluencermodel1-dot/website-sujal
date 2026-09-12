import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Workflow,
  Database,
  Zap,
  BellRing,
  Check,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workflow & CRM Automation Services | NexaFlow AI",
  description:
    "Connect your tools into automations that follow up, assign, remind, and report. 100+ integrations, live in weeks.",
};

const features = [
  {
    icon: Workflow,
    title: "CRM Automation",
    description:
      "Leads routed, tagged, assigned, and followed up automatically. Your pipeline moves itself while your team closes.",
  },
  {
    icon: Database,
    title: "100+ Integrations",
    description:
      "HubSpot, Salesforce, GoHighLevel, Shopify, Slack, Stripe, and more—connected into one seamless operating system.",
  },
  {
    icon: Zap,
    title: "Instant Lead Response",
    description:
      "New leads get SMS, email, and AI chat follow-up in under 60 seconds—even at 2am on a Sunday.",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description:
      "Your team only hears about what matters: hot replies, booked calls, and deals ready to close.",
  },
  {
    icon: Check,
    title: "Task & Ops Automation",
    description:
      "Onboarding checklists, invoicing reminders, review requests, and renewals—all running without manual effort.",
  },
  {
    icon: TrendingUp,
    title: "Pipeline Analytics",
    description:
      "See conversion at every stage, spot leaks instantly, and know exactly which automation earns its keep.",
  },
];

const stats = [
  { value: "30+", label: "hours saved weekly" },
  { value: "90%", label: "less manual work" },
  { value: "2–4 wks", label: "to go live" },
];

export default function WorkflowAutomationPage() {
  return (
    <main>
      <section className="bg-[var(--bg-primary)] py-20 lg:py-28">
        <Container size="lg">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]"
          >
            <Link href="/" className="transition-colors hover:text-[var(--text-heading)]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services" className="transition-colors hover:text-[var(--text-heading)]">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-[var(--text-heading)]">
              Workflow Automation
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">OPERATIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              Workflows That Run Your Business for You
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              We connect your CRM, inbox, calendar, and tools into automations
              that follow up, assign, remind, and report—eliminating the busywork
              that eats your week.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-v2">
                Get In Touch
              </Link>
              <a href="#features" className="btn btn-v2 btn-outline">
                Explore Features
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="features" className="bg-[var(--bg-primary)] py-24">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h3 !text-[var(--text-heading)]">
              Your Operations, on Autopilot
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              From first click to closed deal to happy referral—every step
              handled, tracked, and optimized.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-[var(--text-heading)]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--text-primary)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-primary)] py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-bold tracking-tight text-[var(--text-heading)] lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
