import { useEffect, useState } from "react";
import axios from "axios";

import { RouterFocusProps } from "../models/Router";
import { drawCircle } from "../utils/utils";
import { Project } from "../utils/Projects";
import { FaGithub } from "react-icons/fa";
import AnimatedSeparator from "../components/Animations/AnimatedSeparator";

interface RepoData {
  html_url: string;
  owner: {
    avatar_url: string;
  };
  name: string;
  description: string;
}

export default function DevConsult({
  project,
  setFocus,
}: {
  project: Project;
  setFocus: RouterFocusProps["setFocus"];
}) {
  const parts = project.gitLink.split("/");
  const repoName = parts.pop();
  const userName = parts.pop();

  const [repoData, setRepoData] = useState<RepoData | null>(null);

  const isSmallScreen = window.innerWidth < 1024;
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${userName}/${repoName}`)
      .then((response) => {
        setRepoData(response.data);
      })
      .catch((error) => console.error(error));

    window.scrollTo(0, 0);
  }, [project.gitLink]);

  const drawCircles = () => {
    drawCircle(
      100,
      1,
      -20,
      project.tag.secColor,
      "canvas-bubble-consult",
      "rgba(255,255,255,0.1)"
    );

    drawCircle(
      90,
      90,
      10,
      project.tag.secColor,
      "canvas-bubble-consult",
      "rgba(255,255,255,0.1)"
    );

    drawCircle(
      90,
      120,
      10,
      project.tag.secGradientColor,
      "canvas-bubble-consult",
      "rgba(255,255,255,0.1)"
    );

    drawCircle(
      70,
      215,
      10,
      project.tag.secGradientColor,
      "canvas-bubble-consult",
      "rgba(255,255,255,0.1)"
    );

    drawCircle(
      40,
      280,
      10,
      project.tag.secColor,
      "canvas-bubble-consult",
      "rgba(255,255,255,0.1)"
    );
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas-bubble-consult");

    if (canvas) {
      setTimeout(() => {
        canvas.style.opacity = "1";
        canvas.style.transition = "opacity 0.5s ease-in-out";
      }, 1000);
    }

    window.addEventListener("resize", () => {
      drawCircles();
    });

    drawCircles();
  }, []);

  console.log(project);

  return (
    <div className="relative">
      <div className="head-content">
        <div className="absolute top-0 left-0 right-0 h-72 opacity-90 ">
          <div
            className="fade-in"
            style={{
              width: "100%",
              animationDelay: "0.6s",
              animationDuration: "1s",
            }}
          >
            <canvas
              id="canvas-bubble-consult"
              style={{
                width: isSmallScreen ? "150%" : "100%",
                height: isSmallScreen ? "300px" : "850px",
                opacity: 0,
              }}
            ></canvas>
          </div>
        </div>
        {/* {<!-- Canvas Bubbles -->} */}

        <div className="relative w-full overflow-hidden min-h-[90vh] flex justify-center pt-12 lg:py-24 px-8 lg:px-0 z-0">
          <button
            className="fixed top-10 right-10 z-50 w-12 h-12 bg-black rounded-full text-white flex items-center justify-center text-xl focus:outline-none focus:ring focus:ring-gray-400"
            onClick={() => setFocus(null)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 352 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </button>
          <div className="relative mb-16 max-w-4xl z-30">
            <h1
              className={`z-10 lg:text-8xl text-6xl font-bold bg-clip-text relative -top-px text-left mb-16 text-gray-800 ${
                project.title.length > 20 ? "text-4xl" : ""
              }`}
              style={{
                wordWrap: "normal",
                width: isSmallScreen ? "200px" : "500px",
              }}
            >
              {project.title}
            </h1>

            <div className="text-center">
              <div className="flex justify-center mb-14">
                <figure>
                  <img
                    src={project.previewImg}
                    alt=""
                    className="w-full mx-auto"
                    style={{
                      filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))",
                      borderRadius: "1rem",
                      width: "80%",
                      display: "block",
                    }}
                  />
                  <figcaption className="text-gray-500 text-sm mt-2 text-center">
                    {project.title} Preview Image
                  </figcaption>
                </figure>
              </div>

              <div className="col-span-6 lg:col-span-4 flex justify-center items-center">
                <dl className="space-y-2 col-span-6 lg:col-span-4">
                  <dt className="opacity-100 font-bold uppercase tracking-widest text-xs">
                    Tag
                  </dt>
                  <div className="mt-4">
                    <div
                      className="inline-block rounded-md px-3 py-2 uppercase tracking-widest text-xs font-semibold"
                      style={{
                        background: project.tag.fadedColor,
                        color: project.tag.color,
                      }}
                    >
                      {project.tag.name}
                    </div>
                  </div>
                </dl>
                <dl className="space-y-2 col-span-6 lg:col-span-4 ml-4">
                  <dt className="opacity-100 font-bold uppercase tracking-widest text-xs">
                    Date de création
                  </dt>
                  <div className="mt-4">
                    <div className="inline-block rounded-md px-3 py-2 uppercase tracking-widest text-xs font-semibold">
                      {project.date}
                    </div>
                  </div>
                </dl>
              </div>

              <div>
                <div className="relative py-12 px-0 lg:px-16 wide text-xl text-center text-indigo-500 border-t border-b border-indigo-300 !mt-20 !mb-10">
                  <p>{project.shortDesc}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row mb-8">
                <div className="w-full sm:w-1/3">
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <span className="font-semibold uppercase tracking-widest text-sm text-center">
                      Tech Stack
                    </span>
                    <dl className="divide-y divide-gray-200">
                      {project.techs.map((tech) => (
                        <div className="py-4 grid gap-4 justify-items-center">
                          <dt className="text-sm font-medium text-gray-500 col-span-6 lg:col-span-6">
                            {tech}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="w-full sm:w-2/3 mt-4 sm:mt-0">
                  <div className="bg-white p-4 rounded-md border">
                    {/** Title */}
                    <span className="font-semibold uppercase tracking-widest text-sm text-center">
                      GitHub
                    </span>
                    {/** Owner Avatar Url banner */}
                    <div className="flex justify-center overflow-hidden">
                      <img
                        src={repoData?.owner.avatar_url}
                        alt=""
                        className="w-full object-cover h-48"
                        style={{
                          borderRadius: "1rem",
                        }}
                      />
                    </div>

                    <div className="text-left text-lg">
                      <span className="font-normal">{userName}/</span>
                      <span className="font-bold">{repoName}</span>
                    </div>

                    <div className="text-left text-sm text-gray-500">
                      {repoData?.description}
                    </div>

                    <div className="flex justify-center mt-8">
                      <a
                        href={repoData?.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <FaGithub className="mr-2" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatedSeparator color1="#5046e5" />
            </div>
          </div>
        </div>
        {/** MAIN CONTENT END */}
      </div>
    </div>
  );
}
