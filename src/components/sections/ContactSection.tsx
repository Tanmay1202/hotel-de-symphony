"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Calendar, Users, Send, CheckCircle2 } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    inquiryType: "Room Accommodation",
    guests: "2",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Hotel De Symphony,%0A%0AI have a reservation inquiry:%0A%0A*Name:* ${
      formData.name || "Guest"
    }%0A*Contact:* ${formData.phone || "Not provided"}%0A*Inquiry Type:* ${
      formData.inquiryType
    }%0A*Target Date:* ${formData.date || "Flexible"}%0A*Estimated Guests:* ${
      formData.guests
    }%0A*Notes:* ${formData.message || "General inquiry"}`;

    const url = `https://wa.me/${HOTEL_INFO.whatsapp.number}?text=${text}`;
    window.open(url, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#11141A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-[#C5A265]/40 shadow-2xl gold-border-glow">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-kicker text-xs text-[#C5A265] tracking-[0.24em] font-semibold block mb-2">
              RESERVATIONS & EVENT DESK
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Connect With Our Hospitality Team
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Whether reserving a quiet weekend stay or curating an unforgettable wedding feast for 250+ guests, our direct reservations team is at your service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct Phone & Desk Lines (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-editorial text-xl text-white font-medium mb-4">
                  Direct Concierge Lines
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Call our front desk directly for real-time room availability, banquet quotes, and instant confirmations.
                </p>

                <div className="space-y-4">
                  {HOTEL_INFO.phones.map((phone, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#C5A265]/40 transition-colors"
                    >
                      <span className="block text-[11px] uppercase tracking-wider text-[#C5A265] font-semibold mb-1">
                        {phone.label}
                      </span>
                      <a
                        href={phone.dial}
                        className="text-base text-white hover:text-[#C5A265] font-semibold tracking-wide transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-[#C5A265]" />
                        <span>{phone.number}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30">
                <span className="text-xs font-semibold text-[#25D366] block mb-1">
                  Instant WhatsApp Inquiries
                </span>
                <p className="text-xs text-slate-300 mb-3">
                  Message our team on WhatsApp for prompt responses regarding room photos, tariff packages, and event dates.
                </p>
                <a
                  href={HOTEL_INFO.whatsapp.generalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quick Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="font-editorial text-xl text-white font-medium mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to immediately route your request to our front desk via WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
                  <h4 className="font-editorial text-2xl text-white font-medium mb-1">
                    Inquiry Routed to Desk
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
                    Your inquiry details have been formatted and sent to WhatsApp. Our front desk manager will respond shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Navjot Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#1A1E26] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A265]"
                      >
                        <option value="Room Accommodation">Room Accommodation</option>
                        <option value="Wedding / Banquet Reception">Wedding / Banquet Reception</option>
                        <option value="Corporate Meeting / Seminar">Corporate Meeting / Seminar</option>
                        <option value="Restaurant Table Reservation">Restaurant Table Reservation</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A265]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Estimated Guests / Attendees
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 guests, or 180 wedding attendees"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Special Requests / Event Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your event theme, catering preferences, or room requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C5A265]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#C5A265] hover:bg-[#D6B57C] text-black font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-lg shadow-[#C5A265]/20 mt-2"
                  >
                    <Send className="w-4 h-4" /> Send Instant Inquiry via WhatsApp
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Direct confirmation &bull; No middleman fees &bull; Privacy guaranteed
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
