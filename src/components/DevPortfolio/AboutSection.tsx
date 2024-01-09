import { useState } from "react";
import AnimatedProgressBar from "../Animations/AnimatedProgressBar";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import LINKS from "../../utils/Links";

export default function AboutSection() {
  const isSmallScreen = window.innerWidth < 1024;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="scroll-mt-8 lg:scroll-mt-0 mb-5">
        <div className="px-0 lg:px-4 overflow-hidden">
          <div className="lg:rounded-2xl py-12 lg:py-24 relative z-0 bg-gh-marketingDark">
            <div className="project-container">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8">
                  <h2
                    className="text-5xl font-extrabold text-white mb-8"
                    id="about"
                  >
                    Parcours
                  </h2>
                  <div
                    className={
                      isSmallScreen
                        ? "grid grid-cols-1 md:grid-cols-3 gap-8"
                        : "grid grid-cols-1 md:grid-cols-3 gap-8"
                    }
                    style={{
                      gridTemplateColumns: isSmallScreen
                        ? "1fr"
                        : "0.5fr 3fr 2fr",
                    }}
                  >
                    {/** @PHOTO */}
                    <div className="relative mb-8 md:mb-0 group">
                      <div className="relative">
                        <img
                          src="https://media.discordapp.net/attachments/947414087401369610/948969142260744212/1646322201523.jpg?ex=65a94762&is=6596d262&hm=9ba70c272208a66bbf7093069d80e30ea610c37bf8a91a2c48ee1f057f9c73a8&=&format=webp&width=495&height=495"
                          alt="Profile"
                          className="rounded-full object-cover w-24 h-24 mx-auto"
                        />
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-linear absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between space-x-4">
                          <a href={LINKS.GITHUB}>
                            <FaGithub
                              size={30}
                              className="text-white transition-transform duration-1000 transform translate-y-0 translate-x-0 group-hover:-translate-x-7 group-hover:translate-y-5"
                            />
                          </a>
                          <a href={LINKS.LINKEDIN}>
                            <FaLinkedin
                              size={30}
                              className="transition-transform duration-500 transform translate-y-0 group-hover:translate-y-24"
                              style={{ color: "#0a66c2" }}
                            />
                          </a>
                          <a href={LINKS.INSTAGRAM}>
                            <FaInstagram
                              size={30}
                              className="transition-transform duration-1700 transform translate-y-0 translate-x-0 group-hover:translate-x-5 group-hover:translate-y-5"
                              style={{ color: "#e1306c" }}
                            />
                          </a>
                        </div>
                      </div>
                      <p
                        className={`text-gray-500 mt-2 ${
                          isSmallScreen ? "text-center" : ""
                        }`}
                      >
                        Éric PHILIPPE
                      </p>{" "}
                    </div>

                    {/** @PARCOURS */}
                    <div
                      className="relative"
                      style={{ marginLeft: "2em", marginRight: "2em" }}
                    >
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
                        2021 - 2024 : Bachelor Universitaire de Technologie
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
                        2021 - 2024 : Alternance - ADP GSI - Développeur Java
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

                    {/** @CV */}
                    <div className="relative">
                      <p className="text-white text-xl mb-2 font-light">
                        Curriculum Vitae
                      </p>
                      <img
                        src="CV.png"
                        className="transition-filter duration-500 ease-in-out"
                        style={{
                          borderRadius: "9px",
                          width: "25em",
                          opacity: isHovered ? 0.8 : 1,
                          filter: isHovered ? "blur(5px)" : "blur(1px)",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      />
                      <button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200 text-white"
                        onClick={() => {
                          var lienTelechargement = document.createElement("a");

                          lienTelechargement.href = LINKS.DL_CV;

                          lienTelechargement.download = "Eric_Philippe_CV.pdf";

                          document.body.appendChild(lienTelechargement);

                          lienTelechargement.click();

                          document.body.removeChild(lienTelechargement);
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                      >
                        Consulter CV
                      </button>
                    </div>
                  </div>

                  {/** */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
