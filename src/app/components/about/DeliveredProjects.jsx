import { FiCheckCircle, FiExternalLink } from "react-icons/fi";

export default function DeliveredProjects() {
  const deliveredProjects = [
    {
      name: "Invertio Corporate Website",
      category: "Corporate Platform",
      description: "Official corporate website built with modern UI, high-speed responsiveness, and search engine optimization.",
      liveUrl: "https://invertiosolutions.com/",
    },
    {
      name: "GreenLoop Admin Portal",
      category: "Enterprise Dashboard",
      description: "Full-featured administrative portal with dynamic data tables, analytics views, and REST API integration.",
      liveUrl: "https://admin.greenloop.sa/auth/login",
    },
    {
      name: "ZeroQueries Landing Page",
      category: "SaaS Landing Page",
      description: "High-conversion developer SaaS landing page designed with razor-sharp typography, animations, and zero blur.",
      liveUrl: "https://zeroqueries.com/",
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full border-t border-[#D8CEBD]">
      <div className="mb-8 space-y-1">
        <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] font-semibold">
          Production Track Record
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight">
          Key Projects Delivered
        </h2>
        <p className="text-xs sm:text-sm text-[#1F2A24]/75">
          Real-world commercial deliverables contributed to and deployed during professional tenure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {deliveredProjects.map((proj, idx) => (
          <div 
            key={idx} 
            className="bg-[#E8DFD0]/80 border border-[#D8CEBD] rounded-2xl p-6 space-y-3 hover:border-[#2F5D50] transition-all hover:-translate-y-0.5 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F5D50] bg-[#F5EFE6] border border-[#D8CEBD] px-2.5 py-0.5 rounded-full font-semibold">
                  {proj.category}
                </span>
                <span className="text-xs text-[#2F5D50] font-semibold flex items-center gap-1">
                  <FiCheckCircle className="text-xs text-[#2F5D50]" /> Delivered
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#1F2A24]">
                {proj.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#1F2A24]/80 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#D8CEBD]">
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F5D50] hover:text-[#1F2A24] transition-colors"
              >
                <span>Visit Live Platform</span>
                <FiExternalLink className="text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
