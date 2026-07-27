// src/App.tsx
// Root component — assembles the full birthday experience

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout
import PageLoader from './components/layout/PageLoader';
import SectionWrapper from './components/layout/SectionWrapper';

// Background
import LuxuryBackground from './components/background/LuxuryBackground';

// Cursor
import { CursorProvider } from './components/cursor/CursorContext';
import CustomCursor from './components/cursor/CustomCursor';

// UI
import ScrollProgress from './components/ui/ScrollProgress';
import SectionDivider from './components/ui/SectionDivider';

// Sections
import HeroSection from './components/sections/HeroSection';
import CountdownSection from './components/sections/CountdownSection';
import GallerySection from './components/sections/GallerySection';
import LetterSection from './components/sections/LetterSection';

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  return (
    <CursorProvider>
      {/* Fixed background — always present */}
      <LuxuryBackground />

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Page loader — cinematic intro */}
      <AnimatePresence>
        {!loaderDone && (
          <PageLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {/* Main content — revealed after loader */}
      {loaderDone && (
        <>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Main page */}
          <main
            id="main-content"
            style={{ position: 'relative', zIndex: 1 }}
          >
            {/* ── Section 1: Hero ── */}
            <HeroSection />

            <SectionDivider variant="ornament" />

            {/* ── Section 2: Countdown ── */}
            <SectionWrapper id="countdown-section" threshold={0.2}>
              <CountdownSection />
            </SectionWrapper>

            <SectionDivider variant="dots" />

            {/* ── Section 3: Gallery ── */}
            <SectionWrapper id="gallery-section" threshold={0.1}>
              <GallerySection />
            </SectionWrapper>

            <SectionDivider variant="ornament" />

            {/* ── Section 4: Letter ── */}
            <SectionWrapper id="letter-section" threshold={0.15}>
              <LetterSection />
            </SectionWrapper>

            {/* ── Footer ── */}
            <footer
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem calc(3rem + env(safe-area-inset-bottom))',
                borderTop: '1px solid rgba(184,184,184,0.08)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  color: 'rgba(120,120,120,0.5)',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Made with love by Amrenther 🤍 · 2026
              </p>
            </footer>
          </main>
        </>
      )}
    </CursorProvider>
  );
}
