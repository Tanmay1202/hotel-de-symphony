"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, Menu, X, ArrowRight } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";
import { MAIN_NAV_ITEMS, DRAWER_NAV_ITEMS } from "@/data/navigation";

interface HeaderProps {
  onOpenBooking: (type?: "stay" | "banquet" | "dining") => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[#0B0D12]/92 backdrop-blur-xl py-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)] border-b border-[#C5A265]/20"
            : "bg-gradient-to-b from-black/85 via-black/35 to-transparent py-4 sm:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="#"
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none shrink-0"
            aria-label="Hotel De Symphony by Topaz - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-[#C5A265]/40 group-hover:border-[#C5A265] transition-all bg-black/40 backdrop-blur-xs shadow-sm">
              <Image
                src="/logo/logo-web.png"
                alt="Hotel De Symphony Crest"
                fill
                sizes="48px"
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(197,162,101,0.3)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-base sm:text-lg tracking-[0.16em] text-white font-medium uppercase group-hover:text-[#C5A265] transition-colors leading-tight">
                Hotel De Symphony
              </span>
              <span className="font-kicker text-[8px] sm:text-[9px] tracking-[0.24em] text-[#C5A265] font-semibold -mt-0.5">
                BY TOPAZ &bull; NAWANSHAHR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Centered, Spaced, Minimalist */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
            {MAIN_NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] xl:text-xs uppercase tracking-[0.22em] text-slate-300 hover:text-white transition-colors duration-200 font-medium py-1 whitespace-nowrap relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C5A265] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions — Restrained Luxury Finish */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Direct Phone Concierge */}
            <a
              href={HOTEL_INFO.primaryPhone.dial}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-slate-300 hover:text-[#C5A265] py-2 px-3 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              title={`Call Front Desk: ${HOTEL_INFO.primaryPhone.display}`}
              aria-label={`Call front desk at ${HOTEL_INFO.primaryPhone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A265]" />
              <span className="hidden xl:inline text-slate-300 text-[11px] tracking-widest font-sans font-medium">
                {HOTEL_INFO.primaryPhone.display}
              </span>
            </a>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={() => onOpenBooking("stay")}
              className="px-6 py-2.5 rounded-full bg-[#C5A265] hover:bg-[#D6B57C] text-black font-semibold text-[11px] tracking-[0.2em] uppercase transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-[#C5A265]/15 cursor-pointer shrink-0"
            >
              Reserve
            </button>
          </div>

          {/* Mobile Right Actions — Clean & Uncluttered */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              type="button"
              onClick={() => onOpenBooking("stay")}
              className="px-4 py-1.5 rounded-full bg-[#C5A265] hover:bg-[#D6B57C] text-black font-semibold text-[10px] tracking-[0.18em] uppercase transition-all shadow-sm cursor-pointer"
            >
              Reserve
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-white/15 text-white hover:text-[#C5A265] hover:border-[#C5A265] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0B0D12]/98 backdrop-blur-2xl text-white p-6 animate-in fade-in slide-in-from-top duration-300">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden p-0.5 border border-[#C5A265]/40 bg-black/40">
                <Image
                  src="/logo/logo-web.png"
                  alt="Hotel De Symphony"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-base tracking-[0.16em] text-white font-medium uppercase leading-tight">
                  Hotel De Symphony
                </span>
                <span className="text-[8px] tracking-[0.24em] text-[#C5A265] font-semibold">
                  BY TOPAZ &bull; NAWANSHAHR
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#C5A265] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Numbered Editorial Navigation Links */}
          <nav className="flex flex-col justify-center flex-1 my-6 overflow-y-auto space-y-4">
            {DRAWER_NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-[#C5A265]/30 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-[#C5A265] opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                  <span className="font-editorial text-xl text-slate-200 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C5A265] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>

          {/* Drawer Actions */}
          <div className="pt-5 border-t border-white/10 flex flex-col gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking("stay");
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#C5A265] text-black font-semibold text-xs tracking-[0.2em] uppercase shadow-md cursor-pointer text-center"
            >
              Reserve Your Stay
            </button>

            <div className="flex gap-2.5">
              <a
                href={HOTEL_INFO.whatsapp.generalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs tracking-wider uppercase"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" /> WhatsApp
              </a>

              <a
                href={HOTEL_INFO.primaryPhone.dial}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wider uppercase border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A265]" /> Call Desk
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
