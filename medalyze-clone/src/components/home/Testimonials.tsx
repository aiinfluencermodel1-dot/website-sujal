"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg-primary)] py-24">
      <div className="container-page">
        {/* Section header - Commure style */}
        <div className="text-center">
          <h2 className="heading-h3">
            Real People. Real Impact.
          </h2>
          <p className="text-regular mt-4 text-[var(--text-muted)]">
            Read what Medalyze customers are saying about our interconnected
            platform of AI solutions.
          </p>
        </div>

        {/* Testimonials grid - Commure style */}
        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "3rem" }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="group h-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--border-medium)] hover:shadow-lg">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      {/* Rating stars */}
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <Star
                            key={s}
                            className="h-4 w-4"
                            fill="var(--accent)"
                            color="var(--accent)"
                          />
                        ))}
                      </div>
                      {/* Quote */}
                      <p className="text-regular leading-relaxed text-[var(--text-primary)]">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    {/* Author */}
                    <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                      <p className="text-small font-bold text-[var(--text-heading)]">
                        {t.name}
                      </p>
                      <p className="text-small mt-1 text-[var(--text-muted)]">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows - Commure style */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="swiper-button-prev-custom flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="swiper-button-next-custom flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
