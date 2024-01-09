import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import "../../App.css";
import { FaCubes } from "react-icons/fa";
import Footer from "../Common/Footer";
import ContactForm from "../Common/ContactForm";

export default function ContactSection() {
  const isSmallScreen = window.innerWidth < 1024;

  const [isHovered, setIsHovered] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    document.body.style.backgroundColor = inView ? "#040404" : "white";
  }, [inView]);

  return (
    <>
      <section
        ref={ref}
        className="flex flex-col md:flex-row items-center justify-center p-10"
      >
        <div
          className={`flex flex-col items-center justify-center mb-3 ${
            !isSmallScreen ? "w-1/2 ml-32" : ""
          }`}
        >
          <div className="w-full flex flex-col items-start">
            <a
              href="#realisations"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1
                className={`${
                  isSmallScreen ? "text-3xl" : "text-5xl"
                } font-bold mb-5 bg-clip-text text-transparent hover:bg-[#e0a4ff] transition-colors duration-200 bg-[#3f3f46] text-left hover:text-[#e0a4ff]`}
                style={{
                  fontFamily: "Sohne,sans-serif",
                }}
              >
                <div className="flex items-center space-x-3">
                  <div>RÉALISATIONS</div>
                  <FaCubes
                    size={50}
                    className="transition-colors duration-200"
                    style={{
                      color: isHovered ? "#e0a4ff" : "#3f3f46",
                    }}
                  />
                </div>
              </h1>
            </a>
            <a href="#competences">
              <h1
                className={`${
                  isSmallScreen ? "text-3xl" : "text-5xl"
                } font-bold mb-5 bg-clip-text text-transparent hover:bg-[#feea9e] transition-colors duration-200 bg-[#3f3f46] text-left hover:text-[#feea9e]`}
                style={{
                  fontFamily: "Sohne,sans-serif",
                }}
              >
                COMPÉTENCES
              </h1>
            </a>
            <a href="#about">
              <h1
                className={`${
                  isSmallScreen ? "text-3xl" : "text-5xl"
                } font-bold mb-5 bg-clip-text text-transparent hover:bg-[#98edff] transition-colors duration-200 bg-[#3f3f46] text-left hover:text-[#98edff]`}
                style={{
                  fontFamily: "Sohne,sans-serif",
                }}
              >
                PARCOURS
              </h1>
            </a>
          </div>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
