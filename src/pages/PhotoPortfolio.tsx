import Head from "../components/PhotoPortfolio/Head";
import ContactSection from "../components/DevPortfolio/ContactSection";
import ProjectSection from "../components/PhotoPortfolio/SetupSection";
import Canon800d_Canvas from "../components/PhotoPortfolio/Canon_800d_Canvas";
import RouterProps from "../models/Router";

export default function PhotoPortfolio({ setIsDev }: RouterProps) {
  return (
    <>
      <Head setIsDev={setIsDev} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          overflow: "auto",
        }}
      >
        <div style={{ overflowY: "hidden" }}>
          <ProjectSection />
          <div className="2"></div>
        </div>
        <div>
          <Canon800d_Canvas />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
