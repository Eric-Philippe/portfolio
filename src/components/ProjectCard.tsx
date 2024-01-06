import { Tags } from "../utils/Tags";

interface ProjectProps {
  title: string;
  date: string;
  tags: Tags;
  techs: string[];
  shortDesc: string;
  github: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
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
            {project.title}
          </h3>
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
          <div className="flex mt-3">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-md px-2 py-1 mr-2 bg-gray-300 text-gray-800 text-xs font-semibold"
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
