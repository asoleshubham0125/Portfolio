import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const current = ref.current;
    if (current) {
      const elements = current.querySelectorAll(
        ".fade-in-up, .fade-in-left, .fade-in-right"
      );
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (current) {
        const elements = current.querySelectorAll(
          ".fade-in-up, .fade-in-left, .fade-in-right"
        );
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
}
