import { useState } from "react";
import AnimatedProgressBar from "../Animations/AnimatedProgressBar";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

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
                  <h2 className="text-5xl font-extrabold text-white mb-8">
                    Parcours
                  </h2>
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="relative mb-8 md:mb-0 group">
                      <img
                        src="https://media.discordapp.net/attachments/947414087401369610/948969142260744212/1646322201523.jpg?ex=65a94762&is=6596d262&hm=9ba70c272208a66bbf7093069d80e30ea610c37bf8a91a2c48ee1f057f9c73a8&=&format=webp&width=495&height=661"
                        alt="Profile"
                        className="rounded-full h-24 w-24 object-cover"
                      />
                      <p className="text-gray-500 mt-2">Éric PHILIPPE</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between space-x-4">
                        <FaGithub
                          size={30}
                          className="text-white transition-transform duration-1000 transform translate-y-0 translate-x-10 group-hover:-translate-x-10 group-hover:translate-y-5"
                        />
                        <FaLinkedin
                          size={30}
                          className="transition-transform duration-500 transform translate-y-0 group-hover:translate-y-10"
                          style={{ color: "#0a66c2" }}
                        />
                        <FaInstagram
                          size={30}
                          className="transition-transform duration-1000 transform translate-y-0 translate-x-0 group-hover:translate-x-10 group-hover:translate-y-5"
                          style={{ color: "#e1306c" }}
                        />
                      </div>
                    </div>

                    <div className="mb-8 md:mb-0">
                      <p className="text-white text-xl mb-2 font-light">
                        Étudiant en informatique
                      </p>

                      <p className="text-gray-500">
                        2024 - 2026 : Mastère Ynov - Expert Développement
                        Logiciel
                      </p>

                      <p
                        className="text-gray-500 mt-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Ynov Toulouse
                      </p>

                      <AnimatedProgressBar
                        color1="#f9ce22"
                        color2="#ed4e50"
                        percentage={3}
                      />

                      <p className="text-gray-500">
                        2020 - 2024 : Bachelor Universitaire de Technologie
                        Informatique
                      </p>

                      <p
                        className="text-gray-500 mt-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        IUT de Blagnac - Université Toulouse II Jean Jaurès
                      </p>

                      <AnimatedProgressBar
                        color1="#9867f0"
                        color2="#ed4e50"
                        percentage={85}
                      />

                      <p className="text-gray-500">
                        2021 - 2023 : Alternance - ADP GSI - Développeur Java
                        Informatique
                      </p>
                      <p
                        className="text-gray-500 mt-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Développement d'une application afin de générer des
                        fiches de paie
                      </p>

                      <AnimatedProgressBar
                        color1="#ffac1d"
                        color2="#ed4e50"
                        percentage={75}
                      />
                    </div>
                    <div className="relative">
                      <p className="text-white text-xl mb-2 font-light">
                        Curriculum Vitae
                      </p>
                      <img
                        src="public/CV.png"
                        className="transition-filter duration-500 ease-in-out"
                        style={{
                          borderRadius: "9px",
                          width: "20em",
                          opacity: isHovered ? 0.8 : 1,
                          filter: isHovered ? "blur(5px)" : "blur(1px)",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      />
                      <button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200 text-white"
                        onClick={() => console.log("Button clicked")}
                        onMouseEnter={() => setIsHovered(true)}
                      >
                        Consulter CV
                      </button>
                    </div>
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
