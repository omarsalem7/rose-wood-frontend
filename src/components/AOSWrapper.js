"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Changed to false to allow animations to repeat
      mirror: true, // Enable mirror to animate elements when scrolling up
      offset: 100,
      delay: 0,
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
