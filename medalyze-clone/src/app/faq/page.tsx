import Link from "next/link";
import type { Metadata } from "next";
import { allFaqs } from "@/lib/constants";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation FAQ — Common Questions Answered",
  description:
    "Answers to the most common questions about AI automation, workflow automation, and custom AI software development.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <section className="bg-[var(--bg-primary)] text-[var(--text-heading)]">
        <Container size="lg" className="py-20 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]"
          >
            <Link href="/" className="transition-colors hover:text-[var(--text-heading)]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[var(--text-heading)]">FAQ</span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">FAQ</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              AI Automation FAQ — Common Questions Answered
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              Everything you need to know about AI automation, workflow
              automation, and custom AI software—answered directly.
            </p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FAQSection items={allFaqs} showAllLink={false} />

      <CTASection />
    </main>
  );
}
