// src/components/sections/HeroSection.tsx
// Full-screen opening hero — name reveal, particles, scroll indicator

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { birthdayConfig } from '../../data/birthday.config';
import { staggerContainer, letterVariant } from '../../utils/motion';
import ParticleCanvas from '../ui/ParticleCanvas';
import { useDeviceType } from '../../hooks/useDeviceType';

export default function HeroSection() {
  const { isMobile } = useDeviceType();
  const name = birthdayConfig.name.toUpperCase();

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(1.5rem + env(safe-area-inset-top))',
        paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))',
        overflow: 'hidden',
      }}
    >
      {/* Particle field */}
      <ParticleCanvas isMobile={isMobile} />

      {/* Hero photo — subtle background portrait */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${birthdayConfig.heroPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'center top' : 'center 58%',
          opacity: 0.08,
          filter: 'grayscale(100%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
        }}
      >
        {/* SVG decorative line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ marginBottom: '2rem', width: '100%', maxWidth: 300 }}
        >
          <svg
            viewBox="0 0 300 2"
            style={{ width: '100%', height: 2, overflow: 'visible' }}
            aria-hidden="true"
          >
            <motion.line
              x1="0"
              y1="1"
              x2="300"
              y2="1"
              stroke="rgba(184,184,184,0.4)"
              strokeWidth="1"
              strokeDasharray="300"
              initial={{ strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </svg>
        </motion.div>

        {/* Name — letter by letter stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          data-cursor="text"
          style={{
            display: 'flex',
            gap: isMobile ? '0.2rem' : '0.4rem',
            marginBottom: '1.5rem',
          }}
          aria-label={`Happy Birthday ${birthdayConfig.name}`}
        >
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: isMobile ? 'clamp(36px, 11vw, 56px)' : 'clamp(56px, 8vw, 96px)',
                color: '#F5F5F0',
                letterSpacing: isMobile ? '0.15em' : '0.2em',
                display: 'inline-block',
                textShadow: '0 0 30px rgba(184,184,184,0.3)',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Happy Birthday subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? '0.875rem' : '1.1rem',
            color: 'rgba(184,184,184,0.9)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          Happy Birthday 🤍
        </motion.p>

        {/* Age shimmer badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1.5rem',
            border: '1px solid rgba(184,184,184,0.25)',
            borderRadius: 100,
          }}
          className="animate-glow-pulse"
        >
          <span
            className="shimmer-text"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
            }}
          >
            Turning {birthdayConfig.turningAge} · Aug 9, 2026
          </span>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="animate-float"
        data-cursor="hover"
        style={{
          position: 'absolute',
          bottom: `calc(2.5rem + env(safe-area-inset-bottom))`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 1,
        }}
        aria-label="Scroll down"
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(184,184,184,0.5)',
          }}
        >
          Scroll
        </span>
        <ChevronDown
          size={18}
          color="rgba(184,184,184,0.5)"
        />
      </motion.div>
    </section>
  );
}
