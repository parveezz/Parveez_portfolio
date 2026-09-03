import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function SkillsImpact() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full border-t border-[#D8CEBD]">
      <div className="bg-gradient-to-r from-[#E8DFD0] via-[#F5EFE6] to-[#E8DFD0] border border-[#D8CEBD] rounded-3xl p-8 sm:p-12 shadow-md">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#2F5D50] font-semibold">
            Real-World Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight">
            From Concept to High-Performance Deployment
          </h2>
          <p className="text-[#1F2A24]/85 text-xs sm:text-sm leading-relaxed">
            At <strong className="text-[#1F2A24]">Invertio Software Solutions</strong>, I put these skills into practice every day: building fast, accessible web products, optimizing bundle sizes for mobile devices, engineering reusable components that accelerate delivery, and structuring web pages for search engine dominance.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3.5">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 transition-all shadow-sm"
            >
              <span>View Work Experience Timeline</span>
              <FiArrowRight className="text-sm" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#1F2A24] bg-[#E8DFD0] hover:bg-[#dfd5c5] border border-[#D8CEBD] active:scale-95 transition-all shadow-sm"
            >
              <span>Discuss a Project</span>
              <FiArrowRight className="text-sm text-[#2F5D50]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
