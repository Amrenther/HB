// src/components/background/GrainOverlay.tsx
// Canvas-based animated film grain texture using simplex-noise

import { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

interface GrainOverlayProps {
  isMobile?: boolean;
  disabled?: boolean;
}

export default function GrainOverlay({ isMobile = false, disabled = false }: GrainOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Desktop: 24fps, Mobile: 12fps
  const targetFps = isMobile ? 12 : 24;
  const frameInterval = 1000 / targetFps;

  useEffect(() => {
    if (disabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const noise3D = createNoise3D();
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawGrain = (timestamp: number) => {
      rafRef.current = requestAnimationFrame(drawGrain);

      const delta = timestamp - lastTimeRef.current;
      if (delta < frameInterval) return;
      lastTimeRef.current = timestamp - (delta % frameInterval);

      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      t += 0.5;

      // Sample noise at lower resolution for performance
      const step = isMobile ? 3 : 2;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const noiseVal = noise3D(x / 150, y / 150, t / 100);
          const grain = Math.floor(((noiseVal + 1) / 2) * 255);

          for (let dy = 0; dy < step && y + dy < h; dy++) {
            for (let dx = 0; dx < step && x + dx < w; dx++) {
              const idx = ((y + dy) * w + (x + dx)) * 4;
              data[idx] = grain;
              data[idx + 1] = grain;
              data[idx + 2] = grain;
              data[idx + 3] = 255;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    rafRef.current = requestAnimationFrame(drawGrain);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [disabled, isMobile, frameInterval]);

  if (disabled) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          pointerEvents: 'none',
          opacity: 0.02,
          backgroundImage: 'radial-gradient(rgba(245,245,240,0.08) 0.5px, transparent 0.5px)',
          backgroundSize: '4px 4px',
          mixBlendMode: 'overlay',
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="custom-cursor"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 4,
        pointerEvents: 'none',
        opacity: 0.045,
        mixBlendMode: 'overlay',
      }}
      aria-hidden="true"
    />
  );
}
