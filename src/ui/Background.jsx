import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Background = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll progress
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate scale based on scroll position
  const scale = scrollY > 0 ? 1 + scrollY / 1000 : 1;

  // Mouse movement parallax
  const bgPosX = useMotionValue(50);
  const bgPosY = useMotionValue(50);

  const smoothBgX = useSpring(bgPosX, { stiffness: 150, damping: 60 });
  const smoothBgY = useSpring(bgPosY, { stiffness: 150, damping: 60 });

  const backgroundPosition = useTransform(
    [smoothBgX, smoothBgY],
    ([x, y]) => `${x}% ${y}%`
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const maxMovement = 10;
      const xPercent = (e.clientX / innerWidth) * 100;
      const yPercent = (e.clientY / innerHeight) * 100;

      const newX = 50 + (50 - xPercent) * (maxMovement / 50);
      const newY = 50 + (50 - yPercent) * (maxMovement / 50);

      bgPosX.set(newX);
      bgPosY.set(newY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [bgPosX, bgPosY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "110% 110%",
        backgroundPosition: backgroundPosition,
        scale,
      }}
    />
  );
};

export default Background;
