import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GaneshaSVG from './GaneshaSVG';
import { CONFIG } from '../constants/weddingData';

export default function Hero({ lang, t }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(CONFIG.weddingDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      
      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between items-center px-4 py-8 md:py-16 text-center z-10">
      
      {/* Spacer for floating language button */}
      <div className="h-12 w-full" />

      {/* Main Content */}
      <div className="w-full max-w-4xl flex-grow flex flex-col justify-center items-center my-auto px-2">
        
        {/* Lord Ganesha SVG */}
        <GaneshaSVG />

        {/* Traditional Telugu blessing */}
        <div className="max-w-2xl px-4 mb-6">
          <p className={`text-[#FFF8E7]/90 text-sm md:text-base leading-relaxed tracking-wider ${
            lang === 'te' ? 'font-telugu leading-loose text-base md:text-lg' : 'font-sans italic'
          }`}>
            {t.blessingText}
          </p>
        </div>

        {/* Floral Divider */}
        <div className="flex items-center justify-center opacity-40 my-4 text-[#D4AF37]">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="w-16 h-6">
            <path d="M 0,10 C 15,5 20,5 30,10 C 40,5 45,5 60,10 M 30,10 L 30,0" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="30" cy="10" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* "Wedding Invitation" Heading */}
        <h2 className="text-[#D4AF37] font-serif text-xs sm:text-sm uppercase tracking-[0.3em] mb-4">
          {t.invitationTitle}
        </h2>

        {/* Couple Names (Swetha ❤️ Shivaji) */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-gold-gradient tracking-wide py-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            {CONFIG.bride.name}
          </h1>
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="my-3 text-red-500 text-2xl md:text-3xl"
          >
            ❤️
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-gold-gradient tracking-wide py-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            {CONFIG.groom.name}
          </h1>
        </div>

        {/* Date and Muhurtham Section */}
        <div className="mb-10 max-w-md w-full">
          <p className="text-2xl sm:text-3xl font-serif text-[#FFF8E7] font-semibold tracking-wide">
            {t.weddingDateText}
          </p>
          <div className="flex items-center justify-center gap-2 mt-1.5 text-[#D4AF37] text-xs sm:text-sm uppercase tracking-widest font-semibold">
            <span>✧</span>
            <span>{t.muhurthamTime}</span>
            <span>✧</span>
          </div>
        </div>

        {/* Redesigned Minimal Countdown Timer */}
        <div className="w-full max-w-lg px-4 mb-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {[
              { label: t.days, val: timeLeft.days },
              { label: t.hours, val: timeLeft.hours },
              { label: t.minutes, val: timeLeft.minutes },
              { label: t.seconds, val: timeLeft.seconds }
            ].map((unit, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-center items-center relative py-1"
              >
                {/* Thin dividing lines inside countdown */}
                {index > 0 && (
                  <div className="absolute left-[-4px] top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent hidden sm:block" />
                )}
                <span className="text-3xl sm:text-5xl font-serif font-semibold text-gold-gradient tracking-wider drop-shadow-md">
                  {formatNum(unit.val)}
                </span>
                <span className="text-[9px] sm:text-xs text-[#FFF8E7]/50 tracking-[0.15em] mt-1.5 uppercase font-sans font-light">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Elegant Scroll Down indicator */}
      <div
        className="flex flex-col items-center cursor-pointer text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors mt-4"
        onClick={() => {
          document.getElementById('couple-details')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-sans mb-1 font-light">
          {t.scrollDown}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
