"use client";

import React from "react";
import Image from "next/image";
import { Building2, Moon, Car, Clock, Sparkles, Maximize2 } from "lucide-react";

interface ArchitectureSectionProps {
  onOpenLightbox?: (itemSrcOrId: string) => void;
}

export default function ArchitectureSection({ onOpenLightbox }: ArchitectureSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#181C24] text-white border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.2em] font-semibold block mb-2">
            MODERN LANDMARK
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            An Architectural Presence in Nawanshahr
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Constructed with a contemporary multi-story glass facade and illuminated rooftop signage, Hotel De Symphony stands as a modern beacon for travelers arriving day or night.
          </p>
        </div>

        {/* Featured Wide Architectural Card */}
        <div 
          onClick={() => onOpenLightbox?.("/photos/IMG_2926.JPG.jpeg")}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A265]/20 hover:border-[#C5A265]/60 transition-all aspect-[16/9] sm:aspect-[21/9] max-h-[500px] w-full mb-12 cursor-pointer group"
          role={onOpenLightbox ? "button" : undefined}
          tabIndex={onOpenLightbox ? 0 : undefined}
          aria-label="View Illuminated Facade photo in full screen"
        >
          <Image
            src="/photos/IMG_2926.JPG.jpeg"
            alt="Hotel Symphony Facade at Night with Glowing Rooftop Sign and Landscaped Palms"
            fill
            sizes="100vw"
            className="object-cover object-[center_45%] group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Floating Card Caption */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-[#C5A265]/40 text-[#C5A265] text-xs font-semibold mb-2 backdrop-blur-sm">
                <Moon className="w-3.5 h-3.5" /> 24/7 Illumination & Security
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium flex items-center gap-2">
                The Illuminated Facade & Private Courtyard
                <Maximize2 className="w-4 h-4 text-[#C5A265] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Warm architectural downlighting and landscaped royal palm trees welcoming evening wedding entourages and weary highway motorists.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-200">
              <Building2 className="w-4 h-4 text-[#C5A265]" />
              <span>Multi-Story Hospitality Complex</span>
            </div>
          </div>
        </div>

        {/* Property Infrastructure Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-[#C5A265]/30 transition-colors">
            <Car className="w-6 h-6 text-[#C5A265] mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">Gated Private Parking</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Brick-paved parking lot accommodating private sedans, SUVs, and wedding transport coaches.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-[#C5A265]/30 transition-colors">
            <Clock className="w-6 h-6 text-[#C5A265] mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">24-Hour Front Desk</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuous reception and on-demand room service support for late arrivals and early departures.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-[#C5A265]/30 transition-colors">
            <Sparkles className="w-6 h-6 text-[#C5A265] mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">Elevator Accessibility</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full commercial passenger elevator providing smooth, step-free access across all living floors.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-[#C5A265]/30 transition-colors">
            <Building2 className="w-6 h-6 text-[#C5A265] mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">Highway Proximity</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Situated right off Barnala Kalan Road for effortless transit towards Jalandhar, Phagwara, and Chandigarh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
