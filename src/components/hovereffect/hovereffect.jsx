import React, { useState } from "react";

const HoverDiv = () => {
  const [hoverStyle, setHoverStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setHoverStyle({
      background: `radial-gradient(circle at ${x}px ${y}px,green,green, transparent)`,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle({});
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={hoverStyle}
      className="hover-div"
    ></div>
  );
};

export default HoverDiv;
