import { ParticlesDesign } from "./Particles";

export default function ParticlesCanva() {
  return (
    <>
      <ParticlesDesign color1="#cc4b4b" color2="#9867f0" />
      <div className="head-content">
        <div className="absolute top-0 left-0 right-0 h-72 z-[-1] opacity-20 pointer-events-none">
          <div
            className="fade-in"
            style={{
              width: "100%",
              height: "100%",
              animationDelay: "0.6s",
              animationDuration: "1s",
              zIndex: 1000,
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
      </div>
    </>
  );
}
