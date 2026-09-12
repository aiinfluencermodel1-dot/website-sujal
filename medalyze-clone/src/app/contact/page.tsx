import Link from "next/link";
import { contactInfo } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import ContactForm from "./ContactForm";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";

const contactCards = [
  { icon: MapPin, label: "Address", value: contactInfo.address },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Clock, label: "Working Hours", value: contactInfo.workingHours },
];

const features = [
  "AI chatbots & voice agents",
  "CRM & workflow automation",
  "2–4 week deployment",
  "Measurable ROI reporting",
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--bg-primary)] text-[var(--text-heading)]">
        <Container size="lg" className="py-20 lg:py-28">
          <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="transition-colors hover:text-[var(--text-heading)]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[var(--text-heading)]">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-h3 !text-[var(--text-heading)]">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              We&apos;d love to hear from you. Our team is ready to help automate your
              business.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div className="hairline">
                  <div className="hairline-inner flex items-start gap-4 p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[var(--text-muted)]">{card.label}</p>
                      <p className="mt-1 text-sm leading-snug text-[var(--text-heading)]">{card.value}</p>
                    </div>
                  </div>
                </div>
              );

              if (card.href) {
                return (
                  <a key={card.label} href={card.href} className="block">
                    {inner}
                  </a>
                );
              }
              return <div key={card.label}>{inner}</div>;
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-primary)] py-20 lg:py-28">
        <Container size="lg">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading-h4 !text-[var(--text-heading)]">
                Let&apos;s Start a Conversation
              </h2>
              <p className="mt-4 text-lg text-[var(--text-primary)]">
                Based in Austin, TX, NexaFlow serves growing businesses
                worldwide. Reach out to learn how we can automate your
                sales and operations.
              </p>

              <div className="mt-10 space-y-6">
                <div className="hairline">
                  <div className="hairline-inner flex items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-heading)]">
                        Based in Austin, TX
                      </p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Serving growing businesses worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hairline">
                  <div className="hairline-inner p-5">
                    <p className="text-sm font-semibold text-[var(--text-heading)]">
                      What We Offer
                    </p>
                    <ul className="mt-3 space-y-2">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                          <svg
                            className="h-4 w-4 shrink-0 text-[var(--accent)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--text-muted)]">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
