"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import Lightbox from "@/components/ui/Lightbox";

interface GallerySectionProps {
  onOpenLightbox?: (itemSrcOrId: string, itemsList?: GalleryItem[]) => void;
}

export default function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenImage = (index: number) => {
    if (onOpenLightbox) {
      onOpenLightbox(filteredItems[index].id, filteredItems);
    } else {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0B0D12] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.22em] font-semibold block mb-2">
            VISUAL CHRONICLES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Curated Photographic Gallery
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Explore authentic moments, architectural perspectives, and culinary artistry from across Hotel De Symphony by Topaz. Click any image to view in high-resolution full screen.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {GALLERY_CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? "bg-[#C5A265] text-black shadow-lg shadow-[#C5A265]/20 font-bold"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = item.aspectRatio === "3/4";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleOpenImage(index)}
                aria-label={`View ${item.title} in full screen`}
                className={`group relative w-full text-left rounded-xl overflow-hidden glass-card border border-white/10 hover:border-[#C5A265]/70 focus:border-[#C5A265] focus:outline-none focus:ring-2 focus:ring-[#C5A265]/40 transition-all cursor-pointer shadow-lg block ${
                  isTall ? "aspect-[3/4]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Permanent subtle gradient on mobile + strong hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A265] font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      {item.categoryLabel}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 text-white shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A265]" />
                    </span>
                  </div>
                  <h4 className="font-editorial text-base sm:text-lg text-white font-medium mb-1 drop-shadow-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed drop-shadow-xs">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Fallback Internal Lightbox Modal if no parent handler */}
        {!onOpenLightbox && lightboxIndex !== null && (
          <Lightbox
            items={filteredItems}
            currentIndex={lightboxIndex}
            isOpen={lightboxIndex !== null}
            onClose={closeLightbox}
            onNavigate={(newIndex) => setLightboxIndex(newIndex)}
          />
        )}
      </div>
    </section>
  );
}
