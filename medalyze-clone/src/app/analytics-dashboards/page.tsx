import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  BarChart3,
  PieChart,
  Eye,
  FileText,
  Zap,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description:
      "Leads, sales, marketing spend, and team output—live in one dashboard that updates the second things change.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Forecasting",
    description:
      "AI models project pipeline, cash flow, and seasonal trends—so you plan with data instead of gut feel.",
  },
  {
    icon: PieChart,
    title: "Marketing Attribution",
    description:
      "Know exactly which channel, campaign, and keyword created each customer. Kill waste, scale winners.",
  },
  {
    icon: Eye,
    title: "Bottleneck Alerts",
    description:
      "Automatic alerts when response times slip, conversion drops, or spend spikes—before small leaks become floods.",
  },
  {
    icon: FileText,
    title: "One-Click Reports",
    description:
      "Weekly performance summaries generated and delivered automatically. Walk into every Monday knowing the score.",
  },
  {
    icon: Zap,
    title: "Every Tool Connected",
    description:
      "CRM, ads, Stripe, sheets, and email—unified into a single source of truth your whole team actually checks.",
  },
];

const stats = [
  { value: "Real-time", label: "live insights" },
  { value: "100%", label: "data visibility" },
  { value: "1", label: "dashboard for everything" },
];

export default function AnalyticsDashboardsPage() {
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
              Analytics Dashboards
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">INSIGHTS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              Know Your Numbers, Grow on Purpose
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              We build live dashboards and reports that turn scattered data into
              clear decisions—every lead, dollar, and bottleneck visible in one
              place, updated in real time.
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
              Clarity That Drives Growth
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              Stop guessing. Purpose-built analytics that show what&apos;s working,
              what&apos;s leaking, and what to do next.
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
