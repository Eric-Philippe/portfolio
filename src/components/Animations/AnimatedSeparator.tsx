import React, { useEffect, useRef } from "react";

interface AnimatedSeparatorProps {
  color1: string;
}

const AnimatedSeparator: React.FC<AnimatedSeparatorProps> = ({ color1 }) => {
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const separator = separatorRef.current;

    if (separator) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            separator.classList.add("animate");
          } else {
            separator.classList.remove("animate");
          }
        });
      });

      observer.observe(separator);

      return () => {
        observer.unobserve(separator);
      };
    }
  }, []);

  return (
    <div
      ref={separatorRef}
      className={`h-1 w-full bg-[${color1}] rounded overflow-hidden mb-2 mt-2 animated-separator`}
    ></div>
  );
};

export default AnimatedSeparator;
