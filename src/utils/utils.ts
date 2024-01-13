/**
 * Draw a circle on the canvas
 * @param circleRadius Radius of the circle
 * @param circleX X position of the circle
 * @param circleY Y position of the circle
 * @param color Color of the circle
 * @returns void
 */
export const drawCircle = (
  circleRadius: number,
  circleX: number,
  circleY: number,
  color: string,
  canvasId: string,
  lastColor = "white"
) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");

  if (ctx) {
    const gradientRadius = circleRadius;

    const gradient = ctx.createRadialGradient(
      circleX,
      circleY,
      0,
      circleX,
      circleY,
      gradientRadius
    );

    const centerColor = color; // Couleur au centre du cercle
    const outerColor = lastColor; // Couleur à l'extérieur du cercle

    gradient.addColorStop(0, centerColor);
    gradient.addColorStop(1, outerColor);

    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
};

export const getMyAge = () => {
  const birthYear = 2003;
  const birthMonth = 5; // May

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth) {
    age--;
  }

  return age;
};

const TECH_COLOR: { [key: string]: string } = {
  Python: "#4f8ebd",
  TypeScript: "rgba(47, 116, 192, 1)",
  JavaScript: "#f7e02a",
  emailjs: "#f7e02a",
  "Chart.js": "#f7e02a",
  React: "#61dafb",
  Vite: "#b643fe",
  TailwindCSS: "#54bfbb",
  Bootstrap: "#901dfd",
  PostgreSQL: "#316193",
  Express: "#2c2c2c",
  Julia: "#aa79c1",
  Rust: "#f15e3a",
  Haskell: "#63568a",
  "C++": "#6a9dd4",
  Java: "#ed2c28",
  Docker: "#309aee",
  "C#": "#a0559b",
  Gherkin: "#5abd6c",
  HTML: "#ff5d2b",
  CSS: "#2076b8",
  Excel: "#1f7c39",
  MySQL: "#e59115",
  Git: "#f1573b",
  PHP: "#7b7fb6",
  Symfony: "#080808",
  "CI/CD": "#8f1704",
  Markdown: "#9fd25c",
  Shell: "#4eaa25",
  Batch: "#4eaa25",
  GitBook: "#4eaa25",
};

export const getTechColor = (tech: string) => {
  if (tech in TECH_COLOR) return TECH_COLOR[tech];
  return "bg-gray-300";
};
