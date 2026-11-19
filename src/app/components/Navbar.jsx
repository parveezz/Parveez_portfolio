"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pointer-events-none flex items-center justify-between px-6 py-5 md:px-10 md:py-6" role="banner">
      {/* Brand Logo */}
      <Link
        href="/"
        className="pointer-events-auto flex items-center gap-2 text-white font-['Grandstander'] font-black text-2xl md:text-3xl uppercase tracking-wider cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 drop-shadow-[0_2px_6px_rgba(28,70,120,0.35)]"
        aria-label="Shaik Parveez Homepage"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-white" aria-hidden="true">
          <path d="M12 3C8 3 4 7 4 12C7 12 11 9 12 3Z" />
          <path d="M12 7C14 7 20 8.5 20 14C16.5 14 13 11.5 12 7Z" />
          <path d="M11 12C11 17 11.5 21 12 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
        <span>SHAIK PARVEEZ</span>
      </Link>

      {/* Nav Pill (Desktop) */}
      <nav
        className="hidden md:flex pointer-events-auto items-center justify-between gap-6 px-9 py-3 rounded-full bg-[#adc4ae]/45 backdrop-blur-md border border-white/25 font-['Grandstander'] font-black text-sm lg:text-base uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#adc4ae]/55 drop-shadow-[0_2px_4px_rgba(28,70,120,0.2)]"
        aria-label="Main Navigation"
      >
        <ul className="flex items-center gap-5 lg:gap-7 m-0 p-0 list-none">
          <li>
            <a href="#about" className="hover:opacity-80 transition-opacity">ABOUT</a>
          </li>
          <li className="text-white/60 font-sans font-bold select-none" aria-hidden="true">
            ·
          </li>
          <li>
            <a href="#skills" className="hover:opacity-80 transition-opacity">SKILLS</a>
          </li>
          <li className="text-white/60 font-sans font-bold select-none" aria-hidden="true">
            ·
          </li>
          <li>
            <a href="#projects" className="hover:opacity-80 transition-opacity">PROJECTS</a>
          </li>
          <li className="text-white/60 font-sans font-bold select-none" aria-hidden="true">
            ·
          </li>
          <li>
            <a href="#experience" className="hover:opacity-80 transition-opacity">EXPERIENCE</a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <a
        href="mailto:shaikparveez225@gmail.com"
        className="pointer-events-auto flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#5b875c] font-['Grandstander'] font-black text-sm md:text-base uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
        aria-label="Contact Shaik Parveez"
      >
        CONTACT
      </a>
    </header>
  );
}
