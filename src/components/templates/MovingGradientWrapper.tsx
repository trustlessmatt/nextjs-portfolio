import { useWindowSize } from "@/hooks/useWindowSize";
import { useState, useEffect, ReactNode } from "react";
import MovingGradient from "../atoms/MovingGradient";

type MovingGradientBackgroundProps = {
  children: ReactNode;
};

const MovingGradientWrapper: React.FC<MovingGradientBackgroundProps> = ({
  children,
}) => {
  const [screenWidth, screenHeight] = useWindowSize();

  return (
    <>
      <MovingGradient />
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
              strokeWidth="2"
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
