import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Target,
  Mail,
  MessagesSquare,
  CalendarCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Lead Capture Funnels",
    description:
      "High-converting landing pages, quizzes, and chat flows that turn cold traffic into qualified contacts.",
  },
  {
    icon: Zap,
    title: "Speed-to-Lead",
    description:
      "AI responds in seconds across SMS, email, and chat—making you 8x more likely to convert every new lead.",
  },
  {
    icon: Mail,
    title: "Nurture Sequences",
    description:
      "Multistep email and SMS campaigns that educate, build trust, and book calls on autopilot over 30–90 days.",
  },
  {
    icon: MessagesSquare,
    title: "Dead-Lead Revival",
    description:
      "AI re-engages your old database with personalized outreach, resurrecting forgotten pipeline into booked calls.",
  },
  {
    icon: CalendarCheck,
    title: "Show-Up Automation",
    description:
      "Confirmations, reminders, and rescheduling flows that slash no-shows and keep your calendar full.",
  },
  {
    icon: TrendingUp,
    title: "ROI Dashboard",
    description:
      "Cost per lead, per booking, and per deal—tracked end to end so you scale spend with total confidence.",
  },
];

const stats = [
  { value: "8x", label: "higher conversion" },
  { value: "5+", label: "auto touches per lead" },
  { value: "2x", label: "more booked calls" },
];

export default function LeadGenerationPage() {
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
              Lead Generation
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">GROWTH</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              A Lead Machine That Runs Itself
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              Capture, nurture, and book leads on autopilot. Our AI lead
              generation systems respond in seconds, follow up for months, and
              fill your calendar while you focus on closing.
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
              From Click to Customer, Automatically
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              Every stage of your pipeline—capture, nurture, book, remind—handled
              by systems that never forget and never sleep.
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
