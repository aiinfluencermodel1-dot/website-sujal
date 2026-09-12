import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Bot,
  MessagesSquare,
  CalendarCheck,
  Zap,
  Globe,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "24/7 Instant Answers",
    description:
      "Your chatbot replies in under 5 seconds, day or night—so no lead ever waits and no question goes unanswered.",
  },
  {
    icon: MessagesSquare,
    title: "Lead Capture & Qualification",
    description:
      "Interactive conversations collect contact details, qualify intent, and route hot leads straight to your calendar or CRM.",
  },
  {
    icon: CalendarCheck,
    title: "Automatic Booking",
    description:
      "Visitors book calls, demos, or appointments inside the chat—synced with your calendar and confirmed by SMS and email.",
  },
  {
    icon: Zap,
    title: "Trained on Your Business",
    description:
      "We train the AI on your offers, FAQs, pricing, and policies, so every answer sounds like your best salesperson.",
  },
  {
    icon: Globe,
    title: "Website + WhatsApp + SMS",
    description:
      "One brain across every channel—your site, WhatsApp, Instagram DMs, and SMS—with a single conversation history.",
  },
  {
    icon: ShieldCheck,
    title: "Human Handoff",
    description:
      "Tricky questions escalate to your team instantly with full context, so customers always feel taken care of.",
  },
];

const stats = [
  { value: "<5s", label: "avg. response time" },
  { value: "24/7", label: "availability" },
  { value: "2x", label: "more bookings" },
];

export default function AiChatbotsPage() {
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
              AI Chatbots
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">AI ENGAGEMENT</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              AI Chatbots That Sell While You Sleep
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              Turn your website into your hardest-working salesperson. Our custom
              AI chatbots capture leads, answer questions, and book meetings
              around the clock—without adding headcount.
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
              Everything Your Chatbot Needs
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              Built to capture more leads, book more calls, and deliver instant
              answers your visitors will love.
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
