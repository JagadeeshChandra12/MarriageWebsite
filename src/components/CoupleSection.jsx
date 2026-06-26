import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../constants/weddingData';

export default function CoupleSection({ lang, t }) {
  return (
    <section id="couple-details" className="relative px-4 py-24 z-10 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[#D4AF37] font-serif text-[11px] uppercase tracking-[0.25em]">
          {lang === 'te' ? 'శుభ పరిణయం' : 'The Holy Union'}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-gold-gradient font-medium mt-2">
          {lang === 'te' ? 'చిరంజీవులు' : 'The Bride & Groom'}
        </h2>
        
        {/* Subtle leaf separator */}
        <div className="flex justify-center items-center mt-4 text-[#D4AF37] opacity-40">
          <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="mx-2 text-sm">❦</span>
          <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Grid Composition - Cardless */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 text-center relative">
        
        {/* Center Divider for Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden md:block" />

        {/* Bride Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Subtle frame design around bride metadata */}
          <div className="text-[#D4AF37] opacity-60">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-8 h-8">
              <path d="M 0,10 C 10,10 10,0 10,0" stroke="currentColor" strokeWidth="0.75" />
              <path d="M 40,10 C 30,10 30,0 30,0" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </svg>
          </div>

          <div>
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.2em] font-light">
              {t.brideTitle}
            </span>
            <h3 className="text-4xl md:text-5xl font-serif text-gold-gradient font-bold tracking-wide mt-2">
              {CONFIG.bride.name}
            </h3>
          </div>

          {/* Leaf separator */}
          <div className="text-[#D4AF37] opacity-35">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <div className="space-y-2">
            <span className="text-[#FFF8E7]/40 text-xs sm:text-sm uppercase tracking-[0.15em] font-light font-sans">
              {t.brideParentsLabel}
            </span>
            <div className="space-y-1">
              <p className="text-[#FFF8E7] text-xl font-serif font-medium tracking-wide">
                {CONFIG.bride.parents.father}
              </p>
              <p className="text-[#D4AF37]/50 text-xs sm:text-sm italic font-serif">
                &
              </p>
              <p className="text-[#FFF8E7] text-xl font-serif font-medium tracking-wide">
                {CONFIG.bride.parents.mother}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Groom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Subtle frame design around groom metadata */}
          <div className="text-[#D4AF37] opacity-60">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-8 h-8">
              <path d="M 0,10 C 10,10 10,0 10,0" stroke="currentColor" strokeWidth="0.75" />
              <path d="M 40,10 C 30,10 30,0 30,0" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </svg>
          </div>

          <div>
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.2em] font-light">
              {t.groomTitle}
            </span>
            <h3 className="text-4xl md:text-5xl font-serif text-gold-gradient font-bold tracking-wide mt-2">
              {CONFIG.groom.name}
            </h3>
          </div>

          {/* Leaf separator */}
          <div className="text-[#D4AF37] opacity-35">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <div className="space-y-2">
            <span className="text-[#FFF8E7]/40 text-xs sm:text-sm uppercase tracking-[0.15em] font-light font-sans">
              {t.groomParentsLabel}
            </span>
            <div className="space-y-1">
              <p className="text-[#FFF8E7] text-xl font-serif font-medium tracking-wide">
                {CONFIG.groom.parents.father}
              </p>
              <p className="text-[#D4AF37]/50 text-xs sm:text-sm italic font-serif">
                &
              </p>
              <p className="text-[#FFF8E7] text-xl font-serif font-medium tracking-wide">
                {CONFIG.groom.parents.mother}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
