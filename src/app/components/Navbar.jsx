"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        (e?.target?.scrollTop ?? 0);
      setScrolled(scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => window.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`sticky top-0 w-full px-3 sm:px-6 lg:px-12 z-50 transition-all duration-300 ${
        scrolled ? "pt-2 pb-2" : "pt-2.5 sm:pt-3.5 pb-1"
      }`}
    >
      <header
        className={`w-full bg-[#F5EFE6]/90 backdrop-blur-md rounded-full border px-4 sm:px-7 flex items-center justify-between relative transition-all duration-300 ${
          scrolled
            ? "py-1.5 sm:py-2 shadow-[0_10px_30px_rgba(31,42,36,0.08)] border-[#D8CEBD]"
            : "py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(31,42,36,0.04)] border-[#D8CEBD]"
        }`}
      >
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#2F5D50] text-[#F5EFE6] flex items-center justify-center font-mono font-bold text-[11px] tracking-tighter shadow-sm border border-[#244b40] group-hover:scale-105 transition-all">
            {"</>"}
          </div>
          <span className="font-extrabold text-[#1F2A24] text-base sm:text-lg tracking-tight group-hover:text-[#2F5D50] transition-colors">
            parveez
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs sm:text-sm transition-colors ${
                  isActive
                    ? "bg-[#E8DFD0] text-[#1F2A24] font-semibold rounded-lg shadow-xs"
                    : "text-[#1F2A24]/75 hover:text-[#1F2A24] hover:bg-[#E8DFD0]/60 font-normal rounded-lg"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <Link
            href="/contact"
            className="px-3 sm:px-4.5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 shadow-sm transition-all"
          >
            <span className="hidden sm:inline">Get in touch</span>
            <span className="sm:hidden">Contact</span>
          </Link>

          <a
            href="https://github.com/parveezz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-[#1F2A24] bg-[#E8DFD0]/60 hover:bg-[#E8DFD0] border border-[#D8CEBD] shadow-xs active:scale-95 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-sm sm:text-base text-[#2F5D50]" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#1F2A24] hover:bg-[#E8DFD0] rounded-lg transition-colors ml-0.5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>

      </header>

      {/* Mobile Menu Dropdown Card */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#F5EFE6]/98 backdrop-blur-md rounded-2xl shadow-xl border border-[#D8CEBD] p-3 flex flex-col gap-1 transition-all">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 text-sm rounded-xl transition-colors ${
                  isActive
                    ? "bg-[#E8DFD0] text-[#1F2A24] font-semibold"
                    : "text-[#1F2A24]/75 hover:text-[#1F2A24] hover:bg-[#E8DFD0]/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
