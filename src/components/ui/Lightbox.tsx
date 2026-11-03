"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    const originalTop = document.body.style.top;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;

    // Prevent background scrolling while preserving position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.body.style.overflow = originalOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!mounted || !isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const lightboxContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 select-none transition-opacity duration-200"
    >
      {/* Top action bar: counter and close button */}
      <div 
        className="w-full flex items-center justify-between z-50 shrink-0 mb-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
          <span className="text-[#C5A265] uppercase tracking-wider">{currentItem.categoryLabel}</span>
          <span>•</span>
          <span>{currentIndex + 1} of {items.length}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox (Esc)"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-[#C5A265] transition-all hover:scale-105 cursor-pointer shadow-lg border border-white/10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation: Previous Image */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous Image (Left Arrow)"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#C5A265] text-white hover:text-black border border-white/15 hover:border-[#C5A265] transition-all cursor-pointer shadow-2xl backdrop-blur-sm group"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Navigation: Next Image */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        aria-label="Next Image (Right Arrow)"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#C5A265] text-white hover:text-black border border-white/15 hover:border-[#C5A265] transition-all cursor-pointer shadow-2xl backdrop-blur-sm group"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Main image container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl flex-1 min-h-[45vh] max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center my-auto px-4"
      >
        <div className="relative w-full h-full max-h-[70vh] sm:max-h-[75vh]">
          <Image
            src={currentItem.src}
            alt={currentItem.title}
            fill
            sizes="100vw"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Bottom caption bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl text-center px-4 pt-3 shrink-0"
      >
        <h3 className="font-editorial text-lg sm:text-2xl text-white font-medium mb-1">
          {currentItem.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-xl mx-auto leading-relaxed">
          {currentItem.description}
        </p>
      </div>
    </div>
  );

  return createPortal(lightboxContent, document.body);
}
