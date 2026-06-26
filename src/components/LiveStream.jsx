import React, { useEffect } from 'react';
import { CONFIG } from '../constants/weddingData';

export default function LiveStream({ lang, t }) {
  const YOUTUBE_ID = CONFIG.youtubeId || '';

  useEffect(() => {
    // ── YouTube Live Stream Activator ──────────────────────────
    // TO GO LIVE: paste your YouTube video/stream ID in weddingData.js CONFIG
    function activateYouTube() {
      if (!YOUTUBE_ID) return; // placeholder stays visible
      const iframe = document.getElementById('yt-iframe');
      const placeholder = document.getElementById('yt-placeholder');
      if (iframe && placeholder) {
        iframe.src = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
        iframe.style.display = 'block';
        placeholder.style.display = 'none';
      }
    }
    activateYouTube();
  }, [YOUTUBE_ID]);

  // Wire translation keys in applyLang function on mount/translation updates
  useEffect(() => {
    function applyLang() {
      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };
      set('t-liveEye', t.liveEye);
      set('t-liveTitle', t.liveTitle);
      set('t-liveDesc', t.liveDesc);
      set('t-liveWaiting', t.liveWaiting);
    }
    applyLang();
  }, [lang, t]);

  // Scroll Trigger Fade-in using standard IntersectionObserver
  useEffect(() => {
    const element = document.getElementById('live-stream-section');
    if (element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      }, { threshold: 0.1 });
      observer.observe(element);
      return () => observer.disconnect();
    }
  }, []);

  return (
    /* WEDDING DAY INSTRUCTIONS:
      1. Start your YouTube Live stream
      2. Copy the video ID from the URL (e.g. youtube.com/watch?v=XXXXX → ID is XXXXX)
      3. Paste it as CONFIG.youtubeId inside constants/weddingData.js
      4. Save and redeploy to Vercel (takes 30 seconds)
      Done! The iframe activates automatically.
    */
    <section 
      id="live-stream-section"
      className="fade-section opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      style={{
        maxWidth: '480px',
        margin: '0 auto',
        padding: '72px 20px',
        zIndex: 10,
        position: 'relative'
      }}
    >
      {/* Container Card */}
      <div style={{
        background: 'linear-gradient(160deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
        border: '1.5px solid rgba(212,175,55,0.3)',
        borderRadius: '28px',
        padding: '36px 24px',
        textAlign: 'center',
        boxShadow: '0 12px 50px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* Red live glow behind card (ambient) */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,0,0,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}></div>

        {/* Eyebrow Label */}
        <span 
          id="t-liveEye"
          style={{
            display: 'block',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: 'rgba(212,175,55,0.65)',
            marginBottom: '8px'
          }}
        >
          {t.liveEye}
        </span>

        {/* Section Title */}
        <h2 
          id="t-liveTitle"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: '22px',
            color: '#D4AF37',
            minHeight: '32px',
            lineHeight: 1.3,
            margin: '0 auto 12px'
          }}
        >
          {t.liveTitle}
        </h2>

        {/* Divider below title */}
        <div className="flex justify-center items-center mb-6 text-[#D4AF37] opacity-45">
          <div className="h-[0.5px] w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="mx-2 text-xs">✦</span>
          <div className="h-[0.5px] w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* YouTube Player Box */}
        <div id="yt-container" style={{
          width: '100%',
          borderRadius: '14px',
          overflow: 'hidden',
          margin: '20px 0',
          background: '#0a0a0a',
          border: '1.5px solid rgba(255,0,0,0.3)',
          boxShadow: '0 0 24px rgba(255,0,0,0.12)',
          aspectRatio: '16/9',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          
          {/* PLACEHOLDER STATE — shown until YouTube link is added */}
          <div id="yt-placeholder" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            padding: '24px',
          }}>
            
            {/* Animated YouTube-style play icon */}
            <div style={{ position: 'relative', width: '64px', height: '64px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '14px',
                background: 'rgba(255,0,0,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'yt-pulse 2s ease-in-out infinite',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            <p id="t-liveWaiting" style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.55)',
              textAlign: 'center',
              lineHeight: '1.6',
              minHeight: '40px',
              margin: 0
            }}>
              {t.liveWaiting}
            </p>

            {/* BLINKING LIVE BADGE */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,0,0,0.15)',
              border: '1px solid rgba(255,0,0,0.4)',
              borderRadius: '999px',
              padding: '5px 14px',
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#ff3333',
                animation: 'blink 1.2s ease-in-out infinite',
                display: 'inline-block',
              }}></span>
              <span style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#ff6666',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: '"Poppins", sans-serif'
              }}>
                {lang === 'te' ? 'జూలై 4, 2026' : 'Coming Live • 4 Jul 2026'}
              </span>
            </div>

          </div>

          {/* ACTUAL YOUTUBE IFRAME — hidden until link added */}
          <iframe
            id="yt-iframe"
            style={{
              display: 'none',
              width: '100%',
              height: '100%',
              border: 'none',
              position: 'absolute',
              inset: 0
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Wedding Live Stream"
          ></iframe>

        </div>

        {/* Description Text */}
        <p 
          id="t-liveDesc"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            minHeight: '52px',
            margin: '12px auto 0',
            maxWidth: '380px'
          }}
        >
          {t.liveDesc}
        </p>

      </div>
    </section>
  );
}
