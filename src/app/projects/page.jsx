import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCta from "../components/projects/ProjectsCta";

export const metadata = {
  title: "Projects & Deliverables | Commercial Case Studies",
  description:
    "Explore commercial deliverables and case studies by Shaik Parveez, including Invertio Corporate Website, GreenLoop Admin Portal, ZeroQueries SaaS, and full-stack web applications.",
  keywords: [
    "Shaik Parveez Projects",
    "Invertio Corporate Website",
    "GreenLoop Admin Portal",
    "ZeroQueries Landing Page",
    "Next.js Portfolio Projects",
    "React Case Studies",
    "Full-Stack Web Deliverables",
    "Enterprise Admin Dashboards",
  ],
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1F2A24] selection:bg-[#E8DFD0] selection:text-[#1F2A24] flex flex-col justify-between font-normal">
      {/* Top Floating White Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Hero Header */}
        <ProjectsHero />

        {/* Filter Bar & Projects Cards Grid */}
        <ProjectsGrid />
      </section>

      {/* Call to Action Banner */}
      <ProjectsCta />

      {/* Global Modern Footer */}
      <Footer />
    </div>
  );
}
