"use client";

import React from "react";
import { Bed, Users, Maximize, Check, Phone, MessageSquare, Info, Sparkles } from "lucide-react";
import { ROOM_CATEGORIES } from "@/data/roomsData";
import { HOTEL_INFO } from "@/data/hotelInfo";

interface RoomsSectionProps {
  onOpenBooking: (type?: "stay" | "banquet" | "dining") => void;
}

export default function RoomsSection({ onOpenBooking }: RoomsSectionProps) {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-[#FBF9F5] text-[#1E2229] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.22em] font-bold block mb-2">
            RESTFUL RETREATS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11141A]">
            Thoughtfully Appointed Living Spaces
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Designed for visiting wedding parties, corporate business executives, and travelers seeking spotless cleanliness, climate-controlled comfort, and attentive 24-hour service in Nawanshahr.
          </p>
        </div>

        {/* Room Cards Grid (2-Column Premium Editorial Presentation) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-14">
          {ROOM_CATEGORIES.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#C5A265]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Badge & Title */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A265] font-bold">
                    {room.tagline}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {room.maxGuests}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#11141A] mb-3">
                  {room.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Key Room Specifications */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 border-y border-slate-100 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-[#C5A265]" />
                    <span>~{room.sizeSqFt} sq. ft.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#C5A265]" />
                    <span>{room.bedConfig}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <Sparkles className="w-4 h-4 text-[#C5A265]" />
                    <span>Attached Bath</span>
                  </div>
                </div>

                {/* Verified Amenities Checklist */}
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    Verified In-Room Amenities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#C5A265] shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tariff & CTA Bar */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs text-slate-500">Tariff from:</span>
                  <div className="font-editorial text-xl sm:text-2xl font-semibold text-[#11141A]">
                    {room.indicativeTariff}
                  </div>
                  <span className="text-[10px] text-slate-500">*Seasonal rates; direct booking discounts</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsapp.number}?text=${encodeURIComponent(
                      room.inquiryMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" /> WhatsApp
                  </a>

                  <button
                    onClick={() => onOpenBooking("stay")}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#11141A] hover:bg-[#C5A265] hover:text-black text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" /> Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Disclosure Box */}
        <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-[#C5A265]/40 shadow-sm max-w-4xl mx-auto flex items-start gap-4">
          <Info className="w-6 h-6 text-[#C5A265] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900 block font-semibold mb-1">
              Guest Information & Direct Reservation Notice
            </strong>
            Room photographs are currently being re-captured to our updated visual standard. Both Deluxe Double and Royal Deluxe room blocks are actively bookable for wedding entourages, visiting families, and business groups. Please contact our 24-hour reception desk directly at{" "}
            <a href={HOTEL_INFO.primaryPhone.dial} className="text-[#C5A265] font-semibold underline">
              {HOTEL_INFO.primaryPhone.display}
            </a>{" "}
            or message our reservations team on WhatsApp for guaranteed date availability and personalized group rates.
          </div>
        </div>
      </div>
    </section>
  );
}
