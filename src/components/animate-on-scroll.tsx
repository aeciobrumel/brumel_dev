"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, x: 32, scale: 0.99, filter: "blur(4px)" }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.36,
              delay: delay / 1000,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      viewport={{ once: false, amount: 0.18, margin: "0px 0px -5% 0px" }}
      whileInView={
        reduceMotion ? {} : { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
      }
    >
      {children}
    </motion.div>
  );
}
