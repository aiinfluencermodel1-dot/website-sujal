import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  PenLine,
  Video,
  CalendarCheck,
  Share2,
  Sparkles,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Content Engine — 30 Days of Content | NexaFlow AI",
  description:
    "Turn one weekly idea into a month of posts, videos, and emails with an AI content system trained on your voice.",
};

const features = [
  {
    icon: PenLine,
    title: "One Idea, Thirty Assets",
    description:
      "A single recording becomes blogs, shorts, carousels, emails, and posts—repurposed by AI, polished by editors.",
  },
  {
    icon: Video,
    title: "Short-Form Video Engine",
    description:
      "Hooks, scripts, captions, and posting schedules for Reels, TikTok, and Shorts—produced weekly without burnout.",
  },
  {
    icon: CalendarCheck,
    title: "30-Day Content Calendar",
    description:
      "A full month of content planned, drafted, and scheduled in one sitting. Consistency finally becomes automatic.",
  },
  {
    icon: Share2,
    title: "Multichannel Distribution",
    description:
      "Auto-publish across LinkedIn, Instagram, X, YouTube, and email—formatted natively for each platform.",
  },
  {
    icon: Sparkles,
    title: "On-Brand AI Writing",
    description:
      "Trained on your voice, offers, and proof—so every draft sounds like you on your best day, not a robot.",
  },
  {
    icon: BarChart3,
    title: "Content-to-Revenue Tracking",
    description:
      "See which topics drive leads and deals. Double down on what converts, cut what doesn't.",
  },
];

const stats = [
  { value: "30 days", label: "of content per sprint" },
  { value: "5x", label: "more output" },
  { value: "10+", label: "channels covered" },
];

export default function ContentEnginePage() {
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
              Content Engine
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">CONTENT</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              30 Days of Content From One Workflow
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              Our AI content engine turns one weekly idea into a month of posts,
              videos, and emails—planned, drafted, and scheduled automatically
              while staying unmistakably you.
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
              Content That Compounds
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              A repeatable system for authority, inbound leads, and trust—running
              every single week without fail.
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
