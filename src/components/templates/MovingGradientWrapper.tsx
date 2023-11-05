import { useWindowSize } from "@/hooks/useWindowSize";
import { useState, useEffect, ReactNode } from "react";

type MovingGradientBackgroundProps = {
  children: ReactNode;
};

const MovingGradientWrapper: React.FC<MovingGradientBackgroundProps> = ({
  children,
}) => {
  const [backgroundPosition, setBackgroundPosition] =
    useState<string>("center");

  const [screenWidth, screenHeight] = useWindowSize();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const bgPosX = (mouseX / width) * 100;
      const bgPosY = (mouseY / height) * 100;

      setBackgroundPosition(`${bgPosX}% ${bgPosY}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "radial-gradient(circle, #333, #000)",
          backgroundSize: "200vw 200vh",
          backgroundPosition: backgroundPosition,
          height: "100%",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.5,
        }}
      />
      <svg
        width={screenWidth}
        height={screenHeight}
        className="absolute top-0 left-0 opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="white"
              stroke-width="2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </>
  );
};

export default MovingGradientWrapper;
