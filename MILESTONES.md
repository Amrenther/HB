# Project Milestones — Kirthana's 20th Birthday Website

> **Project**: Kirthana's 20th Birthday Website  
> **Deadline**: August 9, 2026  
> **Stack**: Vite + React + TypeScript + Tailwind CSS + Framer Motion  
> **Source of truth**: [`src_documentation.md`](./src_documentation.md)  
> **Deploy target**: Vercel

This file is the GitHub roadmap for this repo only. Use it to create GitHub Milestones and Issues. Spec details live in `src_documentation.md` — this document tracks *what to ship and when*.

---

## How to use with GitHub

1. Create a GitHub Milestone for each phase below (M1–M5), using the **GitHub milestone title**.
2. Turn each checkbox into an Issue and assign it to that milestone.
3. Update the **Status** line in this file when work moves (`Open` → `In Progress` → `Done`).
4. Prefer sequential delivery: finish M1 before starting M2, and so on.

---

## Milestone map

| ID | GitHub milestone title | Soft target | Status |
|---|---|---|---|
| M1 | Foundation — scaffold, tokens, config | Late July 2026 | **Done** |
| M2 | Atmosphere & Shell — background, cursor, loader | Late July 2026 | **Done** |
| M3 | Core Sections — hero, countdown, gallery, letter | Early August 2026 | **Done** |
| M4 | Mobile & Polish — iPhone 16 Pro, performance | Early August 2026 | **In Progress** |
| M5 | Content & Launch — photos, message, Vercel | Before Aug 9, 2026 | **Open** |

```
M1 Foundation
     ↓
M2 Atmosphere & Shell
     ↓
M3 Core Sections (Hero → Countdown → Gallery → Letter)
     ↓
M4 Mobile & Polish
     ↓
M5 Content & Launch
```

