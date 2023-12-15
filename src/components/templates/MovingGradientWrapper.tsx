import { ReactNode, useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MovingGradient } from "@/components";

type MovingGradientBackgroundProps = {
  children: ReactNode;
};

const MovingGradientWrapper: React.FC<MovingGradientBackgroundProps> = ({
  children,
}) => {
  const [screenWidth, _] = useWindowSize();

  const [contentHeight, setContentHeight] = useState<number>();

  // obtain the height of the content
  useEffect(() => {
    setContentHeight(document.body.scrollHeight);
  }, []);

  return (
    <div style={{ height: contentHeight }}>
      <MovingGradient />
      <svg
        width={screenWidth}
        height={contentHeight}
        className="absolute top-0 left-0 opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </div>
  );
};

export default MovingGradientWrapper;
