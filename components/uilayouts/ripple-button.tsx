"use client";
import { ArrowRightUp } from "reicon-react";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const RippleButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use motion values for instant tracking without React re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optional: Add a slight spring to the movement to make it feel fluid
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.button
      ref={buttonRef}
      onPointerEnter={(e) => {
        setIsHovered(true);
        handlePointerMove(e); // Instantly set position on entry
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative overflow-hidden px-6 py-3 bg-black text-white rounded-full flex items-center gap-3 text-xl cursor-pointer group hover:shadow-[0_0_20px_rgba(93,183,222,0.4)] transition-shadow duration-300"
    >
      {/* Expanding Circular Ripple using Framer Motion */}
      <motion.span
        className="absolute w-[250%] aspect-square bg-sky-surge rounded-full z-0 pointer-events-none"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Button Content */}
      <span className="relative z-10 font-medium group-hover:text-black transition-colors duration-300 pointer-events-none">
        Work with me
      </span>

      {/* Animated Arrow Icon */}
      <div className="relative z-10 flex justify-center items-center rounded-full bg-white text-black size-8 group-hover:bg-black group-hover:text-white transition-colors duration-300 pointer-events-none overflow-hidden">
        {/* Original arrow shoots out top right */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={{
            x: isHovered ? "150%" : "0%",
            y: isHovered ? "-150%" : "0%",
          }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <ArrowRightUp />
        </motion.div>

        {/* New arrow shoots in from bottom left */}
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ x: "-150%", y: "150%" }}
          animate={{
            x: isHovered ? "0%" : "-150%",
            y: isHovered ? "0%" : "150%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: isHovered ? 0.1 : 0,
          }}
        >
          <ArrowRightUp />
        </motion.div>
      </div>
    </motion.button>
  );
};
