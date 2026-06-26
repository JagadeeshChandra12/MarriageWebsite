import React from 'react';
import { motion } from 'framer-motion';

export default function GaneshaSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex justify-center items-center mb-6"
    >
      <svg
        width="110"
        height="120"
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-28 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]"
      >
        <defs>
          <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3CD" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA8C2C" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Aura/Circle background */}
        <circle cx="50" cy="55" r="42" stroke="url(#ganeshaGold)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="50" cy="55" r="46" stroke="url(#ganeshaGold)" strokeWidth="0.25" opacity="0.2" />

        {/* Crown (Mukut) */}
        <path d="M42 22 L50 4 L58 22 Z" stroke="url(#ganeshaGold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 22 L50 10 L55 22" stroke="url(#ganeshaGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M39 22 C45 22 45 25 50 25 C55 25 55 22 61 22" stroke="url(#ganeshaGold)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="2" r="1.5" fill="#FFF3CD" filter="url(#glow)" />

        {/* Ears */}
        <path d="M38 35 C20 30 22 55 35 50" stroke="url(#ganeshaGold)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M34 42 C26 40 26 47 34 46" stroke="url(#ganeshaGold)" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M62 35 C80 30 78 55 65 50" stroke="url(#ganeshaGold)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M66 42 C74 40 74 47 66 46" stroke="url(#ganeshaGold)" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

        {/* Face Outline & Tusk */}
        <path d="M50 25 C42 25 38 31 38 42 C38 48 40 52 42 55" stroke="url(#ganeshaGold)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M38 46 H33 L35 44" stroke="url(#ganeshaGold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> {/* Left Tusk */}

        {/* Trunk (Sondh) - sweeping elegantly to the right (traditional Valampuri shape, highly auspicious) */}
        <path d="M50 42 C51 55 64 54 64 68 C64 78 52 79 46 75 C42 72 43 66 47 66 C51 66 54 70 51 72 C49 73 47 71 47 70" 
              stroke="url(#ganeshaGold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Modak (Sweet) */}
        <path d="M32 64 C32 60 38 60 38 64 C38 67 32 67 32 64 Z" fill="url(#ganeshaGold)" />
        
        {/* Tika (Tilak on forehead) */}
        <path d="M48 31 Q50 27 52 31 Q50 35 48 31 Z" fill="#D4AF37" filter="url(#glow)" />
        <line x1="45" y1="34" x2="55" y2="34" stroke="url(#ganeshaGold)" strokeWidth="1" />
        <line x1="47" y1="36" x2="53" y2="36" stroke="url(#ganeshaGold)" strokeWidth="0.75" />

        {/* Small Mushika (mouse mount) at bottom right */}
        <path d="M72 88 C70 88 68 86 68 84 C68 82 72 80 75 80 C78 80 80 83 78 86 Z" stroke="url(#ganeshaGold)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <path d="M78 86 C82 86 84 88 86 88" stroke="url(#ganeshaGold)" strokeWidth="0.75" opacity="0.7" /> {/* Mouse tail */}
      </svg>
    </motion.div>
  );
}
