"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  amount?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.18,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset = {
    up: { x: 0, y: 34 },
    left: { x: -34, y: 0 },
    right: { x: 34, y: 0 },
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
        once: true,
        amount,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}