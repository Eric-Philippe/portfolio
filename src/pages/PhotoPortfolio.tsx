import Head from "../components/PhotoPortfolio/Head";
import Canon800d_Canvas from "../components/PhotoPortfolio/Canon_800d_Canvas";
import SetupSection from "../components/PhotoPortfolio/SetupSection";
import ContactSection from "../components/PhotoPortfolio/ContactSection";

import RouterProps from "../models/Router";
import AlbumsSection from "../components/PhotoPortfolio/AlbumsSection";
import { useState } from "react";

export default function PhotoPortfolio({ setIsDev }: RouterProps) {
  const [focus, setFocus] = useState<number | null>(null);

  const isSmallScreen = window.innerWidth < 1024;

  if (focus === null)
    return (
      <>
        <Head setIsDev={setIsDev} />
        {/** For the photo portfolio there are two different layouts */}
        {(!isSmallScreen && (
          <div
            className="project-container mb-6"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              overflow: "auto",
            }}
          >
            <div style={{ overflowY: "hidden" }}>
              <SetupSection />
            </div>
            <div>
              <Canon800d_Canvas />
            </div>
          </div>
        )) || (
          <>
            <img
              className="rounded-full object-cover w-32 h-32 mx-auto mb-6"
              src="canon_800d.gif"
              width="100%"
            />

            <SetupSection />
          </>
        )}
        <AlbumsSection setFocus={setFocus} />
      </>
    );

  return <h1>Consult Albums</h1>;
}
