import Link from "next/link";
import { FiArrowRight, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function ExperienceSummary() {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] font-semibold">
            About Parveez
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#1F2A24] tracking-tight">
            Software Engineer @ Invertio Software Solutions
          </h2>
          <p className="text-[#1F2A24]/85 text-xs sm:text-sm leading-relaxed">
            Full-Stack Developer with nearly 1 year of professional experience in developing responsive and scalable web applications in Next.js, React.js, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS.
          </p>
          <p className="text-[#1F2A24]/75 text-xs sm:text-sm leading-relaxed">
            Contributed to the successful delivery of production projects including the <strong className="text-[#1F2A24]">Invertio corporate website</strong>, <strong className="text-[#1F2A24]">GreenLoop Admin Portal</strong>, and <strong className="text-[#1F2A24]">ZeroQueries Landing Page</strong>.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F5EFE6] bg-[#2F5D50] hover:bg-[#244b40] active:scale-95 transition-all shadow-md"
            >
              <span>Read Full Biography & Career Timeline</span>
              <FiArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <div>
              <div className="text-2xl font-bold text-[#1F2A24]">100%</div>
              <div className="text-xs text-[#1F2A24]/70 mt-0.5">Commitment to Quality</div>
            </div>
            <div className="w-px h-10 bg-[#D8CEBD]" />
            <div>
              <div className="text-2xl font-bold text-[#1F2A24]">&lt;24h</div>
              <div className="text-xs text-[#1F2A24]/70 mt-0.5">Rapid Response Time</div>
            </div>
            <div className="w-px h-10 bg-[#D8CEBD]" />
            <div>
              <div className="text-2xl font-bold text-[#2F5D50]">Next.js</div>
              <div className="text-xs text-[#1F2A24]/70 mt-0.5">Modern App Router</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#E8DFD0]/75 border border-[#D8CEBD] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
          <div className="text-sm font-semibold text-[#1F2A24] border-b border-[#D8CEBD] pb-3 flex items-center justify-between">
            <span>Quick Contact Info</span>
            <span className="w-2 h-2 rounded-full bg-[#2F5D50] animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-[#2F5D50] text-base mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-medium text-[#1F2A24]/70">Location</div>
                <div className="text-sm font-medium text-[#1F2A24]">New Bhoiguda, Hyderabad 500003, India</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiMail className="text-[#2F5D50] text-base mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-medium text-[#1F2A24]/70">Email Address</div>
                <a href="mailto:shaikparveez290@gmail.com" className="text-sm font-medium text-[#1F2A24] hover:text-[#2F5D50] transition-colors">
                  shaikparveez290@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="text-[#2F5D50] text-base mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-medium text-[#1F2A24]/70">Phone / WhatsApp</div>
                <a href="tel:+916302122429" className="text-sm font-medium text-[#1F2A24] hover:text-[#2F5D50] transition-colors">
                  +91 6302122429
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full py-3 rounded-xl bg-[#2F5D50] hover:bg-[#244b40] text-[#F5EFE6] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
          >
            <span>Send a Message</span>
            <FiArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}
