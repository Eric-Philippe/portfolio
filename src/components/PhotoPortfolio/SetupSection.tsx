import AnimatedSeparator from "../Animations/AnimatedSeparator";

export default function SetupSection() {
  return (
    <>
      <section className="scroll-mt-8 lg:scroll-mt-0 lg:mb-5">
        <div className="px-0 lg:px-4 overflow-hidden">
          <div className="lg:rounded-2xl py-12 lg:py-24 relative z-0 bg-gh-marketingDark">
            <div className="project-container">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8">
                  <div className="relative">
                    <h2
                      className="text-5xl font-extrabold text-white mb-8 z-10 relative"
                      id="setup"
                    >
                      Mon matériel
                    </h2>
                  </div>

                  <div className="flex flex-wrap flex-col">
                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-2xl font-bold text-white z-10 relative">
                          Appareil photo principal:{" "}
                          <span className="text-2xl font-light text-white z-10 relative">
                            Canon EOS 800D
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        532g, 24.2MP, APS-C, 45 collimateurs AF, 6 im./s, 1080p
                      </p>
                    </div>

                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-lg font-bold text-white z-10 relative">
                          Objectif principal:{" "}
                          <span className="text-lg font-light text-white z-10 relative">
                            Canon EF-S 18-55mm f/3.5-5.6 IS STM
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        205g, 18-55mm, f/3.5-5.6, STM, stabilisé
                      </p>
                    </div>

                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-lg font-bold text-white z-10 relative">
                          Objectif Grand Angle:{" "}
                          <span className="text-lg font-light text-white z-10 relative">
                            Canon EF-S 10-18mm f/4.5-5.6 IS STM
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        240g, 10-18mm, f/4.5-5.6, STM, stabilisé
                      </p>
                    </div>

                    <AnimatedSeparator color1="#10c283" />

                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-2xl font-bold text-white z-10 relative">
                          Appareil photo Secondaire:{" "}
                          <span className="text-2xl font-light text-white z-10 relative">
                            Sony Alpha 380
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        490g, 14.2MP, APS-C, 9 collimateurs AF, 2.5 im./s, 720p
                      </p>
                    </div>

                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-lg font-bold text-white z-10 relative">
                          Objectif principal:{" "}
                          <span className="text-lg font-light text-white z-10 relative">
                            Sony DT 18-55mm f/3.5-5.6 SAM
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        210g, 18-55mm, f/3.5-5.6, SAM
                      </p>
                    </div>

                    <div className="setup-item mb-8">
                      <div className="flex flex-wrap">
                        <h4 className="text-lg font-bold text-white z-10 relative">
                          Objectif Macro:{" "}
                          <span className="text-lg font-light text-white z-10 relative">
                            Tamron SP AF 70-300mm f/4-5.6 Di VC USD
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        240g, 10-18mm, f/4.5-5.6, STM, stabilisé
                      </p>
                    </div>

                    <AnimatedSeparator color1="#10b3c2" />

                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-2xl font-bold text-white z-10 relative">
                          PhotoPhone:{" "}
                          <span className="text-2xl font-light text-white z-10 relative">
                            Samsung Galaxy ZFold 4
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        271g, 12MP, 2x12MP, 2.9x, 4K
                      </p>
                    </div>

                    <div className="setup-item mb-4">
                      <div className="flex flex-wrap">
                        <h4 className="text-lg font-bold text-white z-10 relative">
                          Caméra d'action:{" "}
                          <span className="text-lg font-light text-white z-10 relative">
                            G-Eye 2 Discover
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        60g, 5MP, 1080p, 30m
                      </p>
                    </div>

                    <div className="setup-item">
                      <div className="flex flex-wrap">
                        <h4 className="text-lg font-bold text-white z-10 relative">
                          Trépied:{" "}
                          <span className="text-lg font-light text-white z-10 relative">
                            Joby GorillaPod 3K Stand
                          </span>
                        </h4>
                      </div>

                      <p className="text-sm font-light text-white z-10 relative">
                        Max: 3kg, 24cm, 0.247kg
                      </p>
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
