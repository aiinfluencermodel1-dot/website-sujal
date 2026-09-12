import Container from "@/components/ui/Container";

const steps = [
  {
    n: "01",
    title: "We find the bottlenecks",
    description:
      "We map your existing workflows and pinpoint exactly where manual work is slowing you down.",
  },
  {
    n: "02",
    title: "We build the automation",
    description:
      "We design and develop a custom AI workflow, agent, or software tool specific to your process—not a generic template.",
  },
  {
    n: "03",
    title: "We deploy and support it",
    description:
      "The system goes live inside your existing tools, and we monitor and improve it over time.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[var(--bg-secondary)] py-24 md:py-32">
      <Container size="lg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-h3 !text-[var(--text-heading)]">
            We Replace Manual Work With AI-Powered Systems
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-primary)]">
            NexaFlow AI audits your current processes, identifies where time and
            money are being lost, and builds custom AI automation to handle that
            work automatically—integrated directly into the tools you already use.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="hairline">
              <div className="hairline-inner p-8">
                <p className="text-5xl font-bold tracking-tight text-[var(--accent)]">
                  {step.n}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-[var(--text-heading)]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--text-primary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
