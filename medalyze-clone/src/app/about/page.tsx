import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { companyData, logoUrl, assets } from "@/lib/constants";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About NexaFlow AI — AI Automation Experts",
  description:
    "Learn how NexaFlow AI helps companies replace manual work with intelligent AI systems and custom automation.",
};

const heroStats = [
  { value: "120+", label: "Automations Shipped" },
  { value: "40+", label: "Happy Clients" },
  { value: "12K+", label: "Hours Saved Monthly" },
];

const rcmServices = [
  "AI chatbots",
  "Voice agents",
  "CRM automation",
  "Lead generation",
  "Follow-up sequences",
  "Content engines",
  "Analytics dashboards",
];

const missionVisionValues = [
  { title: "Mission", text: companyData.mission },
  { title: "Vision", text: companyData.vision },
  { title: "Values", text: companyData.values },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--bg-primary)] py-24 lg:py-32">
        <Image
          src="/images/about-office.jpg"
          alt="NexaFlow team building automations"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

        <Container size="lg" className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--text-muted)]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[var(--text-heading)]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[var(--text-heading)]">
                About Us
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 flex items-center">
              <Image
                src={logoUrl}
                alt="NexaFlow AI logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="ml-3 text-sm font-medium text-[var(--accent)]">
                About NexaFlow
              </span>
            </div>
            <h1 className="heading-h3 !text-[var(--text-heading)]">
              About NexaFlow AI
            </h1>
            <h2 className="mt-4 text-xl font-medium text-[var(--text-primary)]">
              We Build the AI Systems That Take Repetitive Work Off Your Plate
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-primary)]">
              {companyData.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-primary)] py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="heading-h2 !text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-primary)] py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="hairline">
              <div className="hairline-inner overflow-hidden rounded-[0.625rem]">
                <Image
                  src={assets.aboutPoster}
                  alt="NexaFlow automation systems overview"
                  width={720}
                  height={720}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="heading-h4 !text-[var(--text-heading)]">
                End-to-End Business Automation
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-primary)]">
                {companyData.philosophy}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {rcmServices.map((service) => (
                  <div key={service} className="chip-border">
                    <div className="chip">
                      <span className="chip-label">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-primary)] py-24">
        <Container size="lg">
            <div className="max-w-3xl">
              <h2 className="heading-h3 !text-[var(--text-heading)]">
                Our Approach
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-primary)]">
                {companyData.philosophy}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: "Process-first, not tech-first",
                  text: "We study your workflow before recommending any tool or AI model.",
                },
                {
                  title: "Integration over disruption",
                  text: "We build automation into your existing systems rather than forcing you to switch tools.",
                },
                {
                  title: "Outcomes over features",
                  text: "We measure success in hours saved, errors reduced, and revenue impact—not features shipped.",
                },
              ].map((item) => (
                <div key={item.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <h3 className="text-xl font-semibold text-[var(--text-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-[var(--text-primary)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 max-w-3xl">
              <h2 className="heading-h3 !text-[var(--text-heading)]">
                Who We Work With
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Small & medium businesses",
                  "Agencies",
                  "Enterprises",
                  "Startups",
                ].map((who) => (
                  <div key={who} className="chip-border">
                    <div className="chip">
                      <span className="chip-label">{who}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg leading-relaxed text-[var(--text-primary)]">
                Small and medium businesses that want to scale without
                proportionally scaling headcount. Agencies that need to deliver
                more client work without more hires. Enterprises modernizing
                legacy, manual processes. Startups that want lean, automated
                operations from day one.
              </p>
            </div>

            <div className="mt-20 max-w-3xl">
              <h2 className="heading-h3 !text-[var(--text-heading)]">
                Inspirational Growth - Our Vision and Mission
              </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-primary)]">
              We are driven by a shared purpose to transform how businesses
              operate through the careful combination of advanced AI and
              human expertise.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionVisionValues.map((item) => (
              <div key={item.title} className="hairline">
                <div className="hairline-inner p-8">
                  <h3 className="text-xl font-semibold text-[var(--text-heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[var(--text-primary)]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
