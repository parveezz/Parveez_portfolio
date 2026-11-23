"use client";

import { useEffect, useRef } from "react";

export default function AboutPage() {
  const videoRef = useRef(null);

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
    <div className="min-h-screen relative flex flex-col items-center justify-start overflow-x-hidden bg-[#88b7d5] select-none text-white">
      {/* Background Video Layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
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
          <source src="/about-bg.mp4" type="video/mp4" />
        </video>
        {/* Contrast Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-3xl mx-auto pt-32 pb-24 px-6 space-y-12">
        {/* Header Title & Intro */}
        <header className="text-center space-y-3">
          <h1 className="font-['Grandstander'] font-black text-6xl sm:text-8xl md:text-9xl text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-none">
            About
          </h1>
          <p className="font-['Grandstander'] font-black text-2xl sm:text-4xl text-white uppercase tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] pt-2">
            Shaik Parveez
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-['Grandstander'] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
            Frontend Developer | React.js | Next.js
          </div>
        </header>

        {/* 1. About Me */}
        <section className="space-y-4 text-left" aria-labelledby="about-me-heading">
          <h2
            id="about-me-heading"
            className="font-['Grandstander'] font-black text-2xl sm:text-3xl text-white uppercase tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          >
            1. About Me
          </h2>
          <div className="space-y-4 font-['Inter'] text-base sm:text-lg text-white/95 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
            <p>
              I am a Frontend Developer based in Hyderabad, Telangana, with nearly 1 year of professional experience in building responsive and user-friendly web applications.
            </p>
            <p>
              I specialize in developing modern user interfaces using React.js, JavaScript, and modern frontend technologies. I enjoy transforming Figma designs into functional web applications, building reusable components, integrating APIs, and creating seamless user experiences.
            </p>
            <p>
              I continuously explore new technologies and improve my development skills by working on real-world projects.
            </p>
          </div>
        </section>

        {/* 2. Career Objective */}
        <section className="space-y-4 text-left pt-6 border-t border-white/20" aria-labelledby="career-objective-heading">
          <h2
            id="career-objective-heading"
            className="font-['Grandstander'] font-black text-2xl sm:text-3xl text-white uppercase tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          >
            Career Objective
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-white/95 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
            To build modern, scalable, and user-friendly web applications while continuously improving my frontend development expertise and contributing to impactful software products.
          </p>
        </section>
      </div>
    </div>
  );
}
