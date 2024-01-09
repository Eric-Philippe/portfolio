import Head from "../components/PhotoPortfolio/Head";
import Canon800d_Canvas from "../components/PhotoPortfolio/Canon_800d_Canvas";
import SetupSection from "../components/PhotoPortfolio/SetupSection";
import ContactSection from "../components/DevPortfolio/ContactSection";

import RouterProps from "../models/Router";

export default function PhotoPortfolio({ setIsDev }: RouterProps) {
  const isSmallScreen = window.innerWidth < 1024;
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

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://media.discordapp.net/attachments/970072034543562782/970072664670601277/IMG_20220430_172930.jpg?ex=65ac3992&is=6599c492&hm=e57607569015a3663bff38d6d2389c896f3faf50cb5fcf53cdf286e5fc99285c&=&format=webp&width=1325&height=400"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "3px",
            width: "60%",
            marginTop: "-10%",
          }}
        >
          <h1 className="text-5xl text-center font-extrabold text-black z-10 relative">
            Mes albums
          </h1>
        </div>
      </div> */}
      <ContactSection />
    </>
  );
}
