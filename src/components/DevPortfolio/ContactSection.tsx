import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import "../../App.css";
import { FaCubes, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GITHUB, INSTAGRAM, LINKEDIN } from "../../links";

const SERVICE_ID = "service_hgawynv";
const TEMPLATE_ID = "template_clt36qe";
const PUBLIC_KEY = "eoPJ5KwYUNr5YwcQL";

const SENTENCES = [
  "Let's get started",
  "Let's get in touch",
  "Let's collaborate",
  "Let's get going",
  "Let's get in contact",
  "Let's work together",
  "Let's do this",
];

export default function ContactSection() {
  const [selectedSentence, setSelectedSentence] = useState(
    SENTENCES[Math.floor(Math.random() * SENTENCES.length)]
  );
  const [isHovered, setIsHovered] = useState(false);
  const [emailSent, setEmailSent] = useState<boolean | null>(null);
  const isSmallScreen = window.innerWidth < 1024;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: { name: string; email: string; message: string }) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
      () => {
        setEmailSent(true);
      },
      () => {
        setEmailSent(false);
      }
    );
  };

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
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className={`${
            isSmallScreen ? "" : "w-1/2 max-w-50"
          } p-5 rounded shadow-lg bg-[#0d0d0e]`}
          style={{
            borderRadius: "1rem",
          }}
        >
          <div className="mb-4 relative">
            <h1
              className={`${
                isSmallScreen ? "text-4xl" : "text-6xl"
              } font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#ccf0ff] via-[#ffd7ff] to-[#f1b3cf] text-center`}
              style={{
                fontFamily: "Feijoa,serif",
                height: isSmallScreen ? "8vh" : "14vh",
              }}
            >
              {selectedSentence}
            </h1>

            <p
              className="text-gray-500 text-sm text-center"
              style={{ fontWeight: "normal" }}
            >
              Vous avez un projet ? Une idée ? Un besoin ? Contactez-moi !
            </p>

            {emailSent === true && (
              <div className="text-green-500 text-sm text-center">
                Votre message a bien été envoyé !
              </div>
            )}
            {emailSent === false && (
              <div className="text-red-500 text-sm text-center">
                Une erreur est survenue, veuillez réessayer.
              </div>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="name"
              className="absolute text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ccf0ff] via-[#ffd7ff] to-[#f1b3cf] top-0 left-0"
              style={{ paddingLeft: "10px", zIndex: 50 }}
            >
              Nom
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              className="shadow appearance-none border-2 rounded w-full py-5 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline pl-20 text-lg"
              style={{
                border: "1px solid #3f3f46",
                paddingLeft: "10px",
              }}
            />
            {errors.name && (
              <span className="text-red-500 text-xs italic">
                Ce champ est requis
              </span>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="absolute text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ccf0ff] via-[#ffd7ff] to-[#f1b3cf] top-0 left-0"
              style={{ paddingLeft: "10px" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="shadow appearance-none border-2 rounded w-full py-5 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline pl-20 text-lg"
              style={{
                border: "1px solid #3f3f46",
                paddingLeft: "10px", // Adjust this value based on the width of your label
              }}
            />
            {errors.email && (
              <span className="text-red-500 text-xs italic">
                Ce champ est requis
              </span>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="message"
              className="absolute text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ccf0ff] via-[#ffd7ff] to-[#f1b3cf] top-0 left-0"
              style={{ paddingLeft: "10px" }}
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              className="shadow appearance-none border-2 rounded w-full py-5 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline pl-20 text-lg"
              style={{
                border: "1px solid #3f3f46",
                paddingLeft: "10px",
              }}
            />
            {errors.message && (
              <span className="text-red-500 text-xs italic">
                Ce champ est requis
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setSelectedSentence(
                  SENTENCES[Math.floor(Math.random() * SENTENCES.length)]
                );
              }}
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>

      <footer
        className={`flex flex-col mt-10 items-center justify-center mb-6`}
      >
        <div className="flex items-center space-x-3">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            <FaLinkedin
              style={{
                color: "#0077b5",
              }}
              size={40}
              className="transition-colors duration-200"
            />
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            <FaGithub
              size={40}
              className="transition-colors duration-200"
              style={{
                color: "white",
              }}
            />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            <FaInstagram
              size={40}
              className="transition-colors duration-200"
              style={{
                color: "#e1306c",
              }}
            />
          </a>
        </div>
        <div className="text-gray-500 text-sm mt-3">ericphlpp@proton.me</div>
        <div className="text-gray-500 text-sm mt-3">
          © Éric PHILIPPE - {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
