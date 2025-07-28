"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Reduced from 1000 to 600ms
      easing: "ease-in-out",
      once: false, // Animations repeat on scroll
      mirror: true, // Animate out on scroll up
      offset: 100,
      delay: 0,
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
