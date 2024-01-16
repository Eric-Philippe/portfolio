import { useEffect, useState } from "react";

/** @Components */
import { Header } from "../Common/Header";
import { ParticlesDesign } from "../Animations/Particles/Particles";

/** @Utils */
import { drawCircle, getMyAge } from "../../utils/utils";

/** @Interface */
import RouterProps from "../../models/Router";

/** @Assets */
import { DEV_COLOR_PALETTE as colors } from "../../assets/ColorPalette";
import "./Head.css";
import { Variants, motion } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Head({ setIsDev }: RouterProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    drawCircle(400, 0, 0, colors.first, "canvas-bubble");
    drawCircle(200, 600, 0, colors.second, "canvas-bubble");
    drawCircle(400, 800, 0, colors.second, "canvas-bubble");

    const canvas = document.getElementById("canvas-bubble");

    if (canvas) {
      setTimeout(() => {
        canvas.style.opacity = "1";
        canvas.style.transition = "opacity 0.5s ease-in-out";
      }, 1000);
    }
  }, []);

  return (
    <div className="relative">
      <ParticlesDesign color1={colors.first} color2={colors.second} />
      <div className="head-content">
        <div className="absolute top-0 left-0 right-0 h-72 opacity-20 ">
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
        <Header
          setIsDev={setIsDev}
          firstColor={colors.first}
          secondColor={colors.second}
        />
      </div>

      <div className="py-8 lg:py-16 flex items-center px-6">
        <div className="text-center mx-auto inline-block">
          <div className="py-2 z-1 px-6 gradient-border-badge relative bg-transparent inline-flex items-center justify-center">
            <span
              className={`z-10 text-sm lg:text-base bg-clip-text text-transparent font-semibold relative -top-px`}
              style={{
                background: `linear-gradient(to right, ${colors.first}, ${colors.second})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              DevPortfolio
            </span>
          </div>
          <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mx-auto">
            <a
              style={{
                background: `linear-gradient(to right, ${colors.third}, #000000, #000000)`,
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
                background: `linear-gradient(to right, #000000, #000000, #000000, ${colors.third})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                textDecoration: "none",
              }}
            >
              FullStack
            </a>
          </h1>
          <div className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
            Développeur FullStack de {getMyAge()} ans, passionné par le code et
            doté d'une solide expertise informatique.
          </div>
        </div>
      </div>
      <div className="bg-white/90 backdrop-blur backdrop-filter sticky top-0 z-10 lg:py-6">
        <div className="lg:hidden">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="menu-button"
            >
              Réalisations
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </motion.div>
            </motion.button>
            <motion.ul
              className="p-4 font-semibold"
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                  display: "block",
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                  display: "none",
                },
              }}
              style={{
                position: "absolute",
                zIndex: 1,
                pointerEvents: isOpen ? "auto" : "none",
                width: "95%",
              }}
            >
              <motion.li
                variants={itemVariants}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("realisations")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Réalisations
              </motion.li>
              <motion.li
                variants={itemVariants}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("competences")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Mes compétences
              </motion.li>
              <motion.li
                variants={itemVariants}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Parcours
              </motion.li>
              <motion.li
                variants={itemVariants}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
        <div className="hidden lg:block container">
          <nav className="flex items-center justify-between font-medium text-sm uppercase tracking-widest ml-32">
            <a
              className="inline-flex flex-1 justify-center transition-all text-gray-900 font-medium"
              href="#realisations"
            >
              Réalisations
            </a>
            <a
              className="inline-flex flex-1 justify-center transition-all text-gray-400 hover:text-gray-900"
              href="#competences"
            >
              Mes compétences
            </a>
            <a
              className="inline-flex flex-1 justify-center transition-all text-gray-400 hover:text-gray-900"
              href="#about"
            >
              Parcours
            </a>
            <a
              className="inline-flex flex-1 justify-center transition-all text-gray-400 hover:text-gray-900"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
