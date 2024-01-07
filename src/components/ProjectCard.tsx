import { useState } from "react";
import { Tags } from "../utils/Tags";
import { FaPlus } from "react-icons/fa";

interface ProjectProps {
  title: string;
  date: string;
  tags: Tags;
  techs: string[];
  shortDesc: string;
  github: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div
      className="rounded-3xl overflow-hidden col-span-full lg:col-span-1"
      data-projection-id="18"
      style={{ opacity: 1, transform: "none" }}
    >
      <a
        className="group relative focus:outline-none block border border-black py-4 lg:py-10 px-6 lg:px-14 bg-white overflow-hidden transform transition hover:scale-[1.01] h-full will-change-transform rounded-3xl"
        href={project.github}
      >
        <div className="relative max-w-screen-sm mr-4 lg:mr-8 w-full z-10">
          <h3 className="font-[900] tracking-tight text-3xl">
            {project.title.length > 10 && window.innerWidth < 1024 ? (
              <span className="text-2xl">{project.title}</span>
            ) : (
              project.title
            )}
          </h3>
          <button
            className="absolute top-1 right-[-10px] px-3 py-1 rounded-md text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gh-marketingLight hover:text-gh-marketingDark"
            onMouseEnter={() => setIsButtonHovered(true)}
          >
            <FaPlus />
          </button>
          <img
            src={`https://raw.githubusercontent.com/Eric-Philippe/GlitchAndBooks/main/img/stat-first.png`}
            alt="Random Unsplash img"
            className={`absolute top-1 right-1 transition-all duration-500 ease-in-out transform origin-top-right ${
              isButtonHovered ? "opacity-100 scale-150" : "opacity-0 scale-100"
            }`}
            style={{
              maxWidth: "69%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            onMouseLeave={() => setIsButtonHovered(false)}
          />
          <div className="text-gh-textLight mt-3">{project.date}</div>
          <div className="mt-4">
            <div
              className="inline-block rounded-md px-3 py-2 uppercase tracking-widest text-xs font-semibold"
              style={{
                background: project.tags.fadedColor,
                color: project.tags.color,
              }}
            >
              {project.tags.name}
            </div>
          </div>
          <div className="flex flex-wrap mt-3">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-md px-2 py-1 mr-2 mb-3 bg-gray-300 text-gray-800 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            className="font-light mt-5 pb-5 text-lg"
            style={{
              fontSize: "1.25rem",
            }}
          >
            {project.shortDesc}
          </div>
          <a href={project.github} className="absolute bottom-1 right-1">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              style={{ marginBottom: "-5", marginRight: "-0.5em" }}
            >
              <title>GitHub icon</title>
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.905-.015 3.3 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-[max(30em,50%)] opacity-80">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={"pj-" + project.title.split(" ").join("-")}
                x1="0"
                y1="1"
                x2="1"
                y2="0"
              >
                <stop offset="0" stopColor={project.tags.secColor}></stop>
                <stop
                  offset="1"
                  stopColor={project.tags.secGradientColor}
                ></stop>
              </linearGradient>
            </defs>
            <path
              d="M0 1 Q 0.8 0.8 1 0 L 1 1 Z"
              fill={`url(#pj-${project.title.split(" ").join("-")})`}
            ></path>
          </svg>
          <div className="absolute inset-0 bg-white transition duration-300 group-hover:translate-x-[120%] will-change-transform"></div>
        </div>
      </a>
    </div>
  );
}
