// FadeIn.js
import React, { useEffect, useRef, useState } from "react";
const FadeIn = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const componentRef = useRef();

  const handleScroll = () => {
    const rect = componentRef.current.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 1 && !isActive) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <div
      ref={componentRef}
      className={`fade-in-section ${isActive ? "is-visible" : ""}`}
      style={{ transitionDelay: children.delay }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
