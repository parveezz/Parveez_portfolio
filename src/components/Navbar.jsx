"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "SKILLS", href: "/skills" },
    { name: "PROJECTS", href: "/projects" },
    { name: "EXPERIENCE", href: "/experience" },
  ];

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 pointer-events-none flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6"
      role="banner"
    >
      {/* Brand Logo */}
      <Link
        href="/"
        className="pointer-events-auto flex items-center gap-2 text-white font-['Grandstander'] font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-wider cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 drop-shadow-[0_2px_6px_rgba(28,70,120,0.35)]"
        aria-label="Shaik Parveez Homepage"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-white shrink-0" aria-hidden="true">
          <path d="M12 3C8 3 4 7 4 12C7 12 11 9 12 3Z" />
          <path d="M12 7C14 7 20 8.5 20 14C16.5 14 13 11.5 12 7Z" />
          <path d="M11 12C11 17 11.5 21 12 21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
        <span className="truncate">SHAIK PARVEEZ</span>
      </Link>

      {/* Nav Pill (Desktop) */}
      <nav
        className="hidden md:flex pointer-events-auto items-center justify-between gap-6 px-9 py-3 rounded-full bg-[#adc4ae]/45 backdrop-blur-md border border-white/25 font-['Grandstander'] font-black text-sm lg:text-base uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#adc4ae]/55 drop-shadow-[0_2px_4px_rgba(28,70,120,0.2)]"
        aria-label="Main Navigation"
      >
        <ul className="flex items-center gap-5 lg:gap-7 m-0 p-0 list-none">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="flex items-center gap-5 lg:gap-7">
                <Link
                  href={link.href}
                  className={`transition-all hover:opacity-100 ${isActive ? "text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" : "text-white hover:opacity-80"
                    }`}
                >
                  {link.name}
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className="text-white/60 font-sans font-bold select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right Controls */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Contact Button (Desktop/Tablet) */}
        <Link
          href="/contact"
          className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#5b875c] font-['Grandstander'] font-black text-sm md:text-base uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
          aria-label="Contact Shaik Parveez"
        >
          CONTACT
        </Link>

        {/* 3-Bar Hamburger Menu Button (Mobile) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center gap-1.5 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {/* Bar 1 */}
          <span
            className={`w-5 h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          {/* Bar 2 */}
          <span
            className={`w-5 h-0.5 bg-white rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          {/* Bar 3 */}
          <span
            className={`w-5 h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div
        className={`md:hidden fixed inset-x-4 top-20 z-50 pointer-events-auto transition-all duration-300 ease-out ${isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        <nav
          className="w-full rounded-[32px] bg-[#0c1826]/95 backdrop-blur-2xl border-2 border-white/20 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center text-center space-y-4"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-['Grandstander'] font-black text-xl tracking-wider uppercase py-2 transition-colors ${isActive
                    ? "text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                    : "text-white hover:text-[#38bdf8]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Contact Button inside Mobile Dropdown */}
          <div className="pt-3 border-t border-white/15 w-full">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-full bg-white text-[#5b875c] font-['Grandstander'] font-black text-base uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all text-center"
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
