import { FaCamera, FaDesktop } from "react-icons/fa";

import RouterProps from "../../models/Router";
import mainLogo from "../../../res/icon.png";

type HeaderProps = RouterProps & {
  setIsDev: (isDev: boolean) => void;
  isDev: boolean | undefined;
  firstColor: string;
  secondColor: string;
};

export function Header({
  setIsDev,
  isDev,
  firstColor,
  secondColor,
}: HeaderProps) {
  return (
    <>
      <div
        className={`h-1`}
        style={{
          background: `linear-gradient(90deg, ${firstColor} 0%, ${secondColor} 100%)`,
        }}
      ></div>

      <header className="p-4 header-content -mt-3">
        <div className="flex items-center justify-between">
          <a
            aria-label="Home"
            className="inline-block rounded-full z-50"
            href="/portfolio/"
          >
            <img src={mainLogo} alt="Logo" className="w-16 h-16" />
          </a>
          <nav className="space-x-4 text-sm text-gray-800 flex -mt-6">
            <a
              className={`hover:underline flex items-center space-x-1.5 ${
                isDev ? "text-dev-gradient glow" : ""
              }`}
              onClick={() => setIsDev(true)}
              style={{
                zIndex: 10,
                cursor: "pointer",
                border: "1px solid",
                borderColor: isDev ? firstColor : "",
                borderRadius: "0.5rem",
                padding: "0.25rem 0.5rem",
              }}
            >
              <FaDesktop
                className={`mt-0.5 w-4 ${
                  isDev ? "text-gradient" : "head-icon"
                }`}
                style={{
                  color: isDev ? firstColor : "",
                }}
              />
              <span className={`${isDev ? "" : "hidden"}  md:inline`}>
                Informatique
              </span>
            </a>
            <a
              className={`hover:underline flex items-center space-x-1.5 ${
                !isDev ? "text-photo-gradient" : "head-icon"
              }`}
              onClick={() => setIsDev(false)}
              style={{
                zIndex: 10,
                cursor: "pointer",
                border: "1px solid",
                borderColor: isDev ? "" : firstColor,
                borderRadius: "0.5rem",
                padding: "0.25rem 0.5rem",
              }}
            >
              <FaCamera
                className={`mt-0.5 w-4`}
                style={{
                  color: isDev ? "" : secondColor,
                }}
              />{" "}
              <span className={`${isDev ? "hidden" : ""}  md:inline`}>
                Photographie
              </span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
