import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Mic,
  PhoneCall,
  CalendarCheck,
  Languages,
  BellRing,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Answer Every Call",
    description:
      "Never miss a call again. Your voice agent picks up on the first ring—nights, weekends, and holidays included.",
  },
  {
    icon: Mic,
    title: "Natural Conversations",
    description:
      "Human-like voices with real back-and-forth dialogue. Callers get answers, not menus—no hold music, ever.",
  },
  {
    icon: CalendarCheck,
    title: "Books Into Your Calendar",
    description:
      "Qualifies callers and books appointments directly into your calendar, with confirmations sent automatically.",
  },
  {
    icon: Languages,
    title: "40+ Languages",
    description:
      "Serve every caller in their own language with native-quality speech recognition and synthesis.",
  },
  {
    icon: BellRing,
    title: "Instant Follow-up",
    description:
      "Every call triggers SMS summaries, CRM notes, and follow-up sequences—your team wakes up to booked calls.",
  },
  {
    icon: BarChart3,
    title: "Call Analytics",
    description:
      "Transcripts, recordings, sentiment, and booking rates for every call. Know exactly what your market is asking.",
  },
];

const stats = [
  { value: "100%", label: "calls answered" },
  { value: "60%", label: "caller-to-booking rate" },
  { value: "24/7", label: "coverage" },
];

export default function VoiceAiAgentsPage() {
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
              Voice AI Agents
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">VOICE AI</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              Voice AI Agents That Never Miss a Call
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              AI phone agents that answer instantly, qualify callers, and book
              appointments in natural conversation—so every call becomes revenue
              instead of a missed opportunity.
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
              A Call Team That Never Sleeps
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              Purpose-built to answer, qualify, and book—at a fraction of the
              cost of a human call team.
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
