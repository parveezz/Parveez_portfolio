export default function ProjectsHero() {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      {/* Subtle Warm Amber & Dark Green Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#C9A66B]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-[#2F5D50]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DFD0] border border-[#D8CEBD] text-xs font-mono text-[#2F5D50] font-semibold shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#2F5D50] animate-pulse" />
        [ PORTFOLIO WORK ]
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1F2A24] leading-[1.12]">
        Featured Projects & Deliverables
      </h1>

      <p className="text-[#1F2A24]/75 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        Commercial web applications, enterprise dashboards, and digital platforms contributed to during my professional tenure at <strong className="text-[#1F2A24] font-medium">Invertio Software Solutions</strong> and personal engineering builds.
      </p>
    </div>
  );
}
