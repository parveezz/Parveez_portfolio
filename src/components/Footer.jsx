"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const email = "shaikparveez225@gmail.com";
  const [isAptos, setIsAptos] = useState(false);

  // Synchronize external DOM and storage when font state changes
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-font");
    if (saved === "aptos" && !isAptos) {
      document.documentElement.classList.add("font-aptos");
    }
  }, [isAptos]);

  // Function to change/toggle font to Aptos font family
  const changeFont = () => {
    const nextState = !isAptos;
    setIsAptos(nextState);
    if (nextState) {
      document.documentElement.classList.add("font-aptos");
      localStorage.setItem("portfolio-font", "aptos");
    } else {
      document.documentElement.classList.remove("font-aptos");
      localStorage.setItem("portfolio-font", "default");
    }
  };

  return (
    <footer className="w-full border-t border-white/20 bg-black/15 backdrop-blur-md py-6 px-6 sm:px-12 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Brand & Role (Matching Header Style & Font) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3 text-center sm:text-left">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-['Grandstander'] font-black text-xl sm:text-2xl uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 select-none drop-shadow-[0_2px_6px_rgba(28,70,120,0.35)]"
            aria-label="Shaik Parveez Homepage"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" aria-hidden="true">
              <path d="M12 3C8 3 4 7 4 12C7 12 11 9 12 3Z" />
              <path d="M12 7C14 7 20 8.5 20 14C16.5 14 13 11.5 12 7Z" />
              <path d="M11 12C11 17 11.5 21 12 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
            <span>SHAIK PARVEEZ</span>
          </Link>

          <span className="hidden sm:inline text-white/50 font-['Grandstander'] font-black select-none" aria-hidden="true">
            ·
          </span>

          <span className="font-['Grandstander'] font-black text-xs sm:text-sm tracking-wider uppercase text-white/90 drop-shadow-[0_1px_4px_rgba(28,70,120,0.3)]">
            FRONTEND DEVELOPER · INVERTIO SOFTWARE SOLUTIONS (CURRENTLY)
          </span>
        </div>

        {/* Action Controls & Social Icons */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center">
          {/* Function Button to Change Font to Aptos Family Font */}
          <button
            type="button"
            onClick={changeFont}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer select-none ${isAptos
                ? "bg-white text-[#5b875c] border-white font-bold"
                : "bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border-white/30"
              }`}
            title="Click to toggle Aptos font family"
            aria-label="Change font to Aptos family font"
          >
            <span className="font-bold text-sm leading-none">Aa</span>
            <span className="text-[11px] uppercase tracking-wider font-['Grandstander'] font-black">
              {isAptos ? "Aptos Active" : "Change to Aptos"}
            </span>
          </button>

          {/* Social Icons */}
          <a
            href="https://github.com/parveezz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-parveez"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-sm" />
          </a>
          <a
            href="https://wa.me/916302122429"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp className="text-sm" />
          </a>
          <a
            href={`mailto:${email}`}
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95"
            aria-label="Send Email"
          >
            <FiMail className="text-sm" />
          </a>
        </div>
      </div>
    </footer>
  );
}
