import AnimatedSeparator from "../Animations/AnimatedSeparator";

export default function SkillsSection() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center scroll-mt-8 lg:scroll-mt-0 mb-5"
      style={{
        backgroundImage: `url("https://tailwindui.com/img/beams-pricing.png")`,
        borderRadius: "0 0 0 99px",
      }}
    >
      <div className="project-container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8">
            <h2 className="text-5xl font-extrabold text-[#313131] mb-8 mt-8">
              Mes compétences
            </h2>
            <h4 className="text-2xl font-semibold text-[#313131] mb-4">
              Techniques
            </h4>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Frontend
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      HTML, CSS, SCSS, Javascript, Typescript, PHP
                    </p>

                    <AnimatedSeparator color1="#a472e5" />
                    <p className="text-sm text-gray-500 mt-2">
                      Symfony, React, Angular, Vite
                    </p>
                    <AnimatedSeparator color1="#ddc4fe" />
                    <p className="text-sm text-gray-500 mt-2">
                      TailwindCSS, Bootstrap, MaterialUI
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Backend
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      JS, TS, Python (2.* & 3.*), Java (8.* & 11.*), C#, Cobol
                    </p>

                    <AnimatedSeparator color1="#ffc9c9" />
                    <p className="text-sm text-gray-500 mt-2">
                      NodeJS, Express, NestJS, SpringBoot, Flask, Django
                    </p>
                    <AnimatedSeparator color1="#fa7171" />
                    <p className="text-sm text-gray-500 mt-2">
                      API REST, GraphQL, Websocket, Socket.io
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Base de données
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      MySQL, PostgreSQL, MongoDB, SQLite, Access
                    </p>

                    <AnimatedSeparator color1="#52b230" />
                    <p className="text-sm text-gray-500 mt-2">
                      ORM, PL/SQL, Migration, Forme Normale, MCD, MLD
                    </p>
                    <AnimatedSeparator color1="#6de18a" />
                    <p className="text-sm text-gray-500 mt-2">
                      Datagrip, Oracle SQL Developer, MySQL Workbench
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Sys Admin
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Shell, Bash, Batch, Powershell, Python
                    </p>
                    <AnimatedSeparator color1="#5e62d5" />
                    <p className="text-sm text-gray-500 mt-2">
                      Docker, Kubernetes, Terraform, Grafana
                    </p>

                    <AnimatedSeparator color1="#3439de" />
                    <p className="text-sm text-gray-500 mt-2">
                      Linux, Windows, MacOS
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Versionning
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Git, Github, Gitlab, Bitbucket
                    </p>
                    <AnimatedSeparator color1="#cbcbcb" />
                    <p className="text-sm text-gray-500 mt-2">
                      Gitflow, Github Flow
                    </p>
                    <AnimatedSeparator color1="#cbcbcb" />
                    <p className="text-sm text-gray-500 mt-2">
                      Gitlab CI, Github Actions, Bitbucket Pipelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mt-8">
              <h4 className="text-2xl font-semibold text-[#313131] mb-4">
                Soft Skills
              </h4>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Langues
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Français <i>(langue maternelle)</i>
                      </p>
                      <AnimatedSeparator color1="#ca3325" />
                      <p className="text-sm text-gray-500 mt-2">
                        Anglais <i>(courant)</i>
                      </p>
                      <AnimatedSeparator color1="#1515ff" />
                      <p className="text-sm text-gray-500 mt-2">
                        Espagnol <i>(notions)</i>
                      </p>

                      <AnimatedSeparator color1="#ffa200" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Communication
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Esprit d'équipe, Leadership, Adaptabilité,
                      </p>
                      <AnimatedSeparator color1="#2cb4be" />
                      <p className="text-sm text-gray-500 mt-2">
                        Gestion du temps, Gestion du stress
                      </p>
                      <AnimatedSeparator color1="#6aced9" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <div className="bg-[#ffffff] shadow-lg rounded-lg px-4 py-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Développement Personnel
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Autonomie, Curiosité, Créativité, Persévérance,
                      </p>
                      <AnimatedSeparator color1="#b62486" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
