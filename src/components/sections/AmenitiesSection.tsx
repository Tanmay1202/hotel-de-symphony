"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Gamepad2, Wifi, Zap, ArrowUpCircle, ShieldCheck, Maximize2 } from "lucide-react";

interface AmenitiesSectionProps {
  onOpenLightbox?: (itemSrcOrId: string) => void;
}

export default function AmenitiesSection({ onOpenLightbox }: AmenitiesSectionProps) {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#11141A] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.22em] font-semibold block mb-2">
            LIFESTYLE & RECREATION
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Curated Spaces for Every Generation
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Beyond our celebration venues, Hotel De Symphony offers thoughtful leisure amenities tailored for quiet personal reflection and energetic family joy.
          </p>
        </div>

        {/* 2-Column Lifestyle Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16">
          {/* Card 1: The Reading Lounge & Cafe */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/AMIT SINGH20260708_5365T01.JPG(1).jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A265]/50 transition-all flex flex-col justify-between cursor-pointer group"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Cafe Lounge and Literary Bookshelf photo in full screen"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/photos/AMIT SINGH20260708_5365T01.JPG(1).jpeg"
                alt="Boutique Cafe Lounge with Magenta Bookshelf Divider and Olive Green Seating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-[#C5A265] border border-white/10 inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Boutique Reading Corner
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <div className="p-8">
              <h3 className="font-editorial text-2xl font-medium text-white mb-2 group-hover:text-[#C5A265] transition-colors">
                The Cafe Lounge & Literary Bookshelf
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Designed for leisurely afternoons, this sunlit cafe lounge features low upholstered banquettes and a custom magenta open metal bookcase. Guests are invited to browse curated classic literature, culinary cookbooks, and regional histories while savoring freshly brewed tea or coffee.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#C5A265]">
                <span>&bull; Curated Book Collection</span>
                <span>&bull; Natural Daylight</span>
                <span>&bull; Quiet Conversational Seating</span>
              </div>
            </div>
          </div>

          {/* Card 2: Children's Indoor Arcade Zone */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/IMG_3616.JPG.jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A265]/50 transition-all flex flex-col justify-between cursor-pointer group"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Children's Arcade Zone photo in full screen"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/photos/IMG_3616.JPG.jpeg"
                alt="Children's Indoor Arcade and Game Zone at Hotel De Symphony"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-[#C5A265] border border-white/10 inline-flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5" /> Family Entertainment
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>

            <div className="p-8">
              <h3 className="font-editorial text-2xl font-medium text-white mb-2 group-hover:text-[#C5A265] transition-colors">
                Children&apos;s Electronic Arcade Zone
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                A standout family amenity in Nawanshahr. Our dedicated indoor game arcade features interactive electronic attractions including the <em className="text-white">Spin & Stop</em> wheel, <em className="text-white">Colorama</em> game, and <em className="text-white">Bear&apos;s Treasure</em> claw crane machine with plush toy prizes to keep young wedding and holiday guests delighted.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#C5A265]">
                <span>&bull; Electronic Claw Machine</span>
                <span>&bull; Colorful Child-Friendly Seating</span>
                <span>&bull; Safe Indoor Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Facilities Grid (4 Badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A265]/20 flex items-center justify-center shrink-0 text-[#C5A265]">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">High-Speed Wi-Fi</h4>
              <p className="text-xs text-slate-400">Complimentary across property</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A265]/20 flex items-center justify-center shrink-0 text-[#C5A265]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">100% Power Backup</h4>
              <p className="text-xs text-slate-400">Automatic commercial generators</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A265]/20 flex items-center justify-center shrink-0 text-[#C5A265]">
              <ArrowUpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Elevator Lift</h4>
              <p className="text-xs text-slate-400">Step-free floor-to-floor access</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A265]/20 flex items-center justify-center shrink-0 text-[#C5A265]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">24/7 Front Desk</h4>
              <p className="text-xs text-slate-400">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
