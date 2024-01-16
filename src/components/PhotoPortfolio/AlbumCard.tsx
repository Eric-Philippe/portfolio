import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { RouterFocusProps } from "../../models/Router";
import { Album } from "../../utils/Albums";
import { FaImage } from "react-icons/fa";

export default function AlbumCard({
  album,
  setFocus,
  index,
}: {
  album: Album;
  setFocus: RouterFocusProps["setFocus"];
  index: number;
}) {
  const isSmallScreen = window.innerWidth < 1024;
  // 1920 = 1300x
  const calculatedWidth = (window.innerWidth / 1920) * 1600;

  const [isHovered, setIsHovered] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div
      className="overflow-hidden col-span-full lg:col-span-1"
      data-projection-id="18"
      style={{ opacity: 1, transform: "none" }}
    >
      <div
        className="group relative focus:outline-none block py-4 lg:py-10 px-6 lg:px-14 overflow-hidden transform transition h-full will-change-transform cursor-pointer image-filter"
        style={{
          backgroundImage: `url(${album.previewImgOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
        onClick={() => {
          setFocus(index);
        }}
      >
        <h3
          className="absolute top-0 left-0 p-4 text-white text-lg font-bold"
          style={{
            fontFamily: "Expose, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontWeight: 400,
            fontSize: isSmallScreen ? "1.02rem" : "1.50rem",
          }}
        >
          {album.title}
        </h3>

        <motion.div
          ref={ref}
          className="absolute p-4 text-white text-base font-bold flex items-center"
          style={{
            fontFamily: "Expose, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontWeight: 400,
            right: isSmallScreen ? "0.8rem" : "2rem",
            top: 1,
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: inView ? 360 : 0, scale: inView ? 1 : 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {album.getPhotoCount()}
          <span className="ml-1">/</span>
          <span className="ml-1">
            <FaImage />
          </span>
        </motion.div>
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            zIndex: 999,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            style={{
              height: "3px",
              backgroundColor: "white",
            }}
            animate={{
              width: isHovered
                ? isSmallScreen
                  ? "50px"
                  : calculatedWidth
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
            Full Story
          </motion.div>

          <motion.div
            style={{
              height: "3px",
              backgroundColor: "white",
            }}
            animate={{
              width: isSmallScreen
                ? "calc(100% - 300px)"
                : "calc(100% - 350px)",
            }}
            transition={{ type: "spring", stiffness: 100, duration: 3 }}
          ></motion.div>

          <motion.div
            style={{
              color: "white",
              fontSize: isSmallScreen ? "15px" : "20px",
              fontFamily: "Expose, Arial, sans-serif",
              margin: "0 10px",
              marginRight: isSmallScreen ? "7%" : "7%",
              whiteSpace: "nowrap",
            }}
          >
            {album.date}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
