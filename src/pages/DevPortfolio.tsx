import { ParallaxProvider } from "react-scroll-parallax";

import Head from "../components/DevPortfolio/Head";
import ProjectSection from "../components/DevPortfolio/ProjectSection";
import SkillsSection from "../components/DevPortfolio/SkillsSection";
import AboutSection from "../components/DevPortfolio/AboutSection";
import ContactSection from "../components/DevPortfolio/ContactSection";

import RouterProps from "../models/Router";
import { useState } from "react";
import projects from "../utils/Projects";

export default function DevPortfolio({ setIsDev }: RouterProps) {
  const [focus, setFocus] = useState<number | null>(null);

  if (focus === null)
    return (
      <ParallaxProvider>
        <Head setIsDev={setIsDev} />
        <ProjectSection setFocus={setFocus} />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </ParallaxProvider>
    );

  return <>{projects[focus].title}</>;
}
