import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

const signs = [
  "Employees manually copy data between spreadsheets, CRMs, or emails",
  "Customer questions pile up faster than your team can answer them",
  "Leads go cold because follow-up takes too long",
  "Reports are built manually every week and take hours to compile",
  "Growth is limited by how many people you can hire, not demand",
  "The same questions, steps, and errors keep repeating",
];

export default function ProblemSection() {
  return (
    <section className="bg-[var(--bg-primary)] py-24 md:py-32">
      <Container size="lg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-h3 !text-[var(--text-heading)]">
            Your Team Is Spending Too Much Time on Work That Shouldn&apos;t
            Need a Human
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-primary)]">
            Most businesses lose hours every single day to tasks that are
            repetitive, rule-based, and predictable—exactly the kind of work AI
            can do faster, cheaper, and without mistakes.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {signs.map((sign) => (
            <div key={sign} className="hairline">
              <div className="hairline-inner flex items-start gap-3 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {sign}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[var(--text-muted)]">
          A business needs AI automation when repetitive manual tasks—such as
          data entry, customer replies, lead follow-up, or reporting—are
          consuming employee time that could otherwise be spent on higher-value
          work.
        </p>
      </Container>
    </section>
  );
}
