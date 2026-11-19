"use client";

import { useEffect, useRef } from "react";

export default function AboutPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#88b7d5]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about-bg.mp4" type="video/mp4" />
        </video>
        {/* Darkening Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Center Title Content */}
      <div className="relative z-10 pt-20 px-6 text-center">
        <h1 className="font-['Grandstander'] font-black text-6xl sm:text-8xl text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          About
        </h1>
      </div>
    </div>
  );
}
