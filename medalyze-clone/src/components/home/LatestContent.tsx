"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/constants";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function LatestContent() {
  const posts = blogPosts.slice(0, 6);

  return (
    <section className="bg-[var(--bg-primary)] py-24">
      <div className="container-page">
        {/* Section header - Commure style */}
        <div className="text-center">
          <h2 className="heading-h3">
            Insights for Better Revenue
          </h2>
          <p className="text-regular mt-4 text-[var(--text-muted)]">
            Stay informed with the latest trends and strategies in revenue
            cycle management.
          </p>
        </div>

        {/* Blog cards grid - Commure style */}
        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".blog-swiper-next",
              prevEl: ".blog-swiper-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "3rem" }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.slug} className="h-auto">
                <Link
                  href={"/blog/" + post.slug}
                  className="group block h-full"
                >
                  <div className="group h-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] transition-all hover:border-[var(--border-medium)] hover:shadow-lg">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent)]">
                          {post.category}
                        </span>
                        <span className="text-[0.7rem] text-[var(--text-muted)]">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-large font-display font-bold text-[var(--text-heading)] transition-colors group-hover:text-[var(--accent)]">
                        {post.title}
                      </h3>

                      <p className="text-small mt-3 line-clamp-2 text-[var(--text-muted)]">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                        Read more
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows - Commure style */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="blog-swiper-prev flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="blog-swiper-next flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
