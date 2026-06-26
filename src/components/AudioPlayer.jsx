import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ isEnvelopeOpen }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Autoplay the BGM once the envelope is opened (after user interaction)
    if (isEnvelopeOpen && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay blocked or audio failed to load: ", err);
        });
    }
  }, [isEnvelopeOpen]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback failed: ", err);
        });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/bgm.aac"
        loop
        preload="auto"
      />

      {/* Floating Glassmorphic Audio Controller */}
      {isEnvelopeOpen && (
        <button
          onClick={togglePlayback}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#350a11]/60 backdrop-blur-md border border-[#D4AF37]/35 text-[#D4AF37] hover:bg-[#350a11]/90 shadow-lg cursor-pointer transition-all duration-300 relative group"
          title={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? (
            <>
              {/* Pulsing rings when music is playing */}
              <span className="absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping opacity-75" />
              <Volume2 className="w-5 h-5 relative z-10" />
            </>
          ) : (
            <VolumeX className="w-5 h-5 relative z-10 opacity-70" />
          )}

          {/* Mini music wave visualizer on hover */}
          <div className="absolute left-14 bg-[#350a11]/85 border border-[#D4AF37]/25 text-[#FFF8E7] text-[10px] px-3 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans tracking-wider">
            {isPlaying ? "Mute BGM" : "Play BGM"}
          </div>
        </button>
      )}
    </div>
  );
}
