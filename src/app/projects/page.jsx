"use client";

import { useEffect, useRef } from "react";

export default function ProjectsPage() {
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

  const projects = [
    {
      num: "01",
      title: "ZeroQueries",
      period: "May 2026 – Present",
      badge: "Current Project",
      bullets: [
        "Contributed to the development of the ZeroQueries landing page.",
        "Converted Figma designs into responsive frontend interfaces.",
        "Integrated REST APIs with backend services.",
        "Developed reusable UI components.",
        "Focused on responsive design and user experience.",
      ],
      tags: ["React.js", "JavaScript", "REST APIs", "Figma to Code", "Responsive UI"],
    },
    {
      num: "02",
      title: "Invertio Software Solutions Website",
      period: "March 2026 – May 2026",
      badge: "Corporate Site",
      bullets: [
        "Collaborated with a team of three developers to develop the company website.",
        "Translated Figma designs into functional web pages.",
        "Built reusable frontend components.",
        "Implemented responsive layouts across different screen sizes.",
        "Improved UI consistency and user experience.",
      ],
      tags: ["React.js", "Team Collaboration", "Reusable Components", "Responsive Design"],
    },
    {
      num: "03",
      title: "GreenLoop – Admin Platform",
      period: "July 2025 – March 2026",
      badge: "Admin System",
      bullets: [
        "Contributed to the frontend development of the GreenLoop administrative platform.",
        "Developed responsive user interfaces.",
        "Implemented application features and UI components.",
        "Improved usability and application functionality.",
        "Collaborated with the development team on frontend implementation.",
      ],
      tags: ["React.js", "Admin Portal", "UI/UX", "Feature Implementation"],
    },
    {
      num: "04",
      title: "Invertio CMS – Content Management System",
      period: "Enterprise Module",
      badge: "HR & Payroll",
      bullets: [
        "Developed and enhanced frontend modules for the Invertio CMS platform.",
        "Integrated the Payroll module into the institutional HR management system.",
        "Implemented payroll batch retrieval and monthly payroll generation.",
        "Developed payroll adjustment workflows.",
        "Implemented payment-proof upload functionality.",
        "Integrated payslip delivery functionality.",
        "Developed search, filtering, and URL-based tab navigation.",
      ],
      tags: ["React.js", "JavaScript", "REST APIs", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start overflow-x-hidden bg-[#88b7d5] select-none text-[#111827]">
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
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
        >
          <source src="/projects.mp4" type="video/mp4" />
        </video>
        {/* Soft Contrast Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#88b7d5]/30 via-black/25 to-[#12314d]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-32 pb-28 px-4 sm:px-6 md:px-8 space-y-16">

        {/* Header Title */}
        <header className="text-center space-y-3">
          <p className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-white drop-shadow-[0_2px_10px_rgba(28,70,120,0.8)]">
            Featured Portfolio
          </p>
          <h1 className="font-['Grandstander'] font-black text-6xl sm:text-8xl md:text-9xl text-white uppercase drop-shadow-[0_4px_28px_rgba(28,70,120,0.9)] leading-none">
            Projects
          </h1>
          <p className="font-['Inter'] text-sm sm:text-base text-white/95 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(28,70,120,0.8)] font-medium">
            Real-world frontend web applications, administrative dashboards, and enterprise management systems.
          </p>
        </header>

        {/* Ocean Wave Connected Flow */}
        <div className="relative w-full">

          {/* ========================================================================= */}
          {/* PROJECT 1 (LEFT) - CREAM WHITE                                           */}
          {/* ========================================================================= */}
          <div className="flex flex-col md:flex-row items-center md:justify-start">
            <article className="w-full md:w-[50%]">
              <div className="bg-[#fffdfa]/95 border-2 border-[#1e3a5f]/20 hover:border-[#0284c7] rounded-[48px] sm:rounded-[56px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(15,30,50,0.28)] hover:shadow-[0_24px_60px_rgba(2,132,199,0.3)] transition-all hover:scale-[1.01] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-[#e5e0d8]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a5f] border-2 border-[#0284c7] flex items-center justify-center font-['Grandstander'] font-black text-lg text-white shadow-[0_0_15px_rgba(2,132,199,0.45)] shrink-0">
                      {projects[0].num}
                    </div>
                    <h2 className="font-['Grandstander'] font-black text-xl sm:text-2xl text-[#111827] tracking-tight">
                      {projects[0].title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-['Inter'] text-[#4b5563] font-medium">{projects[0].period}</span>
                    <span className="text-[10px] font-['Grandstander'] font-bold uppercase tracking-wider text-[#1e3a5f] px-3 py-1 rounded-full bg-[#e8e2d5] border border-[#d4cbba]">
                      {projects[0].badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 font-['Inter'] text-sm sm:text-base text-[#1f2937] leading-relaxed font-normal">
                  {projects[0].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0284c7] mt-2 shrink-0 shadow-[0_0_6px_#0284c7]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-['Grandstander'] font-bold uppercase tracking-wider text-[#6b7280] mr-1">Tech:</span>
                  {projects[0].tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-['Inter'] font-semibold text-[#1f2937] px-3 py-1 rounded-full bg-[#ede7db] border border-[#dcd3c3] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Ocean Wave Dotted Curve: Project 1 (Left) -> Project 2 (Right) */}
          <div className="relative my-[-10px] sm:my-[-16px]" aria-hidden="true">
            {/* Desktop S-Curve */}
            <svg viewBox="0 0 1000 160" className="hidden md:block w-full h-32 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 250 15 C 250 145, 750 15, 750 145"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeDasharray="10 10"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_8px_rgba(2,132,199,0.8)]"
              />
              <circle cx="250" cy="15" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
              <circle cx="500" cy="80" r="5.5" fill="#0284c7" className="opacity-90 animate-pulse drop-shadow-[0_0_10px_#0284c7]" />
              <circle cx="750" cy="145" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
            </svg>
            {/* Mobile Wave Connector */}
            <svg viewBox="0 0 360 80" className="md:hidden w-full h-16 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 180 5 C 260 40, 100 40, 180 75"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_6px_#0284c7]"
              />
              <circle cx="180" cy="5" r="4.5" fill="#0284c7" />
              <circle cx="180" cy="75" r="4.5" fill="#0284c7" />
            </svg>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 2 (RIGHT) - CREAM WHITE                                          */}
          {/* ========================================================================= */}
          <div className="flex flex-col md:flex-row items-center md:justify-end">
            <article className="w-full md:w-[50%]">
              <div className="bg-[#fffdfa]/95 border-2 border-[#1e3a5f]/20 hover:border-[#0284c7] rounded-[48px] sm:rounded-[56px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(15,30,50,0.28)] hover:shadow-[0_24px_60px_rgba(2,132,199,0.3)] transition-all hover:scale-[1.01] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-[#e5e0d8]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a5f] border-2 border-[#0284c7] flex items-center justify-center font-['Grandstander'] font-black text-lg text-white shadow-[0_0_15px_rgba(2,132,199,0.45)] shrink-0">
                      {projects[1].num}
                    </div>
                    <h2 className="font-['Grandstander'] font-black text-xl sm:text-2xl text-[#111827] tracking-tight">
                      {projects[1].title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-['Inter'] text-[#4b5563] font-medium">{projects[1].period}</span>
                    <span className="text-[10px] font-['Grandstander'] font-bold uppercase tracking-wider text-[#1e3a5f] px-3 py-1 rounded-full bg-[#e8e2d5] border border-[#d4cbba]">
                      {projects[1].badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 font-['Inter'] text-sm sm:text-base text-[#1f2937] leading-relaxed font-normal">
                  {projects[1].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0284c7] mt-2 shrink-0 shadow-[0_0_6px_#0284c7]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-['Grandstander'] font-bold uppercase tracking-wider text-[#6b7280] mr-1">Tech:</span>
                  {projects[1].tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-['Inter'] font-semibold text-[#1f2937] px-3 py-1 rounded-full bg-[#ede7db] border border-[#dcd3c3] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Ocean Wave Dotted Curve: Project 2 (Right) -> Project 3 (Left) */}
          <div className="relative my-[-10px] sm:my-[-16px]" aria-hidden="true">
            {/* Desktop S-Curve */}
            <svg viewBox="0 0 1000 160" className="hidden md:block w-full h-32 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 750 15 C 750 145, 250 15, 250 145"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeDasharray="10 10"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_8px_rgba(2,132,199,0.8)]"
              />
              <circle cx="750" cy="15" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
              <circle cx="500" cy="80" r="5.5" fill="#0284c7" className="opacity-90 animate-pulse drop-shadow-[0_0_10px_#0284c7]" />
              <circle cx="250" cy="145" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
            </svg>
            {/* Mobile Wave Connector */}
            <svg viewBox="0 0 360 80" className="md:hidden w-full h-16 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 180 5 C 100 40, 260 40, 180 75"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_6px_#0284c7]"
              />
              <circle cx="180" cy="5" r="4.5" fill="#0284c7" />
              <circle cx="180" cy="75" r="4.5" fill="#0284c7" />
            </svg>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 3 (LEFT) - CREAM WHITE                                           */}
          {/* ========================================================================= */}
          <div className="flex flex-col md:flex-row items-center md:justify-start">
            <article className="w-full md:w-[50%]">
              <div className="bg-[#fffdfa]/95 border-2 border-[#1e3a5f]/20 hover:border-[#0284c7] rounded-[48px] sm:rounded-[56px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(15,30,50,0.28)] hover:shadow-[0_24px_60px_rgba(2,132,199,0.3)] transition-all hover:scale-[1.01] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-[#e5e0d8]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a5f] border-2 border-[#0284c7] flex items-center justify-center font-['Grandstander'] font-black text-lg text-white shadow-[0_0_15px_rgba(2,132,199,0.45)] shrink-0">
                      {projects[2].num}
                    </div>
                    <h2 className="font-['Grandstander'] font-black text-xl sm:text-2xl text-[#111827] tracking-tight">
                      {projects[2].title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-['Inter'] text-[#4b5563] font-medium">{projects[2].period}</span>
                    <span className="text-[10px] font-['Grandstander'] font-bold uppercase tracking-wider text-[#1e3a5f] px-3 py-1 rounded-full bg-[#e8e2d5] border border-[#d4cbba]">
                      {projects[2].badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 font-['Inter'] text-sm sm:text-base text-[#1f2937] leading-relaxed font-normal">
                  {projects[2].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0284c7] mt-2 shrink-0 shadow-[0_0_6px_#0284c7]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-['Grandstander'] font-bold uppercase tracking-wider text-[#6b7280] mr-1">Tech:</span>
                  {projects[2].tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-['Inter'] font-semibold text-[#1f2937] px-3 py-1 rounded-full bg-[#ede7db] border border-[#dcd3c3] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Ocean Wave Dotted Curve: Project 3 (Left) -> Project 4 (Right) */}
          <div className="relative my-[-10px] sm:my-[-16px]" aria-hidden="true">
            {/* Desktop S-Curve */}
            <svg viewBox="0 0 1000 160" className="hidden md:block w-full h-32 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 250 15 C 250 145, 750 15, 750 145"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeDasharray="10 10"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_8px_rgba(2,132,199,0.8)]"
              />
              <circle cx="250" cy="15" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
              <circle cx="500" cy="80" r="5.5" fill="#0284c7" className="opacity-90 animate-pulse drop-shadow-[0_0_10px_#0284c7]" />
              <circle cx="750" cy="145" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
            </svg>
            {/* Mobile Wave Connector */}
            <svg viewBox="0 0 360 80" className="md:hidden w-full h-16 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 180 5 C 260 40, 100 40, 180 75"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_6px_#0284c7]"
              />
              <circle cx="180" cy="5" r="4.5" fill="#0284c7" />
              <circle cx="180" cy="75" r="4.5" fill="#0284c7" />
            </svg>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 4 (RIGHT) - CREAM WHITE                                          */}
          {/* ========================================================================= */}
          <div className="flex flex-col md:flex-row items-center md:justify-end">
            <article className="w-full md:w-[50%]">
              <div className="bg-[#fffdfa]/95 border-2 border-[#1e3a5f]/20 hover:border-[#0284c7] rounded-[48px] sm:rounded-[56px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(15,30,50,0.28)] hover:shadow-[0_24px_60px_rgba(2,132,199,0.3)] transition-all hover:scale-[1.01] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-[#e5e0d8]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a5f] border-2 border-[#0284c7] flex items-center justify-center font-['Grandstander'] font-black text-lg text-white shadow-[0_0_15px_rgba(2,132,199,0.45)] shrink-0">
                      {projects[3].num}
                    </div>
                    <h2 className="font-['Grandstander'] font-black text-xl sm:text-2xl text-[#111827] tracking-tight">
                      {projects[3].title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-['Inter'] text-[#4b5563] font-medium">{projects[3].period}</span>
                    <span className="text-[10px] font-['Grandstander'] font-bold uppercase tracking-wider text-[#1e3a5f] px-3 py-1 rounded-full bg-[#e8e2d5] border border-[#d4cbba]">
                      {projects[3].badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 font-['Inter'] text-sm sm:text-base text-[#1f2937] leading-relaxed font-normal">
                  {projects[3].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0284c7] mt-2 shrink-0 shadow-[0_0_6px_#0284c7]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-['Grandstander'] font-bold uppercase tracking-wider text-[#6b7280] mr-1">Tech:</span>
                  {projects[3].tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-['Inter'] font-semibold text-[#1f2937] px-3 py-1 rounded-full bg-[#ede7db] border border-[#dcd3c3] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Ocean Wave Dotted Curve: Project 4 (Right) -> To Be Continued (Center) */}
          <div className="relative my-[-10px] sm:my-[-16px]" aria-hidden="true">
            {/* Desktop S-Curve to Center */}
            <svg viewBox="0 0 1000 150" className="hidden md:block w-full h-28 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 750 15 C 750 120, 500 30, 500 135"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeDasharray="10 10"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_8px_rgba(2,132,199,0.8)]"
              />
              <circle cx="750" cy="15" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
              <circle cx="625" cy="75" r="5.5" fill="#0284c7" className="opacity-90 animate-pulse drop-shadow-[0_0_10px_#0284c7]" />
              <circle cx="500" cy="135" r="7" fill="#0284c7" className="drop-shadow-[0_0_12px_#0284c7]" />
            </svg>
            {/* Mobile Wave to Center */}
            <svg viewBox="0 0 360 80" className="md:hidden w-full h-16 overflow-visible pointer-events-none" fill="none">
              <path
                d="M 180 5 C 180 35, 180 45, 180 75"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
                className="opacity-95 drop-shadow-[0_0_6px_#0284c7]"
              />
              <circle cx="180" cy="5" r="4.5" fill="#0284c7" />
              <circle cx="180" cy="75" r="4.5" fill="#0284c7" />
            </svg>
          </div>

          {/* ========================================================================= */}
          {/* TO BE CONTINUED (ORGANIC CIRCLE CREAM SEAL)                               */}
          {/* ========================================================================= */}
          <div className="pt-6 flex flex-col items-center justify-center text-center relative z-20">
            {/* Circular Cream White Seal */}
            <div className="relative group cursor-default">
              {/* Outer Ocean Wave Ripple Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#0284c7]/40 animate-ping pointer-events-none" />

              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#fffdfa]/95 border-2 border-dashed border-[#0284c7] shadow-[0_0_45px_rgba(2,132,199,0.35)] group-hover:shadow-[0_0_65px_rgba(2,132,199,0.55)] flex flex-col items-center justify-center p-6 text-center space-y-2.5 transition-all group-hover:scale-105">
                <div className="w-3 h-3 rounded-full bg-[#0284c7] animate-pulse shadow-[0_0_12px_#0284c7]" />
                <h3 className="font-['Grandstander'] font-black text-xl sm:text-2xl uppercase tracking-wider text-[#111827] leading-tight">
                  To Be Continued...
                </h3>
                <p className="font-['Inter'] text-[11px] sm:text-xs text-[#4b5563] max-w-[190px] leading-relaxed font-medium">
                  More impactful software, products &amp; systems in development
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
