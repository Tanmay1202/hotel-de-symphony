import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Utensils, Compass } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section id="overview" className="py-24 md:py-32 bg-[#11141A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column (7 Cols on LG) */}
          <div className="lg:col-span-7">
            <span className="font-kicker text-xs text-[#C5A265] tracking-[0.2em] font-semibold block mb-3">
              BOUTIQUE COMFORTS IN DOABA
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-6">
              A Sanctuary of Refined Hospitality in Nawanshahr
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
              Positioned along Barnala Kalan Road in Nawanshahr, <strong className="text-white font-medium">Hotel De Symphony by Topaz</strong> redefines regional boutique hospitality. Whether hosting lavish wedding receptions in our grand banquet suites, gathering for intimate family celebrations over authentic North Indian cuisine, or traveling on executive business through Punjab, our property delivers contemporary architectural sophistication anchored by genuine warmth.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              From our illuminated modern glass facade and secure on-site parking to our dedicated children&apos;s indoor arcade and tranquil reading lounge, every touchpoint is designed to offer a peaceful, comfortable home away from home.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A265] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Spacious Private Parking</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Secure, paved on-site lot for guest cars and coaches.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Utensils className="w-5 h-5 text-[#C5A265] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">In-House Culinary Excellence</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Multi-cuisine restaurant and full banquet catering.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A265] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">100% Power Generator Backup</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Uninterrupted climate control and event operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#C5A265] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Strategic Doaba Hub</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Quick access to Jalandhar, Chandigarh & Banga.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 Cols on LG) */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Offset Gold Frame */}
            <div className="absolute -inset-3 border border-[#C5A265]/30 rounded-2xl -rotate-1 hidden sm:block pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden glass-card shadow-2xl aspect-[4/5] max-h-[560px] w-full">
              <Image
                src="/photos/IMG_3615.JPG.jpeg"
                alt="Hotel De Symphony - Boutique Lobby Lounge under Staircase with Traditional Indian Art"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[45%_center] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A265] font-semibold block mb-1">
                  BOUTIQUE INTERIORS
                </span>
                <h4 className="font-editorial text-lg text-white font-medium">
                  The Lobby Lounge & Indian Art Collection
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Warm leather seating and curated heritage motifs welcoming every guest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
