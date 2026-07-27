// src/components/layout/PageLoader.tsx
// Cinematic intro screen: K reveal → tagline → shimmer → slide up → onComplete

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { PageLoaderProps } from '../../types';

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [phase, setPhase] = useState<'init' | 'tagline' | 'shimmer' | 'exit'>('init');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('tagline'), 800);
    const t2 = setTimeout(() => setPhase('shimmer'), 2000);
    const t3 = setTimeout(() => setPhase('exit'), 2800);
    const t4 = setTimeout(() => onComplete(), 3600);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="loader"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
          }}
          exit={{
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* K Letter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(80px, 15vw, 120px)',
              fontWeight: 300,
              color: '#F5F5F0',
              letterSpacing: '0.1em',
              lineHeight: 1,
              position: 'relative',
            }}
          >
            {/* Shimmer sweep over K */}
            {phase === 'shimmer' && (
              <motion.span
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(245,245,240,0.6) 50%, transparent 100%)',
                  backgroundSize: '200% auto',
                }}
                animate={{ backgroundPosition: ['200% center', '-200% center'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            )}
            K
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: phase === 'tagline' || phase === 'shimmer' ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(12px, 2vw, 16px)',
              color: 'rgba(184,184,184,0.8)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginTop: '2rem',
            }}
          >
            Something beautiful awaits, Kirthana...
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              width: 60,
              height: 1,
              backgroundColor: 'rgba(184,184,184,0.4)',
              marginTop: '2rem',
              transformOrigin: 'center',
            }}
          />
        </motion.div>
      ) : (
        // Exit slide-up (handled above via exit prop)
        <motion.div
          key="loader-exit"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#080808',
            zIndex: 10000,
          }}
          initial={{ y: 0 }}
          animate={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
