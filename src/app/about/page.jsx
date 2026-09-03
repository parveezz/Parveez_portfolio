import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import ExperienceTimeline from "../components/about/ExperienceTimeline";
import DeliveredProjects from "../components/about/DeliveredProjects";
import CoreSkillsGrid from "../components/about/CoreSkillsGrid";
import EducationSection from "../components/about/EducationSection";
import AboutCta from "../components/about/AboutCta";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1F2A24] selection:bg-[#E8DFD0] selection:text-[#1F2A24] flex flex-col justify-between font-normal">
      {/* Top Floating White Sticky Navbar */}
      <Navbar />

      {/* Hero Header & Biography */}
      <AboutHero />

      {/* Career Journey & Roles */}
      <ExperienceTimeline />

      {/* Key Projects Delivered */}
      <DeliveredProjects />

      {/* Core Competencies Grid */}
      <CoreSkillsGrid />

      {/* Academic Background */}
      <EducationSection />

      {/* Bottom Call to Action */}
      <AboutCta />

      {/* Global Modern Footer */}
      <Footer />
    </div>
  );
}
