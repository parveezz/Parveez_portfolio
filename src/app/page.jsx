"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MeadowbellPortfolioPage() {
  const kickerRef = useRef(null);
  const headline1Ref = useRef(null);
  const headline2Ref = useRef(null);
  const sublineRef = useRef(null);
  const btnJoinRef = useRef(null);
  const btnPreviewRef = useRef(null);
  const chaptersTitleRef = useRef(null);
  const chaptersLinkRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

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
          delay: 350,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "backwards",
        }
      );
    }

    // 2. Each headline line springs up out of blur, 0.16s apart
    const headlineTiming = { duration: 850, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)", fill: "backwards" };
    if (headline1Ref.current) {
      headline1Ref.current.animate(
        [
          { opacity: 0, filter: "blur(16px)", transform: "translateY(45px) scale(0.96)" },
          { opacity: 1, filter: "blur(0px)", transform: "translateY(0) scale(1)" },
        ],
        { ...headlineTiming, delay: 480 }
      );
    }
    if (headline2Ref.current) {
      headline2Ref.current.animate(
        [
          { opacity: 0, filter: "blur(16px)", transform: "translateY(45px) scale(0.96)" },
          { opacity: 1, filter: "blur(0px)", transform: "translateY(0) scale(1)" },
        ],
        { ...headlineTiming, delay: 640 }
      );
    }

    // 3. Subline, buttons, chapters title & link, cards rise in turn
    const riseKeyframes = [
      { opacity: 0, transform: "translateY(26px)" },
      { opacity: 1, transform: "translateY(0)" },
    ];
    const riseTiming = { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" };

    if (sublineRef.current) sublineRef.current.animate(riseKeyframes, { ...riseTiming, delay: 820 });
    if (btnJoinRef.current) btnJoinRef.current.animate(riseKeyframes, { ...riseTiming, delay: 940 });
    if (btnPreviewRef.current) btnPreviewRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1020 });
    if (chaptersTitleRef.current) chaptersTitleRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1140 });
    if (chaptersLinkRef.current) chaptersLinkRef.current.animate(riseKeyframes, { ...riseTiming, delay: 1180 });
    if (card1Ref.current) card1Ref.current.animate(riseKeyframes, { ...riseTiming, delay: 1260 });
    if (card2Ref.current) card2Ref.current.animate(riseKeyframes, { ...riseTiming, delay: 1380 });
    if (card3Ref.current) card3Ref.current.animate(riseKeyframes, { ...riseTiming, delay: 1500 });
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

            <h1 className="font-['Grandstander'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_18px_rgba(28,70,120,0.35)]">
              <span className="inline-block" ref={headline1Ref}>
                FRONTEND
              </span>
              <br />
              <span className="inline-block" ref={headline2Ref}>
                WEB DEVELOPER
              </span>
            </h1>

            <p
              className="font-['Inter'] font-normal text-white/95 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed whitespace-pre-line drop-shadow-[0_1px_4px_rgba(28,70,120,0.4)]"
              ref={sublineRef}
            >
              {"Frontend Developer at Invertio Software Solutions crafting responsive,\naccessible, and performance-focused web apps. Delivered Invertio corporate,\nGreenLoop admin portal, and ZeroQueries with clean React and Next.js."}
            </p>

            {/* Action CTAs */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 md:pt-4 flex-wrap justify-center w-full max-w-md">
              <Link
                href="/projects"
                className="flex-1 sm:flex-none px-8 py-3.5 rounded-full bg-white text-[#5b875c] font-['Grandstander'] font-black text-sm sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-md text-center"
                ref={btnJoinRef}
                aria-label="Explore Projects"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[rgba(204,218,173,0.65)] hover:bg-[rgba(204,218,173,0.85)] backdrop-blur-md border border-white/40 text-white font-['Grandstander'] font-black text-sm sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-md text-center"
                ref={btnPreviewRef}
                aria-label="Get in Touch via Email"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white stroke-[2.5] fill-none" aria-hidden="true">
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
              {/* Project Card 1: Learning Frontend */}
              <article
                className="group relative h-[220px] sm:h-[260px] md:h-[270px] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/25"
                ref={card1Ref}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cd2d844f-ae3f-4fa9-8067-b077530b6e71.webp"
                  alt="Learning Frontend - Fullstack Academy Foundations"
                  loading="lazy"
                />

                {/* Top Highlight Badge & Title */}
                <div className="absolute top-4 left-5 right-5 z-10 flex flex-col gap-1">
                  <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CHAPTER 01
                  </span>
                  <h3 className="font-['Grandstander'] font-black text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                    Learning the Frontend
                  </h3>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between gap-3">
                  <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    <span className="font-['Inter'] font-semibold text-sm text-white block">
                      Fullstack Academy
                    </span>
                    <span className="font-['Inter'] font-normal text-xs text-white/85 block">
                      HTML5 · CSS3 · JS · React
                    </span>
                  </div>
                  <Link
                    href="/about"
                    className="w-10 h-10 rounded-full bg-white/95 group-hover:bg-white text-[#2c4a32] flex items-center justify-center transition-all shadow-md group-hover:scale-110 active:scale-95 shrink-0"
                    aria-label="Explore Chapter 1 Foundations"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#2c4a32] stroke-[2.5] fill-none" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Project Card 2: The Path of Invertio */}
              <article
                className="group relative h-[220px] sm:h-[260px] md:h-[270px] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/25"
                ref={card2Ref}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/48f5b97e-c27c-4afd-9427-eb35aebd1751.webp"
                  alt="The Path of Invertio - Associate Software Engineer"
                  loading="lazy"
                />

                {/* Top Highlight Badge & Title */}
                <div className="absolute top-4 left-5 right-5 z-10 flex flex-col gap-1">
                  <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CHAPTER 02
                  </span>
                  <h3 className="font-['Grandstander'] font-black text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                    The Path of Invertio
                  </h3>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between gap-3">
                  <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    <span className="font-['Inter'] font-semibold text-sm text-white block">
                      Invertio Corporate Site
                    </span>
                    <span className="font-['Inter'] font-normal text-xs text-white/85 block">
                      Associate Software Engineer · React
                    </span>
                  </div>
                  <Link
                    href="/experience"
                    className="w-10 h-10 rounded-full bg-white/95 group-hover:bg-white text-[#2c4a32] flex items-center justify-center transition-all shadow-md group-hover:scale-110 active:scale-95 shrink-0"
                    aria-label="Explore Invertio Journey"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#2c4a32] stroke-[2.5] fill-none" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Project Card 3: Experience & Growth */}
              <article
                className="group relative h-[220px] sm:h-[260px] md:h-[270px] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-white/25"
                ref={card3Ref}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cde5384e-ce4d-423f-925a-451b779066e0.webp"
                  alt="Experience & Beyond - GreenLoop & ZeroQueries Portals"
                  loading="lazy"
                />

                {/* Top Highlight Badge & Title */}
                <div className="absolute top-4 left-5 right-5 z-10 flex flex-col gap-1">
                  <span className="font-['Inter'] font-extrabold text-[11px] uppercase tracking-wider text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    CHAPTER 03
                  </span>
                  <h3 className="font-['Grandstander'] font-black text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                    Experience & Beyond
                  </h3>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between gap-3">
                  <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                    <span className="font-['Inter'] font-semibold text-sm text-white block">
                      GreenLoop & ZeroQueries
                    </span>
                    <span className="font-['Inter'] font-normal text-xs text-white/85 block">
                      Admin Portals · Landing Pages · UI
                    </span>
                  </div>
                  <Link
                    href="/projects"
                    className="w-10 h-10 rounded-full bg-white/95 group-hover:bg-white text-[#2c4a32] flex items-center justify-center transition-all shadow-md group-hover:scale-110 active:scale-95 shrink-0"
                    aria-label="Explore Production Projects"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#2c4a32] stroke-[2.5] fill-none" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
