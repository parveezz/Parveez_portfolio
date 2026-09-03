import Link from "next/link";
import { FiCheckCircle, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <div className="relative bg-[#E8DFD0]/90 border-2 border-[#D8CEBD] hover:border-[#2F5D50] rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_rgba(31,42,36,0.06)] hover:shadow-[0_14px_35px_rgba(47,93,80,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Header Row */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#2F5D50] bg-[#F5EFE6] border border-[#D8CEBD] px-3 py-1 rounded-md font-semibold">
            {project.categoryLabel}
          </span>

          <span className="text-xs text-[#2F5D50] font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2F5D50] animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Title & Client */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F2A24] group-hover:text-[#2F5D50] transition-colors">
            {project.title}
          </h3>
          <div className="text-xs text-[#1F2A24]/70 font-medium mt-1">
            {project.client} • {project.duration}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#1F2A24]/80 leading-relaxed">
          {project.description}
        </p>

        {/* Key Architectural Contributions */}
        <div className="space-y-2 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F5D50] font-semibold block">
            Key Contributions:
          </span>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2 text-xs text-[#1F2A24]/80">
                <FiCheckCircle className="text-[#2F5D50] text-sm mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Tech Pills & Actions */}
      <div className="pt-6 border-t border-[#D8CEBD] space-y-4 mt-6">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] px-2.5 py-1 rounded-md bg-[#F5EFE6] text-[#1F2A24] font-medium border border-[#D8CEBD]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2A24]/80 hover:text-[#2F5D50] transition-colors"
          >
            <FiGithub className="text-sm text-[#2F5D50]" />
            <span>Repository</span>
          </a>

          {project.liveUrl.startsWith("/") ? (
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 text-xs text-[#2F5D50] hover:text-[#1F2A24] font-bold transition-colors"
            >
              <span>Explore Live</span>
              <FiExternalLink className="text-sm" />
            </Link>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#2F5D50] hover:text-[#1F2A24] font-bold transition-colors"
            >
              <span>Visit Live Site</span>
              <FiExternalLink className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
