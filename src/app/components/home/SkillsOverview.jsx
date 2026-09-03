import { FiCode, FiDatabase, FiCpu, FiCheckCircle } from "react-icons/fi";

export default function SkillsOverview() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <FiCode className="text-xl text-[#2F5D50]" />,
      items: ["Next.js (App Router)", "React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI/UX Design"]
    },
    {
      category: "Backend & Database",
      icon: <FiDatabase className="text-xl text-[#2F5D50]" />,
      items: ["Node.js", "Express.js", "MongoDB Atlas", "PostgreSQL", "Mongoose ORM", "RESTful APIs", "Nodemailer (SMTP)"]
    },
    {
      category: "Tools & Environment",
      icon: <FiCpu className="text-xl text-[#C9A66B]" />,
      items: ["Git & GitHub", "Postman API Testing", "npm / npx", "VS Code", "Environment Config (.env)"]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] font-semibold">
          Core Expertise
        </span>
        <h2 className="text-2xl sm:text-4xl font-semibold text-[#1F2A24] tracking-tight">
          Technical Skills & Architecture
        </h2>
        <p className="text-[#1F2A24]/75 text-xs sm:text-sm">
          Proven competencies across modern frontend systems, backend APIs, and cloud database infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((skillGroup, idx) => (
          <div 
            key={idx} 
            className="bg-[#E8DFD0]/70 border border-[#D8CEBD] rounded-2xl p-6 space-y-4 hover:border-[#2F5D50] transition-all shadow-xs hover:shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#D8CEBD] flex items-center justify-center">
              {skillGroup.icon}
            </div>

            <h3 className="text-base font-semibold text-[#1F2A24]">
              {skillGroup.category}
            </h3>

            <ul className="space-y-2.5">
              {skillGroup.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1F2A24]/80">
                  <FiCheckCircle className="text-[#2F5D50] text-sm shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
