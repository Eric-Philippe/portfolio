export const drawCircle = (
  circleRadius: number,
  circleX: number,
  circleY: number,
  color: string
) => {
  const canvas = document.querySelector("canvas");
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
    const outerColor = "white"; // Couleur à l'extérieur du cercle

    gradient.addColorStop(0, centerColor);
    gradient.addColorStop(1, outerColor);

    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
};
