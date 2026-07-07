"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import cursorImg from "@/assets/cursor.png";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: "tween", ease: "linear", duration: 0 }}
      // Use transform: translate(-50%, -50%) if the image is a crosshair/circle
    >
      <Image
        src={cursorImg}
        alt="cursor"
        width={15}
        height={15}
        className="object-contain"
      />
    </motion.div>
  );
}
