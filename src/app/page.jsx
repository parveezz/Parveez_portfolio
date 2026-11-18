"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiCheck, FiCopy, FiArrowUpRight, FiCode, FiCpu, FiLayers } from "react-icons/fi";
import { toast } from "sonner";

export default function ComingSoonPage() {
  const [copied, setCopied] = useState(false);
  const email = "shaikparveez290@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const techBadges = [
    { name: "Next.js 15", icon: <FiCode /> },
    { name: "React 19", icon: <FiLayers /> },
    { name: "Motion & UI", icon: <FiLayers /> },
    { name: "Node.js & Express", icon: <FiCode /> },
    { name: "PostgreSQL & Mongo", icon: <FiCpu /> },
    { name: "AI Engineering", icon: <FiCpu /> },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/parveezz",
      icon: <FaGithub className="text-lg" />,
      label: "parveezz",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shaik-parveez",
      icon: <FaLinkedinIn className="text-lg" />,
      label: "shaik-parveez",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/917993417758",
      icon: <FaWhatsapp className="text-lg" />,
      label: "+91 79934 17758",
    },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0c120e] text-[#F5EFE6] px-6 py-10 sm:px-12 sm:py-14">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2F5D50]/20 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[400px] bg-[#C9A66B]/10 rounded-full blur-[120px] -z-10" />

      {/* Subtle Background Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 239, 230, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header Bar */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F5D50] to-[#1a3830] border border-[#2F5D50]/50 flex items-center justify-center font-bold text-lg text-[#F5EFE6] shadow-lg shadow-[#2F5D50]/20">
            P
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-[#F5EFE6]">
              Shaik Parveez
            </h1>
            <p className="text-xs text-[#F5EFE6]/60 font-mono">
              Full-Stack Developer & Software Engineer
            </p>
          </div>
        </div>

        {/* Live Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F5D50]/20 border border-[#2F5D50]/40 text-xs font-medium text-[#78cfb4]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78cfb4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#78cfb4]"></span>
          </span>
          <span>Available for Projects</span>
        </div>
      </header>

      {/* Hero Center Section */}
      <section className="max-w-4xl mx-auto w-full my-auto py-16 text-center flex flex-col items-center">
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18231c] border border-[#2F5D50]/30 text-xs font-mono uppercase tracking-widest text-[#C9A66B] mb-8 shadow-xs">
          <span>✦</span>
          <span>Redesign in Progress</span>
        </div>

        {/* Hero Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5EFE6] leading-[1.08] mb-6">
          Crafting Something <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#F5EFE6] via-[#78cfb4] to-[#C9A66B] bg-clip-text text-transparent">
            Exceptional.
          </span>
        </h2>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-[#F5EFE6]/75 max-w-2xl leading-relaxed mb-10 font-light">
          The portfolio is currently being rebuilt with modern motion architecture, refined design, and enhanced full-stack systems. Check back soon for the unveiling.
        </p>

        {/* Quick Contact & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center mb-12">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#18231c] hover:bg-[#202e26] border border-[#2F5D50]/40 text-sm font-medium text-[#F5EFE6] transition-all cursor-pointer shadow-md hover:border-[#78cfb4]/60 active:scale-[0.98]"
            title="Click to copy email address"
          >
            <FiMail className="text-[#78cfb4] text-base" />
            <span className="font-mono text-xs sm:text-sm">{email}</span>
            {copied ? (
              <FiCheck className="text-emerald-400 text-base shrink-0 ml-1" />
            ) : (
              <FiCopy className="text-[#F5EFE6]/40 text-sm shrink-0 ml-1" />
            )}
          </button>

          {/* Direct Email Action */}
          <a
            href={`mailto:${email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2F5D50] to-[#254b40] hover:from-[#3a7262] hover:to-[#2e5d50] text-[#F5EFE6] text-sm font-semibold transition-all shadow-lg shadow-[#2F5D50]/30 active:scale-[0.98]"
          >
            <span>Say Hello</span>
            <FiArrowUpRight className="text-base" />
          </a>
        </div>

        {/* Tech Focus Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          {techBadges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#141d17] border border-[#2F5D50]/30 text-xs text-[#F5EFE6]/70 font-mono"
            >
              <span className="text-[#78cfb4]">{badge.icon}</span>
              <span>{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Social Connectivity */}
      <footer className="max-w-6xl mx-auto w-full pt-8 border-t border-[#2F5D50]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EFE6]/60">
        <p className="font-mono">
          © {new Date().getFullYear()} Shaik Parveez. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18231c] hover:bg-[#202e26] border border-[#2F5D50]/30 text-[#F5EFE6]/80 hover:text-[#78cfb4] transition-all"
            >
              {social.icon}
              <span className="text-xs font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
