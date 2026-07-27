// src/components/sections/CountdownSection.tsx
// Live countdown timer: slot-machine digit transitions

import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { birthdayConfig } from '../../data/birthday.config';
import { useDeviceType } from '../../hooks/useDeviceType';

interface DigitUnitProps {
  value: number;
  label: string;
  isMobile: boolean;
}

function DigitUnit({ value, label, isMobile }: DigitUnitProps) {
  const display = String(value).padStart(2, '0');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {/* Glass panel */}
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(184,184,184,0.15)',
          borderRadius: 12,
          padding: isMobile ? '1rem 1.5rem' : '1.5rem 2rem',
          minWidth: isMobile ? 80 : 100,
          position: 'relative',
          overflow: 'hidden',
        }}
        className="animate-glow-pulse"
      >
        {/* Top highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(184,184,184,0.3), transparent)',
          }}
        />

        <AnimatePresence mode="wait">
          <motion.span
            key={display}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'block',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: isMobile ? 'clamp(32px, 9vw, 48px)' : 'clamp(48px, 6vw, 72px)',
              color: '#F5F5F0',
              lineHeight: 1,
              textAlign: 'center',
              textShadow: '0 0 20px rgba(184,184,184,0.3)',
            }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: isMobile ? '0.65rem' : '0.75rem',
          color: 'rgba(184,184,184,0.6)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const { isMobile } = useDeviceType();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(birthdayConfig.birthdayDate);

  return (
    <section
      id="countdown"
      style={{
        position: 'relative',
        minHeight: '60dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile
          ? 'calc(5rem + env(safe-area-inset-top)) 1.5rem calc(5rem + env(safe-area-inset-bottom))'
          : 'calc(8rem + env(safe-area-inset-top)) 2rem calc(8rem + env(safe-area-inset-bottom))',
        textAlign: 'center',
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        data-cursor="text"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: isMobile ? 'clamp(24px, 8vw, 32px)' : 'clamp(32px, 4vw, 48px)',
          color: '#F5F5F0',
          marginBottom: isMobile ? '3rem' : '4rem',
          letterSpacing: '0.05em',
        }}
      >
        {isExpired ? (
          <span className="shimmer-text">🎂 Happy Birthday, {birthdayConfig.name}! 🎂</span>
        ) : (
          <>
            Until{' '}
            <span className="shimmer-text">{birthdayConfig.name}'s</span>
            {' '}Special Day
          </>
        )}
      </motion.h2>

      {isExpired ? (
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          data-cursor="text"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: 'rgba(184,184,184,0.8)',
            letterSpacing: '0.1em',
          }}
        >
          The day has arrived! 🎉
        </motion.p>
      ) : (
        /* Countdown grid: 4-col desktop, 2x2 mobile */
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          data-cursor="text"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, auto)',
            gap: isMobile ? '1.5rem 1rem' : '1.5rem 2rem',
            justifyContent: 'center',
          }}
        >
          <DigitUnit value={days}    label="Days"    isMobile={isMobile} />
          <DigitUnit value={hours}   label="Hours"   isMobile={isMobile} />
          <DigitUnit value={minutes} label="Minutes" isMobile={isMobile} />
          <DigitUnit value={seconds} label="Seconds" isMobile={isMobile} />
        </motion.div>
      )}

      {/* Decorative caption */}
      {!isExpired && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          data-cursor="text"
          style={{
            marginTop: '3rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? '0.75rem' : '0.875rem',
            color: 'rgba(120,120,120,0.7)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          August 9, 2026
        </motion.p>
      )}
    </section>
  );
}
