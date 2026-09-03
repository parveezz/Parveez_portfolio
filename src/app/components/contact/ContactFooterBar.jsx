import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactFooterBar() {
  return (
    <footer className="w-full bg-[#E8DFD0]/95 backdrop-blur-md px-4 sm:px-8 lg:px-12 py-3 sm:py-4 border-t border-[#D8CEBD] shrink-0 mt-4 lg:mt-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 text-center lg:text-left">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-[#1F2A24] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[11px] sm:text-xs text-[#1F2A24]/75 font-normal">
            Available for full-time opportunities, freelance projects, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full lg:w-auto text-center sm:text-left">
          {/* Location */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#C9A66B] block mb-0.5">
              Location
            </span>
            <div className="text-xs font-medium text-[#1F2A24]">
              New Bhoiguda, Hyderabad
            </div>
            <div className="text-[11px] text-[#1F2A24]/70 font-normal">
              PIN: 500003, Telangana, India
            </div>
          </div>

          {/* Email */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#C9A66B] block mb-0.5">
              Email Address
            </span>
            <a 
              href="mailto:shaikparveez290@gmail.com" 
              className="text-xs font-medium text-[#2F5D50] hover:text-[#1F2A24] transition-colors"
            >
              shaikparveez290@gmail.com
            </a>
            <div className="text-[11px] text-[#1F2A24]/70 font-normal">
              Replies within 24 hours
            </div>
          </div>

          {/* Phone & Social */}
          <div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#C9A66B] block mb-0.5">
              Phone / WhatsApp
            </span>
            <a 
              href="tel:+916302122429" 
              className="text-xs font-medium text-[#1F2A24] hover:text-[#2F5D50] transition-colors"
            >
              +91 6302122429
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-1.5">
              <a
                href="https://github.com/parveezz"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="relative group p-1.5 rounded-lg bg-[#F5EFE6] hover:bg-[#2F5D50] text-[#1F2A24] hover:text-[#F5EFE6] border border-[#D8CEBD] transition-all active:scale-95 shadow-xs"
              >
                <FaGithub className="text-sm" />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1F2A24] text-[#F5EFE6] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-parveez"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="relative group p-1.5 rounded-lg bg-[#F5EFE6] hover:bg-[#0077b5] text-[#1F2A24] hover:text-white border border-[#D8CEBD] transition-all active:scale-95 shadow-xs"
              >
                <FaLinkedin className="text-sm" />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1F2A24] text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
