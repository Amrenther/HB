// src/components/sections/LetterSection.tsx
// Typewriter letter with signature underline, optional photo

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { birthdayConfig } from '../../data/birthday.config';
import { useDeviceType } from '../../hooks/useDeviceType';

export default function LetterSection() {
  const { isMobile } = useDeviceType();
  const ref = useRef<HTMLDivElement>(null);
  const [startTyping, setStartTyping] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Delay typewriter start slightly
          setTimeout(() => setStartTyping(true), 400);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build the typewriter sequence from the message
  const message = birthdayConfig.message;

  return (
    <section
      id="letter"
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '60dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile
          ? 'calc(5rem + env(safe-area-inset-top)) 1.5rem calc(5rem + env(safe-area-inset-bottom))'
          : 'calc(8rem + env(safe-area-inset-top)) 2rem calc(8rem + env(safe-area-inset-bottom))',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: isMobile ? '100%' : 720,
          zIndex: 1,
        }}
      >
        {/* Large decorative quote mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            top: isMobile ? -40 : -60,
            left: isMobile ? 0 : -20,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? 120 : 180,
            fontWeight: 300,
            color: 'rgba(184,184,184,0.06)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          ❝
        </motion.div>

        {/* Letter Photo (optional) */}
        {birthdayConfig.letterPhoto && !isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              float: 'right',
              marginLeft: '2rem',
              marginBottom: '1rem',
              width: 200,
              borderRadius: 8,
              overflow: 'hidden',
              border: '1px solid rgba(184,184,184,0.15)',
              flexShrink: 0,
            }}
          >
            <img
              src={birthdayConfig.letterPhoto}
              alt="Kirthana"
              style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', filter: 'grayscale(15%)' }}
            />
          </motion.div>
        )}

        {/* Typewriter content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          data-cursor="text"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? '1rem' : '1.1rem',
            lineHeight: 1.9,
            color: 'rgba(224,224,224,0.85)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {startTyping ? (
            <TypeAnimation
              sequence={[message]}
              speed={75}
              style={{ whiteSpace: 'pre-line', display: 'block' }}
              cursor={true}
            />
          ) : (
            <span style={{ opacity: 0 }}>{message}</span>
          )}
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {/* Underline draws in */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, rgba(184,184,184,0.5), transparent)',
              transformOrigin: 'left',
              marginBottom: '1rem',
            }}
          />

          <p
            data-cursor="text"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: isMobile ? '1.1rem' : '1.4rem',
              color: 'rgba(184,184,184,0.9)',
              letterSpacing: '0.05em',
            }}
          >
            {birthdayConfig.signature}
          </p>

          <p
            data-cursor="text"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.75rem',
              color: 'rgba(120,120,120,0.6)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            {birthdayConfig.fromName} — {birthdayConfig.relationship}
          </p>
        </motion.div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: isMobile ? -60 : -80,
            right: isMobile ? 0 : -20,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? 120 : 180,
            fontWeight: 300,
            color: 'rgba(184,184,184,0.06)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          ❞
        </motion.div>
      </div>
    </section>
  );
}
