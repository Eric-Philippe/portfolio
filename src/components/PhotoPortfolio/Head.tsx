import { useEffect } from "react";

/** @Components */
import { Header } from "../Common/Header";
import { ParticlesDesign } from "../Animations/Particles/Particles";

/** @Utils */
import { drawCircle, getMyAge } from "../../utils/utils";

/** @Interface */
import RouterProps from "../../models/Router";

/** @Assets */
import { PHOTO_COLOR_PALETTE as colors } from "../../assets/ColorPalette";

export default function Head({ setIsDev, isDev }: RouterProps) {
  useEffect(() => {
    drawCircle(400, 0, 0, colors.first, "canvas-bubble");
    drawCircle(200, 600, 0, colors.second, "canvas-bubble");
    drawCircle(400, 800, 0, colors.second, "canvas-bubble");

    const canvas = document.getElementById("canvas-bubble");

    if (canvas) {
      setTimeout(() => {
        canvas.style.opacity = "1";
        canvas.style.transition = "opacity 0.5s ease-in-out";
      }, 1000);
    }
  }, []);

  return (
    <div className="relative">
      <ParticlesDesign color1={colors.first} color2={colors.second} />
      <div className="head-content">
        <div className="absolute top-0 left-0 right-0 h-72 opacity-20">
          <div
            className="fade-in"
            style={{
              width: "100%",
              height: "100%",
              animationDelay: "0.6s",
              animationDuration: "1s",
            }}
          >
            <canvas
              id="canvas-bubble"
              height="360"
              width="1241"
              style={{ width: "100%", height: "100%", opacity: 0 }}
            ></canvas>
          </div>
        </div>
        <Header
          setIsDev={setIsDev}
          isDev={isDev}
          firstColor={colors.second}
          secondColor={colors.first}
        />
      </div>

      <div className="py-8 lg:py-16 flex items-center px-6">
        <div className="text-center mx-auto inline-block">
          <div className="py-2 z-1 px-6 gradient-border-badge-photo relative bg-transparent inline-flex items-center justify-center">
            <span
              className={`z-10 text-sm lg:text-base bg-clip-text text-transparent font-semibold relative -top-px`}
              style={{
                background: `linear-gradient(to right, ${colors.first}, ${colors.second})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              PhotoPortfolio
            </span>
          </div>
          <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6">
            <a
              style={{
                background: `linear-gradient(to right, ${colors.first}, #000000, #000000, #000000)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              Éric PHILIPPE
            </a>{" "}
            - Photographe{" "}
            <a
              style={{
                background: `linear-gradient(to right, #000000, #000000, ${colors.second})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              Amateur
            </a>
          </h1>
          <div className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
            Photographe amateur de {getMyAge()} ans, je prends des photos pour
            le plaisir et pour partager mes expériences.
          </div>
        </div>
      </div>
    </div>
  );
}
