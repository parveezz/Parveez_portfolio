import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import ProjectsTeaser from "./components/home/ProjectsTeaser";
import SkillsOverview from "./components/home/SkillsOverview";
import ExperienceSummary from "./components/home/ExperienceSummary";
import ContactCta from "./components/home/ContactCta";

export const metadata = {
  title: "Shaik Parveez | Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Shaik Parveez — Full-Stack Developer specializing in Next.js 15, React, Node.js, and cloud database applications.",
  keywords: [
    "Shaik Parveez",
    "Full-Stack Developer",
    "Frontend Developer Hyderabad",
    "Next.js Developer India",
    "React Developer",
    "Invertio Software Solutions",
    "Tailwind CSS Developer",
    "Node.js Backend Engineer",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1F2A24] selection:bg-[#E8DFD0] selection:text-[#1F2A24] flex flex-col justify-between font-normal">
      {/* Top Floating White Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Client Projects Teaser Section */}
      <ProjectsTeaser />

      {/* Skills & Architecture Overview */}
      <SkillsOverview />

      {/* Career & Experience Highlight */}
      <ExperienceSummary />

      {/* Bottom Call to Action Banner */}
      <ContactCta />

      {/* Global Modern Footer */}
      <Footer />
    </div>
  );
}
