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
 * {name: "Fullstack", value: "FULLSTACK"},
 */
export const ALL_TAGS_NAMES: { name: string; value: string }[] = ALL_TAGS.map(
  (tag) => {
    return {
      name: tag.name,
      value: tag.name.toUpperCase(),
    };
  }
);

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
