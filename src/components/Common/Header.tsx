import { FaCamera, FaDesktop } from "react-icons/fa";

import RouterProps from "../../models/Router";
import mainLogo from "../../../res/icon.png";

type HeaderProps = RouterProps & {
  firstColor: string;
  secondColor: string;
};

export function Header({ setIsDev, firstColor, secondColor }: HeaderProps) {
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
            href="/"
          >
            <img src={mainLogo} alt="Logo" className="w-16 h-16" />
          </a>
          <nav className="space-x-4 text-sm text-gray-800 flex -mt-6">
            <a
              className="hover:underline flex items-center space-x-1.5"
              onClick={() => setIsDev(true)}
              style={{
                zIndex: 10,
                cursor: "pointer",
              }}
            >
              <FaDesktop className="mt-0.5 w-4" />
              <span>Informatique</span>
            </a>
            <a
              className="hover:underline flex items-center space-x-1.5"
              onClick={() => setIsDev(false)}
              style={{
                zIndex: 10,
                cursor: "pointer",
              }}
            >
              <FaCamera className="mt-0.5 w-4" />
              <span>Photographie</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
