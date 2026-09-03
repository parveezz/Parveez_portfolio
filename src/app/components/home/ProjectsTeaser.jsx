import Link from "next/link";
import { FiArrowRight, FiBriefcase } from "react-icons/fi";

export default function ProjectsTeaser() {
  return (
    <section id="projects" className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="bg-[#E8DFD0] border border-[#D8CEBD] hover:border-[#2F5D50] rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(31,42,36,0.06)] flex flex-col md:flex-row items-center justify-between gap-8 transition-all">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EFE6] border border-[#D8CEBD] text-xs font-mono text-[#2F5D50] font-semibold">
            <FiBriefcase className="text-[#C9A66B]" />
            CLIENT DELIVERABLES & CASE STUDIES
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2A24] tracking-tight">
            Explore Verified Client Projects
          </h2>

          <p className="text-[#1F2A24]/80 text-sm sm:text-base leading-relaxed">
            Review live commercial applications, enterprise administrative portals, and SaaS platforms built for clients — including <strong className="text-[#1F2A24]">Invertio</strong>, <strong className="text-[#1F2A24]">GreenLoop</strong>, and <strong className="text-[#1F2A24]">ZeroQueries</strong>.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 shadow-md hover:shadow-xl transition-all shrink-0"
        >
          <span>View All Client Projects</span>
          <FiArrowRight className="text-base" />
        </Link>
      </div>
    </section>
  );
}
