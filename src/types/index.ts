/* ═══════════════════════════════════════
   Kirthana's Birthday Website
   Shared TypeScript Interfaces & Types
   ═══════════════════════════════════════ */

// ── Cursor System ────────────────────────────────────────
export type CursorVariant = 'default' | 'hover' | 'click' | 'text' | 'hidden';

export interface CursorContextType {
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
}

// ── Countdown Hook ───────────────────────────────────────
export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// ── Device Detection ─────────────────────────────────────
export interface DeviceType {
  isTouchDevice: boolean;
  isMobile: boolean;
  isIOS: boolean;
  pixelRatio: number;
}

// ── Scroll Animation ─────────────────────────────────────
export interface ScrollAnimationOptions {
  threshold?: number;
  parallaxRange?: [number, number];
}

// ── Section Divider ──────────────────────────────────────
export type DividerVariant = 'line' | 'dots' | 'ornament';

// ── Glow Text ────────────────────────────────────────────
export type GlowIntensity = 'low' | 'medium' | 'high';

// ── Gallery Photo ────────────────────────────────────────
export interface GalleryPhoto {
  src: string;
  alt?: string;
}

// ── Page Loader ──────────────────────────────────────────
export interface PageLoaderProps {
  onComplete: () => void;
}

// ── Section Wrapper ──────────────────────────────────────
export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  threshold?: number;
}
