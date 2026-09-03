"use client";

import Link from "next/link";
import { FiArrowRight, FiGithub, FiLayers, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
      {/* Subtle Warm Beige & Dark Green Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#C9A66B]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-[#2F5D50]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Status Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8DFD0] border border-[#D8CEBD] text-xs font-medium text-[#2F5D50] shadow-xs mb-6">
        <span className="w-2 h-2 rounded-full bg-[#2F5D50] animate-pulse" />
        <span className="font-semibold">Available for New Projects & Roles</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.12] text-[#1F2A24] max-w-4xl">
        Crafting Scalable Full-Stack Web Experiences.
      </h1>

      {/* Subtitle */}
      <p className="text-[#1F2A24]/80 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed">
        Hi, I'm <strong className="text-[#1F2A24] font-semibold">Shaik Parveez</strong> — a Full-Stack Developer specializing in building modern web applications with 
        <span className="text-[#2F5D50] font-semibold"> Next.js</span>, 
        <span className="text-[#2F5D50] font-semibold"> React</span>, 
        <span className="text-[#2F5D50] font-semibold"> Node.js</span>, and 
        <span className="text-[#C9A66B] font-semibold"> MongoDB Atlas</span>.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8">
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 shadow-md shadow-[#2F5D50]/20 transition-all flex items-center gap-2"
        >
          <span>Get in Touch</span>
          <FiArrowRight className="text-base" />
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#1F2A24] bg-[#E8DFD0] hover:bg-[#dfd5c5] border border-[#D8CEBD] shadow-xs active:scale-95 transition-all flex items-center gap-2"
        >
          <span>View Projects</span>
          <FiLayers className="text-base text-[#2F5D50]" />
        </Link>

        <a
          href="/Shaik_Parveez_Resume.pdf"
          download="Shaik_Parveez_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#2F5D50] bg-[#E8DFD0] hover:bg-[#dfd5c5] border border-[#D8CEBD] shadow-xs active:scale-95 transition-all flex items-center gap-2"
        >
          <FiDownload className="text-base" />
          <span>Resume</span>
        </a>

        <a
          href="https://github.com/parveezz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full text-xs sm:text-sm font-medium text-[#1F2A24]/80 hover:text-[#1F2A24] bg-[#E8DFD0] hover:bg-[#dfd5c5] border border-[#D8CEBD] shadow-xs transition-all flex items-center gap-2"
        >
          <FiGithub className="text-base text-[#2F5D50]" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>

      {/* Tech Stack Icons Strip */}
      <div className="mt-14 pt-8 border-t border-[#D8CEBD] w-full max-w-3xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[#1F2A24]/75 text-sm">
        <span className="text-xs uppercase tracking-widest text-[#C9A66B] font-semibold w-full mb-1">
          Technologies & Frameworks
        </span>
        <div className="flex items-center gap-2 hover:text-[#2F5D50] transition-colors">
          <SiNextdotjs className="text-xl text-[#1F2A24]" />
          <span className="text-xs font-medium">Next.js 15</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#2F5D50] transition-colors">
          <FaReact className="text-xl text-[#2F5D50]" />
          <span className="text-xs font-medium">React</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#2F5D50] transition-colors">
          <FaNodeJs className="text-xl text-[#2F5D50]" />
          <span className="text-xs font-medium">Node.js</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#2F5D50] transition-colors">
          <SiMongodb className="text-xl text-[#2F5D50]" />
          <span className="text-xs font-medium">MongoDB</span>
        </div>
        <div className="flex items-center gap-2 hover:text-[#2F5D50] transition-colors">
          <SiTailwindcss className="text-xl text-[#2F5D50]" />
          <span className="text-xs font-medium">Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}
