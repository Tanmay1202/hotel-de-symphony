import React from "react";
import { MapPin, Navigation, Compass, Train, Car, ExternalLink } from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";
import { REGIONAL_ATTRACTIONS } from "@/data/attractionsData";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#FBF9F5] text-[#1E2229] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-kicker text-xs text-[#C5A265] tracking-[0.22em] font-bold block mb-2">
            DESTINATION & ACCESS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11141A]">
            The Gateway to Nawanshahr & Beyond
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Ideally situated along Barnala Kalan Road with effortless connectivity to regional railway hubs, state highways, and iconic Punjabi heritage landmarks.
          </p>
        </div>

        {/* 2-Column Content + Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Column: Address Card & Transit Access (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A265] font-bold mb-3">
                <MapPin className="w-4 h-4 text-[#C5A265]" /> Physical Location
              </div>

              <h3 className="font-editorial text-2xl text-[#11141A] font-medium mb-3">
                Hotel De Symphony by Topaz
              </h3>

              <address className="not-italic text-sm text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-100">
                {HOTEL_INFO.address.line1},<br />
                {HOTEL_INFO.address.city}, {HOTEL_INFO.address.district},<br />
                {HOTEL_INFO.address.state} &bull; PIN {HOTEL_INFO.address.postalCode}, India
              </address>

              {/* Transit Hubs */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Transit Connections
              </h4>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <Train className="w-4 h-4 text-[#C5A265] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Nawanshahr Doaba Railway Station</span>
                    <span className="text-slate-500">Approx. 5–7 minutes drive</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <Car className="w-4 h-4 text-[#C5A265] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Phagwara – Rupnagar Highway Artery</span>
                    <span className="text-slate-500">Direct highway access for coaches & private vehicles</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <Compass className="w-4 h-4 text-[#C5A265] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Chandigarh International Airport (IXC)</span>
                    <span className="text-slate-500">Approx. 1.5–2 hours scenic highway drive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <a
              href={HOTEL_INFO.googleMaps.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#11141A] hover:bg-[#C5A265] hover:text-black text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md group"
            >
              <Navigation className="w-4 h-4 text-[#C5A265] group-hover:text-black transition-colors" />
              <span>Open in Google Maps Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-1" />
            </a>
          </div>

          {/* Right Column: Embedded Google Map (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg min-h-[380px] relative bg-slate-100">
            <iframe
              title="Hotel De Symphony Location Map"
              src={HOTEL_INFO.googleMaps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Regional Heritage Highlights Grid */}
        <div className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A265] block mb-1">
              DISCOVER SHAHEED BHAGAT SINGH NAGAR
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#11141A]">
              Explore Nearby Regional Heritage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REGIONAL_ATTRACTIONS.slice(0, 4).map((attraction, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between text-xs text-[#C5A265] font-semibold mb-2">
                  <span>{attraction.category}</span>
                  <span className="text-slate-500 font-normal">{attraction.distanceTime}</span>
                </div>
                <h4 className="font-editorial text-lg text-[#11141A] font-medium mb-2">
                  {attraction.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
