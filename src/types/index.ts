import type React from 'react';

export interface BirthdayConfig {
  name: string;
  birthdayDate: string;
  birthYear: number;
  turningAge: number;
  fromName: string;
  relationship: string;
  message: string;
  signature: string;
  heroPhoto: string;
  galleryPhotos: string[];
  letterPhoto?: string;
}

export type CursorVariant = 'default' | 'hover' | 'click' | 'text' | 'hidden';

export interface CursorContextType {
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
}

export interface PageLoaderProps {
  onComplete: () => void;
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

export interface GalleryProps {
  photos: string[];
}

export interface GlowTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  animate?: boolean;
}

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export interface DeviceType {
  isTouchDevice: boolean;
  isMobile: boolean;
  isIOS: boolean;
  pixelRatio: number;
}
