// src/components/background/AuroraBlobs.tsx
// Three large, slow-moving blurred gradient orbs for atmospheric depth

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BlobConfig {
  color: string;
  size: number;
  x: string;
  y: string;
  duration: number;
}

const blobs: BlobConfig[] = [
  { color: '#2D1B69', size: 600, x: '20%', y: '30%', duration: 22 },
  { color: '#0D2137', size: 500, x: '70%', y: '60%', duration: 28 },
  { color: '#1A1A2E', size: 700, x: '50%', y: '20%', duration: 35 },
];

export default function AuroraBlobs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const blur = isMobile ? 80 : 120;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => {
        const duration = isMobile ? blob.duration * 1.5 : blob.duration;
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: blob.x,
              top: blob.y,
              width: blob.size,
              height: blob.size,
              borderRadius: '50%',
              background: blob.color,
              filter: `blur(${blur}px)`,
              opacity: 0.6,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: ['-5%', '5%', '-3%', '5%', '-5%'],
              y: ['-3%', '5%', '-5%', '3%', '-3%'],
              scale: [1, 1.05, 0.97, 1.03, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        );
      })}
    </div>
  );
}