Experience flow (from [§1 Project Overview](./src_documentation.md#1-project-overview)):

```
PageLoader → HeroSection → CountdownSection → GallerySection → LetterSection
```

---

## M1 — Foundation

**GitHub milestone title**: `Foundation — scaffold, tokens, config`  
**Status**: **Done**  
**Soft target**: Late July 2026  
**Docs**: [§2 Tech Stack](./src_documentation.md#2-tech-stack) · [§3 Directory Structure](./src_documentation.md#3-directory-structure) · [§4 Configuration File](./src_documentation.md#4-configuration-file) · [§5 Design System](./src_documentation.md#5-design-system)

### Goal

Replace the Vite starter with the project skeleton: folder layout, design tokens, central birthday config, shared types/utils, and global CSS so later milestones can plug in components without rework.

### Deliverables

| Path | Purpose |
|---|---|
| `src/data/birthday.config.ts` | Central personalization config |
| `src/types/index.ts` | Shared TypeScript interfaces |
| `src/utils/cn.ts` | `clsx` + `tailwind-merge` helper |
| `src/index.css` | Global styles, CSS variables, keyframes |
| `tailwind.config.ts` | Luxury palette, fonts, breakpoints, safe-area spacing |
| `index.html` | Google Fonts, meta tags |
| `vercel.json` | SPA rewrite config |
| `public/photos/` | Photo drop folder (placeholders OK) |

### Tasks

- [x] Confirm dependencies from [§2](./src_documentation.md#2-tech-stack) (`framer-motion`, `react-type-animation`, `simplex-noise`, tilt, `lucide-react`, `clsx`, `tailwind-merge`)
- [x] Create directory tree under `src/components/{layout,background,cursor,sections,ui}`, `hooks`, `data`, `types`, `utils`
- [x] Implement `BirthdayConfig` + `birthdayConfig` in `src/data/birthday.config.ts`
- [x] Add shared types in `src/types/index.ts`
- [x] Add `cn()` utility in `src/utils/cn.ts`
- [x] Define color tokens (`luxury-black`, `luxury-white`, `platinum`, silver, aurora) and font families (Cormorant Garamond + Inter)
- [x] Add custom keyframes: `shimmer`, `float`, `glow-pulse`, `draw-line`
- [x] Add Tailwind screens including `sm: 393px` (iPhone 16 Pro primary mobile target)
- [x] Add safe-area spacing tokens and wire fonts/meta in `index.html`
- [x] Add `vercel.json` SPA rewrites
- [x] Create `public/photos/` with expected filenames (or placeholders)
- [x] Strip starter template UI from `App.tsx` / `App.css` so the shell is ready for M2

### Done when

- Design tokens and global styles match [§5](./src_documentation.md#5-design-system)
- Config file is the single place to edit name, date, message, and photo paths
- Folder structure matches [§3](./src_documentation.md#3-directory-structure)
- `npm run dev` / `npm run build` succeed with an empty shell (no birthday sections yet)

---

## M2 — Atmosphere & Shell

**GitHub milestone title**: `Atmosphere & Shell — background, cursor, loader`  
**Status**: **Done**  
**Soft target**: Late July 2026  
**Docs**: [§6.1 Layout](./src_documentation.md#61-layout-components) · [§6.2 Background](./src_documentation.md#62-background-system) · [§6.3 Cursor](./src_documentation.md#63-cursor-system) · [§6.5 UI Primitives](./src_documentation.md#65-ui-primitives) · [§8 Animation System](./src_documentation.md#8-animation-system)

### Goal

Ship the cinematic chrome that wraps every section: luxury background layers, custom cursor, page loader, scroll progress, section wrapper, and shared motion defaults.

### Deliverables

| Path | Purpose |
|---|---|
| `src/components/background/LuxuryBackground.tsx` | Layer orchestrator |
| `src/components/background/GrainOverlay.tsx` | Film grain canvas |
| `src/components/background/AuroraBlobs.tsx` | Drifting gradient orbs |
| `src/components/background/DotMatrix.tsx` | Dot grid SVG |
| `src/components/background/RadialGlow.tsx` | Center spotlight |
| `src/components/cursor/CursorContext.tsx` | Cursor state + hook |
| `src/components/cursor/CustomCursor.tsx` | Dot + spring ring |
| `src/components/layout/PageLoader.tsx` | Cinematic intro (~2.8s) |
| `src/components/layout/SectionWrapper.tsx` | Scroll-reveal HOC |
| `src/components/ui/ScrollProgress.tsx` | Top progress bar |
| `src/components/ui/SectionDivider.tsx` | Animated dividers |
| `src/components/ui/GlowText.tsx` | Glowing text primitive |
| Shared motion config | `defaultTransition`, `fadeUpVariants`, `staggerContainer`, `letterVariant` |

### Tasks

- [x] Implement background stack (z-order: RadialGlow → DotMatrix → AuroraBlobs → GrainOverlay)
- [x] Throttle grain to 24fps desktop / 12fps mobile; disable or comment path for low-end devices
- [x] Implement `CursorContext` + `CustomCursor` with variants (`default`, `hover`, `click`, `text`, `hidden`)
- [x] Hide custom cursor on `pointer: coarse`; restore system cursor on touch
- [x] Build `PageLoader` sequence (K reveal → tagline → shimmer → slide up → `onComplete`)
- [x] Build `SectionWrapper` with `useInView` / IntersectionObserver for iOS reliability
- [x] Add `ScrollProgress`, `SectionDivider`, `GlowText`
- [x] Export shared Framer variants / default transition from [§8](./src_documentation.md#8-animation-system)
- [x] Wire shell in `App.tsx`: loader → background → cursor → progress bar (sections still empty)

### Done when

- Loader plays once and unmounts via `AnimatePresence`
- Background layers are fixed, non-interactive, and visually match the luxury mood
- Cursor works on desktop and is fully disabled on touch
- Scroll progress tracks page scroll
- No section content yet — shell only

---

## M3 — Core Sections

**GitHub milestone title**: `Core Sections — hero, countdown, gallery, letter`  
**Status**: **Done**  
**Soft target**: Early August 2026  
**Docs**: [§1 Experience Flow](./src_documentation.md#1-project-overview) · [§6.4 Section Components](./src_documentation.md#64-section-components) · [§7 Hooks](./src_documentation.md#7-hooks-reference)

### Goal

Build the full single-page experience: Hero → Countdown → Gallery → Letter, driven by `birthdayConfig` and the three shared hooks.

### Deliverables

| Path | Purpose |
|---|---|
| `src/hooks/useCountdown.ts` | Live birthday countdown |
| `src/hooks/useScrollAnimation.ts` | Scroll-linked / parallax values |
| `src/hooks/useDeviceType.ts` | Touch / mobile / iOS detection |
| `src/components/sections/HeroSection.tsx` | Name reveal + particles |
| `src/components/sections/CountdownSection.tsx` | Days / hrs / min / sec |
| `src/components/sections/GallerySection.tsx` | Masonry + tilt + parallax |
| `src/components/sections/LetterSection.tsx` | Typewriter letter |
| `src/components/ui/ParticleCanvas.tsx` | Hero particle field |

### Tasks

- [x] Implement `useCountdown`, `useScrollAnimation`, `useDeviceType`
- [x] Build `HeroSection`: SVG line draw, letter stagger for name, badge, scroll chevron, `ParticleCanvas`
- [x] Build `CountdownSection`: slot-machine digit transitions; desktop 4-col / mobile 2×2
- [x] Build `GallerySection`: 3-column masonry desktop, single column mobile; tilt desktop-only; parallax columns
- [x] Build `LetterSection`: `react-type-animation` triggered at ~30% in view; signature underline; optional letter photo
- [x] Assemble all sections in `App.tsx` with `SectionWrapper` + dividers between sections
- [x] Read all personalization from `birthdayConfig` only (no hardcoded name/date/message in sections)

### Done when

- Full scroll journey matches the documented experience flow
- Countdown ticks live toward `birthdayDate`
- Gallery renders `galleryPhotos`; tilt disabled on touch
- Letter typewriter starts on scroll into view
- Desktop experience feels complete (mobile polish is M4)

---

## M4 — Mobile & Polish

**GitHub milestone title**: `Mobile & Polish — iPhone 16 Pro, performance`  
**Status**: **In Progress**  
**Soft target**: Early August 2026  
**Docs**: [§8 Animation System](./src_documentation.md#8-animation-system) · [§9 Responsive Design — iPhone 16 Pro](./src_documentation.md#9-responsive-design--iphone-16-pro)

### Goal

Make the site feel premium on iPhone 16 Pro (and other mobiles): safe areas, `dvh`, reduced motion/GPU cost, and animation QA against the reference table.

### Deliverables

- Critical mobile CSS (`100dvh`, safe-area padding, tap highlight removal, touch scroll)
- Device-aware performance: particle counts, grain fps, aurora blur/duration, tilt off
- Touch targets ≥ 44×44px (Apple HIG)
- Animation QA pass vs [§8.3 table](./src_documentation.md#83-animation-reference-table)

### Tasks

- [ ] Apply `min-h-[100dvh]` / `h-screen` → `100dvh` rules; add `pt-safe` / `pb-safe` where needed
- [ ] Verify Dynamic Island + home indicator padding on Hero and Letter
- [ ] Confirm Countdown 2×2 and Gallery 1-column stack on `sm` / mobile
- [ ] Disable custom cursor, 3D tilt; reduce particles (80→35) and grain fps on mobile
- [ ] Soften aurora on mobile (longer duration, lower blur)
- [ ] Audit interactive hit areas for 44px minimum
- [ ] Run animation reference checklist (loader exit, letter stagger, countdown digits, typewriter, etc.)
- [ ] Smoke-test iOS Safari address-bar collapse and scroll-reveal reliability

### Done when

- iPhone 16 Pro (393×852) layout matches [§9 section table](./src_documentation.md#9-responsive-design--iphone-16-pro)
- No custom cursor or tilt on touch devices
- Performance toggles follow `useDeviceType`
- No major layout or animation regressions vs desktop

---

## M5 — Content & Launch

**GitHub milestone title**: `Content & Launch — photos, message, Vercel`  
**Status**: **Open**  
**Soft target**: Before August 9, 2026  
**Docs**: [§10 Photo Setup](./src_documentation.md#10-photo-setup-guide) · [§11 Deployment](./src_documentation.md#11-deployment-guide) · [§12 Customization](./src_documentation.md#12-customization-guide)

### Goal

Finalize real photos and the personal letter, then ship to Vercel so the surprise is live before the birthday.

### Deliverables

- Optimized photos in `public/photos/` (hero + 6 gallery + optional letter)
- Final `message` / `signature` in `birthdayConfig`
- Production build + Vercel deployment (GitHub auto-deploy preferred)

### Tasks

- [ ] Collect and compress photos (JPG/WebP, ≤ ~500KB each; min ~1200×1600 portrait)
- [ ] Place files: `photo-hero.jpg`, `photo-1`…`photo-6.jpg`, optional `photo-letter.jpg`
- [ ] Update `galleryPhotos` / paths in `birthdayConfig` if filenames differ
- [ ] Write the final letter `message` and `signature`
- [ ] Confirm `birthdayDate: "2026-08-09"` and age/name fields
- [ ] Run `npm run build` and `npm run preview` locally
- [ ] Push to GitHub and connect Vercel (Vite preset) **or** `vercel --prod`
- [ ] Verify production URL on desktop + iPhone Safari
- [ ] Final visual pass: loader → hero → countdown → gallery → letter

### Done when

- Real content (photos + letter) is live — no placeholders
- Production URL loads correctly with SPA routing
- Countdown shows accurate time to August 9, 2026
- Site is ready to share as the birthday surprise

---

## Tracking notes

| Status | Meaning |
|---|---|
| **Open** | Not started |
| **In Progress** | Active work on that milestone |
| **Done** | Acceptance criteria met |

Update the Status column in the [milestone map](#milestone-map) and each milestone’s **Status** line as work progresses.

---

*Roadmap version: 1.0.0*  
*Aligned with `src_documentation.md` v1.0.0 (July 2026)*  
*Project: Kirthana's 20th Birthday Website — Made with love by Amrenther*
