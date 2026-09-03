"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiSend, FiMapPin } from "react-icons/fi";

export default function Footer({ className = "" }) {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/parveezz",
      icon: <FaGithub className="text-base" />,
      external: true,
      color: "hover:text-[#F5EFE6] hover:bg-[#2F5D50] hover:border-[#2F5D50]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shaik-parveez",
      icon: <FaLinkedin className="text-base" />,
      external: true,
      color: "hover:text-[#F5EFE6] hover:bg-[#0077b5] hover:border-[#0077b5]",
    },
    {
      name: "Email: shaikparveez290@gmail.com",
      href: "mailto:shaikparveez290@gmail.com",
      icon: <FiMail className="text-base" />,
      external: true,
      color: "hover:text-[#F5EFE6] hover:bg-[#2F5D50] hover:border-[#2F5D50]",
    },
    {
      name: "Phone: +91 6302122429",
      href: "tel:+916302122429",
      icon: <FiPhone className="text-base" />,
      external: true,
      color: "hover:text-[#F5EFE6] hover:bg-[#2F5D50] hover:border-[#2F5D50]",
    },
    {
      name: "Contact Page",
      href: "/contact",
      icon: <FiSend className="text-base" />,
      external: false,
      color: "hover:text-[#F5EFE6] hover:bg-[#2F5D50] hover:border-[#2F5D50]",
    },
  ];

  return (
    <footer className={`border-t border-[#D8CEBD] bg-[#E8DFD0]/90 backdrop-blur-md py-6 sm:py-8 px-6 sm:px-10 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        
        {/* Left Side: Branded Title & Status */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-[#2F5D50] border border-[#244b40] text-[#F5EFE6] flex items-center justify-center font-mono font-bold text-[11px] tracking-tighter shadow-sm group-hover:scale-105 transition-all">
                {"</>"}
              </div>
              <span className="font-extrabold text-[#1F2A24] text-base sm:text-lg tracking-tight group-hover:text-[#2F5D50] transition-colors">
                parveez<span className="text-[#2F5D50]">.dev</span>
              </span>
            </Link>
            <span className="text-[#C9A66B] hidden sm:inline">•</span>
            <span className="text-xs text-[#1F2A24]/75 font-medium hidden sm:inline">
              Full-Stack Developer
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-[11px] text-[#1F2A24]/70">
            <span>© {new Date().getFullYear()} Shaik Parveez</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-[#2F5D50] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F5D50] animate-pulse" />
              Available for Hire
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#1F2A24]/70">
              <FiMapPin className="text-[11px] text-[#C9A66B]" />
              Hyderabad, India
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Icon Buttons with Hover Tooltip / Title */}
        <div className="flex items-center gap-2.5">
          {socialLinks.map((item) => {
            const commonProps = {
              title: item.name,
              "aria-label": item.name,
              className: `relative group p-2.5 rounded-xl bg-[#F5EFE6] border border-[#D8CEBD] text-[#2F5D50] ${item.color} active:scale-95 transition-all shadow-xs flex items-center justify-center cursor-pointer`,
            };

            const content = (
              <>
                {item.icon}
                {/* Styled Floating Tooltip Label */}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#1F2A24] text-[#F5EFE6] shadow-xl opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap z-30">
                  {item.name}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-[#1F2A24]" />
                </span>
              </>
            );

            return item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                {...commonProps}
              >
                {content}
              </a>
            ) : (
              <Link key={item.name} href={item.href} {...commonProps}>
                {content}
              </Link>
            );
          })}
        </div>

      </div>
    </footer>
  );
}
