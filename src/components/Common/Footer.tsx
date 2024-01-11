import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import LINKS from "../../utils/Links";
import { useState } from "react";
import MentionLegales from "./MentionLegales";

export default function Footer() {
  const [mentionLegalOpen, setMentionLegalOpen] = useState(false);

  return (
    <>
      <footer
        className={`flex flex-col mt-10 items-center justify-center mb-6`}
      >
        <div className="flex items-center space-x-3">
          <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
            <FaLinkedin
              style={{
                color: "#0077b5",
              }}
              size={40}
              className="transition-colors duration-200"
            />
          </a>
          <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
            <FaGithub
              size={40}
              className="transition-colors duration-200"
              style={{
                color: "white",
              }}
            />
          </a>
          <a href={LINKS.INSTAGRAM} target="_blank" rel="noreferrer">
            <FaInstagram
              size={40}
              className="transition-colors duration-200"
              style={{
                color: "#e1306c",
              }}
            />
          </a>
        </div>
        <div className="text-gray-500 text-sm mt-3">
          ericphlpp@proton.me •{" "}
          <a
            className="hover:underline cursor-pointer"
            onClick={() => setMentionLegalOpen(true)}
          >
            Mentions Légales
          </a>
        </div>
        <div className="text-gray-500 text-sm mt-3">
          © Éric PHILIPPE - {new Date().getFullYear()}
        </div>
      </footer>

      {mentionLegalOpen && <MentionLegales setIsOpen={setMentionLegalOpen} />}
    </>
  );
}
