"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile();

    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  const offset = {
    up: { x: 0, y: 28 },
    down: { x: 0, y: -28 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 1, x: 0, y: 0 }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: isMobile ? 0.18 : 0.3,
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: isMobile ? 0.5 : 0.65,
              delay: isMobile ? delay * 0.5 : delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}