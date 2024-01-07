import { useEffect, useRef } from "react";

interface AnimatedProgressBarProps {
  color1: string;
  color2: string;
  percentage: number;
}

export default function AnimatedProgressBar({
  color1,
  color2,
  percentage,
}: AnimatedProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;

    if (bar) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bar.classList.add("animate");
          } else {
            bar.classList.remove("animate");
          }
        });
      });

      observer.observe(bar);

      return () => {
        observer.unobserve(bar);
      };
    }
  });

  return (
    <div className="mt-2 h-2 w-full bg-gray-700 rounded-full mb-4">
      <div
        className="h-full rounded-full animated-separator"
        ref={barRef}
        style={{
          width: percentage + "%",
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        }}
      ></div>
    </div>
  );
}
