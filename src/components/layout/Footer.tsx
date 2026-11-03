import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageSquare, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";
import { FOOTER_QUICK_LINKS } from "@/data/navigation";
import { REGIONAL_ATTRACTIONS } from "@/data/attractionsData";

interface FooterProps {
  onOpenBooking: (type?: "stay" | "banquet" | "dining") => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#090B0F] text-slate-300 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Invitation Banner */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 gold-border-glow">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A265] font-semibold">
              Host Your Celebrations With Us
            </span>
            <h3 className="font-editorial text-2xl md:text-3xl text-white font-medium mt-1">
              Planning a Wedding, Banquet, or VIP Stay in Nawanshahr?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Connect with our dedicated event and reservations team for personalized tour viewings, customized catering menus, and competitive direct tariffs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenBooking("banquet")}
              className="px-6 py-3.5 rounded-full bg-[#C5A265] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#D6B57C] transition-all cursor-pointer shadow-lg shadow-[#C5A265]/10"
            >
              Plan an Event
            </button>
            <a
              href={HOTEL_INFO.whatsapp.generalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden p-0.5 border border-[#C5A265]/40 bg-black/40">
                <Image
                  src="/logo/logo-web.png"
                  alt="Hotel De Symphony Crest"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5 drop-shadow-[0_2px_8px_rgba(197,162,101,0.25)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl tracking-[0.16em] text-white font-medium uppercase leading-tight">
                  Hotel De Symphony
                </span>
                <span className="font-kicker text-[8.5px] tracking-[0.24em] text-[#C5A265] font-semibold -mt-0.5">
                  BY TOPAZ &bull; NAWANSHAHR
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A premier contemporary hospitality address in the historic Doaba heartland of Punjab. Celebrating Punjabi warmth through grand celebration venues, authentic multi-cuisine dining, and refined guest comfort.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#C5A265]">
              <ShieldCheck className="w-4 h-4" />
              <span>4.9 ★ Rating on Google (100+ Reviews)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A265] font-semibold mb-5">
              Explore Property
            </h4>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#C5A265] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-opacity text-[#C5A265]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Desk Numbers */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A265] font-semibold mb-5">
              Direct Inquiries
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A265] mt-1 shrink-0" />
                <address className="not-italic text-slate-400 text-xs leading-relaxed">
                  {HOTEL_INFO.address.line1},<br />
                  {HOTEL_INFO.address.city}, {HOTEL_INFO.address.district},<br />
                  {HOTEL_INFO.address.state} {HOTEL_INFO.address.postalCode}, India
                </address>
              </div>

              <div className="space-y-2 pt-1">
                {HOTEL_INFO.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A265] shrink-0" />
                    <div>
                      <span className="block text-[11px] text-slate-500">{phone.label}</span>
                      <a
                        href={phone.dial}
                        className="text-xs text-white hover:text-[#C5A265] font-medium transition-colors"
                      >
                        {phone.number}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#C5A265] shrink-0" />
                <span>Check-in: 2 PM &bull; Check-out: 12 PM</span>
              </div>
            </div>
          </div>

          {/* Column 4: Regional Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A265] font-semibold mb-5">
              Regional Landmarks
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              {REGIONAL_ATTRACTIONS.slice(0, 4).map((attraction, i) => (
                <li key={i} className="border-b border-white/5 pb-2.5">
                  <div className="text-white font-medium">{attraction.name}</div>
                  <div className="text-[11px] text-[#C5A265]">{attraction.distanceTime}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Verification Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-slate-300 transition-colors">
              Back to Top &uarr;
            </a>
            <a
              href={HOTEL_INFO.googleMaps.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A265] hover:underline"
            >
              Google Maps Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
