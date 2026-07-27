// src/hooks/useScrollAnimation.ts
// Framer Motion scroll-linked values + parallax + inView detection

import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import type { ScrollAnimationOptions } from '../types';

interface ScrollAnimationResult {
  ref: React.RefObject<HTMLDivElement | null>;
  inView: boolean;
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}): ScrollAnimationResult {
  const { threshold = 0.15, parallaxRange = [-20, 20] } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallaxRange as [number, number]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView, scrollYProgress, y };
}
