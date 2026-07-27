// src/components/cursor/CustomCursor.tsx
// Dot + trailing spring ring cursor — desktop only (hidden on pointer:coarse)

import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from './CursorContext';

const springConfig = { stiffness: 150, damping: 18 };

export default function CustomCursor() {
  const { variant } = useCursor();

  // Raw mouse position for the dot (zero lag)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring-lagged position for the ring
  const ringX = useSpring(dotX, springConfig);
  const ringY = useSpring(dotY, springConfig);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [dotX, dotY]);

  // Variant styles
  const getDotStyle = () => {
    switch (variant) {
      case 'hover':  return { width: 8, height: 8, opacity: 1 };
      case 'click':  return { width: 6, height: 6, opacity: 1, scale: 0.6 };
      case 'text':   return { width: 2, height: 20, borderRadius: 1, opacity: 1 };
      case 'hidden': return { opacity: 0 };
      default:       return { width: 8, height: 8, opacity: 1 };
    }
  };

  const getRingStyle = () => {
    switch (variant) {
      case 'hover':  return { width: 52, height: 52, opacity: 1, backgroundColor: 'rgba(255,255,255,0.10)', borderColor: 'rgba(184,184,184,0.5)' };
      case 'click':  return { width: 28, height: 28, opacity: 1 };
      case 'text':   return { opacity: 0 };
      case 'hidden': return { opacity: 0 };
      default:       return { width: 32, height: 32, opacity: 1, backgroundColor: 'transparent', borderColor: 'rgba(184,184,184,0.6)' };
    }
  };

  const dotStyle = getDotStyle();
  const ringStyle = getRingStyle();

  if (variant === 'hidden') {
    return null;
  }

  return (
    <>
      {/* Inner dot — zero lag */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#F5F5F0',
          zIndex: 9999,
          pointerEvents: 'none',
          translateX: '-50%',
          translateY: '-50%',
          x: dotX,
          y: dotY,
          mixBlendMode: 'difference',
        }}
        animate={dotStyle}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring — spring lag */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(184,184,184,0.6)',
          backgroundColor: 'transparent',
          zIndex: 9998,
          pointerEvents: 'none',
          translateX: '-50%',
          translateY: '-50%',
          x: ringX,
          y: ringY,
        }}
        animate={ringStyle}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
