import Link from "next/link";
import { services } from "@/lib/constants";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Check,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Improved Coding Accuracy",
    description:
      "Certified coders and AI-assisted review deliver 99.9% coding accuracy, minimizing compliance risk and costly rework.",
  },
  {
    icon: TrendingUp,
    title: "Reduced Denials",
    description:
      "Proactive eligibility checks and AI-driven denial detection cut claim denials and accelerate appeal resolution.",
  },
  {
    icon: FileCheck,
    title: "Faster Payments",
    description:
      "Same-day claim submission and proactive AR follow-ups shorten the revenue cycle so you get paid quicker.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "Experienced, certified RCM specialists manage every stage of your revenue cycle with precision and care.",
  },
];

export default function MedicalSolutionsPage() {
  const { title, description, features } = services.medicalSolutions;

  return (
    <main>
      {/* Hero Section */}
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
              Medical RCM
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">MEDICAL RCM SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-[var(--text-heading)]">
              Comprehensive Medical Billing. Maximum Reimbursement.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              {description}
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-v2">
                Schedule A Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[var(--bg-primary)] py-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-[var(--text-heading)]">
              Explore Our Medical RCM Features
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              End-to-end revenue cycle management built to maximize your
              reimbursements.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(features ?? []).map((feature) => (
              <div key={feature.title} className="hairline">
                <div className="hairline-inner p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-[var(--text-heading)]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[var(--text-primary)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-[var(--bg-primary)] py-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-[var(--text-heading)]">
              Why Choose Medalyze for Medical RCM
            </h2>
            <p className="mt-4 text-lg text-[var(--text-primary)]">
              We combine certified expertise with AI-driven automation to boost
              your revenue cycle performance.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-[var(--text-heading)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-primary)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
