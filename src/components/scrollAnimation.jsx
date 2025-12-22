import React from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimation({
  children,
  className = "",
  threshold = 0.2, // how much of element should be visible
  once = false, // animate only once
}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}
