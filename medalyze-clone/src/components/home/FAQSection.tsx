"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
export const dynamic = "force-static";

export default function FAQSection({
  items = faqs,
  showAllLink = true,
}: {
  items?: typeof faqs;
  showAllLink?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="bg-[var(--bg-primary)] py-24">
      <div className="container-page">
        <h2 className="heading-h3 mx-auto max-w-3xl text-center">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] transition-all hover:border-[var(--border-medium)]"
                role="region"
                aria-expanded={isOpen}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-regular font-medium text-[var(--text-heading)]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-5 text-small leading-relaxed text-[var(--text-muted)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all hover:gap-3"
            >
              View all FAQs <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
