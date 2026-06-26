import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundEffects from './components/BackgroundEffects';
import LanguageToggle from './components/LanguageToggle';
import EnvelopeGate from './components/EnvelopeGate';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import CoupleSection from './components/CoupleSection';
import WeddingDetails from './components/WeddingDetails';
import LiveStream from './components/LiveStream';
import FamilyInvitation from './components/FamilyInvitation';
import ClosingBlessing from './components/ClosingBlessing';
import { TRANSLATIONS } from './constants/weddingData';

function App() {
  const [lang, setLang] = useState('en');
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <div className="relative min-h-screen text-[#FFF8E7] overflow-x-hidden selection:bg-[#D4AF37]/30">
      
      {/* 1. Cinematic Background Loop (Always active, featuring gold particle video + vignette) */}
      <BackgroundEffects />

      {/* 2. Audio Player (BGM plays classical Bansuri flute after Envelope is opened) */}
      <AudioPlayer isEnvelopeOpen={isEnvelopeOpen} />

      {/* 3. Floating Language Switcher */}
      <LanguageToggle lang={lang} setLang={setLang} />

      {/* 4. Interactive Envelope Entrance Gate */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <EnvelopeGate 
            lang={lang} 
            onOpen={() => setIsEnvelopeOpen(true)} 
          />
        )}
      </AnimatePresence>

      {/* 5. Main Invitation Website content */}
      <AnimatePresence mode="wait">
        {isEnvelopeOpen && (
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative z-10 w-full flex flex-col justify-start"
          >
            {/* Hero Section */}
            <Hero lang={lang} t={t} />

            {/* Couple names and lineage section (no boxes) */}
            <CoupleSection lang={lang} t={t} />

            {/* Ceremony Muhurtham, Date and Google Maps CTA */}
            <WeddingDetails lang={lang} t={t} />

            {/* Live Wedding Streaming */}
            <LiveStream lang={lang} t={t} />

            {/* Inviting families layout */}
            <FamilyInvitation lang={lang} t={t} />

            {/* Closing blessing & Thank You credits */}
            <ClosingBlessing lang={lang} t={t} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
