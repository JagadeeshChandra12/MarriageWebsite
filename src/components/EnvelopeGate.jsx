import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnvelopeGate({ onOpen, lang }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Give animation time to complete before hiding gate and starting BGM
    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  // Content based on selected language during envelope gate
  const t = {
    en: {
      invite: "Wedding Invitation",
      openBtn: "Open Invitation",
      names: "Swetha & Shivaji",
      sub: "Please join us for our wedding celebration"
    },
    te: {
      invite: "వివాహ ఆహ్వాన పత్రిక",
      openBtn: "ఆహ్వానం తెరవండి",
      names: "శ్వేత & శివాజీ",
      sub: "మా వివాహ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము"
    }
  }[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d0306] overflow-hidden px-4">
      {/* Delicate background particle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#0a0001_100%)] opacity-85 pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[4.5/3.5] flex items-center justify-center"
      >
        {/* Envelope Base Shadow */}
        <div className="absolute inset-0 bg-black/40 blur-xl rounded-lg transform translate-y-4" />

        {/* Envelope Body */}
        <div className="absolute inset-0 bg-[#350a11] rounded-lg border border-[#D4AF37]/35 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
          
          {/* Subtle Corner Accents inside envelope */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#D4AF37]/40" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#D4AF37]/40" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#D4AF37]/40" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#D4AF37]/40" />

          {/* Invitation text header */}
          <div className="text-center mt-2">
            <span className="text-[#D4AF37]/75 font-serif text-[10px] sm:text-xs uppercase tracking-[0.25em] block">
              {t.invite}
            </span>
          </div>

          {/* Couple Names in Gold */}
          <div className="text-center my-auto py-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient tracking-wide drop-shadow-md">
              {t.names}
            </h2>
            <p className="text-[#FFF8E7]/50 text-[10px] sm:text-xs font-sans tracking-wide mt-2 max-w-[280px] mx-auto leading-relaxed">
              {t.sub}
            </p>
          </div>

          {/* Open Button styled like a Premium Wax Seal wrapper */}
          <div className="flex flex-col items-center mb-2 z-20">
            <motion.button
              onClick={handleOpen}
              disabled={isOpening}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn bg-gold-gradient text-[#2d050a] px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg text-xs sm:text-sm tracking-widest uppercase font-sans cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              {t.openBtn}
            </motion.button>
          </div>

        </div>

        {/* 3D Wax Seal Overlays and unfolding Flaps */}
        <AnimatePresence>
          {isOpening && (
            <>
              {/* Top Flap Unfolding Animation (Simulated by expanding scale-y upward) */}
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 left-0 right-0 h-1/2 bg-[#420f18] rounded-t-lg border-t border-l border-r border-[#D4AF37]/40 z-30 shadow-md origin-top"
              />

              {/* Inner Card sliding out upward */}
              <motion.div
                initial={{ y: 0, scale: 0.95, opacity: 0.5 }}
                animate={{ y: -160, scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
                className="absolute inset-x-4 top-4 bottom-4 bg-[#FFF8E7] rounded border border-[#D4AF37] z-25 flex flex-col items-center justify-center p-6 text-center shadow-2xl"
              >
                {/* Traditional Ganesha Wax Seal stamp drawing */}
                <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16 text-[#350a11] mb-3">
                  <path d="M50 15 C35 15 35 30 50 30 C65 30 65 15 50 15 Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M50 30 C50 45 42 50 42 60 C42 70 58 70 58 60 C58 50 50 45 50 30" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M42 60 C30 60 30 75 50 75 C70 75 70 60 58 60" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="45" r="3" fill="currentColor" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#350a11] uppercase tracking-wider">
                  {lang === 'te' ? 'శుభ ముహూర్తం' : 'Save The Date'}
                </h3>
                <div className="h-[0.5px] w-16 bg-[#D4AF37] my-2" />
                <p className="text-[#350a11]/80 text-xs sm:text-sm font-serif">
                  July 4, 2026
                </p>
              </motion.div>

              {/* Wax Seal breaking/fading animation */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
              >
                {/* Wax seal gold circle */}
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-[#FFF8E7]/40">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-[#350a11]">
                    {/* Tiny Ganesha silhouette shape */}
                    <path d="M12 4c-2.5 0-3.5 2-3.5 4 0 3 1.5 4 1.5 6 0 1.5-1 2-1 3.5 0 2 2 2.5 3 2.5s3-.5 3-2.5c0-1.5-1-2-1-3.5 0-2 1.5-3 1.5-6 0-2-1-4-3.5-4z" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
