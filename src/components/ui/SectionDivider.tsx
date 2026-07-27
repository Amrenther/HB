// src/components/ui/SectionDivider.tsx
// Animated decorative dividers between sections

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import type { DividerVariant } from '../../types';

interface SectionDividerProps {
  variant?: DividerVariant;
  className?: string;
}

export default function SectionDivider({ variant = 'line', className }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 0',
    overflow: 'hidden',
  };

  if (variant === 'dots') {
    return (
      <div ref={ref} style={containerStyle} className={className}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'rgba(184,184,184,0.5)',
              margin: '0 8px',
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'ornament') {
    return (
      <div ref={ref} style={containerStyle} className={className}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            height: 1,
            width: 80,
            backgroundColor: 'rgba(184,184,184,0.3)',
            transformOrigin: 'right',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          style={{
            width: 6,
            height: 6,
            border: '1px solid rgba(184,184,184,0.6)',
            transform: 'rotate(45deg)',
            margin: '0 12px',
          }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            height: 1,
            width: 80,
            backgroundColor: 'rgba(184,184,184,0.3)',
            transformOrigin: 'left',
          }}
        />
      </div>
    );
  }

  // Default: 'line'
  return (
    <div ref={ref} style={containerStyle} className={className}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          height: 1,
          width: '100%',
          maxWidth: 200,
          backgroundColor: 'rgba(184,184,184,0.25)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}
