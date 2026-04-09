import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/Aboutme";
import { WorkExperience } from "../components/sections/WorkExperience";
import EducationSection from "../components/sections/Education";
import FeatureProject from "./projects/page";
import SkillSection from "../components/sections/SkillSection";
import ContactSection from "../components/sections/Contact";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <EducationSection />
      <FeatureProject />
      <SkillSection />
      <ContactSection />
    </div>
  );
}
