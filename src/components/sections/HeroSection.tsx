"use client";

import React from "react";
import Image from "next/image";
import { Star, Sparkles, MapPin } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: (type?: "stay" | "banquet" | "dining") => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#11141A]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/IMG_2888.JPG.jpeg"
          alt="Hotel De Symphony by Topaz - Exterior Facade at Dusk with Illuminated Golden Signage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_36%] scale-[1.02] transition-transform duration-1000 ease-out"
        />

        {/* Multi-tier Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-[#11141A]/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11141A]/75 via-transparent to-[#11141A]/65" />
      </div>

      {/* Header Clearance Spacer (Elevated content upwards) */}
      <div className="h-20 lg:h-24 shrink-0" />

      {/* Main Hero Content (Vertically Balanced & Centered) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-2 lg:py-4">
        {/* Brand Crest Insignia */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3.5 drop-shadow-[0_4px_20px_rgba(197,162,101,0.4)] animate-in fade-in duration-700">
          <Image
            src="/logo/logo-web.png"
            alt="Hotel De Symphony Insignia"
            fill
            sizes="56px"
            className="object-contain"
            priority
          />
        </div>

        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#C5A265]/50 backdrop-blur-md mb-4 sm:mb-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A265]" />
          <span className="font-kicker text-[10px] sm:text-xs text-[#C5A265] tracking-[0.22em] font-semibold">
            WELCOME TO NAWANSHAHR&apos;S PREMIER ADDRESS
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.14] mb-3 sm:mb-4 drop-shadow-md">
          Where Modern Elegance Meets Warm Punjabi Hospitality
        </h1>

        {/* Sub-paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-xl mx-auto leading-relaxed mb-6 sm:mb-7 drop-shadow">
          Discover grand wedding celebrations, royal thali dining, and contemporary comfort in the historic heart of Shaheed Bhagat Singh Nagar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#banquets"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A265] text-black font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] hover:bg-[#D6B57C] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C5A265]/20"
          >
            Explore Grand Banquets
          </a>

          <button
            onClick={() => onOpenBooking("stay")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-card text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] hover:bg-white/10 hover:border-[#C5A265] transition-all cursor-pointer"
          >
            Reserve Your Stay
          </button>
        </div>
      </div>

      {/* Bottom Floating Metric Bar (Safely elevated with comfortable clearance) */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-5 lg:pb-7">
        <div className="glass-card rounded-2xl py-3 px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center shadow-xl">
          <div className="flex items-center justify-center sm:justify-start gap-3 py-1.5 sm:py-0">
            <div className="flex items-center text-[#C5A265]">
              <Star className="w-4 h-4 fill-[#C5A265]" />
            </div>
            <div className="text-left">
              <span className="block text-white font-semibold text-xs sm:text-sm">4.9 / 5.0 Rating</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400">100+ Verified Google Reviews</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-1.5 sm:py-0 sm:px-4">
            <div className="w-2 h-2 rounded-full bg-[#C5A265] shrink-0" />
            <div className="text-left">
              <span className="block text-white font-semibold text-xs sm:text-sm">Grand Banquet Suites</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400">Up to 250+ Seated Guests</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-3 py-1.5 sm:py-0">
            <MapPin className="w-3.5 h-3.5 text-[#C5A265] shrink-0" />
            <div className="text-left">
              <span className="block text-white font-semibold text-xs sm:text-sm">Barnala Kalan Road</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400">Nawanshahr, Punjab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
