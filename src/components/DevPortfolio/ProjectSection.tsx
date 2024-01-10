import { useState } from "react";

import ProjectCard from "./ProjectCard";

import { ALL_TAGS, Tags, getIconFromTag } from "../../utils/Tags";
import projects from "../../utils/Projects";
import { RouterFocusProps } from "../../models/Router";

export default function ProjectSection({ setFocus }: RouterFocusProps) {
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | Tags>(
    "all"
  );

  const toggleCategories = () => {
    setCategoriesVisible(!categoriesVisible);
    setCategory("all");
  };

  const setCategory = (selectedCategory: Tags | "all") => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <>
      <section className="scroll-mt-8 lg:scroll-mt-0 mb-5">
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
                  <div className="relative">
                    <h2
                      className="text-5xl font-extrabold text-white mb-8 z-10 relative"
                      id="realisations"
                    >
                      Réalisations
                    </h2>
                  </div>

                  {/** @CATEGORIES */}
                  <div className="flex flex-wrap">
                    <button
                      className="mb-4 mr-8 px-4 py-2 text-md items-center font-medium opacity-80 m-1 text-white whitespace-nowrap rounded-full focus:ring-0 focus:outline-none hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 my-1 transition-all"
                      onClick={toggleCategories}
                    >
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

                    <div
                      className={`flex flex-wrap transition-all duration-1000 transform origin-left ${
                        categoriesVisible ? "scale-x-100" : "scale-x-0"
                      }`}
                    >
                      {categoriesVisible ? (
                        ALL_TAGS.map((tag) => (
                          <>
                            <button
                              key={tag.name}
                              style={{
                                color: tag.color,
                                borderColor: tag.color,
                                borderWidth: "1px",
                              }}
                              className={`-ml-4 mb-4 px-4 py-2 text-md flex items-center font-medium opacity-80 m-1 text-white whitespace-nowrap rounded-full focus:ring-0 focus:outline-none hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 mx-8 my-1 transition-all ease-in-out duration-500`}
                              onClick={() => setCategory(tag)}
                            >
                              <div className="absolute -inset-20 pointer-events-none"></div>
                              {getIconFromTag(tag)}
                              <span>{tag.name}</span>
                            </button>
                          </>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  {/** @PROJECTS */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects
                      .filter((project) =>
                        selectedCategory === "all"
                          ? true
                          : project.tags === selectedCategory
                      )
                      .map((project, index) => (
                        <ProjectCard
                          key={Math.random()}
                          project={project}
                          setFocus={setFocus}
                          index={index}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
