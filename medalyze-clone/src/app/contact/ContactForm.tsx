"use client";

export default function ContactForm() {
  return (
    <div className="hairline">
      <form
        className="hairline-inner p-8 sm:p-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-small text-[var(--text-primary)]"
            >
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              required
              className="mt-1.5 w-full rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-small text-[var(--text-primary)]"
            >
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              required
              className="mt-1.5 w-full rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-small text-[var(--text-primary)]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1.5 w-full rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-small text-[var(--text-primary)]"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              className="mt-1.5 w-full rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-small text-[var(--text-primary)]"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="mt-1.5 w-full rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-small text-[var(--text-primary)]"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1.5 w-full rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="block text-small text-[var(--text-primary)]"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="mt-1.5 w-full resize-none rounded bg-[#0d0d0d] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
          />
        </div>

        <div className="mt-5 flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-[#0d0d0d] accent-[#a8f4ff]"
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-[var(--text-muted)]">
            By submitting this form, you agree to receive communications
            from NexaFlow AI LLC. We respect your privacy and will
            never share your information with third parties. You may
            unsubscribe at any time.
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-v2 w-full mt-6"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
