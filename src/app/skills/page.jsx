import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillsHero from "../components/skills/SkillsHero";
import SkillsFilterGrid from "../components/skills/SkillsFilterGrid";
import SkillsImpact from "../components/skills/SkillsImpact";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1F2A24] selection:bg-[#E8DFD0] selection:text-[#1F2A24] flex flex-col justify-between font-normal">
      {/* Top Floating White Sticky Navbar */}
      <Navbar />

      {/* Hero Header */}
      <SkillsHero />

      {/* Filterable Complete Skills Directory */}
      <SkillsFilterGrid />

      {/* Production Impact Summary */}
      <SkillsImpact />

      {/* Global Modern Footer */}
      <Footer />
    </div>
  );
}
