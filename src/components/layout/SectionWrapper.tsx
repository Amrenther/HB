// src/components/layout/SectionWrapper.tsx
// Scroll-reveal HOC: fades up when section enters viewport

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { SectionWrapperProps } from '../../types';

export default function SectionWrapper({
  children,
  id,
  className,
  delay = 0,
  threshold = 0.15,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use IntersectionObserver directly for iOS Safari reliability
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // Only trigger once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={cn('relative z-10', className)}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
    >
      {children}
    </motion.div>
  );
}
