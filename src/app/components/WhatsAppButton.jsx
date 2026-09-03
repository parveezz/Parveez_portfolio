"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "916302122429";
  const defaultMessage = encodeURIComponent(
    "Hi Parveez, I checked out your portfolio and would love to connect with you!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp (+91 6302122429)"
        aria-label="Chat with Shaik Parveez on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle pulsating breathing ripple glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-2xl sm:text-3xl relative z-10 transition-transform duration-300 group-hover:rotate-6" />

        {/* Floating Tooltip Label */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/95 backdrop-blur-md text-white border border-slate-700 shadow-2xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat on WhatsApp</span>
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
        </span>
      </a>
    </aside>
  );
}
