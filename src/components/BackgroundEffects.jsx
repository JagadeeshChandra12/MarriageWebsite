import React, { useMemo } from 'react';

export default function BackgroundEffects() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px to 3px (fine, secondary layer)
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 25 + 25}s`,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#2d050a]">
      
      {/* 1. Looping Cinematic Gold Dust Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16] filter contrast-125"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-gold-dust-particles-in-slow-motion-42523-large.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* 2. Vignette Overlay (Dark radial border glow to blend the video edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#120103_100%)] opacity-95" />

      {/* 3. Subtle Golden Mandala Vector (Center rotating background ornament) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 200 200" fill="none" stroke="#D4AF37" strokeWidth="0.4" className="w-[85vw] h-[85vw] max-w-[800px] max-h-[800px] animate-[spin_120s_linear_infinite]">
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="40" />
          <circle cx="100" cy="100" r="20" strokeDasharray="1 1" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = 100 + 80 * Math.cos(angle);
            const y2 = 100 + 80 * Math.sin(angle);
            return <line key={i} x1="100" y1="100" x2={x2} y2={y2} />;
          })}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const cx = 100 + 50 * Math.cos(angle);
            const cy = 100 + 50 * Math.sin(angle);
            return <circle key={i} cx={cx} cy={cy} r="6" strokeDasharray="0.5 0.5" />;
          })}
        </svg>
      </div>

      {/* 4. Fine Corner Floral Accents */}
      <div className="absolute top-0 left-0 w-36 h-36 opacity-15 pointer-events-none text-[#D4AF37]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <path d="M 0,0 C 20,5 35,20 40,40 C 35,45 25,45 10,25" />
          <path d="M 0,0 C 5,20 20,35 40,40 C 45,35 45,25 25,10" />
          <path d="M 0,15 C 10,25 20,25 25,35" strokeDasharray="1 1" />
          <path d="M 15,0 C 25,10 25,20 35,25" strokeDasharray="1 1" strokeWidth="0.3" />
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-36 h-36 opacity-15 pointer-events-none text-[#D4AF37] transform rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <path d="M 0,0 C 20,5 35,20 40,40 C 35,45 25,45 10,25" />
          <path d="M 0,0 C 5,20 20,35 40,40 C 45,35 45,25 25,10" />
          <path d="M 0,15 C 10,25 20,25 25,35" strokeDasharray="1 1" />
          <path d="M 15,0 C 25,10 25,20 35,25" strokeDasharray="1 1" strokeWidth="0.3" />
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-36 h-36 opacity-15 pointer-events-none text-[#D4AF37] transform -rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <path d="M 0,0 C 20,5 35,20 40,40 C 35,45 25,45 10,25" />
          <path d="M 0,0 C 5,20 20,35 40,40 C 45,35 45,25 25,10" />
          <path d="M 0,15 C 10,25 20,25 25,35" strokeDasharray="1 1" />
          <path d="M 15,0 C 25,10 25,20 35,25" strokeDasharray="1 1" strokeWidth="0.3" />
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-36 h-36 opacity-15 pointer-events-none text-[#D4AF37] transform rotate-180">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          <path d="M 0,0 C 20,5 35,20 40,40 C 35,45 25,45 10,25" />
          <path d="M 0,0 C 5,20 20,35 40,40 C 45,35 45,25 25,10" />
          <path d="M 0,15 C 10,25 20,25 25,35" strokeDasharray="1 1" />
          <path d="M 15,0 C 25,10 25,20 35,25" strokeDasharray="1 1" strokeWidth="0.3" />
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      {/* 5. Floating Gold Dust Particles (Foreground overlay) */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bg-gradient-to-tr from-[#FFF3CD] to-[#D4AF37] rounded-full shadow-[0_0_5px_rgba(212,175,55,0.5)]"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationName: 'float-particle',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
