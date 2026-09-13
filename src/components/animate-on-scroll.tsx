"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

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
          : { filter: "blur(4px)", opacity: 0, scale: 0.99, x: 32 }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              delay: delay / 1000,
              duration: 0.36,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      viewport={{ amount: 0.18, margin: "0px 0px -5% 0px", once: false }}
      whileInView={
        reduceMotion ? {} : { filter: "blur(0px)", opacity: 1, scale: 1, x: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
