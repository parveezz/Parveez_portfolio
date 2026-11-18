"use client";

import { useEffect, useRef, useState } from "react";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaReact, 
  FaNodeJs, 
  FaPhp 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiPostgresql, 
  SiGit, 
  SiPostman 
} from "react-icons/si";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowUpRight, 
  FiCopy, 
  FiCheck, 
  FiCode, 
  FiLayers, 
  FiSearch, 
  FiBriefcase, 
  FiAward, 
  FiExternalLink 
} from "react-icons/fi";
import { toast } from "sonner";

export default function MeadowbellPortfolioPage() {
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

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "shaikparveez225@gmail.com";
  const phone = "+91 6302122429";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      toast.success("Phone number copied to clipboard!");
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  useEffect(() => {
    // Respect accessibility preference for reduced motion
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

  const deliveredProjects = [
    {
      title: "Invertio Corporate Website",
      category: "Corporate Presence & Brand Identity",
      stack: ["React.js", "Next.js", "Tailwind CSS", "SEO Architecture"],
      description:
        "Contributed to the successful delivery of the official corporate website for Invertio Software Solutions. Engineered responsive interfaces, modern component hierarchy, and optimized performance for global visitors.",
      link: "https://invertiosolutions.com/",
    },
    {
      title: "GreenLoop Admin Portal",
      category: "Enterprise Web Application & Management",
      stack: ["React.js", "REST APIs", "State Management", "Data Analytics"],
      description:
        "Developed and maintained the core administrative portal for GreenLoop. Built interactive data tables, user authentication flows, and dynamic reporting dashboards delivering seamless management capabilities.",
      link: "https://www.linkedin.com/in/shaik-parveez",
    },
    {
      title: "GreenLoop Official Website",
      category: "Client Facing Web Application",
      stack: ["Next.js", "Tailwind CSS", "Core Web Vitals", "Responsive Design"],
      description:
        "Engineered the public-facing GreenLoop website with focus on accessibility, high conversion aesthetics, rapid asset loading, and structured search engine optimization.",
      link: "https://www.linkedin.com/in/shaik-parveez",
    },
    {
      title: "ZeroQueries Landing Page",
      category: "High-Performance SaaS Product Landing",
      stack: ["Next.js", "React.js", "Tailwind CSS", "Micro-Interactions"],
      description:
        "Crafted a high-converting product landing page with polished micro-interactions, responsive typography, and lightning-fast page loading speeds.",
      link: "https://www.linkedin.com/in/shaik-parveez",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend Engineering",
      icon: <FiCode className="text-[#78cfb4] text-xl" />,
      skills: [
        { name: "React.js", level: "Production", icon: <FaReact /> },
        { name: "Next.js 15", level: "Framework", icon: <SiNextdotjs /> },
        { name: "JavaScript (ES6+)", level: "Core Language", icon: <SiJavascript /> },
        { name: "Tailwind CSS", level: "Styling & Tokens", icon: <SiTailwindcss /> },
        { name: "UI Motion & Micro-interactions", level: "Design Systems", icon: <FiLayers /> },
        { name: "Responsive & Accessible UI", level: "Standard", icon: <FiCode /> },
      ],
    },
    {
      title: "Backend, Databases & APIs",
      icon: <FiLayers className="text-[#C9A66B] text-xl" />,
      skills: [
        { name: "PostgreSQL", level: "SQL Database", icon: <SiPostgresql /> },
        { name: "PHP", level: "Backend Services", icon: <FaPhp /> },
        { name: "Node.js & Express", level: "Runtime", icon: <FaNodeJs /> },
        { name: "RESTful API Integration", level: "Architecture", icon: <FiCode /> },
        { name: "MERN Stack Architecture", level: "Full-Stack", icon: <FaReact /> },
      ],
    },
    {
      title: "Optimization & Workflow",
      icon: <FiSearch className="text-[#78cfb4] text-xl" />,
      skills: [
        { name: "Search Engine Optimization (SEO)", level: "On-Page & Schema", icon: <FiSearch /> },
        { name: "Performance Optimization", level: "Core Web Vitals", icon: <FiAward /> },
        { name: "Git & GitHub Workflows", level: "Version Control", icon: <SiGit /> },
        { name: "Postman", level: "API Testing", icon: <SiPostman /> },
      ],
    },
  ];

  const careerMilestones = [
    {
      role: "Associate Software Engineer",
      company: "Invertio Software Solutions",
      duration: "February 2026 – Present",
      location: "Toli Chowki, Hyderabad, Telangana",
      type: "Full-time",
      details: [
        "MERN stack Developer specializing in React.js and modern frontend architectures.",
        "Developing responsive, accessible, and performance-focused web applications delivering seamless user experiences.",
        "Delivered production features for Invertio corporate website, GreenLoop Admin Portal, and ZeroQueries.",
        "Collaborated across design and backend teams to integrate REST APIs and ensure cross-browser compatibility.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Invertio Software Solutions",
      duration: "November 2025 – February 2026",
      location: "Shaikpet, Telangana, India",
      type: "Internship (4 months)",
      details: [
        "Constructed modular, reusable UI components with React.js and Tailwind CSS.",
        "Refactored legacy layouts into fully responsive, mobile-first interfaces.",
        "Conducted API payload testing with Postman and assisted with deployment workflows.",
      ],
    },
    {
      role: "Fullstack Web Development Trainee",
      company: "Fullstack Academy",
      duration: "August 2025 – November 2025",
      location: "Hyderabad, Telangana, India",
      type: "Professional Training (4 months)",
      details: [
        "Rigorous training in modern JavaScript (ES6+), React component lifecycles, and state management.",
        "Backend protocol fundamentals: Node.js, Express middleware, REST endpoints, and database queries.",
      ],
    },
  ];

  return (
    <div className="bg-[#0c120e] text-[#F5EFE6] selection:bg-[#2F5D50] selection:text-[#F5EFE6] min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1440x1280 Animated Ghibli Frame)                        */}
      {/* ========================================================================= */}
      <main className="hero-frame" id="heroFrame">
        {/* Plate & Looping Animation Layer */}
        <div className="scene-container" aria-hidden="true">
          <img
            className="scene-plate"
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/3ca5d10d-ea2f-4907-876f-33bde169469e.jpg"
            alt="Artistic landscape illustration of grassy hillside and blue sky"
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
          {/* Top Navigation Bar with Rich Semantics */}
          <header className="nav-header" role="banner">
            <a href="#" className="nav-logo" ref={logoRef} aria-label="Shaik Parveez Homepage">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3C8 3 4 7 4 12C7 12 11 9 12 3Z" />
                <path d="M12 7C14 7 20 8.5 20 14C16.5 14 13 11.5 12 7Z" />
                <path d="M11 12C11 17 11.5 21 12 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
              <span>SHAIK PARVEEZ</span>
            </a>

            <nav className="nav-pill" ref={navPillRef} aria-label="Main Navigation">
              <ul className="nav-pill-list">
                <li><a href="#about">ABOUT</a></li>
                <li className="dot" aria-hidden="true">·</li>
                <li><a href="#skills">SKILLS</a></li>
                <li className="dot" aria-hidden="true">·</li>
                <li><a href="#projects">PROJECTS</a></li>
                <li className="dot" aria-hidden="true">·</li>
                <li><a href="#experience">EXPERIENCE</a></li>
              </ul>
            </nav>

            <a href="#contact" className="nav-join" ref={navJoinRef} aria-label="Contact Shaik Parveez">
              CONTACT
            </a>
          </header>

          {/* Center Hero Copy Area (Semantic Header) */}
          <header className="copy-container">
            <p className="kicker" ref={kickerRef}>
              SHAIK PARVEEZ
            </p>
            <h1 className="headline">
              <span className="headline-line" ref={headline1Ref}>
                FRONTEND
              </span>
              <br />
              <span className="headline-line" ref={headline2Ref}>
                WEB DEVELOPER
              </span>
            </h1>
            <p className="subline" ref={sublineRef}>
              {"Frontend Developer at Invertio Software Solutions crafting responsive,\naccessible, and performance-focused web apps. Delivered Invertio corporate,\nGreenLoop admin portal, and ZeroQueries with clean React and Next.js."}
            </p>

            {/* Action CTAs */}
            <div className="buttons-group">
              <a href="#projects" className="btn-join-hero" ref={btnJoinRef} aria-label="Explore Projects">
                View Work
              </a>
              <a href="#contact" className="btn-preview" ref={btnPreviewRef} aria-label="Get in Touch">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 4.75C6 3.97 6.85 3.5 7.5 3.92L19.2 11.17C19.83 11.57 19.83 12.43 19.2 12.83L7.5 20.08C6.85 20.5 6 20.03 6 19.25V4.75Z" />
                </svg>
                <span>Get in Touch</span>
              </a>
            </div>
          </header>

          {/* Bottom Projects / Chapters Row */}
          <section className="chapters-section" aria-labelledby="projects-heading">
            <div className="chapters-header">
              <h2 className="chapters-title" id="projects-heading" ref={chaptersTitleRef}>
                PROJECTS
              </h2>
              <a
                href="#projects"
                className="chapters-link"
                ref={chaptersLinkRef}
              >
                <span>browse all projects</span>
                <span className="chevron" aria-hidden="true">›</span>
              </a>
            </div>

            <div className="chapters-scroll-track">
              {/* Project Card 1: Learning Frontend */}
              <article className="chapter-card chapter-card-1" ref={card1Ref}>
                <div className="card-media-wrapper">
                  <img
                    className="card-art"
                    src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cd2d844f-ae3f-4fa9-8067-b077530b6e71.webp"
                    alt="Learning Frontend - Fullstack Academy Foundations"
                    loading="lazy"
                  />

                  {/* Top Highlight Badge & Title */}
                  <div className="card-header-badge">
                    <span className="card-stage-tag">CHAPTER 01</span>
                    <h3 className="card-title">Learning the Frontend</h3>
                  </div>

                  {/* Bottom Bar */}
                  <div className="card-bottom-bar">
                    <div className="card-milestone">
                      <span className="card-milestone-title">Fullstack Academy</span>
                      <span className="card-milestone-sub">HTML5 · CSS3 · JS · React</span>
                    </div>
                    <a
                      href="#about"
                      className="card-arrow-btn"
                      aria-label="Explore Chapter 1 Foundations"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* Project Card 2: The Path of Invertio */}
              <article className="chapter-card chapter-card-2" ref={card2Ref}>
                <div className="card-media-wrapper">
                  <img
                    className="card-art"
                    src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/48f5b97e-c27c-4afd-9427-eb35aebd1751.webp"
                    alt="The Path of Invertio - Associate Software Engineer"
                    loading="lazy"
                  />

                  {/* Top Highlight Badge & Title */}
                  <div className="card-header-badge">
                    <span className="card-stage-tag">CHAPTER 02</span>
                    <h3 className="card-title">The Path of Invertio</h3>
                  </div>

                  {/* Bottom Bar */}
                  <div className="card-bottom-bar">
                    <div className="card-milestone">
                      <span className="card-milestone-title">Invertio Corporate Site</span>
                      <span className="card-milestone-sub">Associate Software Engineer · React</span>
                    </div>
                    <a
                      href="#experience"
                      className="card-arrow-btn"
                      aria-label="Explore Invertio Journey"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* Project Card 3: Experience & Growth */}
              <article className="chapter-card chapter-card-3" ref={card3Ref}>
                <div className="card-media-wrapper">
                  <img
                    className="card-art"
                    src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/cde5384e-ce4d-423f-925a-451b779066e0.webp"
                    alt="Experience & Beyond - GreenLoop & ZeroQueries Portals"
                    loading="lazy"
                  />

                  {/* Top Highlight Badge & Title */}
                  <div className="card-header-badge">
                    <span className="card-stage-tag">CHAPTER 03</span>
                    <h3 className="card-title">Experience & Beyond</h3>
                  </div>

                  {/* Bottom Bar */}
                  <div className="card-bottom-bar">
                    <div className="card-milestone">
                      <span className="card-milestone-title">GreenLoop & ZeroQueries</span>
                      <span className="card-milestone-sub">Admin Portals · Landing Pages · UI</span>
                    </div>
                    <a
                      href="#projects"
                      className="card-arrow-btn"
                      aria-label="Explore Production Projects"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 2. ABOUT SECTION (#about)                                                */}
      {/* ========================================================================= */}
      <section id="about" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#2F5D50]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78cfb4] font-semibold">
              ✦ BIOGRAPHY & BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFE6] mt-2 font-['Grandstander']">
              About Shaik Parveez
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F5EFE6]/70 max-w-md font-light">
            Based in Hyderabad, building scalable web products with nearly 1 year of real-world production experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Bio Card */}
          <div className="lg:col-span-7 bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 sm:p-10 space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold text-[#F5EFE6] font-['Grandstander'] tracking-wide">
              Engineering with Passion & Precision
            </h3>
            <p className="text-[#F5EFE6]/80 text-sm sm:text-base leading-relaxed">
              Frontend Developer with nearly 1 year of professional experience in developing responsive and scalable web applications. Experienced in designing modern user interfaces, building reusable components, integrating REST APIs, and optimizing application performance.
            </p>
            <p className="text-[#F5EFE6]/80 text-sm sm:text-base leading-relaxed">
              Contributed to the successful delivery of projects including the <strong className="text-[#78cfb4] font-medium">Invertio corporate website</strong>, <strong className="text-[#78cfb4] font-medium">GreenLoop Admin Portal</strong>, <strong className="text-[#78cfb4] font-medium">GreenLoop website</strong>, and <strong className="text-[#78cfb4] font-medium">ZeroQueries Landing Page</strong>. Passionate about creating intuitive user experiences, writing clean and maintainable code, and continuously improving technical skills.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2F5D50]/30">
              <div className="bg-[#1c2820] p-4 rounded-xl text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-[#78cfb4] font-['Grandstander']">1+ Year</span>
                <span className="text-xs text-[#F5EFE6]/60 font-mono">Professional Exp.</span>
              </div>
              <div className="bg-[#1c2820] p-4 rounded-xl text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-[#C9A66B] font-['Grandstander']">4+</span>
                <span className="text-xs text-[#F5EFE6]/60 font-mono">Shipped Apps</span>
              </div>
              <div className="bg-[#1c2820] p-4 rounded-xl text-center">
                <span className="block text-2xl sm:text-3xl font-bold text-[#F5EFE6] font-['Grandstander']">100%</span>
                <span className="text-xs text-[#F5EFE6]/60 font-mono">Quality & SEO</span>
              </div>
            </div>
          </div>

          {/* Right Education & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#2F5D50]/30 flex items-center justify-center text-[#78cfb4]">
                  <FiAward className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5EFE6] font-['Grandstander']">Education Journey</h4>
                  <span className="text-xs text-[#F5EFE6]/60 font-mono">Academic Foundations</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="border-l-2 border-[#2F5D50] pl-4 space-y-1">
                  <span className="text-xs font-mono text-[#C9A66B]">August 2019 – July 2023</span>
                  <h5 className="font-semibold text-sm sm:text-base text-[#F5EFE6]">
                    B.Tech, Computer Science and Engineering
                  </h5>
                  <p className="text-xs text-[#F5EFE6]/70">
                    Malla Reddy Institute of Technology and Science and Engineering (MRITS)
                  </p>
                </div>

                <div className="border-l-2 border-[#2F5D50]/40 pl-4 space-y-1">
                  <span className="text-xs font-mono text-[#C9A66B]">June 2017 – March 2019</span>
                  <h5 className="font-semibold text-sm sm:text-base text-[#F5EFE6]">
                    Intermediate Education
                  </h5>
                  <p className="text-xs text-[#F5EFE6]/70">
                    Sri Chaitanya Junior Kalasala
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Quick Contact */}
            <div className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-6 flex items-start gap-4 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#2F5D50]/30 flex items-center justify-center text-[#78cfb4] shrink-0">
                <FiMapPin className="text-xl" />
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold text-sm text-[#F5EFE6]">Based in Hyderabad, India</h5>
                <p className="text-xs text-[#F5EFE6]/70 leading-relaxed font-mono">
                  H.No : 6-2-646, Beside Alfatha Cafe, Secunderabad, Telangana – 500003
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SKILLS SECTION (#skills)                                              */}
      {/* ========================================================================= */}
      <section id="skills" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#2F5D50]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78cfb4] font-semibold">
              ✦ TECHNICAL PROFICIENCY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFE6] mt-2 font-['Grandstander']">
              Skills & Tooling
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F5EFE6]/70 max-w-md font-light">
            Modern full-stack technologies mastered through real-world client builds and rigorous production practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 space-y-6 hover:border-[#78cfb4]/50 transition-all shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1c2820] border border-[#2F5D50]/40">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F5EFE6] font-['Grandstander']">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#18231c] border border-[#2F5D50]/20"
                  >
                    <div className="flex items-center gap-3 text-sm font-medium text-[#F5EFE6]">
                      <span className="text-[#78cfb4] text-base">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#C9A66B] uppercase">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPERIENCE SECTION (#experience)                                      */}
      {/* ========================================================================= */}
      <section id="experience" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#2F5D50]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78cfb4] font-semibold">
              ✦ CAREER MILESTONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFE6] mt-2 font-['Grandstander']">
              Work Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F5EFE6]/70 max-w-md font-light">
            Hands-on professional engineering timeline at Invertio Software Solutions and full-stack immersion.
          </p>
        </div>

        <div className="space-y-8">
          {careerMilestones.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 sm:p-10 space-y-6 hover:border-[#78cfb4]/50 transition-all shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2F5D50]/30 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFE6] font-['Grandstander']">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#2F5D50]/30 text-[#78cfb4] border border-[#2F5D50]/40">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-base text-[#C9A66B] font-medium mt-1">
                    {exp.company}
                  </h4>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-[#F5EFE6]/70 space-y-1">
                  <div className="font-semibold text-[#F5EFE6]">{exp.duration}</div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-[#F5EFE6]/60">
                    <FiMapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#F5EFE6]/80 leading-relaxed">
                    <span className="text-[#78cfb4] mt-1 shrink-0">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DELIVERED PROJECTS DETAIL (#projects)                                 */}
      {/* ========================================================================= */}
      <section id="projects" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#2F5D50]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78cfb4] font-semibold">
              ✦ SHIPPED SOFTWARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFE6] mt-2 font-['Grandstander']">
              Featured Client Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F5EFE6]/70 max-w-md font-light">
            Verified production systems delivered for Invertio Software Solutions and high-growth clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliveredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 flex flex-col justify-between hover:border-[#78cfb4]/60 transition-all shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#C9A66B] font-semibold tracking-wider">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5EFE6]/50 group-hover:text-[#78cfb4] transition-colors p-1"
                    aria-label={`Open ${project.title}`}
                  >
                    <FiExternalLink className="text-lg" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#F5EFE6] font-['Grandstander'] tracking-wide group-hover:text-[#78cfb4] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#F5EFE6]/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#2F5D50]/20">
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#1c2820] text-[#78cfb4] border border-[#2F5D50]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT SECTION (#contact)                                            */}
      {/* ========================================================================= */}
      <section id="contact" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#2F5D50]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78cfb4] font-semibold">
              ✦ GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFE6] mt-2 font-['Grandstander']">
              Let&apos;s Connect
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#F5EFE6]/70 max-w-md font-light">
            Available for frontend engineering roles, collaborative client projects, and high-impact web initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Email Touchpoint */}
          <div className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D50]/30 flex items-center justify-center text-[#78cfb4] text-2xl">
                <FiMail />
              </div>
              <h3 className="text-xl font-bold text-[#F5EFE6] font-['Grandstander']">Direct Email</h3>
              <p className="text-xs text-[#F5EFE6]/60 font-mono">Primary response channel</p>
              <a
                href={`mailto:${email}`}
                className="text-sm sm:text-base font-semibold text-[#78cfb4] hover:underline block break-all font-mono"
              >
                {email}
              </a>
            </div>

            <button
              onClick={() => handleCopy(email, "email")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1c2820] hover:bg-[#25362b] border border-[#2F5D50]/40 text-xs font-medium text-[#F5EFE6] transition-all cursor-pointer"
            >
              {copiedEmail ? <FiCheck className="text-emerald-400 text-base" /> : <FiCopy className="text-base" />}
              <span>{copiedEmail ? "Copied to Clipboard" : "Copy Email Address"}</span>
            </button>
          </div>

          {/* Phone & WhatsApp */}
          <div className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D50]/30 flex items-center justify-center text-[#78cfb4] text-2xl">
                <FiPhone />
              </div>
              <h3 className="text-xl font-bold text-[#F5EFE6] font-['Grandstander']">Phone & WhatsApp</h3>
              <p className="text-xs text-[#F5EFE6]/60 font-mono">Available during business hours</p>
              <a
                href="https://wa.me/916302122429"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-semibold text-[#78cfb4] hover:underline block font-mono"
              >
                {phone}
              </a>
            </div>

            <a
              href="https://wa.me/916302122429"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2F5D50] hover:bg-[#3d7565] text-xs font-semibold text-[#F5EFE6] transition-all cursor-pointer"
            >
              <FaWhatsapp className="text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Professional Network */}
          <div className="bg-[#141d17] border border-[#2F5D50]/30 rounded-2xl p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2F5D50]/30 flex items-center justify-center text-[#78cfb4] text-2xl">
                <FaLinkedinIn />
              </div>
              <h3 className="text-xl font-bold text-[#F5EFE6] font-['Grandstander']">LinkedIn Profile</h3>
              <p className="text-xs text-[#F5EFE6]/60 font-mono">Career updates & recommendations</p>
              <a
                href="https://www.linkedin.com/in/shaik-parveez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-semibold text-[#78cfb4] hover:underline block font-mono truncate"
              >
                linkedin.com/in/shaik-parveez
              </a>
            </div>

            <a
              href="https://www.linkedin.com/in/shaik-parveez"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1c2820] hover:bg-[#25362b] border border-[#2F5D50]/40 text-xs font-medium text-[#F5EFE6] transition-all cursor-pointer"
            >
              <FiArrowUpRight className="text-base" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FOOTER                                                                 */}
      {/* ========================================================================= */}
      <footer className="py-12 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#2F5D50]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#F5EFE6]/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#2F5D50] flex items-center justify-center text-xs font-bold text-[#F5EFE6]">
            P
          </div>
          <div>
            <span className="font-['Grandstander'] font-bold text-sm text-[#F5EFE6] block">
              SHAIK PARVEEZ
            </span>
            <span className="font-mono text-[11px] text-[#F5EFE6]/50">
              Frontend Developer · Invertio Software Solutions
            </span>
          </div>
        </div>

        <nav aria-label="Footer Navigation">
          <ul className="flex items-center gap-6 font-['Grandstander'] text-xs font-bold text-[#F5EFE6]/80">
            <li><a href="#about" className="hover:text-[#78cfb4] transition-colors">ABOUT</a></li>
            <li><a href="#skills" className="hover:text-[#78cfb4] transition-colors">SKILLS</a></li>
            <li><a href="#projects" className="hover:text-[#78cfb4] transition-colors">PROJECTS</a></li>
            <li><a href="#experience" className="hover:text-[#78cfb4] transition-colors">EXPERIENCE</a></li>
            <li><a href="#contact" className="hover:text-[#78cfb4] transition-colors">CONTACT</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/parveezz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#141d17] border border-[#2F5D50]/30 flex items-center justify-center text-[#F5EFE6]/70 hover:text-[#78cfb4] transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-parveez"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#141d17] border border-[#2F5D50]/30 flex items-center justify-center text-[#F5EFE6]/70 hover:text-[#78cfb4] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-base" />
          </a>
          <a
            href="https://wa.me/916302122429"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-[#141d17] border border-[#2F5D50]/30 flex items-center justify-center text-[#F5EFE6]/70 hover:text-[#78cfb4] transition-colors"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp className="text-base" />
          </a>
          <a
            href={`mailto:${email}`}
            className="w-9 h-9 rounded-lg bg-[#141d17] border border-[#2F5D50]/30 flex items-center justify-center text-[#F5EFE6]/70 hover:text-[#78cfb4] transition-colors"
            aria-label="Send Email"
          >
            <FiMail className="text-base" />
          </a>
        </div>
      </footer>
    </div>
  );
}
