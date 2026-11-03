"use client";

import React from "react";
import Image from "next/image";
import { Utensils, Sparkles, Clock, Wine, Coffee, ChefHat, Maximize2 } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

interface DiningSectionProps {
  onOpenBooking: (type?: "stay" | "banquet" | "dining") => void;
  onOpenLightbox?: (itemSrcOrId: string) => void;
}

export default function DiningSection({ onOpenBooking, onOpenLightbox }: DiningSectionProps) {
  return (
    <section id="dining" className="py-24 md:py-32 bg-[#181C24] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.22em] font-semibold block mb-2">
            CULINARY EXCELLENCE
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Flavors Crafted for Celebration
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            From multi-course North Indian wedding banquets and lavish live buffets to intimate à la carte family dinners and artisanal table service.
          </p>
        </div>

        {/* Lead Dining Hero Banner: Royal Thali Place Setting */}
        <div 
          onClick={() => onOpenLightbox?.("/photos/IMG_3580.JPG.jpeg")}
          className="relative rounded-2xl overflow-hidden border border-[#C5A265]/30 hover:border-[#C5A265]/70 shadow-2xl aspect-[16/9] sm:aspect-[21/9] max-h-[460px] w-full mb-12 cursor-pointer group transition-all"
          role={onOpenLightbox ? "button" : undefined}
          tabIndex={onOpenLightbox ? 0 : undefined}
          aria-label="View Royal Thali Executive Dining Setup photo in full screen"
        >
          <Image
            src="/photos/IMG_3580.JPG.jpeg"
            alt="Royal Thali Executive Dining Setup with Traditional Brass Dinnerware and Carnation Runner"
            fill
            sizes="100vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Floating Caption */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-8 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-[#C5A265]/50 text-[#C5A265] text-xs font-semibold mb-2 backdrop-blur-sm">
                <ChefHat className="w-3.5 h-3.5" /> Traditional Indian Royal Service
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium flex items-center gap-2">
                The Art of the Royal Thali
                <Maximize2 className="w-4 h-4 text-[#C5A265] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Polished brass tableware, wine goblets, folded napkins, and fresh carnation runners honoring traditional hospitality. Click to view full image.
              </p>
            </div>

            <div className="pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenBooking("dining");
                }}
                className="px-6 py-3 rounded-full bg-[#C5A265] hover:bg-[#D6B57C] text-black font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shrink-0"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>

        {/* 4-Card Culinary Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1: Restaurant Dining Room */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/AMIT SINGH20260708_5377T01.JPG(1).jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#C5A265]/50 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Multi-Cuisine Restaurant photo in full screen"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/photos/AMIT SINGH20260708_5377T01.JPG(1).jpeg"
                alt="Multi-Cuisine Restaurant Banquettes with Laser Cut Backlit Screen"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] uppercase tracking-wider text-[#C5A265] font-semibold backdrop-blur-md flex items-center gap-1.5">
                <span>Restaurant</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-lg text-white font-medium mb-1.5 group-hover:text-[#C5A265] transition-colors">
                  Multi-Cuisine Restaurant
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Plum and teal velvet banquettes beneath laser-cut backlit decorative screens, serving authentic North Indian, Punjabi, and Chinese specialties.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Sculptural Curved Counter */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/AMIT SINGH20260708_5374T01.JPG(1).jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#C5A265]/50 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Curved Culinary Counter photo in full screen"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/photos/AMIT SINGH20260708_5374T01.JPG(1).jpeg"
                alt="Curved Restaurant Counter with Pendant Lighting and Flowing Ceiling"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] uppercase tracking-wider text-[#C5A265] font-semibold backdrop-blur-md flex items-center gap-1.5">
                <span>Interior Design</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-lg text-white font-medium mb-1.5 group-hover:text-[#C5A265] transition-colors">
                  Curved Culinary Counter
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sculptural curved marble counter with designer drop pendant lamps, spice jars, and fluid architectural false ceiling.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Executive Private Dining Suite */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/IMG_3579.JPG.jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#C5A265]/50 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Executive Dining Suite photo in full screen"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/photos/IMG_3579.JPG.jpeg"
                alt="Executive Private Dining Table with Carved Wood Heritage Chairs"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] uppercase tracking-wider text-[#C5A265] font-semibold backdrop-blur-md flex items-center gap-1.5">
                <span>VIP Private Dining</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-lg text-white font-medium mb-1.5 group-hover:text-[#C5A265] transition-colors">
                  Executive Dining Suite
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Long 16-seat conference table with carved heritage timber chairs and sage cushions, ideal for VIP family functions and board dinners.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Multi-Station Buffet Line */}
          <div 
            onClick={() => onOpenLightbox?.("/photos/AMIT SINGH20260708_5323T01.JPG.jpeg")}
            className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#C5A265]/50 transition-all flex flex-col group cursor-pointer"
            role={onOpenLightbox ? "button" : undefined}
            tabIndex={onOpenLightbox ? 0 : undefined}
            aria-label="View Hot Banquet Buffets photo in full screen"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/photos/AMIT SINGH20260708_5323T01.JPG.jpeg"
                alt="Long Buffet Counter with Chafing Dishes and Brass Urns"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] uppercase tracking-wider text-[#C5A265] font-semibold backdrop-blur-md flex items-center gap-1.5">
                <span>Buffet Catering</span>
                <Maximize2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-editorial text-lg text-white font-medium mb-1.5 group-hover:text-[#C5A265] transition-colors">
                  Hot Banquet Buffets
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Linear stainless steel chafing line and warm brass urns capable of serving multi-course wedding feasts and banquet spreads smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
