import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const email = "shaikparveez225@gmail.com";

  return (
    <footer className="w-full border-t border-white/20 bg-black/15 backdrop-blur-md py-6 px-6 sm:px-12 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
        
        {/* Brand & Role */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white text-[#5b875c] flex items-center justify-center font-['Grandstander'] font-black text-sm shadow-sm select-none">
            P
          </div>
          <div>
            <Link href="/" className="font-['Grandstander'] font-black text-sm text-white block hover:opacity-85 transition-opacity">
              SHAIK PARVEEZ
            </Link>
            <span className="font-['Inter'] text-[11px] text-white/70">
              Frontend Developer · Invertio Software Solutions (Currently)
            </span>
          </div>
        </div>

        {/* Social Icons & Email */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/parveezz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-parveez"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-sm" />
          </a>
          <a
            href="https://wa.me/916302122429"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp className="text-sm" />
          </a>
          <a
            href={`mailto:${email}`}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5b875c] border border-white/30 flex items-center justify-center transition-all shadow-sm"
            aria-label="Send Email"
          >
            <FiMail className="text-sm" />
          </a>
        </div>
      </div>
    </footer>
  );
}
