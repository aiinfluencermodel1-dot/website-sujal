import Link from "next/link";
import { services } from "@/lib/constants";
import {
  Mic,
  FileText,
  Brain,
  Clock,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";

const benefitIcons = [Mic, FileText, Brain, Clock, Zap, ShieldCheck, Clock];

export default function AiMedicalScribePage() {
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
            <Link href="/services" className="transition-colors hover:text-[var(--text-heading)]">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-[var(--text-heading)]">
              AI Medical Scribe
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">AI MEDICAL SCRIBE</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              Intelligent Clinical Documentation, Without the Effort
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              {services.aiMedicalScribe.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-v2">
                Get In Touch
              </Link>
              <a href="#benefits" className="btn btn-v2 btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="benefits" className="bg-[var(--bg-primary)] py-24">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h3 !text-[var(--text-heading)]">
              Key Benefits of AI Medical Scribe
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              Discover how ambient AI documentation transforms the way care
              teams capture, structure, and use clinical notes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.aiMedicalScribe.benefits?.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <div key={benefit.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-[var(--text-heading)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--text-primary)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
