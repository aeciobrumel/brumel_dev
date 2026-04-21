import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[#d5e1fb]/80 bg-[#f3f8ff]/90 p-4 backdrop-blur dark:border-white/10 dark:bg-[#0f1728] dark:text-slate-100',
        className
      )}
    >
      {children}
    </div>
  );
}
