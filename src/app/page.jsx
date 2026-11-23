"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MeadowbellPortfolioPage() {
  const kickerRef = useRef(null);
  const sublineRef = useRef(null);
  const btnJoinRef = useRef(null);
  const btnPreviewRef = useRef(null);
  const chaptersTitleRef = useRef(null);
  const chaptersLinkRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const word1 = "FRONTEND";
  const word2 = "WEB";
  const word3 = "DEVELOPER";

  useEffect(() => {
    // Respect accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Kicker un-blurs
    if (kickerRef.current) {
      kickerRef.current.animate(
        [
          { opacity: 0, filter: "blur(14px)", transform: "translateY(12px)" },
          { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
        ],
        {
          duration: 750,
          delay: 250,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "backwards",
        }
      );
    }

    // 2. Subline, buttons, chapters title & link, cards rise in choreographed sequence after letters drop
    const riseKeyframes = [
      { opacity: 0, transform: "translateY(26px)" },
      { opacity: 1, transform: "translateY(0)" },
    ];
    const riseTiming = { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" };

    if (sublineRef.current) sublineRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1180 });
    if (btnJoinRef.current) btnJoinRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1280 });
    if (btnPreviewRef.current) btnPreviewRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1360 });
    if (chaptersTitleRef.current) chaptersTitleRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1450 });
    if (chaptersLinkRef.current) chaptersLinkRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1490 });
    if (card1Ref.current) card1Ref.current.animate(riseKeyframes, { ...riseTiming, delay: 1550 });
    if (card2Ref.current) card2Ref.current.animate(riseKeyframes, { ...riseTiming, delay: 1650 });
    if (card3Ref.current) card3Ref.current.animate(riseKeyframes, { ...riseTiming, delay: 1750 });
  }, []);

  return (
    <div className="bg-[#88b7d5] selection:bg-[#2F5D50] selection:text-[#F5EFE6] min-h-screen relative overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Meadowbell Ghibli Frame)                                 */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen md:h-[1280px] lg:h-[88.88vw] max-h-[1440px] overflow-hidden select-none flex flex-col justify-between" id="heroFrame">

        {/* Background Scene: Plate & Looping Animation Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/3ca5d10d-ea2f-4907-876f-33bde169469e.jpg"
            alt="Meadowbell Ghibli Anime landscape"
          />
          <video
            className="absolute left-0 -top-[6.25%] w-full h-[112.5%] object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/d2cb5bef-f92b-4e91-ae93-8dc6555e56ac.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-36 pb-8 md:pb-12 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto flex-1">

          {/* Center Hero Copy Area */}
          <header className="flex flex-col items-center text-center my-auto max-w-4xl mx-auto space-y-4 md:space-y-5">
            <p
              className="font-['Grandstander'] font-black text-base sm:text-xl md:text-2xl text-white uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(28,70,120,0.5)]"
              ref={kickerRef}
            >
              SHAIK PARVEEZ
            </p>

            <h1
              className="font-['Grandstander'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_18px_rgba(28,70,120,0.35)]"
              aria-label="FRONTEND WEB DEVELOPER"
            >
              {/* Line 1: FRONTEND */}
              <span className="block" aria-hidden="true">
                <span className="inline-block whitespace-nowrap">
                  {word1.split("").map((char, i) => {
                    const globalIndex = i;
                    return (
                      <span
                        key={i}
                        className="inline-block letter-drop"
                        style={{
                          animationDelay: `${280 + globalIndex * 45}ms`,
                        }}
                      >
                        <span
                          className="inline-block letter-float hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-115 hover:rotate-3 transition-transform duration-200 cursor-default select-none"
                          style={{
                            animationDelay: `${(globalIndex * 0.16) % 2.4}s`,
                          }}
                        >
                          {char}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </span>

              {/* Line 2: WEB DEVELOPER */}
              <span className="block mt-1 sm:mt-2" aria-hidden="true">
                {/* Word: WEB */}
                <span className="inline-block whitespace-nowrap">
                  {word2.split("").map((char, i) => {
                    const globalIndex = word1.length + i;
                    return (
                      <span
                        key={i}
                        className="inline-block letter-drop"
                        style={{
                          animationDelay: `${280 + globalIndex * 45}ms`,
                        }}
                      >
                        <span
                          className="inline-block letter-float hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-115 hover:rotate-3 transition-transform duration-200 cursor-default select-none"
                          style={{
                            animationDelay: `${(globalIndex * 0.16) % 2.4}s`,
                          }}
                        >
                          {char}
                        </span>
                      </span>
                    );
                  })}
                </span>

                {/* Word Spacing */}
                <span className="inline-block w-3 sm:w-5 md:w-6" />

                {/* Word: DEVELOPER */}
                <span className="inline-block whitespace-nowrap">
                  {word3.split("").map((char, i) => {
                    const globalIndex = word1.length + word2.length + i;
                    return (
                      <span
                        key={i}
                        className="inline-block letter-drop"
                        style={{
                          animationDelay: `${280 + globalIndex * 45}ms`,
                        }}
                      >
                        <span
                          className="inline-block letter-float hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-115 hover:rotate-3 transition-transform duration-200 cursor-default select-none"
                          style={{
                            animationDelay: `${(globalIndex * 0.16) % 2.4}s`,
                          }}
                        >
                          {char}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </span>
            </h1>

            <p
              className="font-['Inter'] font-normal text-white/95 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed whitespace-pre-line drop-shadow-[0_1px_4px_rgba(28,70,120,0.4)]"
              ref={sublineRef}
            >
              {"Frontend Developer at Invertio Software Solutions crafting responsive,\naccessible, and performance-focused web apps. Delivered Invertio corporate,\nGreenLoop admin portal, and ZeroQueries with clean React and Next.js."}
            </p>

            {/* Action CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-4 pt-2 md:pt-4 justify-center w-full max-w-md mx-auto">
              <Link
                href="/projects"
                className="flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#5b875c] font-['Grandstander'] font-black text-xs sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-md text-center whitespace-nowrap"
                ref={btnJoinRef}
                aria-label="Explore Projects"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[rgba(204,218,173,0.88)] hover:bg-[rgba(204,218,173,1)] backdrop-blur-md border border-[#2F5D50]/20 text-[#2F5D50] font-['Grandstander'] font-black text-xs sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-md text-center whitespace-nowrap"
                ref={btnPreviewRef}
                aria-label="Get in Touch via Email"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[#2F5D50] stroke-[2.5] fill-none shrink-0" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                <span>Get in Touch</span>
              </Link>
            </div>
          </header>

          {/* Bottom Projects / Chapters Row */}
          <section className="w-full mt-auto pt-8 md:pt-16" id="projects" aria-labelledby="projects-heading">
            <div className="flex items-center justify-between mb-4 md:mb-6 px-1">
              <h2
                className="font-['Grandstander'] font-black text-2xl sm:text-3xl text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(28,70,120,0.4)]"
                id="projects-heading"
                ref={chaptersTitleRef}
              >
                PROJECTS
              </h2>
              <Link
                href="/projects"
                className="font-['Inter'] font-semibold text-sm sm:text-base text-white/95 hover:text-white transition-colors inline-flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(28,70,120,0.4)] group"
                ref={chaptersLinkRef}
              >
                <span>browse all projects</span>
                <span className="text-lg leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">›</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {/* Chapter 01: Full Card Click Redirects to /skills */}
              <Link
                ref={card1Ref}
                href="/skills"
                className="group relative h-[220px] sm:h-[260px] md:h-[270px] w-full rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/25 block cursor-pointer select-none"
                aria-label="Chapter 01 - Learning the Frontend (Go to Skills)"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cd2d844f-ae3f-4fa9-8067-b077530b6e71.webp"
                  alt="Learning Frontend - Fullstack Academy Foundations"
                  loading="lazy"
                />

                {/* Top Highlight Badge & Title */}
                <div className="absolute top-4 left-5 right-5 z-10 flex flex-col gap-1 pointer-events-none">
                  <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CHAPTER 01
                  </span>
                  <h3 className="font-['Grandstander'] font-black text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                    Learning the Frontend
                  </h3>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    <span className="font-['Inter'] font-semibold text-sm text-white block">
                      Fullstack Academy
                    </span>
                    <span className="font-['Inter'] font-normal text-xs text-white/85 block">
                      HTML5 · CSS3 · JS · React
                    </span>
                  </div>
                  <span
                    className="w-10 h-10 rounded-full bg-white/95 group-hover:bg-white text-[#2c4a32] flex items-center justify-center transition-all shadow-md group-hover:scale-110 active:scale-95 shrink-0"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#2c4a32] stroke-[2.5] fill-none">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Chapter 02: Full Card Click Redirects to /projects */}
              <Link
                ref={card2Ref}
                href="/projects"
                className="group relative h-[220px] sm:h-[260px] md:h-[270px] w-full rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/25 block cursor-pointer select-none"
                aria-label="Chapter 02 - The Path of Invertio (Go to Projects)"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/48f5b97e-c27c-4afd-9427-eb35aebd1751.webp"
                  alt="The Path of Invertio - Associate Software Engineer"
                  loading="lazy"
                />

                {/* Top Highlight Badge & Title */}
                <div className="absolute top-4 left-5 right-5 z-10 flex flex-col gap-1 pointer-events-none">
                  <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CHAPTER 02
                  </span>
                  <h3 className="font-['Grandstander'] font-black text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                    The Path of Invertio
                  </h3>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    <span className="font-['Inter'] font-semibold text-sm text-white block">
                      Invertio Corporate Site
                    </span>
                    <span className="font-['Inter'] font-normal text-xs text-white/85 block">
                      Associate Software Engineer · React
                    </span>
                  </div>
                  <span
                    className="w-10 h-10 rounded-full bg-white/95 group-hover:bg-white text-[#2c4a32] flex items-center justify-center transition-all shadow-md group-hover:scale-110 active:scale-95 shrink-0"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#2c4a32] stroke-[2.5] fill-none">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Chapter 03: Full Card Click Redirects to /experience */}
              <Link
                ref={card3Ref}
                href="/experience"
                className="group relative h-[220px] sm:h-[260px] md:h-[270px] w-full rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/25 block cursor-pointer select-none"
                aria-label="Chapter 03 - Experience & Beyond (Go to Experience)"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cde5384e-ce4d-423f-925a-451b779066e0.webp"
                  alt="Experience & Beyond - GreenLoop & ZeroQueries Portals"
                  loading="lazy"
                />

                {/* Top Highlight Badge & Title */}
                <div className="absolute top-4 left-5 right-5 z-10 flex flex-col gap-1 pointer-events-none">
                  <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CHAPTER 03
                  </span>
                  <h3 className="font-['Grandstander'] font-black text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                    Experience & Beyond
                  </h3>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    <span className="font-['Inter'] font-semibold text-sm text-white block">
                      GreenLoop & ZeroQueries
                    </span>
                    <span className="font-['Inter'] font-normal text-xs text-white/85 block">
                      Admin Portals · Landing Pages · UI
                    </span>
                  </div>
                  <span
                    className="w-10 h-10 rounded-full bg-white/95 group-hover:bg-white text-[#2c4a32] flex items-center justify-center transition-all shadow-md group-hover:scale-110 active:scale-95 shrink-0"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#2c4a32] stroke-[2.5] fill-none">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
