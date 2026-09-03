import { FiBookOpen } from "react-icons/fi";

export default function EducationSection() {
  const education = [
    {
      institution: "Malla Reddy Institute of Technology and Science and Engineering",
      degree: "Bachelor of Technology - B.Tech in Computer Science and Engineering",
      period: "August 2019 – July 2023",
      location: "Hyderabad, Telangana"
    },
    {
      institution: "Sri Chaitanya Junior Kalasala",
      degree: "Intermediate Education",
      period: "June 2017 – March 2019",
      location: "Telangana"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full border-t border-[#D8CEBD]">
      <div className="mb-8 space-y-1">
        <span className="text-xs uppercase tracking-widest font-mono text-[#2F5D50] font-semibold">
          Academic Background
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((edu, idx) => (
          <div 
            key={idx} 
            className="bg-[#E8DFD0]/80 border border-[#D8CEBD] rounded-2xl p-6 space-y-2 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 text-[#2F5D50]">
              <FiBookOpen className="text-lg text-[#2F5D50]" />
              <span className="text-xs font-mono font-medium text-[#C9A66B]">{edu.period}</span>
            </div>
            <h3 className="text-base font-semibold text-[#1F2A24] leading-snug">
              {edu.institution}
            </h3>
            <p className="text-xs sm:text-sm text-[#1F2A24]/85 font-medium">
              {edu.degree}
            </p>
            <p className="text-xs text-[#1F2A24]/70">
              {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
