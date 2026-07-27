// src/components/ui/ScrollProgress.tsx
// Thin platinum progress bar fixed at top of viewport

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, #787878 0%, #B8B8B8 50%, #E0E0E0 100%)',
        transformOrigin: 'left',
        scaleX,
        zIndex: 9990,
      }}
      aria-hidden="true"
    />
  );
}
