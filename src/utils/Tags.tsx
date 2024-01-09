import {
  FaCode,
  FaDesktop,
  FaLaptopCode,
  FaPuzzlePiece,
  FaRobot,
} from "react-icons/fa";

/**
 * @typedef {object} Tags
 * @property {string} name - The name of the tag
 * @property {string} color - The color of the tag
 * @property {string} fadedColor - The faded color of the tag
 * @property {string} secColor - The secondary color of the tag
 * @property {string} secGradientColor - The secondary gradient color of the tag
 */
export type Tags = {
  name: string;
  color: string;
  fadedColor: string;
  secColor: string;
  secGradientColor: string;
};

export const FULLSTACK: Tags = {
  name: "Fullstack",
  color: "rgb(51, 129, 245)",
  fadedColor: "rgba(51, 129, 245, 0.2)",
  secColor: "#8D4DC7",
  secGradientColor: "#01A2C2",
};

export const FRONTEND: Tags = {
  name: "Frontend",
  color: "rgb(123, 81, 220)",
  fadedColor: "rgba(123, 81, 220, 0.2)",
  secColor: "#7b51dc",
  secGradientColor: "#b051dc",
};

export const BACKEND: Tags = {
  name: "Backend",
  color: "rgb(51, 245, 51)",
  fadedColor: "rgba(51, 245, 51, 0.2)",
  secColor: "#8D4DC7",
  secGradientColor: "#01A2C2",
};

export const BOT: Tags = {
  name: "Bot",
  color: "rgb(245, 51, 245)",
  fadedColor: "rgba(245, 51, 245, 0.2)",
  secColor: "#eefa07",
  secGradientColor: "#b507fa",
};

export const CHALLENGE: Tags = {
  name: "Challenge",
  color: "rgb(242, 81, 17)",
  fadedColor: "rgba(242, 81, 17, 0.2)",
  secColor: "#f25111",
  secGradientColor: "#63d498",
};

export const ALL_TAGS: Tags[] = [FULLSTACK, FRONTEND, BACKEND, BOT, CHALLENGE];

/**
 * @description - Gets the tags from a string
 * @param tags - The string to get the tags from
 * @returns {Tags} - The tags
 */
export const getTagsFromString = (tags: string): Tags => {
  switch (tags) {
    case "FULLSTACK":
      return FULLSTACK;
    case "FRONTEND":
      return FRONTEND;
    case "backBACKENDend":
      return BACKEND;
    case "BOT":
      return BOT;
    case "CHALLENGE":
      return CHALLENGE;
    default:
      return FULLSTACK;
  }
};

/**
 * @description - Gets the icon from a tag
 * @param tag - The tag to get the icon from
 * @returns {React.ReactNode} - The icon
 */
export const getIconFromTag = (tag: Tags): React.ReactNode => {
  switch (tag.name) {
    case "Fullstack":
      return (
        <FaLaptopCode
          style={{
            marginRight: "0.5rem",
          }}
        />
      );
    case "Frontend":
      return (
        <FaDesktop
          style={{
            marginRight: "0.5rem",
          }}
        />
      );
    case "Backend":
      return (
        <FaCode
          style={{
            marginRight: "0.5rem",
          }}
        />
      );
    case "Bot":
      return (
        <FaRobot
          style={{
            marginRight: "0.5rem",
          }}
        />
      );
    case "Challenge":
      return (
        <FaPuzzlePiece
          style={{
            marginRight: "0.5rem",
          }}
        />
      );
    default:
      return (
        <FaLaptopCode
          style={{
            marginRight: "0.5rem",
          }}
        />
      );
  }
};
