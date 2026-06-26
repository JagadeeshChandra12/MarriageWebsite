import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../constants/weddingData';

export default function ClosingBlessing({ lang, t }) {
  return (
    <section id="closing-blessings" className="relative px-4 pt-16 pb-24 z-10 max-w-3xl mx-auto text-center">
      <div className="space-y-10">
        
        {/* Subtle top decoration */}
        <div className="flex justify-center items-center opacity-30 text-[#D4AF37]">
          <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="mx-2 text-[10px]">✿</span>
          <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Closing Blessing Title */}
        <h3 className="text-xl sm:text-2xl font-serif text-gold-gradient font-medium tracking-wider">
          {t.closingBlessingTitle}
        </h3>

        {/* Blessing Text */}
        <div className="max-w-xl mx-auto px-4">
          <p className={`text-[#FFF8E7]/90 text-sm sm:text-base leading-relaxed ${
            lang === 'te' ? 'font-telugu leading-loose text-base sm:text-lg' : 'font-sans italic font-light'
          }`}>
            {lang === 'te' ? t.closingBlessingText : `"${t.closingBlessingText}"`}
          </p>
          
          {/* Subtitle translation */}
          {lang === 'te' && (
            <p className="text-[#FFF8E7]/40 text-[11px] sm:text-xs font-sans italic tracking-wider mt-4">
              "As they stand hand in hand to make their wedding vows, may they walk forward into a lifetime of shared joy, abundance, and eternal love."
            </p>
          )}
          {lang === 'en' && (
            <p className="text-[#FFF8E7]/40 text-[11px] sm:text-xs font-telugu leading-relaxed tracking-wider mt-4">
              నూతన దంపతుల శ్రేయస్సును కాంక్షిస్తూ, ఈ దివ్య పరిణయ మహోత్సవం వారి జీవితాలలో శాశ్వత సంతోషాన్ని, సిరిసంపదలను చేకూర్చాలని మనసారా ప్రార్థిస్తున్నాము.
            </p>
          )}
        </div>

        {/* Sanskrit chant */}
        <div className="space-y-1 py-4">
          <p className="text-lg sm:text-xl font-serif text-gold-gradient font-bold tracking-wide">
            {t.footerBlessing}
          </p>
          <p className="text-[#FFF8E7]/40 text-[10px] sm:text-xs font-sans tracking-widest uppercase">
            {t.footerTranslation}
          </p>
        </div>

        {/* Elegant Floral Divider (Flower SVG) */}
        <div className="flex justify-center items-center opacity-65 text-[#D4AF37] py-2">
          <div className="h-[0.5px] w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          
          {/* Flower design */}
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 mx-3 text-[#D4AF37]">
            <path d="M12 2C11.5 5 9 8 5 8 C9 8 11.5 11 12 14 C12.5 11 15 8 19 8 C15 8 12.5 5 12 2 Z" fill="currentColor" opacity="0.3" />
            <path d="M12 10C11.5 13 9 16 5 16 C9 16 11.5 19 12 22 C12.5 19 15 16 19 16 C15 16 12.5 13 12 10 Z" fill="currentColor" opacity="0.3" />
            <circle cx="12" cy="9" r="1.5" fill="currentColor" />
            <circle cx="12" cy="15" r="1.5" fill="currentColor" />
          </svg>
          
          <div className="h-[0.5px] w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Thank You message */}
        <div className="space-y-6 pt-4">
          <h4 className="text-2xl sm:text-3xl font-serif text-gold-gradient font-medium tracking-widest">
            — {t.footerThankYou} —
          </h4>
          <p className="text-[#D4AF37]/45 text-[10px] font-sans tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Swetha & Paleti Shivaji. Handcrafted Invitation.
          </p>
        </div>

      </div>
    </section>
  );
}
