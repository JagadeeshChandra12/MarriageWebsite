import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../constants/weddingData';

export default function FamilyInvitation({ lang, t }) {
  return (
    <section id="family-invitation" className="relative px-4 py-24 z-10 max-w-4xl mx-auto">
      
      {/* Ornaments */}
      <div className="flex justify-center items-center mb-6 text-[#D4AF37] opacity-60">
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="w-12 h-6">
          <path d="M 20,0 Q 20,10 0,10 T 20,20" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 20,0 Q 20,10 40,10 T 20,20" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="20" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-12">
        
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif text-gold-gradient font-medium tracking-wide">
          {t.familyBlessingsTitle}
        </h3>

        {/* Families Stack */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Movva Family */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <h4 className="text-[#D4AF37] font-serif text-lg tracking-wider font-semibold border-b border-[#D4AF37]/20 pb-2 px-6">
              {t.brideFamilyLabel}
            </h4>
            <div className="space-y-1 text-[#FFF8E7]/90 font-serif text-base sm:text-lg">
              <p>{CONFIG.bride.parents.father}</p>
              <p>{CONFIG.bride.parents.mother}</p>
            </div>
          </motion.div>

          {/* Elegant Dash Separator */}
          <div className="text-[#D4AF37]/40 text-lg hidden md:block">—</div>
          <div className="h-[0.5px] w-12 bg-[#D4AF37]/20 md:hidden" />

          {/* Paleti Family */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-[#D4AF37] font-serif text-lg tracking-wider font-semibold border-b border-[#D4AF37]/20 pb-2 px-6">
              {t.groomFamilyLabel}
            </h4>
            <div className="space-y-1 text-[#FFF8E7]/90 font-serif text-base sm:text-lg">
              <p>{CONFIG.groom.parents.father}</p>
              <p>{CONFIG.groom.parents.mother}</p>
            </div>
          </motion.div>

        </div>

        {/* Closing decorative line */}
        <div className="flex items-center justify-center opacity-25 pt-4">
          <div className="h-[0.5px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

      </div>
    </section>
  );
}
