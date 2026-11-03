"use client";

import React from "react";
import Image from "next/image";
import { Users, Sparkles, Music, Calendar, ArrowRight, ShieldCheck, Maximize2 } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

interface BanquetSectionProps {
  onOpenBooking: (type?: "stay" | "banquet" | "dining") => void;
  onOpenLightbox?: (itemSrcOrId: string) => void;
}

export default function BanquetSection({ onOpenBooking, onOpenLightbox }: BanquetSectionProps) {
  return (
    <section id="banquets" className="py-24 md:py-32 bg-[#11141A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.22em] font-semibold block mb-2">
            CELEBRATIONS & CEREMONIES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            The Grand Symphony Banquet Hall
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Nawanshahr&apos;s premier venue for dream Punjabi wedding receptions, glamorous ring ceremonies, anniversary celebrations, and high-impact corporate summits.
          </p>
        </div>

        {/* Lead Panoramic Establishing Banner */}
        <div 
          onClick={() => onOpenLightbox?.("/photos/IMG_3597.JPG.jpeg")}
          className="relative rounded-2xl overflow-hidden border border-[#C5A265]/30 hover:border-[#C5A265]/70 shadow-2xl aspect-[16/9] sm:aspect-[21/9] max-h-[500px] w-full mb-12 cursor-pointer group transition-all"
          role={onOpenLightbox ? "button" : undefined}
          tabIndex={onOpenLightbox ? 0 : undefined}
          aria-label="View Grand Symphony Banquet Hall panorama in full screen"
        >
          <Image
            src="/photos/IMG_3597.JPG.jpeg"
            alt="The Grand Symphony Banquet Hall - Panoramic Venue Overview with Illuminated Ceiling Coffers and Marble Flooring"
            fill
            sizes="100vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

          {/* Floating Venue Highlights */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-8 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#C5A265]/50 text-[#C5A265] text-xs font-semibold mb-2 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" /> 250+ Seated Capacity &bull; Multi-Zone Floorplan
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium flex items-center gap-2">
                Unrivaled Scale & Sophistication
                <Maximize2 className="w-4 h-4 text-[#C5A265] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Illuminated architectural ceiling coffers, high-polish marble floors, and acoustic timber paneling create an unforgettable setting. Click to view full resolution.
              </p>
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenBooking("banquet");
                }}
                className="px-6 py-3 rounded-full bg-[#C5A265] hover:bg-[#D6B57C] text-black font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
              >
                Inquire For Dates
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Card A: Weddings & Receptions */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/IMG_3546.JPG.jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A265]/60 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Grand Stage and Floral Decor photo in full screen"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/photos/IMG_3546.JPG.jpeg"
                alt="Wedding Stage with Floral Arch and Rose-Gold Skirting at Hotel De Symphony"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-[#C5A265] border border-white/10 flex items-center gap-1.5">
                <span>Weddings & Sangeet</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-xl font-medium text-white mb-2 group-hover:text-[#C5A265] transition-colors">
                  Grand Stage & Floral Décor
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Dedicated raised celebration stage with floral marigold arches, sequined fabrics, and custom lighting designed for bride and groom photography.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A265]">
                <span>Custom Stage Lighting</span>
                <span>Bridal Suite Access</span>
              </div>
            </div>
          </div>

          {/* Card B: Corporate & Social Galas */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/IMG_3552.JPG.jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A265]/60 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Conferences and Large Galas photo in full screen"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/photos/IMG_3552.JPG.jpeg"
                alt="Grand Hall Overview with Dark Wood Columns and Seating Layout"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-[#C5A265] border border-white/10 flex items-center gap-1.5">
                <span>Corporate & Summits</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-xl font-medium text-white mb-2 group-hover:text-[#C5A265] transition-colors">
                  Conferences & Large Galas
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Dark stained wood columns and damask acoustic wall panels provide dignity, sound clarity, and professional visual impact for seminars and awards.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A265]">
                <span>Acoustic Paneling</span>
                <span>High-Speed Wi-Fi</span>
              </div>
            </div>
          </div>

          {/* Card C: Event Table Styling & Seating */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/IMG_3563.JPG.jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A265]/60 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Flexible Seating Layouts photo in full screen"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/photos/IMG_3563.JPG.jpeg"
                alt="Round Banquet Tables with Black Spandex Covers on Marble Floor"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-[#C5A265] border border-white/10 flex items-center gap-1.5">
                <span>Dining Architecture</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-xl font-medium text-white mb-2 group-hover:text-[#C5A265] transition-colors">
                  Flexible Seating Layouts
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Round tables with black spandex covers, golden floral sashes, and adjacent tan leather L-sofa cocktail lounges tailored to your event flow.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A265]">
                <span>Integrated Lounge</span>
                <span>Silver Charger Plates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banquet Inquiry Bar */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-[#C5A265]/30 flex flex-col sm:flex-row items-center justify-between gap-6 gold-border-glow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A265]/20 flex items-center justify-center shrink-0 text-[#C5A265]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-lg text-white font-medium">
                Reserve Your Wedding or Banquet Date
              </h4>
              <p className="text-xs text-slate-400">
                Direct desk quotes with no broker markups &bull; Dedicated event coordinator
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp.number}?text=${encodeURIComponent(
                "Hello, I would like to inquire about booking the Grand Banquet Hall for an upcoming event at Hotel De Symphony."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center"
            >
              WhatsApp Concierge
            </a>
            <button
              onClick={() => onOpenBooking("banquet")}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-[#C5A265] hover:bg-[#D6B57C] text-black font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
