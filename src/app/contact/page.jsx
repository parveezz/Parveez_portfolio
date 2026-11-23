"use client";

import { useEffect, useRef } from "react";

export default function ContactPage() {
  const videoRef = useRef(null);
  const email = "shaikparveez290@gmail.com";
  const phone = "+91 6302122429";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden bg-[#88b7d5] select-none">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/contactVideo.mp4" type="video/mp4" />
        </video>
        {/* Darkening Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-12 text-white">
        {/* Massive Title */}
        <h1 className="font-['Grandstander'] font-black text-7xl sm:text-9xl md:text-[130px] uppercase tracking-tight text-white leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          Contact
        </h1>

        {/* Large Contact Information */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          <div>
            <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/80 block mb-1">
              Name
            </span>
            <p className="font-['Grandstander'] font-black text-3xl sm:text-5xl md:text-6xl uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Shaik Parveez
            </p>
            <p className="font-['Inter'] font-medium text-base sm:text-xl text-white/90 mt-1">
              Frontend Developer · Invertio Software Solutions
            </p>
          </div>

          <div>
            <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/80 block mb-1">
              Email
            </span>
            <a
              href={`mailto:${email}`}
              className="font-['Grandstander'] font-black text-2xl sm:text-4xl md:text-5xl text-white hover:underline transition-all block break-all drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            >
              {email}
            </a>
          </div>

          <div>
            <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/80 block mb-1">
              Phone &amp; WhatsApp
            </span>
            <a
              href="tel:+916302122429"
              className="font-['Grandstander'] font-black text-2xl sm:text-4xl md:text-5xl text-white hover:underline transition-all block drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            >
              {phone}
            </a>
          </div>

          <div>
            <span className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white/80 block mb-1">
              Location
            </span>
            <p className="font-['Grandstander'] font-black text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Secunderabad, Telangana, India
            </p>
            <p className="font-['Inter'] text-sm sm:text-base text-white/85 mt-1">
              H.No : 6-2-646, Beside Alfatha Cafe, Secunderabad – 500003
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
