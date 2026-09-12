import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/constants";
import { ArrowLeft, ChevronRight, CalendarDays } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | NexaFlow Blog`,
    description: post.excerpt,
  };
}

const categorySections: Record<
  string,
  { heading: string; paragraphs: string[] }[]
> = {
  Playbooks: [
    {
      heading: "Start With the Bottleneck",
      paragraphs: [
        "Every high-ROI automation begins at a bottleneck: the inbox nobody clears, the leads nobody calls back, the reports nobody builds. Map where time leaks first, then automate that single workflow before expanding.",
        "Teams that automate the bottleneck first see payback in weeks. Teams that try to automate everything at once stall for months. Pick one painful process, instrument it, and let the numbers justify the next build.",
      ],
    },
    {
      heading: "Design for the Human in the Loop",
      paragraphs: [
        "The best automations don't remove people—they remove busywork. Keep a human approval step where judgment matters (pricing, hiring, refunds) and let AI handle volume everywhere else.",
        "This hybrid design builds trust fast: your team sees the system working, overrides it when needed, and gradually hands over more as confidence grows.",
      ],
    },
    {
      heading: "Measure From Day One",
      paragraphs: [
        "Attach a metric to every automation before it launches: response time, hours saved, conversion lift, error rate. Without a baseline, even great results look like background noise.",
        "Review the numbers weekly for the first month. Small tuning—rewriting a chatbot greeting, adjusting a follow-up delay—often doubles the impact of the initial build.",
      ],
    },
    {
      heading: "Compound With Playbooks",
      paragraphs: [
        "One working automation becomes a template. The follow-up sequence that revived dead leads gets cloned for onboarding, renewals, and referrals. Document each win as a playbook and your automation library compounds.",
        "Businesses that treat automation as a growing library—not one-off projects—pull away from competitors within a year.",
      ],
    },
  ],
  "Voice AI": [
    {
      heading: "What Voice AI Can Do Today",
      paragraphs: [
        "Modern voice agents answer calls, qualify callers, book appointments, take orders, and follow up—24/7, in natural conversation, across dozens of languages. The robotic IVR era is over.",
        "The strongest use cases are high-volume and repetitive: missed-call text-back, appointment reminders, lead qualification, and after-hours coverage that used to require night staff.",
      ],
    },
    {
      heading: "Designing Conversations That Convert",
      paragraphs: [
        "A voice agent is only as good as its script. Map the five most common caller intents, write tight responses for each, and define clear handoff rules for everything else.",
        "Test with real calls before launch. The difference between a 40% and an 80% booking rate is usually three or four rewritten prompts discovered in the first week of listening.",
      ],
    },
    {
      heading: "Integration Is the Multiplier",
      paragraphs: [
        "A voice agent that just talks is a novelty. One wired into your CRM, calendar, and pipeline—logging calls, booking slots, triggering follow-ups—is a revenue machine.",
        "Plan the integrations first: where do transcripts go, who gets notified, what happens when a hot lead calls at midnight? Answer those and deployment is smooth.",
      ],
    },
    {
      heading: "Cost, Compliance, and Trust",
      paragraphs: [
        "Voice AI typically costs a fraction of a human call team while answering 100% of calls. Disclose the AI upfront, record with consent where required, and keep humans one tap away.",
        "Done right, callers prefer it: no hold music, instant answers, and perfect follow-through every single time.",
      ],
    },
  ],
  Automation: [
    {
      heading: "Find the Leaks in Your Pipeline",
      paragraphs: [
        "Most businesses lose deals in the gaps: the lead contacted after four hours instead of four minutes, the quote never followed up, the onboarding email never sent. Audit your pipeline for silence and you'll find your automation roadmap.",
        "Speed-to-lead is the highest-leverage fix in sales. Contacting a lead within five minutes makes conversion up to 8x more likely—and automation makes five minutes the default.",
      ],
    },
    {
      heading: "Automate Follow-up First",
      paragraphs: [
        "Eighty percent of sales need five or more touches, but most reps stop at two. Multistep email and SMS sequences that run themselves close the gap without adding headcount.",
        "The key is relevance: segment by behavior, personalize with merge fields and AI-written lines, and stop the sequence the moment a human replies.",
      ],
    },
    {
      heading: "Connect the Stack",
      paragraphs: [
        "Your CRM, calendar, inbox, ads, and payments should share one nervous system. When a deal moves stages, the right tasks, messages, and notifications should fire automatically.",
        "Start with the three integrations that touch revenue daily. Depth on a few tools beats shallow connections across twenty.",
      ],
    },
    {
      heading: "Keep Humans Where They Win",
      paragraphs: [
        "Automate the routine, elevate the human. Let AI draft, remind, route, and report—while your closers spend their hours on calls, relationships, and judgment calls no model should make.",
        "Review automation logs weekly. Every exception is a clue for the next improvement.",
      ],
    },
  ],
  Growth: [
    {
      heading: "Build the Capture Layer",
      paragraphs: [
        "Traffic you can't capture is rent you pay forever. Chatbots, quizzes, lead magnets, and instant booking turn visitors into contacts around the clock.",
        "Every page with intent—pricing, services, contact—deserves a capture mechanism. Small conversion lifts here multiply everything downstream.",
      ],
    },
    {
      heading: "Nurture on Autopilot",
      paragraphs: [
        "Most leads aren't ready today. Drip sequences that educate, prove, and invite over 30–90 days turn 'not now' into booked calls without manual effort.",
        "Segment by interest and behavior. A prospect who watched pricing needs a different next email than one who read a blog post.",
      ],
    },
    {
      heading: "Speed Wins Deals",
      paragraphs: [
        "Instant SMS plus AI chat response within seconds of form-fill is the single biggest lever in lead generation. Pair it with automatic calendar booking and show-up reminders.",
        "Track response time as a KPI. If it slips past five minutes, treat it as an outage—because in revenue terms, it is one.",
      ],
    },
    {
      heading: "Scale What Works",
      paragraphs: [
        "Once cost-per-booked-call is predictable, scale spend confidently. The automation layer means 10x leads don't require 10x staff.",
        "Reinvest early wins into the next bottleneck—usually creative testing or offer refinement—and growth compounds quarter after quarter.",
      ],
    },
  ],
  Content: [
    {
      heading: "One Idea, Thirty Assets",
      paragraphs: [
        "A single strong idea can become a blog post, five short videos, ten social posts, and a nurture email—when AI handles repurposing and humans handle taste. Build the workflow once, run it weekly.",
        "Start with a content pillar per week: record one deep take, then let the engine atomize it across every channel your buyers actually read.",
      ],
    },
    {
      heading: "Systems Beat Inspiration",
      paragraphs: [
        "Consistency wins content. A fixed weekly workflow—ideate, draft, review, schedule—beats waiting for inspiration every time.",
        "Use AI for first drafts and research, but keep a human editor. Voice and judgment are the moat; speed is just the vehicle.",
      ],
    },
    {
      heading: "Distribute Like a Machine",
      paragraphs: [
        "Publishing is half the job. Automated scheduling, cross-posting, and repurposing checklists make sure every asset actually ships everywhere it should.",
        "Measure per-channel retention, not vanity reach. Double down on formats that hold attention past three seconds.",
      ],
    },
    {
      heading: "Close the Loop With Revenue",
      paragraphs: [
        "Tag content-sourced leads in your CRM and track them to closed revenue. When you know which topics create customers, planning gets easy.",
        "The content engine isn't a marketing expense—it's a pipeline source with a dashboard to prove it.",
      ],
    },
  ],
  ROI: [
    {
      heading: "Count Hours First",
      paragraphs: [
        "The simplest ROI math: hours eliminated × fully-loaded hourly cost. A 20-hour-per-week automation at $40/hour is worth over $40,000 a year—before any revenue lift.",
        "Log time spent on the manual process for two weeks before automating. That baseline becomes the proof in your ROI report.",
      ],
    },
    {
      heading: "Then Count Revenue",
      paragraphs: [
        "Faster follow-up, higher show rates, and reactivated dead leads show up as pipeline and closed deals. Attribute conservatively—even 50% credit usually dwarfs the cost.",
        "Track three numbers monthly: response time, conversion rate, and hours saved. If all three move, the investment is working.",
      ],
    },
    {
      heading: "Price Against Value, Not Cost",
      paragraphs: [
        "Automation should be priced against the value it creates, not the hours it took to build. A system that adds $20k/month is cheap at almost any build price.",
        "Beware false economy: the cheapest tool that nobody adopts returns exactly zero. Adoption is part of ROI—design for it.",
      ],
    },
    {
      heading: "Report It Monthly",
      paragraphs: [
        "A one-page monthly report—hours saved, deals influenced, uptime—keeps stakeholders bought in and funds the next automation.",
        "Stack wins over quarters and the story tells itself: a business that keeps more of what it earns while its team focuses on growth.",
      ],
    },
  ],
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const sections = categorySections[post.category] ?? categorySections.Playbooks;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      {/* Hero / Banner */}
      <section className="bg-[var(--bg-primary)] text-[var(--text-heading)]">
        <div className="container-page py-20 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[var(--text-muted)]"
          >
            <Link href="/" className="transition-colors hover:text-[var(--text-heading)]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="transition-colors hover:text-[var(--text-heading)]">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="truncate text-[var(--text-heading)]">{post.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="chip-border">
                <span className="chip">
                  <span className="chip-label">{post.category}</span>
                </span>
              </span>
            </div>
            <h1 className="mt-6 heading-h3">{post.title}</h1>
            <span className="mt-4 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
              <CalendarDays className="h-4 w-4" />
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-[var(--bg-primary)] pb-8 lg:pb-12">
        <div className="container-page">
          <div className="hairline">
            <div className="hairline-inner overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-primary)] py-12 lg:py-16">
        <div className="container-page max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-medium text-[var(--text-primary)]">
            {post.excerpt}
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="heading-h4 !text-[var(--text-heading)]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[var(--text-primary)] leading-relaxed">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-[var(--border-subtle)] pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent)]/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[var(--bg-primary)] py-20 lg:py-24">
        <div className="container-page">
          <h2 className="heading-h3 !text-[var(--text-heading)]">
            Related Posts
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group hairline flex flex-col"
              >
                <div className="hairline-inner flex flex-1 flex-col p-6">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-[0.55rem]"
                  >
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col pt-4">
                    <div className="flex items-center gap-3">
                      <span className="chip-border">
                        <span className="chip">
                          <span className="chip-label">{related.category}</span>
                        </span>
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">
                        {related.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--text-heading)]">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="transition-colors group-hover:text-[var(--accent)]"
                      >
                        {related.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-[var(--text-primary)]">
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
                    >
                      Read More
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
