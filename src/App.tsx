import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import AboutSection from "./components/Welcome/AboutSection";
import Head from "./components/Welcome/Head";
import ProjectSection from "./components/Welcome/ProjectSection";
import SkillsSection from "./components/Welcome/SkillsSection";
import ContactSection from "./components/Welcome/ContactSection";

export default function App() {
  return (
    <ParallaxProvider>
      <>
        <Head />
        <ProjectSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </>
    </ParallaxProvider>
  );
}
