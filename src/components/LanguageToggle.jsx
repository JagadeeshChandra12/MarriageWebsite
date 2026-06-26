import React from 'react';
import { motion } from 'framer-motion';

export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="fixed top-6 right-6 z-[60] flex items-center bg-[#2d050a]/90 backdrop-blur-md border border-[#D4AF37]/40 rounded-full p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-gold-glow">
      <button
        onClick={() => setLang('en')}
        className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${
          lang === 'en' ? 'text-[#2d050a]' : 'text-[#FFF8E7]/70 hover:text-[#FFF8E7]'
        }`}
        aria-label="Switch to English"
      >
        {lang === 'en' && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-gold-gradient rounded-full z-0"
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          />
        )}
        <span className="relative z-10 font-sans tracking-wider">EN</span>
      </button>
      
      <button
        onClick={() => setLang('te')}
        className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${
          lang === 'te' ? 'text-[#2d050a]' : 'text-[#FFF8E7]/70 hover:text-[#FFF8E7]'
        }`}
        aria-label="Switch to Telugu"
      >
        {lang === 'te' && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-gold-gradient rounded-full z-0"
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          />
        )}
        <span className="relative z-10 font-telugu">తెలుగు</span>
      </button>
    </div>
  );
}
