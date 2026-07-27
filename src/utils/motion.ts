/* ═══════════════════════════════════════
   Kirthana's Birthday Website
   Shared Framer Motion Variants & Defaults
   ═══════════════════════════════════════ */

// ── Default Transition ────────────────────────────────────
export const defaultTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.1, 0.25, 1.0],
  duration: 0.6,
};

// ── Fade Up ───────────────────────────────────────────────
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

// ── Stagger Container ─────────────────────────────────────
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// ── Letter-by-letter Reveal ───────────────────────────────
export const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

// ── Fade In ───────────────────────────────────────────────
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ── Scale Up ──────────────────────────────────────────────
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};
