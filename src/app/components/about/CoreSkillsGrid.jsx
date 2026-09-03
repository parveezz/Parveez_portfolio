import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiPostgresql, SiMongodb } from "react-icons/si";
import { FiCode, FiAward, FiLayers } from "react-icons/fi";

export default function CoreSkillsGrid() {
  const coreSkills = [
    { name: "React.js", icon: <FaReact className="text-[#2F5D50]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-[#1F2A24]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#2F5D50]" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#C9A66B]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#2F5D50]" /> },
    { name: "MongoDB Atlas", icon: <SiMongodb className="text-[#2F5D50]" /> },
    { name: "REST APIs", icon: <FiCode className="text-[#2F5D50]" /> },
    { name: "SEO Optimization", icon: <FiAward className="text-[#C9A66B]" /> },
    { name: "UI/UX Components", icon: <FiLayers className="text-[#2F5D50]" /> }
  ];

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full border-t border-[#D8CEBD]">
      <div className="mb-8 space-y-1">
        <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] font-semibold">
          Core Competencies
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight">
          Top Skills & Expertise
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {coreSkills.map((skill, idx) => (
          <div 
            key={idx} 
            className="bg-[#E8DFD0]/80 border border-[#D8CEBD] rounded-xl p-4 flex items-center gap-3 shadow-xs hover:border-[#2F5D50] transition-all"
          >
            <div className="text-xl shrink-0">
              {skill.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#1F2A24]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
