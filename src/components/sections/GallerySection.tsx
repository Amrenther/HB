// src/components/sections/GallerySection.tsx
// Parallax photo masonry with 3D tilt (desktop) — 3-col desktop, 1-col mobile

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { birthdayConfig } from '../../data/birthday.config';
import { useDeviceType } from '../../hooks/useDeviceType';

// Column parallax speeds
const columnOffsets: Array<[string, string]> = [
  ['-5%', '5%'],
  ['5%', '-5%'],
  ['-3%', '3%'],
];

// Assign gallery positions
const galleryConfig = [
  { span: 'tall' },    // photo-1
  { span: 'short' },   // photo-2
  { span: 'tall' },    // photo-3 (col3)
  { span: 'tall' },    // photo-4 (col2)
  { span: 'short' },   // photo-5 (col1)
  { span: 'short' },   // photo-6 (col3)
];

function PhotoCard({ src, alt, isMobile, index }: { src: string; alt: string; isMobile: boolean; index: number }) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      data-cursor="hover"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 8,
        border: '1px solid rgba(184,184,184,0.15)',
        cursor: 'none',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s ease',
          filter: 'grayscale(20%)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)';
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(20%)';
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
        }}
      />

      {/* Shimmer hover overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, transparent 40%, rgba(184,184,184,0.08) 50%, transparent 60%)',
          backgroundSize: '200% auto',
          pointerEvents: 'none',
          transition: 'background-position 0.6s ease',
        }}
      />

      {/* Bottom platinum border fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 40,
          background: 'linear-gradient(to top, rgba(8,8,8,0.4), transparent)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );

  if (isMobile) return card;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={false}
      scale={1.02}
      transitionSpeed={700}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {card}
    </Tilt>
  );
}

function ParallaxColumn({
  photos,
  indices,
  parallaxRange,
  isMobile,
}: {
  photos: string[];
  indices: number[];
  parallaxRange: [string, string];
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], parallaxRange);

  return (
    <motion.div
      ref={ref}
      style={{ y, display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      {indices.map((photoIdx, i) => {
        const src = photos[photoIdx];
        const cfg = galleryConfig[photoIdx];
        const height = cfg?.span === 'tall' ? (isMobile ? 260 : 380) : (isMobile ? 200 : 260);
        return (
          <div key={photoIdx} style={{ height }}>
            <PhotoCard
              src={src}
              alt={`Memory ${photoIdx + 1}`}
              isMobile={isMobile}
              index={i}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export default function GallerySection() {
  const { isMobile } = useDeviceType();
  const photos = birthdayConfig.galleryPhotos;

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        padding: isMobile
          ? 'calc(5rem + env(safe-area-inset-top)) 1.5rem calc(5rem + env(safe-area-inset-bottom))'
          : 'calc(8rem + env(safe-area-inset-top)) 4rem calc(8rem + env(safe-area-inset-bottom))',
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        data-cursor="text"
        style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: isMobile ? 'clamp(24px, 8vw, 32px)' : 'clamp(32px, 4vw, 48px)',
            color: '#F5F5F0',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
          }}
        >
          <span className="shimmer-text">Moments</span> Worth Remembering
        </h2>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            color: 'rgba(120,120,120,0.7)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          A collection of you
        </p>
      </motion.div>

      {/* Gallery Grid */}
      {isMobile ? (
        // Single column — no tilt, subtle parallax
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {photos.map((src, i) => (
            <div key={i} style={{ height: i % 2 === 0 ? 300 : 220 }}>
              <PhotoCard src={src} alt={`Memory ${i + 1}`} isMobile={true} index={i} />
            </div>
          ))}
        </div>
      ) : (
        // 3-column asymmetric masonry with parallax
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            alignItems: 'start',
          }}
        >
          {/* Column 1: photos 0, 4 */}
          <ParallaxColumn
            photos={photos}
            indices={[0, 4]}
            parallaxRange={columnOffsets[0]}
            isMobile={false}
          />
          {/* Column 2: photos 1, 3 */}
          <ParallaxColumn
            photos={photos}
            indices={[1, 3]}
            parallaxRange={columnOffsets[1]}
            isMobile={false}
          />
          {/* Column 3: photos 2, 5 */}
          <ParallaxColumn
            photos={photos}
            indices={[2, 5]}
            parallaxRange={columnOffsets[2]}
            isMobile={false}
          />
        </div>
      )}
    </section>
  );
}
