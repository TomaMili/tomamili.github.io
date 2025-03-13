import { useEffect, useRef } from "react";
import "../index.css";

function Section({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fade-in flex-col snap-start h-screen flex items-center justify-center w-full"
    >
      {children}
    </div>
  );
}

export default Section;
