"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projectsData = [
    {
      id: "invertio",
      title: "Invertio Corporate Website",
      category: "corporate",
      categoryLabel: "Corporate Platform",
      client: "Invertio Software Solutions",
      duration: "Production Deliverable",
      description: "The primary digital presence for Invertio Software Solutions. Built with modern React.js, clean component architecture, and comprehensive SEO optimization.",
      highlights: [
        "Architected reusable, modular UI components to standardize the company's brand identity.",
        "Implemented technical SEO, OpenGraph meta tags, and semantic HTML5 for search visibility.",
        "Optimized mobile responsiveness and performance benchmarks for instantaneous load times."
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "SEO"],
      liveUrl: "https://invertiosolutions.com/",
      githubUrl: "https://github.com/parveezz",
      status: "Live & Deployed"
    },
    {
      id: "greenloop-admin",
      title: "GreenLoop Admin Portal",
      category: "enterprise",
      categoryLabel: "Enterprise Dashboard",
      client: "Invertio Client Delivery",
      duration: "Production Deliverable",
      description: "A high-efficiency administrative management portal featuring dynamic data visualization, real-time table sorting/filtering, and secure REST API integrations.",
      highlights: [
        "Engineered scalable data tables and filterable dashboard views for enterprise administrators.",
        "Integrated authenticated REST APIs with robust error handling and loading skeletons.",
        "Delivered responsive controls tailored for both desktop workstations and tablet devices."
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Component Design"],
      liveUrl: "https://admin.greenloop.sa/auth/login",
      githubUrl: "https://github.com/parveezz",
      status: "Production Verified"
    },
    {
      id: "zeroqueries",
      title: "ZeroQueries Landing Page",
      category: "saas",
      categoryLabel: "SaaS Landing Page",
      client: "Invertio Client Delivery",
      duration: "Production Deliverable",
      description: "A high-conversion developer SaaS landing page designed to captivate technical audiences with clean typography, micro-interactions, and fast load times.",
      highlights: [
        "Designed high-converting hero and feature callout sections with zero-blur typography.",
        "Implemented smooth interactive states and responsive grid layouts using Tailwind CSS.",
        "Fine-tuned Core Web Vitals to achieve top performance scores on Google Lighthouse."
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "Responsive UI"],
      liveUrl: "https://zeroqueries.com/",
      githubUrl: "https://github.com/parveezz",
      status: "Client Approved"
    },
    {
      id: "portfolio-engine",
      title: "Full-Stack Portfolio & Contact Engine",
      category: "fullstack",
      categoryLabel: "Full-Stack Application",
      client: "Personal Production Project",
      duration: "Active Production",
      description: "Unified Next.js 15 web application featuring dynamic project loading, MongoDB Atlas data persistence, and automated Gmail dispatch via Nodemailer.",
      highlights: [
        "Engineered full-stack route handlers in Next.js App Router without redundant server layers.",
        "Configured MongoDB Atlas connection pooling and robust Mongoose schema models.",
        "Wired transactional SMTP email routing with real-time feedback states and zero layout shift."
      ],
      technologies: ["Next.js 15", "React", "Tailwind CSS", "MongoDB Atlas", "Nodemailer", "REST APIs"],
      liveUrl: "/contact",
      githubUrl: "https://github.com/parveezz/Parveez_portfolio",
      status: "Active & Live"
    }
  ];

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "corporate", label: "Corporate Websites" },
    { id: "enterprise", label: "Admin Portals" },
    { id: "saas", label: "SaaS & Landing Pages" },
    { id: "fullstack", label: "Full-Stack Systems" }
  ];

  const filteredProjects = selectedFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <>
      {/* Filter Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-14">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedFilter === tab.id
                ? "bg-[#2F5D50] text-[#F5EFE6] shadow-sm font-semibold"
                : "bg-[#E8DFD0] text-[#1F2A24]/75 hover:text-[#1F2A24] border border-[#D8CEBD] hover:border-[#2F5D50] shadow-xs"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Route Timeline Tree Architecture */}
      <div className="relative max-w-5xl mx-auto mt-6">
        
        {/* Central Straight Line with Dark Green & Gold Gradient */}
        <div className="absolute top-0 bottom-16 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#2F5D50] via-[#C9A66B] to-[#2F5D50] rounded-full z-0 shadow-sm" />

        {/* Alternating Left and Right Blocks */}
        <div className="space-y-12 sm:space-y-16 relative z-10">
          {filteredProjects.map((project, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={project.id}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Desktop Opposite Space */}
                <div className="hidden md:block md:w-1/2" />

                {/* Central Branch Node on the Straight Line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5EFE6] border-3 border-[#2F5D50] shadow-md flex items-center justify-center text-[#2F5D50] font-mono text-[11px] font-bold">
                    0{idx + 1}
                  </div>

                  {/* Horizontal Stem Connector arm */}
                  <div 
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-[#2F5D50] ${
                      isLeft ? "right-full w-8" : "left-full w-8"
                    }`} 
                  />
                </div>

                {/* Mobile Horizontal Stem Connector */}
                <div className="md:hidden absolute left-6 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#2F5D50]" />

                {/* Project Block Card */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                  isLeft ? "md:pr-10" : "md:pl-10"
                }`}>
                  <ProjectCard project={project} index={idx} />
                </div>
              </div>
            );
          })}
        </div>

        {/* The Bottom Round Box which holds the straight line */}
        <div className="flex flex-col items-center justify-center mt-16 relative z-10">
          
          {/* Round Box Anchor Hub */}
          <div className="relative group flex items-center justify-center">
            {/* Pulsing Radar Glow */}
            <span className="absolute -inset-2 rounded-full bg-[#2F5D50]/20 animate-ping pointer-events-none" />

            {/* The Round Box Node */}
            <div 
              title="Pipeline Route Anchor" 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F5EFE6] border-4 border-[#2F5D50] shadow-[0_8px_30px_rgba(47,93,80,0.3)] flex items-center justify-center text-[#2F5D50] hover:scale-110 hover:bg-[#2F5D50] hover:text-[#F5EFE6] transition-all duration-300 cursor-pointer"
            >
              <span className="font-mono text-sm sm:text-base font-black tracking-tighter">
                {"</>"}
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#2F5D50] font-semibold block">
              ● Pipeline Terminus • All Routes Verified
            </span>
          </div>

        </div>

      </div>
    </>
  );
}
