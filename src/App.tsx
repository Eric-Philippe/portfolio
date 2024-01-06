import { useEffect } from "react";
import "./App.css";
import { FaCamera, FaDesktop } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import projects from "./utils/Projects";
import { ParticlesDesign } from "./Particles";

export default function App() {
  const drawCircle = (
    circleRadius: number,
    circleX: number,
    circleY: number,
    color: string
  ) => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      const gradientRadius = circleRadius;

      const gradient = ctx.createRadialGradient(
        circleX,
        circleY,
        0,
        circleX,
        circleY,
        gradientRadius
      );

      const centerColor = color; // Couleur au centre du cercle
      const outerColor = "white"; // Couleur à l'extérieur du cercle

      gradient.addColorStop(0, centerColor);
      gradient.addColorStop(1, outerColor);

      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  };

  useEffect(() => {
    drawCircle(400, 0, 0, "#9867f0");
    drawCircle(200, 600, 0, "#ed4e50");
    drawCircle(400, 800, 0, "#ed4e50");

    const canvas = document.getElementById("canvas-bubble");

    if (canvas) {
      setTimeout(() => {
        canvas.style.opacity = "1";
        canvas.style.transition = "opacity 0.5s ease-in-out";
      }, 1000);
    }
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-72 z-[-1] opacity-20 pointer-events-none">
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
        <div className="h-1 bg-gradient-to-r from-[#9867f0] to-[#ed4e50]"></div>
        <ParticlesDesign />
        <header className="p-4">
          <div className="flex items-center justify-between">
            <a aria-label="Home" className="inline-block rounded-full" href="/">
              Eric PHILIPPE
            </a>
            <nav className="space-x-4 text-sm text-gray-800 flex">
              <a
                className="hover:underline flex items-center space-x-1.5"
                href="/"
              >
                <FaDesktop className="mt-0.5 w-4" />
                <span>Informatique</span>
              </a>
              <a
                className="hover:underline flex items-center space-x-1.5"
                href="/"
              >
                <FaCamera className="mt-0.5 w-4" />
                <span>Photographie</span>
              </a>
            </nav>
          </div>
        </header>
      </div>

      <div className="py-8 lg:py-16 flex items-center px-6">
        <div className="text-center mx-auto inline-block">
          <div className="py-2 z-1 px-6 gradient-border-badge relative bg-transparent inline-flex items-center justify-center">
            <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px">
              DevPortfolio
            </span>
          </div>
          <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mx-auto">
            <a
              style={{
                background:
                  "linear-gradient(to right, #8a0101, #000000, #000000)",
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
                background:
                  "linear-gradient(to right, #000000, #000000, #8a0101)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              FullStack
            </a>
          </h1>
          <div className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
            euismod, ultricies lorem eget, ultricies libero. Integer at
          </div>
        </div>
      </div>

      <div className="">
        <section className="scroll-mt-8 lg:scroll-mt-0">
          <div className="px-0 lg:px-4 overflow-hidden">
            <div className="lg:rounded-2xl py-12 lg:py-24 relative z-0 bg-gh-marketingDark">
              <div className="absolute inset-0 h-full w-full hidden lg:block pointer-events-none z-[-1] ">
                <div className="container h-full">
                  <div className="grid grid-cols-12 h-full overflow-hidden">
                    <div className="col-span-1 relative"></div>
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8">
                    <h2 className="text-5xl font-extrabold text-white mb-8">
                      Projets
                    </h2>
                    <button className="-ml-4 mb-4 px-4 py-2 text-md flex items-center font-medium opacity-80 m-1 text-white whitespace-nowrap rounded-full focus:ring-0 focus:outline-none hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10">
                      <div className="absolute -inset-20 pointer-events-none"></div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="inline-block mr-2 mt-[0.1em] opacity-40 text-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 185a167.85 167.85 0 01134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 01256 185zm80 146.73a167.51 167.51 0 01-52.37 118.08A135 135 0 00344 464c75 0 136-61 136-136a136 136 0 00-59.06-112.08A168.53 168.53 0 01336 331.73zm-52.42-125.54a167.87 167.87 0 0149.36 89.89 136.14 136.14 0 0058.06-95.7 135.87 135.87 0 00-107.43 5.81zM176.05 331.73a168.53 168.53 0 01-85-115.81A136 136 0 0032 328c0 75 61 136 136 136a135 135 0 0060.42-14.19 167.51 167.51 0 01-52.37-118.08zm3.01-35.65a167.87 167.87 0 0149.36-89.89A135.87 135.87 0 00121 200.38a136.14 136.14 0 0058.06 95.7zm123.84 49.25a168.22 168.22 0 01-93.8 0A135.9 135.9 0 00256 431.6a135.9 135.9 0 0046.9-86.27zM209 311.62a136 136 0 0094 0 135.93 135.93 0 00-47-87.22 135.93 135.93 0 00-47 87.22z"></path>
                      </svg>
                      Toutes les catégories
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {projects.map((project) => (
                        <ProjectCard key={project.filename} project={project} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
