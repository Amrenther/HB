// src/components/ui/GlowText.tsx
// Reusable text component with platinum glow effect

import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { GlowIntensity } from '../../types';

interface GlowTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  intensity?: GlowIntensity;
  className?: string;
  animate?: boolean;
}

const intensityMap: Record<GlowIntensity, string> = {
  low:    'glow-low',
  medium: 'glow-medium',
  high:   'glow-high',
};

export default function GlowText({
  children,
  as: Tag = 'span',
  intensity = 'medium',
  className,
  animate = false,
}: GlowTextProps) {
  const glowClass = intensityMap[intensity];

  if (animate) {
    return (
      <motion.span
        className={cn(glowClass, className)}
        animate={{
          textShadow: [
            '0 0 20px rgba(184,184,184,0.3)',
            '0 0 40px rgba(184,184,184,0.7)',
            '0 0 20px rgba(184,184,184,0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <Tag className={cn(glowClass, className)}>
      {children}
    </Tag>
  );
}
