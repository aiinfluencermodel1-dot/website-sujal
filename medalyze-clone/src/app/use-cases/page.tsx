import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Use Cases by Industry | NexaFlow AI",
  description:
    "See real AI automation use cases for e-commerce, real estate, healthcare, finance, HR, legal, SaaS, and more industries.",
};

const useCases = [
  {
    industry: "E-commerce",
    problem: "Manual order tracking, repetitive shipping/return questions, manual inventory updates across platforms.",
    solution: "AI chatbot for order status + automated inventory sync between store and warehouse systems.",
    result: "Fewer support tickets, faster response times, no overselling out-of-stock items.",
  },
  {
    industry: "Real Estate",
    problem: "Leads go cold due to slow response; manual scheduling of property viewings.",
    solution: "AI lead-qualification chatbot + automated appointment scheduling synced to agent calendars.",
    result: "Higher lead-to-appointment conversion, no missed opportunities.",
  },
  {
    industry: "Healthcare & Clinics",
    problem: "Manual appointment booking, repetitive patient FAQs, manual intake form processing.",
    solution: "AI scheduling assistant + automated patient intake data extraction.",
    result: "Reduced front-desk workload, fewer scheduling errors, faster patient processing.",
  },
  {
    industry: "Finance & Accounting",
    problem: "Manual invoice processing, repetitive data entry from receipts and bank statements.",
    solution: "AI-powered document extraction feeding directly into bookkeeping software.",
    result: "Hours saved weekly, significantly fewer entry errors.",
  },
  {
    industry: "HR & Recruiting",
    problem: "Manually screening resumes, scheduling interviews, answering repetitive candidate questions.",
    solution: "AI resume screening + automated interview scheduling + candidate FAQ chatbot.",
    result: "Faster hiring cycles, less recruiter administrative work.",
  },
  {
    industry: "Legal Services",
    problem: "Manual document review, repetitive client intake questions, manual case status updates.",
    solution: "AI-powered document review assistant + automated client intake and status-update workflows.",
    result: "Faster document turnaround, improved client communication.",
  },
  {
    industry: "Manufacturing & Logistics",
    problem: "Manual shipment tracking across multiple carriers, manual inventory and supply chain updates.",
    solution: "Automated tracking dashboard pulling data from multiple carriers + inventory sync automation.",
    result: "Fewer delays, better visibility, reduced manual tracking work.",
  },
  {
    industry: "Education & Training",
    problem: "Manual student enrollment processing, repetitive course FAQs, manual certificate issuance.",
    solution: "Automated enrollment workflow + AI FAQ chatbot + automated certificate generation.",
    result: "Reduced administrative overhead, faster student processing.",
  },
  {
    industry: "SaaS & Technology",
    problem: "Manual customer onboarding, repetitive support tickets, manual usage reporting.",
    solution: "Automated onboarding sequences + AI support ticket triage + automated usage reports.",
    result: "Faster onboarding, quicker support resolution times.",
  },
  {
    industry: "Hospitality & Restaurants",
    problem: "Manual reservation handling, repetitive questions about hours/menu, manual review responses.",
    solution: "AI reservation and FAQ chatbot + automated review response workflows.",
    result: "Reduced phone/chat workload, faster review responses, better guest experience.",
  },
  {
    industry: "Insurance",
    problem: "Manual claims intake, repetitive policy questions, manual document verification.",
    solution: "AI claims intake assistant + automated document verification + policy FAQ chatbot.",
    result: "Faster claims processing, fewer back-and-forth delays.",
  },
];

export default function UseCasesPage() {
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
            <span className="text-[var(--text-heading)]">Use Cases</span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">USE CASES</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              AI Automation Use Cases by Industry
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              See how businesses like yours use AI automation to eliminate manual
              work—organized by industry, written in plain language.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-primary)] py-20 lg:py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <article key={useCase.industry} className="hairline">
                <div className="hairline-inner p-8">
                  <h2 className="text-2xl font-semibold text-[var(--text-heading)]">
                    {useCase.industry}
                  </h2>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed">
                    <p className="text-[var(--text-primary)]">
                      <span className="font-semibold text-[var(--text-heading)]">
                        Problem:{" "}
                      </span>
                      {useCase.problem}
                    </p>
                    <p className="text-[var(--text-primary)]">
                      <span className="font-semibold text-[var(--accent)]">
                        Solution:{" "}
                      </span>
                      {useCase.solution}
                    </p>
                    <p className="text-[var(--text-primary)]">
                      <span className="font-semibold text-[var(--text-heading)]">
                        Result:{" "}
                      </span>
                      {useCase.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
