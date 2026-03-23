'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeProps {
  children: React.ReactNode;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  top?: boolean;
  duration?: number;
}

export default function Fade({ children, left, right, bottom, top, duration = 500 }: FadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  if (left) initial.x = -60;
  else if (right) initial.x = 60;
  else if (bottom) initial.y = 60;
  else if (top) initial.y = -60;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: duration / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
