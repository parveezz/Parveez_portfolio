"use client";

import { useEffect, useRef } from "react";

export default function ExperiencePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true
      video.loop = true;
      video.play().catch(() => { });
    }
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const experiences = [
    {
      id: "01",
      role: "Frontend Developer Intern",
      type: "Internship",
      period: "3 Months",
      description:
        "Started my professional journey by learning and contributing to real-world frontend development projects.",
      responsibilities: [
        "Developed responsive user interfaces using React.js and JavaScript.",
        "Converted Figma designs into functional, pixel-perfect web interfaces.",
        "Built reusable components for frontend applications.",
        "Integrated REST APIs with frontend applications.",
        "Worked on real-world application features and UI improvements.",
      ],
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      id: "02",
      role: "Frontend Developer",
      type: "Full-time",
      period: "Current Role",
      description:
        "Transitioned into a full-time position after completing the first three months of internship, continuing to build and scale production software applications.",
      responsibilities: [
        "Developed and maintained responsive web applications.",
        "Implemented frontend modules for enterprise management systems.",
        "Built payroll and institutional HR management functionalities in Invertio CMS.",
        "Developed reusable UI components and streamlined application workflows.",
        "Integrated APIs, search, filtering, and dynamic tab navigation.",
        "Collaborated closely with developers to deliver production software solutions.",
      ],
      skills: [
        "React.js",
        "JavaScript",
        "Next.js",
        "REST APIs",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#88b7d5] select-none text-white">

      {/* BACKGROUND VIDEO */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
        >
          <source src="/experience.mp4" type="video/mp4" />
        </video>

        {/* Soft Video Overlay for Maximum Legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-24 space-y-16">

        {/* HEADER */}
        <header className="text-center space-y-3">
          <p className="font-['Grandstander'] font-bold text-xs sm:text-sm uppercase tracking-[0.25em] text-[#38bdf8] drop-shadow-md">
            Career Progression &amp; Track Record
          </p>

          <h1 className="font-['Grandstander'] font-black text-6xl sm:text-8xl md:text-9xl text-white uppercase drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)] leading-none">
            Experience
          </h1>

          <p className="font-['Inter'] text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] font-medium">
            My professional journey, career milestones, and engineering experience
            building real-world software applications.
          </p>
        </header>

        {/* EXPERIENCE SECTION */}
        <section className="max-w-4xl mx-auto">

          {/* MAIN COMPANY CONTAINER */}
          <div className="
            relative overflow-hidden
            rounded-[40px] sm:rounded-[48px]
            border-2 border-[#38bdf8]/40
            hover:border-[#38bdf8]
            bg-[#07111e]/15
            shadow-[0_20px_60px_rgba(0,0,0,0.65)]
            hover:shadow-[0_25px_70px_rgba(56,189,248,0.25)]
            transition-all duration-300
            p-6 sm:p-12
          ">

            {/* DECORATIVE AMBIENT GLOW */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none" />

            {/* COMPANY HEADER */}
            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-8 border-b border-white/15">

              <div className="flex items-center gap-4">
                {/* Company Logo Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38bdf8]/25 to-[#0284c7]/35 border-2 border-[#38bdf8]/50 flex items-center justify-center font-['Grandstander'] font-black text-xl text-white shadow-[0_0_20px_rgba(56,189,248,0.5)] shrink-0">
                  IS
                </div>

                <div>
                  <p className="text-[#38bdf8] font-['Grandstander'] font-bold text-xs uppercase tracking-[0.2em] mb-1">
                    Company
                  </p>
                  <h2 className="font-['Grandstander'] font-black text-white text-2xl sm:text-3xl tracking-tight">
                    Invertio Software Solutions Pvt. Ltd.
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm font-['Inter'] mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    Professional Engineering Experience
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <span className="
                self-start sm:self-center
                px-4 py-2
                rounded-full
                bg-[#38bdf8]/15
                border border-[#38bdf8]/40
                text-[#38bdf8]
                font-['Grandstander']
                font-bold
                text-xs uppercase tracking-wider
                shadow-[0_0_15px_rgba(56,189,248,0.25)]
              ">
                Internship → Full-time
              </span>

            </div>

            {/* CAREER TIMELINE */}
            <div className="relative mt-12">

              {/* TIMELINE DOTTED SPINE */}
              <div
                className="absolute left-[11px] top-4 bottom-10 w-0 border-l-2 border-dashed border-[#38bdf8]/60 z-0"
                aria-hidden="true"
              />

              <div className="space-y-14 relative z-10">

                {experiences.map((experience) => (

                  <article
                    key={experience.id}
                    className="relative pl-10"
                  >

                    {/* TIMELINE PULSING NODE */}
                    <div className="
                      absolute left-0 top-1
                      w-6 h-6
                      rounded-full
                      bg-[#07111e]
                      border-2 border-[#38bdf8]
                      shadow-[0_0_15px_rgba(56,189,248,0.8)]
                      flex items-center justify-center
                      z-10
                    ">
                      <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                      <div className="absolute w-2 h-2 rounded-full bg-[#38bdf8]" />
                    </div>

                    {/* ROLE HEADER */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[#38bdf8] font-['Grandstander'] font-black text-xs tracking-[0.2em]">
                        EXPERIENCE {experience.id}
                      </span>

                      <span className="text-[10px] font-['Grandstander'] font-bold uppercase tracking-wider text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1">
                        {experience.type}
                      </span>

                      <span className="text-xs font-['Inter'] text-white/95 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                        {experience.period}
                      </span>
                    </div>

                    {/* ROLE TITLE */}
                    <h3 className="font-['Grandstander'] font-black text-white text-2xl sm:text-3xl mt-3 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {experience.role}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="font-['Inter'] text-white text-sm sm:text-base mt-3 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                      {experience.description}
                    </p>

                    {/* RESPONSIBILITIES */}
                    <div className="mt-7 space-y-3">
                      <h4 className="font-['Grandstander'] font-bold text-xs uppercase tracking-wider text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                        Key Responsibilities
                      </h4>

                      <ul className="space-y-3">
                        {experience.responsibilities.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 font-['Inter'] text-white text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shrink-0 mt-2 shadow-[0_0_8px_#38bdf8]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* TECHNOLOGIES */}
                    <div className="mt-7 space-y-3">
                      <h4 className="font-['Grandstander'] font-bold text-xs uppercase tracking-wider text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                        Technologies &amp; Skills
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="
                              text-xs font-['Inter'] font-semibold
                              text-white
                              px-3.5 py-1.5
                              rounded-full
                              bg-black/50
                              border border-[#38bdf8]/40
                              shadow-[0_0_12px_rgba(0,0,0,0.6)]
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </article>

                ))}

              </div>

            </div>

            {/* CAREER GROWTH CALLOUT */}
            <div className="
              mt-14
              p-6 sm:p-8
              rounded-3xl
              bg-[#38bdf8]/10
              border-2 border-[#38bdf8]/35
              shadow-[0_0_30px_rgba(56,189,248,0.15)]
              space-y-2
            ">
              <p className="text-[#38bdf8] font-['Grandstander'] font-bold text-xs uppercase tracking-widest">
                Career Growth &amp; Promotion
              </p>

              <h4 className="font-['Grandstander'] font-black text-white text-xl sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                From Intern to Full-time Developer
              </h4>

              <p className="font-['Inter'] text-white text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] font-medium">
                Started as an intern, earned the opportunity to transition
                into a full-time role after completing three months, and continue
                building production-grade frontend features across Invertio software products.
              </p>
            </div>

          </div>

        </section>

        {/* MOTIVATIONAL FOOTER NOTE */}
        <footer className="text-center space-y-2 pt-4">
          <p className="font-['Grandstander'] text-white font-bold text-lg sm:text-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Every experience is a step forward.
          </p>

          <p className="font-['Inter'] text-white/90 text-xs sm:text-sm font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Learning • Building • Growing
          </p>
        </footer>

      </main>

    </div>
  );
}
