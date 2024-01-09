import { useEffect } from "react";

/** @Components */
import { Header } from "../Common/Header";
import { ParticlesDesign } from "../Animations/Particles/Particles";

/** @Utils */
import { drawCircle, getMyAge } from "../../utils/utils";

/** @Interface */
import RouterProps from "../../models/Router";

/** @Assets */
import { DEV_COLOR_PALETTE as colors } from "../../assets/ColorPalette";

export default function Head({ setIsDev }: RouterProps) {
  useEffect(() => {
    drawCircle(400, 0, 0, colors.first);
    drawCircle(200, 600, 0, colors.second);
    drawCircle(400, 800, 0, colors.second);

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
        <div className="absolute top-0 left-0 right-0 h-72 opacity-20 ">
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
          firstColor={colors.first}
          secondColor={colors.second}
        />
      </div>

      <div className="py-8 lg:py-16 flex items-center px-6">
        <div className="text-center mx-auto inline-block">
          <div className="py-2 z-1 px-6 gradient-border-badge relative bg-transparent inline-flex items-center justify-center">
            <span
              className={`z-10 text-sm lg:text-base bg-clip-text text-transparent font-semibold relative -top-px`}
              style={{
                background: `linear-gradient(to right, ${colors.first}, ${colors.second})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              DevPortfolio
            </span>
          </div>
          <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mx-auto">
            <a
              style={{
                background: `linear-gradient(to right, ${colors.third}, #000000, #000000)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              Éric PHILIPPE
            </a>{" "}
            - Développeur{" "}
            <a
              style={{
                background: `linear-gradient(to right, #000000, #000000, #000000, ${colors.third})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              FullStack
            </a>
          </h1>
          <div className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
            Développeur FullStack de {getMyAge()} ans, passionné par le code et
            doté d'une solide expertise informatique.
          </div>
        </div>
      </div>
    </div>
  );
}
