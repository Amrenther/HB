// src/components/background/RadialGlow.tsx
// Slowly breathing center spotlight radial gradient

import { motion } from 'framer-motion';

export default function RadialGlow() {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(200,200,200,0.06) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
