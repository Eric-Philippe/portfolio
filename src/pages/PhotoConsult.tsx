import { motion } from "framer-motion";
import { RouterFocusProps } from "../models/Router";
import { Album } from "../utils/Albums";
import "./PhotoConsult.css";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const orderToHover = [1, 6, 5, 0, 3, 4, 2];

const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.currentTarget.classList.add("hovered");
};

export default function PhotoConsult({
  album,
  setFocus,
}: {
  album: Album;
  setFocus: RouterFocusProps["setFocus"];
}) {
  const calculatedWidth = (window.innerWidth / 1920) * 1600;
  const isSmallScreen = window.innerWidth < 1024;

  const [isHovered, setIsHovered] = useState(false);
  const [isCameraHovered, setIsCameraHovered] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    window.scrollTo(0, 0);

    if (isSmallScreen) {
      let index = 0;
      const interval = setInterval(() => {
        const cell = document.getElementsByClassName("image-cell")[
          orderToHover[index]
        ] as HTMLDivElement;
        cell.classList.add("hovered");
        index++;
        if (index === 7) clearInterval(interval);
        // Between 500 and 1300
      }, Math.floor(Math.random() * 800) + 500);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    const images = document.querySelectorAll(".album-content img");

    // @ts-ignore
    images.forEach((img: HTMLImageElement) => {
      img.addEventListener("click", () => {
        setIsFullScreen(true);
        setFullScreenImage(img.src);
      });
      img.style.cursor = "pointer";
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("click", () => setIsFullScreen(true));
      });
    };
  }, [album]);

  return (
    <>
      <div>
        <div className="image-container mb-28">
          <img src={album.previewImgOne} alt="Cover Image" />
          <div className="image-grid">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div
                  className="image-cell"
                  key={i}
                  onMouseOver={(e) => {
                    if (!isSmallScreen) handleHover(e);
                  }}
                />
              ))}
          </div>
          <div
            className="title"
            style={{
              fontSize: isSmallScreen ? "4em" : "8em",
            }}
          >
            {album.shortTitle}
          </div>

          <button
            className="fixed top-10 right-10 w-12 h-12 bg-black rounded-full text-white flex items-center justify-center text-xl focus:outline-none focus:ring focus:ring-gray-400"
            style={{ zIndex: 999 }}
            onClick={() => setFocus(null)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 352 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </button>

          <div
            style={{
              position: "absolute",
              bottom: "12px",
              width: "90%",
              marginLeft: "5%",
              display: "flex",
              alignItems: "center",
              zIndex: 999,
              cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              setIsFullScreen(true);
              setFullScreenImage(album.previewImgOne);
            }}
          >
            <motion.div
              style={{
                height: "3px",
                backgroundColor: "white",
              }}
              animate={{
                width: isHovered
                  ? isSmallScreen
                    ? "100%"
                    : calculatedWidth
                  : isSmallScreen
                  ? "100%"
                  : "50px",
              }}
              transition={{
                type: "spring",
                stiffness: isHovered ? 100 : 80,
                damping: isHovered ? 20 : 40,
                duration: 5,
              }}
            ></motion.div>

            <motion.div
              style={{
                color: "white",
                fontSize: isSmallScreen ? "15px" : "20px",
                fontFamily: "Expose, Arial, sans-serif",
                margin: "0 10px",
                zIndex: 999,
                whiteSpace: "nowrap",
              }}
              animate={{
                marginLeft: "10px",
              }}
              transition={{ type: "spring", stiffness: 100, duration: 3 }}
            >
              Fullscreen
            </motion.div>

            <motion.div
              style={{
                height: "3px",
                backgroundColor: "white",
                marginRight: "2%",
              }}
              animate={{
                width: isSmallScreen ? "100%" : "calc(100% - 50px)",
              }}
              transition={{ type: "spring", stiffness: 100, duration: 3 }}
            ></motion.div>
          </div>
        </div>
        <div
          className="text-lg"
          style={{
            fontSize: isSmallScreen ? "1.5em" : "3em",
            marginRight: "5%",
            marginLeft: "5%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="line"
            style={{ flexGrow: 1, height: "2px", background: "black" }}
          />{" "}
          <div
            className="title-text"
            style={{
              fontStyle: "bold",
              margin: "0 20px",
            }}
          >
            {album.title}
          </div>
          <div
            className="line"
            style={{ flexGrow: 1, height: "2px", background: "black" }}
          />{" "}
        </div>
        <div
          className="text-center mt-10 mb-12"
          style={{
            fontSize: isSmallScreen ? "1.2em" : "2em",
          }}
        >
          {album.date}
        </div>
        {isSmallScreen && (
          <div className="text-gray-500 text-xs -mt-6 mb-6 text-center">
            Cliquez sur l'appareil pour consulter les objectifs
          </div>
        )}
        <div className="flex justify-center space-x-4 mb-48">
          {album.phone && (
            <>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center p-2">
                  <img
                    src={album.getPhoneImg()}
                    alt="fold4"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>{album.getPhoneName()}</div>
              </div>
            </>
          )}
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => {
              if (!isSmallScreen) setIsCameraHovered(true);
            }}
            onMouseLeave={() => {
              if (!isSmallScreen) setIsCameraHovered(false);
            }}
            onClick={() => {
              if (isSmallScreen) setIsCameraHovered(!isCameraHovered);
            }}
          >
            <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center p-2">
              <img
                src={album.getCameraImg()}
                alt="camera"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>{album.getCameraName()}</div>
            {isCameraHovered && (
              <motion.div
                className="absolute -ml-6 top-8 mt-24 flex space-x-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {album.getLensesNames().map((_, i) => (
                  <div className="flex flex-col items-center ml-3" key={i}>
                    <div className="lens flex flex-col items-center">
                      <div className="w-24 h-22 border-2 border-black rounded-full flex items-center justify-center p-2">
                        <img
                          src="lens.png"
                          alt="camera"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div
                        className="text-justify"
                        style={{
                          marginLeft: "15px",
                        }}
                      >
                        {album.getLensesNames()[i]}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        <div
          className="text-lg"
          style={{
            fontSize: isSmallScreen ? "1.5em" : "3em",
            marginRight: "5%",
            marginLeft: "5%",
            display: "flex",
            alignItems: "center",
            marginTop: isCameraHovered
              ? "0"
              : isSmallScreen
              ? "-10rem"
              : "-10%",
            transition: "margin-top 0.5s ease-in-out",
          }}
        >
          <div
            className="line"
            style={{ flexGrow: 1, height: "2px", background: "black" }}
          />{" "}
          <div
            className="title-text"
            style={{
              fontStyle: "bold",
              margin: "0 20px",
              marginBottom: "3%",
            }}
          >
            Story
          </div>
          <div
            className="line"
            style={{ flexGrow: 1, height: "2px", background: "black" }}
          />{" "}
        </div>
        <div className="album-content">
          <div
            className="photo-container-album"
            dangerouslySetInnerHTML={{ __html: album.content }}
          />{" "}
        </div>
      </div>
      <div className="text-center mb-10 mt-10">
        <div>
          <button
            style={{ display: "inline-flex" }}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium items-center"
            onClick={() => {
              setFocus(null);
              window.scrollTo(0, 1100);
            }}
          >
            <FaArrowLeft className="mr-2" />
            Go back
          </button>
        </div>
      </div>
      {isFullScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsFullScreen(false)}
        >
          <motion.img
            src={fullScreenImage}
            style={{ maxWidth: "90%", maxHeight: "90%" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </>
  );
}
