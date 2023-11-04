import { useState, useEffect, ReactNode } from "react";

type MovingGradientBackgroundProps = {
  children: ReactNode;
};

const MovingGradientWrapper: React.FC<MovingGradientBackgroundProps> = ({
  children,
}) => {
  const [backgroundPosition, setBackgroundPosition] =
    useState<string>("center");

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
          backgroundImage: "radial-gradient(circle, #000, #333)",
          backgroundSize: "200vw 200vh",
          backgroundPosition: backgroundPosition,
          height: "100%",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </>
  );
};

export default MovingGradientWrapper;
