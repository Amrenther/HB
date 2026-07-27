// src/components/ui/ParticleCanvas.tsx
// Floating silver particles rendered on canvas

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT_DESKTOP = 80;
const PARTICLE_COUNT_MOBILE  = 35;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticleCanvasProps {
  isMobile?: boolean;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
  };
}

export default function ParticleCanvas({ isMobile = false }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: count }, () => createParticle(canvas.width, canvas.height));
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0)              p.x = canvas.width;
        if (p.x > canvas.width)   p.x = 0;
        if (p.y < 0)              p.y = canvas.height;
        if (p.y > canvas.height)  p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 184, 184, ${p.opacity})`;
        ctx.fill();
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
