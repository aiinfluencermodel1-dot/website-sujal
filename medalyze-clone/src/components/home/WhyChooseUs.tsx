import { whyChooseUs } from "@/lib/constants";
import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";

const icons = [ShieldCheck, ShieldCheck, TrendingUp, Handshake];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--bg-secondary)] py-24">
      <Container size="lg">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-5xl">
              A Smarter Way to Manage Healthcare Revenue
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
              Our integrated platform combines AI automation with expert
              human oversight to deliver faster reimbursements, fewer
              denials, and complete visibility into your revenue cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[var(--border-medium)] hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
