import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';
import { CONFIG } from '../constants/weddingData';

export default function WeddingDetails({ lang, t }) {
  return (
    <section id="wedding-details" className="relative px-4 py-24 z-10 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[#D4AF37] font-serif text-[11px] uppercase tracking-[0.25em]">
          {lang === 'te' ? 'కళ్యాణ మహోత్సవం' : 'The Auspicious Occasion'}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-gold-gradient font-medium mt-2">
          {t.venueTitle}
        </h2>
        <div className="flex justify-center items-center mt-4 text-[#D4AF37] opacity-40">
          <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="mx-2 text-sm">❀</span>
          <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Composition */}
      <div className="flex flex-col items-center text-center space-y-12">
        
        {/* Details Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl border-t border-b border-[#D4AF37]/20 py-8 px-4">
          
          {/* Date */}
          <div className="flex flex-col items-center space-y-2">
            <Calendar className="w-5 h-5 text-[#D4AF37] opacity-80" />
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-wider font-sans font-medium">
              {lang === 'te' ? 'తేది' : 'Wedding Date'}
            </h4>
            <p className="text-[#FFF8E7] text-base font-serif font-medium">
              {t.weddingDateText}
            </p>
          </div>

          {/* Muhurtham */}
          <div className="flex flex-col items-center space-y-2 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-[#D4AF37]/15 py-6 md:py-0">
            <Clock className="w-5 h-5 text-[#D4AF37] opacity-80" />
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-wider font-sans font-medium">
              {lang === 'te' ? 'సుముహూర్తం' : 'Muhurtham'}
            </h4>
            <p className="text-[#FFF8E7] text-base font-serif font-medium">
              {CONFIG.weddingTime}
            </p>
          </div>

          {/* Venue Address */}
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="w-5 h-5 text-[#D4AF37] opacity-80" />
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-wider font-sans font-medium">
              {lang === 'te' ? 'వేదిక' : 'Venue'}
            </h4>
            <p className="text-[#FFF8E7] text-base font-serif font-medium">
              {CONFIG.venueName}
            </p>
            <p className="text-[#FFF8E7]/70 text-xs font-sans max-w-[200px] leading-relaxed">
              {CONFIG.venueAddress}
            </p>
          </div>

        </div>

        {/* Embedded Map (replacing the current map placeholder icon) */}
        <div className="w-full max-w-md px-2">
          <div style={{
            width: '100%',
            borderRadius: '18px',
            overflow: 'hidden',
            margin: '20px 0 24px',
            border: '1.5px solid rgba(212,175,55,0.35)',
            boxShadow: '0 0 30px rgba(212,175,55,0.15), 0 8px 32px rgba(0,0,0,0.4)',
            position: 'relative',
          }}>
            {/* Gold overlay tint on map corners for branded feel */}
            <div style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 1,
              borderRadius: '18px',
              boxShadow: 'inset 0 0 40px rgba(212,175,55,0.08)',
            }}></div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.4280%2C16.2950%2C80.4380%2C16.3050&layer=mapnik&marker=16.3000%2C80.4330"
              width="100%"
              height="230"
              style={{ border: 'none', display: 'block', filter: 'saturate(0.85) sepia(0.18)' }}
              loading="lazy"
              title="Subham Convention Center, Guntur"
            ></iframe>
          </div>
        </div>

        {/* Action Button - Open in Google Maps */}
        <motion.a
          href={CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="shimmer-btn bg-gold-gradient text-[#2d050a] px-8 py-3.5 rounded-full font-semibold shadow-lg text-sm sm:text-base flex items-center gap-2 cursor-pointer transition-all duration-300 font-sans tracking-wide hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          <span>📍 {t.openInMaps}</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>

      </div>
    </section>
  );
}
