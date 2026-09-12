import Link from "next/link";
import { contactInfo } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-[var(--bg-primary)] py-24">
      <div className="container-page">
        {/* Gradient border card - Commure style */}
        <div
          className="mx-auto max-w-6xl rounded-[1.5rem] p-[1px]"
          style={{ background: "linear-gradient(135deg, #a8f4ff 0%, #3351f1 50%, #a8f4ff 100%)" }}
        >
          <div className="rounded-[1.4rem] bg-[var(--bg-primary)] px-8 py-16 text-center md:py-20">
            <h3 className="heading-h4 mx-auto max-w-3xl">
              Ready to bring AI to your revenue cycle?
            </h3>
            <p className="text-medium mt-4 text-[var(--text-muted)]">
              Drop in your information below and we&apos;ll be in touch.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,244,255,0.3)]"
              >
                Get Assessment
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--accent)] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10"
              >
                Talk to Sales
              </Link>
            </div>

            <p className="mt-10 text-sm text-[var(--text-muted)]">
              or call us at{" "}
              <span className="font-semibold text-[var(--accent)]">
                {contactInfo.phone}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
