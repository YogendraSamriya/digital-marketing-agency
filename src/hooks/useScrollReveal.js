import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    sections.forEach((section) => {
      const items = section.querySelectorAll(".reveal-item");

      gsap.from(items, {
        opacity: 10,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });
  }, []);
};

export default useScrollReveal;