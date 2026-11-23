"use client";

import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiGit,
  SiPostman,
  SiFigma
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FiLayers,
  FiServer,
  FiTool,
  FiCode,
  FiZap
} from "react-icons/fi";

export default function SkillsPage() {
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

  const frontendSkills = [
    {
      name: "React.js",
      tag: "CORE FRAMEWORK",
      desc: "Reusable component systems, hooks, virtual DOM optimization",
      icon: <SiReact className="text-2xl text-[#087ea4]" />,
    },
    {
      name: "Next.js 15",
      tag: "FULL-STACK SSR/SSG",
      desc: "App Router, Server & Client Components, SEO & performance",
      icon: <SiNextdotjs className="text-2xl text-white" />,
    },
    {
      name: "JavaScript (ES6+)",
      tag: "CORE LANGUAGE",
      desc: "Async/await, closures, modern ES features, DOM manipulation",
      icon: <SiJavascript className="text-2xl text-[#f7df1e]" />,
    },
    {
      name: "TypeScript",
      tag: "TYPE SAFETY",
      desc: "Static typing, interfaces, robust code architecture",
      icon: <SiTypescript className="text-2xl text-[#3178c6]" />,
    },
    {
      name: "Tailwind CSS",
      tag: "STYLING & DESIGN",
      desc: "Utility-first tokens, responsive layouts, micro-animations",
      icon: <SiTailwindcss className="text-2xl text-[#38bdf8]" />,
    },
    {
      name: "HTML5 & Modern CSS3",
      tag: "WEB STANDARDS",
      desc: "Semantic elements, Flexbox, CSS Grid, media queries",
      icon: <SiHtml5 className="text-2xl text-[#e34f26]" />,
    },
  ];

  const backendSkills = [
    {
      name: "PostgreSQL (PERN Stack)",
      tag: "SQL DATABASE",
      desc: "Relational schema design, queries, relational data integrity",
      icon: <SiPostgresql className="text-2xl text-[#4169e1]" />,
    },
    {
      name: "MongoDB (MERN Stack)",
      tag: "NOSQL DATABASE",
      desc: "Document modeling, schema design, collections & aggregation",
      icon: <SiMongodb className="text-2xl text-[#10aa50]" />,
    },
    {
      name: "Node.js & Express.js",
      tag: "BACKEND RUNTIME",
      desc: "RESTful API creation, middleware routing, server-side logic",
      icon: <SiNodedotjs className="text-2xl text-[#68a063]" />,
    },
    {
      name: "MERN Stack Architecture",
      tag: "FULLSTACK SUITE",
      desc: "End-to-end web apps combining MongoDB, Express, React & Node",
      icon: <FiLayers className="text-2xl text-[#f59e0b]" />,
    },
    {
      name: "PERN Stack Architecture",
      tag: "FULLSTACK SUITE",
      desc: "High-performance apps combining PostgreSQL, Express, React & Node",
      icon: <FiZap className="text-2xl text-[#a855f7]" />,
    },
    {
      name: "PHP & REST APIs",
      tag: "BACKEND SERVICES",
      desc: "API endpoints, authentication, HTTP request/response handling",
      icon: <SiPhp className="text-2xl text-[#8892be]" />,
    },
  ];

  const toolsSkills = [
    {
      name: "Git & GitHub",
      tag: "VERSION CONTROL",
      desc: "Branching workflows, commits, collaborative PRs, CI/CD basics",
      icon: <SiGit className="text-2xl text-[#f05032]" />,
    },
    {
      name: "VS Code",
      tag: "PRIMARY IDE",
      desc: "Development environment, snippets, debugging, modern extensions",
      icon: <VscVscode className="text-2xl text-[#007acc]" />,
    },
    {
      name: "Figma",
      tag: "UI/UX & DESIGN",
      desc: "Translating mockups to pixel-perfect code, layout inspection",
      icon: <SiFigma className="text-2xl text-[#a259ff]" />,
    },
    {
      name: "Postman",
      tag: "API TESTING",
      desc: "Endpoint validation, headers, mock testing, request collections",
      icon: <SiPostman className="text-2xl text-[#ff6c37]" />,
    },
  ];

  return (
    <div className="min-h-screen relative text-white selection:bg-[#38bdf8] selection:text-black overflow-x-hidden bg-[#0a0f18] select-none">
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
          <source src="/prograaming.mp4" type="video/mp4" />
        </video>
        {/* Contrast Overlay (No Blur) */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto pt-32 pb-24 px-4 sm:px-6 md:px-8 space-y-16">

        {/* Header Title */}
        <header className="text-center space-y-3">
          <p className="font-['Grandstander'] font-black text-xs sm:text-sm uppercase tracking-widest text-[#38bdf8] drop-shadow-md">
            Technical Stack &amp; Tooling
          </p>
          <h1 className="font-['Grandstander'] font-black text-5xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Skills
          </h1>
          <p className="font-['Inter'] text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Building responsive frontend interfaces and scalable fullstack backends with MERN, PERN, and modern tooling.
          </p>
        </header>

        {/* Section 1: Frontend Development */}
        <section className="space-y-6" aria-labelledby="frontend-heading">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-[#38bdf8] flex items-center justify-center text-xl shadow-md">
              <FiCode />
            </div>
            <div>
              <h2 id="frontend-heading" className="font-['Grandstander'] font-black text-2xl sm:text-3xl text-white uppercase">
                Frontend Engineering
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-white/70 font-medium">
                Component architecture, reactive state, and pixel-perfect responsive design
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0f172a]/85 border border-white/15 hover:border-[#38bdf8]/60 rounded-3xl p-6 shadow-lg text-white space-y-3 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-['Grandstander'] font-black uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30">
                    {skill.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Grandstander'] font-black text-lg sm:text-xl text-white">
                    {skill.name}
                  </h3>
                  <p className="font-['Inter'] text-xs text-white/75 font-medium mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Backend, Databases & Fullstack (MERN & PERN) */}
        <section className="space-y-6" aria-labelledby="backend-heading">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-[#a855f7] flex items-center justify-center text-xl shadow-md">
              <FiServer />
            </div>
            <div>
              <h2 id="backend-heading" className="font-['Grandstander'] font-black text-2xl sm:text-3xl text-white uppercase">
                Backend &amp; Full-Stack Architecture
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-white/70 font-medium">
                MERN Stack &amp; PERN Stack (PostgreSQL), APIs, and server infrastructure
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0f172a]/85 border border-white/15 hover:border-[#a855f7]/60 rounded-3xl p-6 shadow-lg text-white space-y-3 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-['Grandstander'] font-black uppercase tracking-wider text-[#a855f7] px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30">
                    {skill.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Grandstander'] font-black text-lg sm:text-xl text-white">
                    {skill.name}
                  </h3>
                  <p className="font-['Inter'] text-xs text-white/75 font-medium mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Tools & Workflow (Git, VS Code, Figma, Postman) */}
        <section className="space-y-6" aria-labelledby="tools-heading">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-[#f59e0b] flex items-center justify-center text-xl shadow-md">
              <FiTool />
            </div>
            <div>
              <h2 id="tools-heading" className="font-['Grandstander'] font-black text-2xl sm:text-3xl text-white uppercase">
                Development Tools &amp; Workflow
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-white/70 font-medium">
                Industry-standard tooling for design-to-code implementation and delivery
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toolsSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0f172a]/85 border border-white/15 hover:border-[#f59e0b]/60 rounded-3xl p-6 shadow-lg text-white space-y-3 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-['Grandstander'] font-black uppercase tracking-wider text-[#f59e0b] px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30">
                    {skill.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Grandstander'] font-black text-lg sm:text-xl text-white">
                    {skill.name}
                  </h3>
                  <p className="font-['Inter'] text-xs text-white/75 font-medium mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
