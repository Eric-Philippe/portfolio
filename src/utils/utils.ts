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
