"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import RoomsSection from "@/components/sections/RoomsSection";
import BanquetSection from "@/components/sections/BanquetSection";
import DiningSection from "@/components/sections/DiningSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import BookingModal from "@/components/ui/BookingModal";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import { Phone, MessageSquare } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<"stay" | "banquet" | "dining">("stay");

  // Global Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenBooking = (type: "stay" | "banquet" | "dining" = "stay") => {
    setBookingType(type);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (itemSrcOrId: string, customItems?: GalleryItem[]) => {
    const list = customItems && customItems.length > 0 ? customItems : GALLERY_ITEMS;
    const idx = list.findIndex(
      (item) => item.id === itemSrcOrId || item.src === itemSrcOrId || item.src.includes(itemSrcOrId)
    );
    setLightboxItems(list);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#11141A] text-white selection:bg-[#C5A265] selection:text-black">
      {/* Global Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Section 2: Image-Led Dusk Hero */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Section 3: Welcome & Boutique Philosophy */}
        <WelcomeSection />

        {/* Section 4: Modern Architectural Landmark & Access */}
        <ArchitectureSection onOpenLightbox={handleOpenLightbox} />

        {/* Section 5: Restful Accommodations & Verified Amenities */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* Section 6: Grand Banquet Hall & Celebrations */}
        <BanquetSection onOpenBooking={handleOpenBooking} onOpenLightbox={handleOpenLightbox} />

        {/* Section 7: In-House Dining, Private Suites & Catering */}
        <DiningSection onOpenBooking={handleOpenBooking} onOpenLightbox={handleOpenLightbox} />

        {/* Section 8: Boutique Reading Lounge & Kids Arcade Zone */}
        <AmenitiesSection onOpenLightbox={handleOpenLightbox} />

        {/* Section 9: Curated Filterable Lightbox Gallery */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* Section 10: Location, Regional Heritage & Directions */}
        <LocationSection />

        {/* Section 11: 4.9★ Google Reviews & Verified Guest Testimonials */}
        <TestimonialsSection />

        {/* Section 12: Direct Reservation Concierge & Contact Form */}
        <ContactSection />
      </main>

      {/* Global Multi-Column Editorial Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Floating Sticky Action Bar */}
      <aside aria-label="Quick Contact Actions" className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-[#11141A]/95 backdrop-blur-md border-t border-white/10 flex items-center gap-2">
        <a
          href={HOTEL_INFO.primaryPhone.dial}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A265]" />
          <span>Call Desk</span>
        </a>

        <a
          href={HOTEL_INFO.whatsapp.generalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-colors shadow-md"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking("stay")}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full bg-[#C5A265] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#D6B57C] transition-colors shadow-md cursor-pointer"
        >
          <span>Book Stay</span>
        </button>
      </aside>

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultType={bookingType}
      />

      {/* Global Image Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
