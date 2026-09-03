import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectsCta() {
  return (
    <section className="py-14 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-r from-[#E8DFD0] via-[#F5EFE6] to-[#E8DFD0] border border-[#D8CEBD] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-center md:text-left">
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1F2A24]">
            Interested in collaborating on a web project?
          </h3>
          <p className="text-xs sm:text-sm text-[#1F2A24]/75 max-w-lg">
            Let's connect and discuss full-stack architectures, freelance contracts, or engineering opportunities.
          </p>
        </div>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          <span>Get in Touch</span>
          <FiArrowRight className="text-base" />
        </Link>
      </div>
    </section>
  );
}
