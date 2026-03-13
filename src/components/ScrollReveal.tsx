import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../utils/cn';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, x: 32, scale: 0.99, filter: 'blur(4px)' }}
      whileInView={reduceMotion ? {} : { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.18, margin: '0px 0px -5% 0px' }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.36,
              delay: delay / 1000,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}
