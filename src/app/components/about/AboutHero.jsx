import Link from "next/link";
import { FiMapPin, FiBriefcase, FiArrowRight, FiDownload } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C9A66B]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-[#D8CEBD]">
        <div className="space-y-3 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DFD0] border border-[#D8CEBD] text-xs font-mono text-[#2F5D50] font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2F5D50] animate-pulse" />
            [ ABOUT ME ]
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1F2A24] leading-[1.12]">
            Shaik Parveez
          </h1>

          <p className="text-lg sm:text-xl text-[#2F5D50] font-semibold">
            Software Engineer @ Invertio Software Solutions <span className="text-[#C9A66B]">|</span> Full-Stack Developer
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#1F2A24]/75 pt-1">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-[#2F5D50]" /> Greater Hyderabad Area, Telangana
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiBriefcase className="text-[#C9A66B]" /> ~1 Year Professional Experience
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="/Shaik_Parveez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#1F2A24] bg-[#E8DFD0] hover:bg-[#dfd5c5] border border-[#D8CEBD] transition-all shadow-sm active:scale-95"
          >
            <FiDownload className="text-base text-[#2F5D50]" />
            <span>View Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-parveez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#0077b5] hover:bg-[#006097] transition-all shadow-sm active:scale-95"
          >
            <FaLinkedin className="text-base" />
            <span>LinkedIn Profile</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] transition-all shadow-sm active:scale-95"
          >
            <span>Get in Touch</span>
            <FiArrowRight className="text-base" />
          </Link>
        </div>
      </div>

      {/* Professional Summary Quote Card */}
      <div className="mt-10 bg-[#E8DFD0]/80 border border-[#D8CEBD] rounded-3xl p-6 sm:p-8 relative shadow-md">
        <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] block mb-2 font-semibold">
          Professional Summary
        </span>
        <p className="text-[#1F2A24]/85 text-sm sm:text-base leading-relaxed">
          Full-Stack Developer with nearly 1 year of professional experience in developing responsive and scalable web applications. Experienced in designing modern user interfaces, building reusable components, integrating REST APIs, and optimizing application performance. Contributed to the successful delivery of projects including the Invertio corporate website, GreenLoop Admin Portal, and ZeroQueries Landing Page. Passionate about creating intuitive user experiences, writing clean and maintainable code, and continuously improving technical skills.
        </p>
      </div>
    </section>
  );
}
