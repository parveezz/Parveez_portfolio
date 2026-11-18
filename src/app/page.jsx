"use client";

import { useEffect, useRef } from "react";

export default function MeadowbellHeroPage() {
  const logoRef = useRef(null);
  const navPillRef = useRef(null);
  const navJoinRef = useRef(null);
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
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Logo, nav pill, and join drop in
    const dropInKeyframes = [
      { opacity: 0, transform: "translateY(-24px)" },
      { opacity: 1, transform: "translateY(0)" },
    ];
    const navTiming = { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" };

    if (logoRef.current) logoRef.current.animate(dropInKeyframes, { ...navTiming, delay: 100 });
    if (navPillRef.current) navPillRef.current.animate(dropInKeyframes, { ...navTiming, delay: 180 });
    if (navJoinRef.current) navJoinRef.current.animate(dropInKeyframes, { ...navTiming, delay: 240 });

    // 2. Kicker un-blurs
    const isDesktop = window.innerWidth > 820;
    if (kickerRef.current) {
      kickerRef.current.animate(
        [
          { opacity: 0, filter: "blur(14px)", transform: isDesktop ? "translateX(-50%) translateY(12px)" : "translateY(12px)" },
          { opacity: 1, filter: "blur(0px)", transform: isDesktop ? "translateX(-50%) translateY(0)" : "translateY(0)" },
        ],
        {
          duration: 750,
          delay: 350,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "backwards",
        }
      );
    }

    // 3. Each headline line springs up out of blur, 0.16s apart
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

    // 4. Subline, buttons, chapters title & link, cards rise in turn
    const riseKeyframesCentered = [
      { opacity: 0, transform: "translateX(-50%) translateY(26px)" },
      { opacity: 1, transform: "translateX(-50%) translateY(0)" },
    ];
    const riseKeyframesStandard = [
      { opacity: 0, transform: "translateY(26px)" },
      { opacity: 1, transform: "translateY(0)" },
    ];
    const riseTiming = { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" };

    if (sublineRef.current) {
      sublineRef.current.animate(isDesktop ? riseKeyframesCentered : riseKeyframesStandard, { ...riseTiming, delay: 820 });
    }
    if (btnJoinRef.current) {
      btnJoinRef.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 940 });
    }
    if (btnPreviewRef.current) {
      btnPreviewRef.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 1020 });
    }
    if (chaptersTitleRef.current) {
      chaptersTitleRef.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 1140 });
    }
    if (chaptersLinkRef.current) {
      chaptersLinkRef.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 1180 });
    }
    if (card1Ref.current) {
      card1Ref.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 1260 });
    }
    if (card2Ref.current) {
      card2Ref.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 1380 });
    }
    if (card3Ref.current) {
      card3Ref.current.animate(riseKeyframesStandard, { ...riseTiming, delay: 1500 });
    }
  }, []);

  return (
    <main className="hero-frame" id="heroFrame">
      {/* Plate & Looping Animation Layer */}
      <div className="scene-container">
        <img
          className="scene-plate"
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/3ca5d10d-ea2f-4907-876f-33bde169469e.jpg"
          alt="A sunny grassy hillside with a boy and his beagle looking up at a cumulus sky"
        />
        <video
          className="scene-video"
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

      {/* UI Overlay Layer */}
      <div className="content-layer">
        {/* Top Navigation */}
        <nav className="nav-header">
          <a href="#" className="nav-logo" ref={logoRef} aria-label="Shaik Parveez">
            <svg viewBox="0 0 24 24">
              <path d="M12 3C8 3 4 7 4 12C7 12 11 9 12 3Z" />
              <path d="M12 7C14 7 20 8.5 20 14C16.5 14 13 11.5 12 7Z" />
              <path d="M11 12C11 17 11.5 21 12 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
            <span>Shaik Parveez</span>
          </a>

          <div className="nav-pill" ref={navPillRef}>
            <a href="#about">About</a>
            <span className="dot">·</span>
            <a href="#skills">Skills</a>
            <span className="dot">·</span>
            <a href="#projects">Projects</a>
            <span className="dot">·</span>
            <a href="#experience">Experience</a>
          </div>

          <a href="#contact" className="nav-join" ref={navJoinRef}>
            Contact
          </a>
        </nav>

        {/* Center Copy Area */}
        <div className="copy-container">
          <p className="kicker" ref={kickerRef}>
            HOLLYOAK'S
          </p>
          <h1 className="headline">
            <span className="headline-line" ref={headline1Ref}>
              PLUCKY
            </span>
            <br />
            <span className="headline-line" ref={headline2Ref}>
              SPROUT SQUAD
            </span>
          </h1>
          <p className="subline" ref={sublineRef}>
            {"Learn the Ways of the Meadow with\nHollyoak's Plucky Sprout Squad! Each chapter is\npacked with play, chores, and wonder."}
          </p>

          {/* Action Buttons */}
          <div className="buttons-group">
            <a href="#join" className="btn-join-hero" ref={btnJoinRef}>
              Join us
            </a>
            <a href="#preview" className="btn-preview" ref={btnPreviewRef}>
              <svg viewBox="0 0 24 24">
                <path d="M6 4.75C6 3.97 6.85 3.5 7.5 3.92L19.2 11.17C19.83 11.57 19.83 12.43 19.2 12.83L7.5 20.08C6.85 20.5 6 20.03 6 19.25V4.75Z" />
              </svg>
              <span>Watch preview</span>
            </a>
          </div>
        </div>

        {/* Bottom Chapters Row */}
        <section className="chapters-section">
          <div className="chapters-header">
            <h2 className="chapters-title" ref={chaptersTitleRef}>
              CHAPTERS
            </h2>
            <a href="#all-chapters" className="chapters-link" ref={chaptersLinkRef}>
              <span>browse all chapters</span>
              <span className="chevron">›</span>
            </a>
          </div>

          <div className="chapters-scroll-track">
            {/* Card 1: Vegetable Garden */}
            <article className="chapter-card chapter-card-1" ref={card1Ref}>
              <div className="card-media-wrapper">
                <img
                  className="card-art"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cd2d844f-ae3f-4fa9-8067-b077530b6e71.webp"
                  alt="A vegetable garden with tomato stakes and a cottage"
                  loading="lazy"
                />
                <div className="card-play-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 5.5C7 4.7 7.9 4.2 8.6 4.65L18.4 11.15C19.05 11.55 19.05 12.45 18.4 12.85L8.6 19.35C7.9 19.8 7 19.3 7 18.5V5.5Z" />
                  </svg>
                </div>
              </div>
            </article>

            {/* Card 2: Hill path & sheep */}
            <article className="chapter-card chapter-card-2" ref={card2Ref}>
              <div className="card-media-wrapper">
                <img
                  className="card-art"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/48f5b97e-c27c-4afd-9427-eb35aebd1751.webp"
                  alt="A boy and dog on a hill path among sheep above the sea"
                  loading="lazy"
                />
                <div className="card-play-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 5.5C7 4.7 7.9 4.2 8.6 4.65L18.4 11.15C19.05 11.55 19.05 12.45 18.4 12.85L8.6 19.35C7.9 19.8 7 19.3 7 18.5V5.5Z" />
                  </svg>
                </div>
              </div>
            </article>

            {/* Card 3: Kite on breezy hill */}
            <article className="chapter-card chapter-card-3" ref={card3Ref}>
              <div className="card-media-wrapper">
                <img
                  className="card-art"
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cde5384e-ce4d-423f-925a-451b779066e0.webp"
                  alt="A girl in a straw hat flying a kite on a breezy hill"
                  loading="lazy"
                />
                <div className="card-play-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 5.5C7 4.7 7.9 4.2 8.6 4.65L18.4 11.15C19.05 11.55 19.05 12.45 18.4 12.85L8.6 19.35C7.9 19.8 7 19.3 7 18.5V5.5Z" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
