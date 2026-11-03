"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Phone, MessageSquare, Calendar, Users, Building, Send } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: "stay" | "banquet" | "dining";
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultType = "stay",
}: BookingModalProps) {
  const [mounted, setMounted] = useState(false);
  const [inquiryType, setInquiryType] = useState<"stay" | "banquet" | "dining">(defaultType);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    setInquiryType(defaultType);
    setSubmitted(false);
  }, [defaultType, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      inquiryType === "stay"
        ? "Room Accommodation"
        : inquiryType === "banquet"
        ? "Grand Banquet / Wedding Celebration"
        : "Restaurant Dining Reservation";

    const text = `Hello Hotel De Symphony,%0A%0AI would like to inquire about a *${typeLabel}*.%0A%0A*Name:* ${
      name || "Guest"
    }%0A*Contact:* ${phone || "Not specified"}%0A*Preferred Date:* ${date || "Flexible"}%0A*Estimated Guests:* ${guests}%0A*Details / Requests:* ${
      notes || "Standard inquiry"
    }`;

    const url = `https://wa.me/${HOTEL_INFO.whatsapp.number}?text=${text}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Direct Reservation Inquiry"
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#181C24] border border-[#C5A265]/30 rounded-2xl shadow-2xl p-6 md:p-8 text-white"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-9 h-9 shrink-0 rounded-full overflow-hidden p-0.5 border border-[#C5A265]/40 bg-black/40">
              <Image
                src="/logo/logo-web.png"
                alt="Hotel De Symphony Crest"
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A265] font-semibold block">
                Direct Concierge Service
              </span>
              <span className="font-editorial text-xs text-slate-300 uppercase tracking-wider">
                Hotel De Symphony by Topaz
              </span>
            </div>
          </div>
          <h2 className="font-editorial text-2xl md:text-3xl text-white font-medium mt-1">
            Reserve Your Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Connect directly with our hospitality desk for best guaranteed rates, date availability, and event packages.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#C5A265]/20 text-[#C5A265] rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-2xl text-white mb-2">Inquiry Initiated</h3>
            <p className="text-sm text-slate-300 max-w-xs mx-auto mb-6">
              Your message was prepared for WhatsApp. Our team responds promptly. You can also call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={HOTEL_INFO.primaryPhone.dial}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C5A265] text-black font-semibold text-sm hover:bg-[#D6B57C] transition-all"
              >
                <Phone className="w-4 h-4" /> Call Front Desk
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
            {/* Inquiry Type Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setInquiryType("stay")}
                className={`py-2 px-3 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  inquiryType === "stay"
                    ? "bg-[#C5A265] text-black shadow-md font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Room Stay
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("banquet")}
                className={`py-2 px-3 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  inquiryType === "banquet"
                    ? "bg-[#C5A265] text-black shadow-md font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Banquet / Event
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("dining")}
                className={`py-2 px-3 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  inquiryType === "dining"
                    ? "bg-[#C5A265] text-black shadow-md font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Restaurant
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gurpreet Singh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A265]" /> Target Date
                  </span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A265]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A265]" /> Expected Guests
                  </span>
                </label>
                <input
                  type="text"
                  placeholder={inquiryType === "banquet" ? "e.g. 150-200" : "e.g. 2"}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Additional Details / Preferences
              </label>
              <textarea
                rows={2}
                placeholder="Mention specific requirements (e.g., wedding catering, corporate setup, early check-in)..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-all cursor-pointer shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-4 h-4 fill-white" /> Inquire via WhatsApp
              </button>

              <a
                href={HOTEL_INFO.primaryPhone.dial}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white/10 hover:bg-[#C5A265] text-white hover:text-black font-semibold text-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Call Desk
              </a>
            </div>

            <p className="text-center text-[11px] text-slate-400 mt-2">
              Instant response during business hours &bull; No upfront booking fees
            </p>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
