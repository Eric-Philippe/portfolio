import { ParallaxProvider } from "react-scroll-parallax";

import Head from "../components/DevPortfolio/Head";
import ProjectSection from "../components/DevPortfolio/ProjectSection";
import SkillsSection from "../components/DevPortfolio/SkillsSection";
import AboutSection from "../components/DevPortfolio/AboutSection";
import ContactSection from "../components/DevPortfolio/ContactSection";

import RouterProps from "../models/Router";

export default function DevPortfolio({ setIsDev }: RouterProps) {
  return (
    <ParallaxProvider>
      <Head setIsDev={setIsDev} />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </ParallaxProvider>
  );
}
