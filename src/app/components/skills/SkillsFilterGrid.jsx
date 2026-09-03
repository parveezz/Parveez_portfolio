"use client";

import { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiMongodb, 
  SiPostgresql, 
  SiHtml5, 
  SiPostman, 
  SiGit 
} from "react-icons/si";
import { FiCode, FiSearch, FiZap, FiLayers } from "react-icons/fi";

export default function SkillsFilterGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & Data" },
    { id: "seo", label: "SEO & Architecture" },
    { id: "tools", label: "Tools & DevOps" }
  ];

  const fullSkillSet = [
    {
      name: "React.js",
      category: "frontend",
      icon: <FaReact className="text-[#2F5D50]" />,
      type: "Library",
      summary: "Reusable component systems, hooks, virtual DOM"
    },
    {
      name: "Next.js 15",
      category: "frontend",
      icon: <SiNextdotjs className="text-[#1F2A24]" />,
      type: "Framework",
      summary: "App Router, SSR, SSG, Server Components"
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: <SiJavascript className="text-[#C9A66B]" />,
      type: "Language",
      summary: "Async/await, closures, modern ES features, DOM APIs"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: <SiTailwindcss className="text-[#2F5D50]" />,
      type: "Styling",
      summary: "Design tokens, responsive layouts, micro-animations"
    },
    {
      name: "HTML5 & CSS3",
      category: "frontend",
      icon: <SiHtml5 className="text-[#2F5D50]" />,
      type: "Markup & Style",
      summary: "Semantic structure, responsive Flexbox & CSS Grid"
    },
    {
      name: "Search Engine Optimization (SEO)",
      category: "seo",
      icon: <FiSearch className="text-[#C9A66B]" />,
      type: "Strategy",
      summary: "On-page SEO, schema markup, Core Web Vitals"
    },
    {
      name: "Node.js & Express.js",
      category: "backend",
      icon: <FaNodeJs className="text-[#2F5D50]" />,
      type: "Runtime & Framework",
      summary: "RESTful services, middleware, request lifecycle"
    },
    {
      name: "MongoDB Atlas",
      category: "backend",
      icon: <SiMongodb className="text-[#2F5D50]" />,
      type: "Database",
      summary: "NoSQL document collections, Mongoose schemas, queries"
    },
    {
      name: "PostgreSQL",
      category: "backend",
      icon: <SiPostgresql className="text-[#2F5D50]" />,
      type: "Database",
      summary: "Relational schema design, SQL queries, table indexing, ACID transactions"
    },
    {
      name: "RESTful APIs",
      category: "backend",
      icon: <FiCode className="text-[#2F5D50]" />,
      type: "Protocol",
      summary: "Endpoint design, JSON serialization, HTTP status codes"
    },
    {
      name: "Performance Optimization",
      category: "seo",
      icon: <FiZap className="text-[#C9A66B]" />,
      type: "Architecture",
      summary: "Lazy loading, code splitting, asset minification"
    },
    {
      name: "Reusable Component Design",
      category: "seo",
      icon: <FiLayers className="text-[#2F5D50]" />,
      type: "Architecture",
      summary: "Atomic design patterns, clean code & maintainability"
    },
    {
      name: "Git & GitHub",
      category: "tools",
      icon: <SiGit className="text-[#2F5D50]" />,
      type: "Version Control",
      summary: "Branching workflows, commits, pull requests, collaboration"
    },
    {
      name: "Postman",
      category: "tools",
      icon: <SiPostman className="text-[#C9A66B]" />,
      type: "Testing",
      summary: "API request crafting, payload assertions, endpoint testing"
    }
  ];

  const filteredSkills = selectedCategory === "all"
    ? fullSkillSet
    : fullSkillSet.filter(s => s.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full border-t border-[#D8CEBD]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#2F5D50] font-semibold">
            Technical Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2A24] tracking-tight mt-0.5">
            Full Stack & Tooling Stack
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#E8DFD0] border border-[#D8CEBD] p-1.5 rounded-xl">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#2F5D50] text-[#F5EFE6] shadow-xs font-semibold"
                  : "text-[#1F2A24]/70 hover:text-[#1F2A24] hover:bg-[#F5EFE6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredSkills.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#E8DFD0]/75 border border-[#D8CEBD] rounded-xl p-4 sm:p-5 flex items-start gap-3.5 hover:border-[#2F5D50] transition-all shadow-xs hover:shadow-md"
          >
            <div className="text-2xl p-2 rounded-lg bg-[#F5EFE6] border border-[#D8CEBD] shrink-0">
              {item.icon}
            </div>
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-sm sm:text-base font-semibold text-[#1F2A24]">
                  {item.name}
                </h4>
                <span className="text-[10px] font-mono text-[#1F2A24]/60 uppercase">
                  {item.type}
                </span>
              </div>
              <p className="text-xs text-[#1F2A24]/80 leading-relaxed">
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
