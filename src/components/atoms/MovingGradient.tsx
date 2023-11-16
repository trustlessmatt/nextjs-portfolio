import React, { useState, useEffect, CSSProperties } from "react";

const MovingGradient = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent) => {
    // Calculate percentage position of the mouse on the viewport
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    setGradientPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle: CSSProperties = {
    height: "100vh",
    width: "100vw",
    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #333, #000)`,
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0.8,
  };

  return <div style={gradientStyle} />;
};

export default MovingGradient;
