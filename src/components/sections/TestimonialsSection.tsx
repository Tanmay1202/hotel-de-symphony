import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { GUEST_REVIEWS } from "@/data/reviewsData";
import { HOTEL_INFO } from "@/data/hotelInfo";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#181C24] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 4.9 Star Google Anchor */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A265]/40 mb-4">
            <div className="flex items-center text-[#C5A265]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A265]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">
              {HOTEL_INFO.googleRating.score} / {HOTEL_INFO.googleRating.maxScore}
            </span>
            <span className="text-xs text-slate-400">&bull; {HOTEL_INFO.googleRating.source}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Praised by Wedding Hosts & Traveling Families
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Authentic reflections from guests who celebrated milestones, stayed for business, and dined with us in Nawanshahr.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {GUEST_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#C5A265]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#C5A265]/40 group-hover:text-[#C5A265] transition-colors" />
                  <div className="flex items-center text-[#C5A265]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A265]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-base font-semibold text-white">
                    {review.author}
                  </h4>
                  <span className="text-xs text-[#C5A265]">{review.stayType}</span>
                </div>
                <span className="text-[11px] text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Banner */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            Ratings aggregated from over 100+ public Google Local reviews & travel aggregator feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
