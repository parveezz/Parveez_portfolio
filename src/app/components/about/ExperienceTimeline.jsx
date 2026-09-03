import { FiBriefcase, FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Invertio Software Solutions",
      duration: "11 months total",
      roles: [
        {
          title: "Associate Software Engineer",
          period: "February 2026 – Present (8 months)",
          location: "Toli Chowki, Hyderabad, Telangana",
          description:
            "Full-Stack Developer with hands-on experience in React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS. Specializing in building responsive, accessible, and performance-focused web applications that deliver seamless user experiences.",
          highlights: [
            "Architected reusable component systems improving development velocity across client deliverables.",
            "Integrated RESTful APIs and optimized client-side state handling and load times.",
            "Enforced accessibility (a11y) standards and SEO best practices across production builds."
          ]
        },
        {
          title: "Full-Stack Developer",
          period: "November 2025 – February 2026 (4 months)",
          location: "Shaikpet, Hyderabad",
          description:
            "Contributed to core UI/UX feature development, responsive bug fixing, and client application workflows."
        }
      ]
    },
    {
      company: "Full Stack Academy",
      duration: "5 months",
      roles: [
        {
          title: "Full-Stack Trainee",
          period: "August 2025 – December 2025",
          location: "Hyderabad",
          description:
            "Intensive hands-on training in modern web engineering, full-stack architecture, database management, and building production-ready applications."
        }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full border-t border-[#D8CEBD]">
      <div className="mb-8 space-y-1">
        <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] font-semibold">
          Career Journey
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="bg-[#E8DFD0]/80 border border-[#D8CEBD] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md hover:border-[#2F5D50] transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8CEBD] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#D8CEBD] flex items-center justify-center text-[#2F5D50]">
                  <FiBriefcase className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1F2A24]">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-[#1F2A24]/70 font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {exp.roles.map((role, roleIdx) => (
                <div key={roleIdx} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-semibold text-[#1F2A24] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2F5D50]" />
                      {role.title}
                    </h4>
                    <span className="text-xs font-mono text-[#1F2A24]/70">
                      {role.period}
                    </span>
                  </div>

                  <div className="text-xs text-[#1F2A24]/70 flex items-center gap-1.5">
                    <FiMapPin className="text-xs text-[#2F5D50]" />
                    {role.location}
                  </div>

                  <p className="text-xs sm:text-sm text-[#1F2A24]/85 leading-relaxed pt-1">
                    {role.description}
                  </p>

                  {role.highlights && (
                    <ul className="space-y-1.5 pt-2">
                      {role.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1F2A24]/80">
                          <FiCheckCircle className="text-[#2F5D50] text-sm mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
