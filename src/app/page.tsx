import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/Aboutme";
import { WorkExperience } from "../components/sections/WorkExperience";
import EducationSection from "../components/sections/Education";
import FeatureProject from "./projects/page";
import SkillSection from "../components/sections/SkillSection";
import ContactSection from "../components/sections/Contact";
import BlogSection from "./blog/page";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <EducationSection />
      <FeatureProject />
      <BlogSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}
