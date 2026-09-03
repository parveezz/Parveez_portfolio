"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function FeaturedProjects() {
  const defaultProjects = [
    {
      _id: "1",
      title: "Invertio Corporate Website",
      category: "Corporate Platform",
      description: "Official corporate website for Invertio Software Solutions. Built with modern React.js, reusable components, and complete SEO optimization.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "SEO"],
      githubUrl: "https://github.com/parveezz",
      liveUrl: "https://invertiosolutions.com/",
      featured: true,
      route: "/routes/invertio-web",
    },
    {
      _id: "2",
      title: "GreenLoop Admin Portal",
      category: "Enterprise Portal",
      description: "High-efficiency administrative portal featuring dynamic data tables, analytics views, and secure REST API integration.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
      githubUrl: "https://github.com/parveezz",
      liveUrl: "https://admin.greenloop.sa/auth/login",
      featured: true,
      route: "/routes/greenloop-admin",
    },
    {
      _id: "3",
      title: "ZeroQueries Landing Page",
      category: "SaaS Platform",
      description: "High-conversion developer SaaS landing page designed with razor-sharp typography, responsive layout, and performance optimization.",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
      githubUrl: "https://github.com/parveezz",
      liveUrl: "https://zeroqueries.com/",
      featured: true,
      route: "/routes/zeroqueries",
    },
    {
      _id: "4",
      title: "Full-Stack Portfolio & Contact Engine",
      category: "Full-Stack System",
      description: "Modern production portfolio with Next.js 15, Tailwind CSS, MongoDB Atlas data persistence, and Nodemailer email dispatch.",
      technologies: ["Next.js 15", "React", "MongoDB Atlas", "Nodemailer"],
      githubUrl: "https://github.com/parveezz/Parveez_portfolio",
      liveUrl: "/contact",
      featured: true,
      route: "/routes/portfolio-engine",
    }
  ];

  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          setProjects(json.data);
        }
      } catch (err) {
        // Fallback gracefully to defaultProjects
      }
    }
    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ebdcc8] border border-[#d6be9f] text-xs font-mono text-[#5c3a21] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#8c6541] animate-pulse" />
          [ ROUTE PIPELINE ]
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1917] tracking-tight">
          Selected Deliverables
        </h2>
        <p className="text-[#57534e] text-xs sm:text-sm max-w-lg mx-auto">
          Production applications connected along the architectural deployment line, mapped with left and right deliverable blocks.
        </p>
      </div>

      {/* Route Timeline Tree Architecture */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* The Central Straight Line (Running vertically through all blocks) */}
        <div className="absolute top-0 bottom-16 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#8c6541] via-[#b58863] to-[#8c6541] rounded-full z-0 shadow-sm" />

        {/* Alternating Left and Right Wooden Blocks */}
        <div className="space-y-12 sm:space-y-16 relative z-10">
          {projects.map((proj, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={proj._id}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Desktop Opposite Space (for clean 50-50 grid alignment) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Central Branch Node Marker (on the straight line) */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fbf8f3] border-3 border-[#8c6541] shadow-md flex items-center justify-center text-[#8c6541] font-mono text-[11px] font-bold group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>

                  {/* Horizontal Stem Connector arm linking the line to the block */}
                  <div 
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-[#8c6541] ${
                      isLeft ? "right-full w-8" : "left-full w-8"
                    }`} 
                  />
                </div>

                {/* Mobile Horizontal Stem Connector */}
                <div className="md:hidden absolute left-6 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#8c6541]" />

                {/* Wooden Block Card */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                  isLeft ? "md:pr-10" : "md:pl-10"
                }`}>
                  <div className="relative bg-gradient-to-br from-[#fcf9f2] via-[#faf5ec] to-[#f4ebe0] border-2 border-[#cfbeab] hover:border-[#8c6541] rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_rgba(87,60,35,0.08)] hover:shadow-[0_14px_35px_rgba(87,60,35,0.16)] transition-all duration-300 hover:-translate-y-1 group">
                    

                    {/* Block Header Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#5c3a21] bg-[#ebdcc8] border border-[#d6be9f] px-2.5 py-0.5 rounded-md font-semibold">
                          {proj.category || "Commercial Build"}
                        </span>
                        <span className="text-[10px] font-mono text-[#8c6541] hidden sm:inline">
                          branch/{idx + 1}
                        </span>
                      </div>

                      <span className="text-xs text-emerald-800 font-medium flex items-center gap-1">
                        <FiCheckCircle className="text-xs text-emerald-600" /> Production
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1c1917] group-hover:text-[#8c6541] transition-colors">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mt-2.5">
                      {proj.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-[#e2d5c3]">
                      {proj.technologies && proj.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#eee1cf] text-[#5c3a21] font-medium border border-[#decab1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 mt-2">
                      <div className="flex items-center gap-3">
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5c3a21] hover:text-[#1c1917] transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <FiGithub className="text-sm" />
                            <span>Repository</span>
                          </a>
                        )}
                      </div>

                      {proj.liveUrl && (
                        proj.liveUrl.startsWith("http") ? (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#8c6541] hover:text-[#5c3a21] group-hover:translate-x-0.5 transition-all"
                          >
                            <span>Live Website</span>
                            <FiExternalLink className="text-sm" />
                          </a>
                        ) : (
                          <Link
                            href={proj.liveUrl}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#8c6541] hover:text-[#5c3a21] group-hover:translate-x-0.5 transition-all"
                          >
                            <span>Explore Route</span>
                            <FiExternalLink className="text-sm" />
                          </Link>
                        )
                      )}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* The Bottom Round Box which holds the straight line */}
        <div className="flex flex-col items-center justify-center mt-14 relative z-10">
          
          {/* Round Box Anchor Hub */}
          <div className="relative group flex items-center justify-center">
            {/* Pulsing Breathing Radar Ring */}
            <span className="absolute -inset-2 rounded-full bg-[#8c6541]/25 animate-ping pointer-events-none" />

            {/* The Round Box Node */}
            <div 
              title="Pipeline Route Anchor" 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fbf8f3] border-4 border-[#8c6541] shadow-[0_8px_30px_rgba(140,101,65,0.35)] flex items-center justify-center text-[#8c6541] hover:scale-110 hover:bg-[#8c6541] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span className="font-mono text-sm sm:text-base font-black tracking-tighter">
                {"</>"}
              </span>
            </div>
          </div>

          {/* Description & Route Explorer CTA Button */}
          <div className="mt-4 text-center space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8c6541] font-semibold block">
              ● Central Pipeline Anchor • 4 Commercial Builds Deployed
            </span>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#f7f5f0] bg-[#1c1917] hover:bg-[#292524] active:scale-95 transition-all shadow-lg hover:shadow-xl mt-1"
            >
              <span>Explore All Project Deliverables</span>
              <FiArrowRight className="text-base" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
