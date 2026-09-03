import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-r from-[#E8DFD0] via-[#F5EFE6] to-[#E8DFD0] border border-[#D8CEBD] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-md">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight">
            Have a Project in Mind?
          </h3>
          <p className="text-[#1F2A24]/75 text-xs sm:text-sm max-w-lg">
            Let's connect and discuss how we can work together to turn your ideas into high-performance web applications.
          </p>
        </div>

        <Link
          href="/contact"
          className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 shadow-md transition-all shrink-0"
        >
          Visit Contact Page &rarr;
        </Link>
      </div>
    </section>
  );
}
