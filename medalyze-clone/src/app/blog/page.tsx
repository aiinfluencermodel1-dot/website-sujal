import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/constants";
import { ChevronRight, ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Blog — Guides, Tips & Case Studies",
  description:
    "Practical guides on AI automation, workflow optimization, and reducing manual work with AI for businesses.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main>
      {/* Hero */}
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
            <span className="text-[var(--text-heading)]">Blog</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-h3">Playbooks for Business on Autopilot</h1>
            <p className="mt-6 text-medium text-[var(--text-primary)]">
              Automation playbooks, AI guides, and growth systems that run
              themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-[var(--bg-primary)] py-20 lg:py-24">
        <div className="container-page">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block"
          >
            <div className="hairline">
              <div className="hairline-inner grid gap-8 p-6 lg:grid-cols-2 lg:gap-12 lg:p-8">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[0.55rem]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <span className="chip-border">
                      <span className="chip">
                        <span className="chip-label">{featured.category}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                      <CalendarDays className="h-4 w-4" />
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-heading)] transition-colors group-hover:text-[var(--accent)] sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-medium text-[var(--text-primary)]">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-[var(--accent)]">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[var(--bg-primary)] py-20 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group hairline flex flex-col"
              >
                <div className="hairline-inner flex flex-1 flex-col p-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-[0.55rem]"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col pt-4">
                    <div className="flex items-center gap-3">
                      <span className="chip-border">
                        <span className="chip">
                          <span className="chip-label">{post.category}</span>
                        </span>
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                        <CalendarDays className="h-4 w-4" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--text-heading)]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors group-hover:text-[var(--accent)]"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-[var(--text-primary)]">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-medium text-[var(--accent)]"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
