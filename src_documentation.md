# 📖 Kirthana's Birthday Website — Source Documentation

> **Project**: Kirthana's 20th Birthday Website
> **Built by**: Amrenther (her brother)
> **Birthday**: August 9, 2026
> **Stack**: Vite + React + TypeScript + Tailwind CSS + Framer Motion
> **Deploy Target**: Vercel

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Directory Structure](#3-directory-structure)
4. [Configuration File](#4-configuration-file)
5. [Design System](#5-design-system)
6. [Components Reference](#6-components-reference)
   - 6.1 [Layout Components](#61-layout-components)
   - 6.2 [Background System](#62-background-system)
   - 6.3 [Cursor System](#63-cursor-system)
   - 6.4 [Section Components](#64-section-components)
   - 6.5 [UI Primitives](#65-ui-primitives)
7. [Hooks Reference](#7-hooks-reference)
8. [Animation System](#8-animation-system)
9. [Responsive Design — iPhone 16 Pro](#9-responsive-design--iphone-16-pro)
10. [Photo Setup Guide](#10-photo-setup-guide)
11. [Deployment Guide](#11-deployment-guide)
12. [Customization Guide](#12-customization-guide)

---

## 1. Project Overview

This is a **cinematic, single-page birthday website** built as a surprise gift from Amrenther to his sister Kirthana on her 20th birthday (August 9, 2026). The experience is designed to feel premium and emotional — like a love letter rendered in code.

### Experience Flow

```
[Page Load]
     ↓
 PageLoader         ← 2.8s cinematic black screen with "K" glow
     ↓
 HeroSection        ← Full-screen, name reveal, floating particles
     ↓
 CountdownSection   ← Live countdown to August 9, 2026
     ↓
 GallerySection     ← Parallax photo masonry with 3D tilt
     ↓
 LetterSection      ← Typewriter letter from Amrenther to Kirthana
```

### Design Language

- **Mood**: Elegant, cinematic, luxury — like a high-fashion editorial
- **Palette**: Jet black + pure white + platinum silver
- **Typography**: Cormorant Garamond (serif headlines) + Inter (body)
- **Motion**: Framer Motion scroll-reveals, spring physics cursor, aurora background

---

## 2. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Vite** | `^5.x` | Build tool & dev server |
| **React** | `^18.x` | UI framework |
| **TypeScript** | `^5.x` | Type safety |
| **Tailwind CSS** | `^3.x` | Utility-first styling |
| **Framer Motion** | `^11.x` | Animations & transitions |
| `@tanem/react-tilt` | `^5.x` | 3D card tilt effect |
| `react-type-animation` | `^3.x` | Typewriter text animation |
| `simplex-noise` | `^4.x` | Film grain canvas noise |
| `lucide-react` | `^0.x` | Icon set |
| `clsx` | `^2.x` | Conditional class merging |
| `tailwind-merge` | `^2.x` | Tailwind class conflict resolver |

### Dev Dependencies

| Package | Purpose |
|---|---|
| `@types/react` | React TypeScript types |
| `@types/node` | Node TypeScript types |
| `autoprefixer` | PostCSS autoprefixer |
| `postcss` | CSS processing |

---

## 3. Directory Structure

```
c:/Dev/HB/
│
├── public/
│   ├── photos/                        ← 📸 Drop Kirthana's photos here
│   │   ├── photo-hero.jpg             ← Hero section portrait
│   │   ├── photo-1.jpg                ← Gallery photos
│   │   ├── photo-2.jpg
│   │   ├── photo-3.jpg
│   │   ├── photo-4.jpg
│   │   ├── photo-5.jpg
│   │   ├── photo-6.jpg
│   │   └── photo-letter.jpg           ← Optional letter section photo
│   └── favicon.ico
│
├── src/
│   │
│   ├── data/
│   │   └── birthday.config.ts         ← 🎯 CENTRAL CONFIG — edit this file
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── PageLoader.tsx         ← Cinematic intro screen
│   │   │   └── SectionWrapper.tsx     ← Scroll-reveal wrapper HOC
│   │   │
│   │   ├── background/
│   │   │   ├── LuxuryBackground.tsx   ← Background layer orchestrator
│   │   │   ├── GrainOverlay.tsx       ← Film grain canvas
│   │   │   ├── AuroraBlobs.tsx        ← Drifting gradient orbs
│   │   │   ├── DotMatrix.tsx          ← Subtle dot grid SVG
│   │   │   └── RadialGlow.tsx         ← Center spotlight glow
│   │   │
│   │   ├── cursor/
│   │   │   ├── CustomCursor.tsx       ← Dot + ring cursor renderer
│   │   │   └── CursorContext.tsx      ← Cursor state provider + hook
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        ← Section 1: Hero
│   │   │   ├── CountdownSection.tsx   ← Section 2: Countdown timer
│   │   │   ├── GallerySection.tsx     ← Section 3: Photo gallery
│   │   │   └── LetterSection.tsx      ← Section 4: Letter from Amrenther
│   │   │
│   │   └── ui/
│   │       ├── ParticleCanvas.tsx     ← Floating silver particles
│   │       ├── GlowText.tsx           ← Glowing animated text
│   │       ├── ScrollProgress.tsx     ← Platinum progress bar (top)
│   │       └── SectionDivider.tsx     ← Animated divider line
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts      ← Framer scroll-linked values
│   │   ├── useCountdown.ts            ← Birthday countdown logic
│   │   └── useDeviceType.ts           ← Pointer vs touch detection
│   │
│   ├── types/
│   │   └── index.ts                   ← Shared TypeScript interfaces
│   │
│   ├── utils/
│   │   └── cn.ts                      ← clsx + tailwind-merge helper
│   │
│   ├── App.tsx                        ← Root component, section assembly
│   ├── main.tsx                       ← React DOM entry point
│   └── index.css                      ← Global styles + CSS variables
│
├── index.html                         ← HTML shell, Google Fonts, meta tags
├── tailwind.config.ts                 ← Custom theme tokens
├── vite.config.ts                     ← Path aliases, build config
├── tsconfig.json                      ← TypeScript configuration
├── postcss.config.js                  ← PostCSS with autoprefixer
├── vercel.json                        ← Vercel SPA routing config
└── SRC_DOCUMENTATION.md               ← This file
```

---

## 4. Configuration File

**Path**: `src/data/birthday.config.ts`

This is the **only file you need to edit** to personalize the entire website.

```typescript
export interface BirthdayConfig {
  // Person being celebrated
  name: string;                    // Display name on the website
  birthdayDate: string;            // ISO format: "YYYY-MM-DD"
  birthYear: number;               // Year of birth
  turningAge: number;              // Age she is turning

  // Creator info
  fromName: string;                // Your name (shown in letter signature)
  relationship: string;            // e.g., "your brother"

  // Personal message (shown in LetterSection)
  message: string;                 // Multi-line string with \n for breaks
  signature: string;               // Closing line of the letter

  // Photos
  heroPhoto: string;               // Path to hero portrait
  galleryPhotos: string[];         // Array of gallery photo paths
  letterPhoto?: string;            // Optional photo in letter section
}

// ─────────────────────────────────────────
// 🎯 EDIT BELOW — Your personal details
// ─────────────────────────────────────────

export const birthdayConfig: BirthdayConfig = {
  name: "Kirthana",
  birthdayDate: "2026-08-09",
  birthYear: 2006,
  turningAge: 20,

  fromName: "Amrenther",
  relationship: "your brother",

  message: `Dear Kirthana,\n\nTwenty years of you — and every single one has been a gift to everyone around you...\n\n[Write your full message here]`,

  signature: "With all my love, always — Amrenther 🤍",

  heroPhoto: "/photos/photo-hero.jpg",
  galleryPhotos: [
    "/photos/photo-1.jpg",
    "/photos/photo-2.jpg",
    "/photos/photo-3.jpg",
    "/photos/photo-4.jpg",
    "/photos/photo-5.jpg",
    "/photos/photo-6.jpg",
  ],
  letterPhoto: "/photos/photo-letter.jpg",
};
```

---

## 5. Design System

### 5.1 Color Palette

Defined in `tailwind.config.ts` under `theme.extend.colors`:

```typescript
colors: {
  // Core palette
  'luxury-black':  '#080808',   // Page background
  'luxury-white':  '#F5F5F0',   // Primary text
  'platinum':      '#B8B8B8',   // Accents, borders, rings
  'silver-light':  '#E0E0E0',   // Subtle highlights
  'silver-dark':   '#787878',   // Secondary text, captions

  // Aurora background blobs
  'aurora-purple': '#2D1B69',   // Blob 1
  'aurora-blue':   '#0D2137',   // Blob 2
  'aurora-smoke':  '#1A1A2E',   // Blob 3
}
```

### 5.2 Typography

```typescript
fontFamily: {
  serif: ['Cormorant Garamond', 'Georgia', 'serif'],
  sans:  ['Inter', 'system-ui', 'sans-serif'],
}
```

| Usage | Font | Weight | Size (Desktop) | Size (Mobile) |
|---|---|---|---|---|
| Hero name | Cormorant Garamond | 300 | `8xl` (96px) | `5xl` (48px) |
| Section titles | Cormorant Garamond | 400 | `5xl` (48px) | `3xl` (30px) |
| Countdown digits | Cormorant Garamond | 300 | `6xl` (60px) | `4xl` (36px) |
| Body / Letter | Inter | 300 | `xl` (20px) | `base` (16px) |
| Captions / Labels | Inter | 400 | `sm` (14px) | `xs` (12px) |
| Signature | Cormorant Garamond | 400 italic | `2xl` (24px) | `xl` (20px) |

### 5.3 Spacing Scale

Uses Tailwind's default spacing scale. Key custom values:

```typescript
spacing: {
  'safe-top':    'env(safe-area-inset-top)',
  'safe-bottom': 'env(safe-area-inset-bottom)',
  'safe-left':   'env(safe-area-inset-left)',
  'safe-right':  'env(safe-area-inset-right)',
}
```

### 5.4 Custom Animations (`@keyframes` in `index.css`)

```css
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(184,184,184,0.2); }
  50%       { box-shadow: 0 0 40px rgba(184,184,184,0.5); }
}

@keyframes draw-line {
  from { stroke-dashoffset: 1000; }
  to   { stroke-dashoffset: 0; }
}
```

---

## 6. Components Reference

### 6.1 Layout Components

---

#### `PageLoader.tsx`

**Path**: `src/components/layout/PageLoader.tsx`
**Purpose**: Cinematic intro screen shown on first load before the main content reveals.

**Props**:
```typescript
interface PageLoaderProps {
  onComplete: () => void;   // Called after animation finishes — unmounts loader
}
```

**Animation Sequence**:
1. `0ms` — Black screen, "K" initial letter fades + scales in (Cormorant, 120px)
2. `800ms` — Tagline fades in: *"Something beautiful awaits, Kirthana..."*
3. `2000ms` — Subtle silver shimmer sweeps across the letter
4. `2800ms` — Full screen slides up (`y: 0 → -100vh`) revealing the page
5. `onComplete()` called → component unmounts via `AnimatePresence`

**Key Framer variants**:
```typescript
const containerVariants = {
  exit: { y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}
```

---

#### `SectionWrapper.tsx`

**Path**: `src/components/layout/SectionWrapper.tsx`
**Purpose**: HOC that wraps each section and triggers entrance animation when scrolled into view.

**Props**:
```typescript
interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;                    // Section anchor ID
  className?: string;
  delay?: number;                 // Stagger delay (default: 0)
  threshold?: number;             // IntersectionObserver threshold (default: 0.15)
}
```

**Behavior**: Uses Framer Motion's `useInView` + `variants` to animate `opacity: 0 → 1`
and `y: 40 → 0` when the section enters the viewport. On mobile, uses
`IntersectionObserver` directly for iOS Safari reliability.

---

### 6.2 Background System

---

#### `LuxuryBackground.tsx`

**Path**: `src/components/background/LuxuryBackground.tsx`
**Purpose**: Fixed-position orchestrator that renders all background layers in correct stacking order.

**Layer Stack** (bottom → top):

```
z-[1]  RadialGlow      ← Deep center spotlight
z-[2]  DotMatrix       ← Subtle dot grid
z-[3]  AuroraBlobs     ← Drifting gradient orbs
z-[4]  GrainOverlay    ← Film grain canvas
```

**Layout**: `position: fixed`, `inset: 0`, `pointer-events: none`, `overflow: hidden`

---

#### `GrainOverlay.tsx`

**Path**: `src/components/background/GrainOverlay.tsx`
**Purpose**: Canvas-based animated film grain texture.

**Technical Details**:
- Uses `simplex-noise` to generate per-frame random noise on a `<canvas>` element
- Canvas pixel data written directly via `ImageData` for maximum performance
- Frame rate: **24fps desktop / 12fps mobile** (throttled via timestamp delta)
- Canvas opacity: `0.045` (barely visible but perceptible — cinematic texture)
- Canvas composited with `mix-blend-mode: overlay`

**Performance**: Uses `useRef` for canvas and `requestAnimationFrame` — no React re-renders during animation.

---

#### `AuroraBlobs.tsx`

**Path**: `src/components/background/AuroraBlobs.tsx`
**Purpose**: 3 large, slow-moving blurred gradient orbs for atmospheric depth.

**Blob Configuration**:
```typescript
const blobs = [
  { color: '#2D1B69', size: 600, x: '20%', y: '30%', duration: 22 },  // Purple
  { color: '#0D2137', size: 500, x: '70%', y: '60%', duration: 28 },  // Navy
  { color: '#1A1A2E', size: 700, x: '50%', y: '20%', duration: 35 },  // Smoke
]
```

**Rendering**: Each blob is a `motion.div` with `borderRadius: 50%`, `filter: blur(120px)`,
and Framer `animate` with `repeat: Infinity, repeatType: "mirror"` for smooth orbital drift.

**Mobile**: `duration` multiplied by 1.5, `blur` reduced to 80px for GPU efficiency.

---

#### `DotMatrix.tsx`

**Path**: `src/components/background/DotMatrix.tsx`
**Purpose**: Static SVG dot grid for structural depth.

**Rendering**: Inline SVG with `<defs><pattern>` containing a 2px circle at 24px intervals.
Fills the viewport. Opacity: `0.08` desktop / `0.04` mobile.

---

#### `RadialGlow.tsx`

**Path**: `src/components/background/RadialGlow.tsx`
**Purpose**: Slowly breathing center spotlight radial gradient.

**Rendering**: A `motion.div` with:
```css
background: radial-gradient(ellipse at center, rgba(200,200,200,0.06) 0%, transparent 70%);
```
Framer `animate={{ scale: [1, 1.05, 1] }}` with `duration: 8, repeat: Infinity`.

---

### 6.3 Cursor System

---

#### `CursorContext.tsx`

**Path**: `src/components/cursor/CursorContext.tsx`
**Purpose**: React Context that holds cursor state and exposes a hook.

**Exported Hook**:
```typescript
export const useCursor = () => useContext(CursorContext);
```

**Context Value**:
```typescript
interface CursorContextType {
  variant: 'default' | 'hover' | 'click' | 'text' | 'hidden';
  setVariant: (v: CursorVariant) => void;
}
```

**Usage in any component**:
```tsx
const { setVariant } = useCursor();

<button
  onMouseEnter={() => setVariant('hover')}
  onMouseLeave={() => setVariant('default')}
>
  Click me
</button>
```

---

#### `CustomCursor.tsx`

**Path**: `src/components/cursor/CustomCursor.tsx`
**Purpose**: Renders the visual cursor — a dot + trailing ring — using Framer spring physics.

**Behavior**:
- Reads raw `mousemove` event for the **inner dot** (zero lag)
- Uses `useSpring({ stiffness: 150, damping: 18 })` for the **outer ring** (elastic lag)
- Hidden entirely via `display: none` on `@media (pointer: coarse)` (all touch devices)

**Cursor Variants** (controlled by `CursorContext`):

| Variant | Inner Dot | Outer Ring |
|---|---|---|
| `default` | 8px, white, full opacity | 32px, platinum border, transparent fill |
| `hover` | 8px, white | 52px, white fill at 10% opacity (magnetic expand) |
| `click` | scale 0.6 (squish) | 28px, compressed |
| `text` | 2px wide × 20px tall (I-beam) | Hidden |
| `hidden` | opacity 0 | opacity 0 |

> **Note**: `cursor: none` is set globally in `index.css`. Restored on touch
> via `@media (pointer: coarse) { * { cursor: auto; } }`

---

### 6.4 Section Components

---

#### `HeroSection.tsx`

**Path**: `src/components/sections/HeroSection.tsx`
**Purpose**: Full-screen opening hero — the first thing Kirthana sees after the loader.

**Layout**:
```
┌─────────────────────────────┐
│   [ParticleCanvas bg]        │
│                              │
│   ─────────────────          │  ← SVG line draw animation
│   K  I  R  T  H  A  N  A    │  ← Letter-by-letter reveal
│   Happy Birthday 🤍          │  ← Fade-up with glow
│   Turning 20 · Aug 9, 2026  │  ← Shimmer badge
│                              │
│          ↓ (scroll)          │  ← Floating animated chevron
└─────────────────────────────┘
```

**Animation Sequence**:
1. Line draws in from left (SVG `stroke-dashoffset`)
2. Each letter of "KIRTHANA" stagger-reveals with `y: 20 → 0` + `opacity: 0 → 1`
3. "Happy Birthday" fades up 400ms after name completes
4. Age badge sweeps in with shimmer
5. Scroll indicator bobs with `float` keyframe

**Props**: None — reads directly from `birthdayConfig`

---

#### `CountdownSection.tsx`

**Path**: `src/components/sections/CountdownSection.tsx`
**Purpose**: Live countdown timer to August 9, 2026.

**Layout**:
```
┌──────────────────────────────────────┐
│  [ DAYS ]  [ HRS ]  [ MIN ]  [ SEC ] │  ← Desktop: 4-column row
│   12        05       47       23     │  ← Mobile: 2x2 grid
│                                      │
│    Until Kirthana's Special Day 🎂   │
└──────────────────────────────────────┘
```

**Digit Animation**: Each digit change triggers Framer `AnimatePresence` with
slot-machine style `y: -20 → 0` enter and `y: 0 → 20` exit.

**Data Source**: `useCountdown('2026-08-09')` hook — returns `{ days, hours, minutes, seconds }`.

**Visual**: Dark glass panel (`bg-white/5 backdrop-blur-sm`), platinum border,
`glow-pulse` animation on the border.

---

#### `GallerySection.tsx`

**Path**: `src/components/sections/GallerySection.tsx`
**Purpose**: Parallax photo gallery with 3D tilt hover effect.

**Desktop Layout** (3-column asymmetric masonry):
```
┌──────────────┬──────────────┬──────────────┐
│  photo-1.jpg │  photo-2.jpg │  photo-3.jpg │
│  (tall)      │  (short)     │  (tall)      │
│              │  photo-4.jpg │              │
│  photo-5.jpg │  (tall)      │  photo-6.jpg │
│  (short)     │              │  (short)     │
└──────────────┴──────────────┴──────────────┘
```

**Mobile Layout**: Single column, vertical stack (no tilt, subtle parallax only).

**Photo Card Features**:
- `@tanem/react-tilt` wrapper — desktop only, auto-disabled on touch
- Silver shimmer overlay sweep on hover (`::after` pseudo-element)
- Platinum border `1px solid rgba(184,184,184,0.3)`
- Framer parallax: `useScroll` + `useTransform` — each column drifts at different `y` speed

**Props**:
```typescript
interface GalleryProps {
  photos: string[];   // From birthdayConfig.galleryPhotos
}
```

---

#### `LetterSection.tsx`

**Path**: `src/components/sections/LetterSection.tsx`
**Purpose**: A personal letter from Amrenther to Kirthana with typewriter animation.

**Layout**:
```
┌────────────────────────────────┐
│  "                             │  ← Large decorative quote mark
│                                │
│  Dear Kirthana,                │
│  Twenty years of you and every │  ← Typewriter text (scroll-triggered)
│  single one has been a gift... │
│                                │
│  [photo-letter.jpg]            │  ← Optional warm photo
│                                │
│  With all my love, always      │
│  ─────────────────             │  ← Underline draws in on scroll
│  Amrenther                     │
│                             "  │
└────────────────────────────────┘
```

**Typewriter**: Uses `react-type-animation`. Triggered by `useInView` —
starts when section is 30% visible.

**Props**: None — reads directly from `birthdayConfig`

---

### 6.5 UI Primitives

---

#### `ParticleCanvas.tsx`

**Path**: `src/components/ui/ParticleCanvas.tsx`
**Purpose**: Floating silver particle field rendered behind the Hero section.

**Particle Config**:
```typescript
const PARTICLE_COUNT_DESKTOP = 80;
const PARTICLE_COUNT_MOBILE  = 35;

interface Particle {
  x: number;
  y: number;
  vx: number;        // horizontal velocity
  vy: number;        // vertical velocity
  size: number;      // 1–3px radius
  opacity: number;   // 0.1–0.6
}
```

Particles slowly drift and wrap around screen edges. Rendered on `<canvas>`
via `requestAnimationFrame`. No React re-renders during animation.

---

#### `GlowText.tsx`

**Path**: `src/components/ui/GlowText.tsx`
**Purpose**: Reusable text component with platinum glow effect.

**Props**:
```typescript
interface GlowTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  intensity?: 'low' | 'medium' | 'high';   // Controls text-shadow spread
  className?: string;
  animate?: boolean;                         // Pulsing glow loop
}
```

---

#### `ScrollProgress.tsx`

**Path**: `src/components/ui/ScrollProgress.tsx`
**Purpose**: Thin platinum progress bar fixed at the very top of the viewport.

**Implementation**: `useScroll()` from Framer →
`useTransform(scrollYProgress, [0,1], ['0%', '100%'])` →
applied to `scaleX` with `transformOrigin: 'left'`.

---

#### `SectionDivider.tsx`

**Path**: `src/components/ui/SectionDivider.tsx`
**Purpose**: Animated decorative divider placed between sections.

**Variants**:
- `"line"` — Simple platinum horizontal line, draws in left-to-right
- `"dots"` — Three small silver dots that fade in sequentially
- `"ornament"` — Thin line with a centered diamond glyph

---

## 7. Hooks Reference

---

### `useCountdown.ts`

**Path**: `src/hooks/useCountdown.ts`

```typescript
interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;   // true if birthday has passed
}

function useCountdown(targetDate: string): CountdownResult
```

Updates every 1000ms via `setInterval`. Cleans up on unmount.
Calculates diff between `Date.now()` and `new Date(targetDate).getTime()`.

---

### `useScrollAnimation.ts`

**Path**: `src/hooks/useScrollAnimation.ts`

```typescript
interface ScrollAnimationResult {
  ref: RefObject<HTMLElement>;
  inView: boolean;
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;             // Parallax y offset
}

function useScrollAnimation(options?: {
  threshold?: number;
  parallaxRange?: [number, number];   // default: ['-20%', '20%']
}): ScrollAnimationResult
```

---

### `useDeviceType.ts`

**Path**: `src/hooks/useDeviceType.ts`

```typescript
interface DeviceType {
  isTouchDevice: boolean;    // pointer: coarse media query
  isMobile: boolean;         // viewport width < 768px
  isIOS: boolean;            // Safari/WebKit UA detection
  pixelRatio: number;        // window.devicePixelRatio
}

function useDeviceType(): DeviceType
```

Used to conditionally disable: custom cursor, 3D tilt, particle count,
animation fps — per device capability.

---

## 8. Animation System

### 8.1 Global Motion Config

```typescript
// Applied as default transition across all motion components
export const defaultTransition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1.0],   // Custom cubic bezier — smooth decelerate
  duration: 0.6,
};
```

### 8.2 Shared Variants

```typescript
// Fade up — used for most section entries
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  },
};

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  },
};

// Letter-by-letter text reveal
export const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### 8.3 Animation Reference Table

| Component | Type | Trigger | Duration |
|---|---|---|---|
| `PageLoader` exit | `y: 0 → -100vh` | `onComplete` | 0.8s |
| Hero name letters | `staggerChildren` | Mount | 0.06s per letter |
| Section entries | `fadeUpVariants` | `useInView` | 0.7s |
| Countdown digits | `AnimatePresence y` | Every second | 0.25s |
| Gallery parallax | `useTransform(y)` | Scroll | Continuous |
| Typewriter letter | `react-type-animation` | `useInView` | ~60ms/char |
| Cursor ring spring | `useSpring` | `mousemove` | Continuous |
| Aurora blobs | `repeat: Infinity` | Mount | 22–35s |
| Radial glow breathe | `scale` loop | Mount | 8s |
| Grain canvas | `rAF` loop | Mount | 24fps |
| SVG line draw | `stroke-dashoffset` | `useInView` | 1.2s |
| Shimmer badge | CSS `shimmer` keyframe | Mount | 2s loop |

---

## 9. Responsive Design — iPhone 16 Pro

### Device Specs (CSS Context)

| Property | Value |
|---|---|
| CSS viewport width | `393px` |
| CSS viewport height | `852px` |
| Device pixel ratio | `3x` |
| Dynamic Island | Top center — `safe-area-inset-top ≈ 59px` |
| Home indicator | Bottom — `safe-area-inset-bottom ≈ 34px` |
| Browser | Safari — address bar reduces usable height |

### Tailwind Breakpoint Strategy

```typescript
screens: {
  'xs':  '375px',   // iPhone SE / older iPhones
  'sm':  '393px',   // iPhone 16 Pro — primary mobile target
  'md':  '768px',   // Tablet
  'lg':  '1024px',  // Laptop
  'xl':  '1280px',  // Desktop
  '2xl': '1536px',  // Wide desktop
}
```

### Critical Mobile CSS Rules (`index.css`)

```css
/* Dynamic viewport height — fixes iOS Safari address bar collapse issue */
.min-h-screen { min-height: 100dvh; }
.h-screen     { height: 100dvh; }

/* Safe area padding for Dynamic Island + Home Indicator */
.pt-safe { padding-top: env(safe-area-inset-top); }
.pb-safe { padding-bottom: env(safe-area-inset-bottom); }

/* Hide custom cursor on all touch devices */
@media (pointer: coarse) {
  * { cursor: auto !important; }
  .custom-cursor { display: none !important; }
}

/* Remove iOS blue tap highlight */
* { -webkit-tap-highlight-color: transparent; }

/* Smooth momentum scrolling on iOS */
.scroll-container { -webkit-overflow-scrolling: touch; }
```

### Section Layout Differences

| Section | Desktop | iPhone 16 Pro |
|---|---|---|
| Hero | `min-h-screen`, vertically centered | `min-h-[100dvh]`, padded for Dynamic Island |
| Countdown | 4-column flex row | 2x2 CSS grid |
| Gallery | 3-column asymmetric masonry | 1-column stack, no tilt |
| Letter | Narrow `max-w-2xl` centered column | Full-width with `px-6` padding |

### Minimum Touch Targets

All interactive elements meet **Apple HIG** minimum: **44px x 44px**.

---

## 10. Photo Setup Guide

### Step 1: Prepare your photos

| Property | Recommendation |
|---|---|
| Format | JPG or WebP |
| Min resolution | 1200 x 1600px (portrait) or 1600 x 1200px (landscape) |
| Max file size | 500KB per photo (compress at squoosh.app) |
| Count | 8 photos total (1 hero + 6 gallery + 1 optional letter) |

### Step 2: Name and place your files

Drop your photos into:

```
c:/Dev/HB/public/photos/
  ├── photo-hero.jpg       ← Best portrait of Kirthana (clear, well-lit)
  ├── photo-1.jpg          ← Gallery — candid/fun moment
  ├── photo-2.jpg          ← Gallery — celebration/event
  ├── photo-3.jpg          ← Gallery — with family
  ├── photo-4.jpg          ← Gallery — casual/everyday
  ├── photo-5.jpg          ← Gallery — favourite memory
  ├── photo-6.jpg          ← Gallery — your choice
  └── photo-letter.jpg     ← Warm close-up for the letter section (optional)
```

### Step 3: Update config if filenames differ

Edit `src/data/birthday.config.ts`:
```typescript
galleryPhotos: [
  "/photos/your-actual-filename.jpg",
  // ...
]
```

---

## 11. Deployment Guide

### Local Development

```bash
cd c:/Dev/HB
npm install
npm run dev
# Opens at http://localhost:5173
```

### Production Build and Preview

```bash
npm run build      # Outputs to dist/
npm run preview    # Preview at http://localhost:4173
```

### Deploy to Vercel

**Option A — GitHub Auto-Deploy** (Recommended):
1. Push the project to a GitHub repository
2. Go to vercel.com → Add New Project
3. Import your GitHub repo → Framework preset: Vite → Deploy
4. Every git push to main auto-deploys

**Option B — Vercel CLI**:
```bash
npm install -g vercel
vercel --prod
```

### `vercel.json` — SPA Routing Config

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 12. Customization Guide

### Change Kirthana's personal message

Edit the `message` field in `src/data/birthday.config.ts`.
Use `\n` for paragraph breaks:
```typescript
message: `Dear Kirthana,\n\nYour first paragraph...\n\nYour second paragraph...`,
```

### Add more gallery photos

Add paths to `galleryPhotos` array in config — the gallery component auto-adjusts the grid.

### Change the color palette

Edit color values in `tailwind.config.ts` under `theme.extend.colors`.
All components reference these named tokens — one change updates the whole site.

### Adjust cursor spring feel

In `src/components/cursor/CustomCursor.tsx`:
```typescript
// Stiffer = snappier ring, less lag
// Lower stiffness = more elastic, dreamier feel
const springConfig = { stiffness: 150, damping: 18 };
```

### Disable grain overlay (performance)

In `src/components/background/LuxuryBackground.tsx`:
```tsx
{/* Comment out to disable */}
{/* <GrainOverlay /> */}
```

### Update the countdown date

Change `birthdayDate` in `src/data/birthday.config.ts`:
```typescript
birthdayDate: "2026-08-09"   // Format: YYYY-MM-DD
```

---

*Documentation version: 1.0.0*
*Last updated: July 2026*
*Project: Kirthana's 20th Birthday Website — Made with love by Amrenther*
