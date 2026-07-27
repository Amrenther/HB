// src/components/background/LuxuryBackground.tsx
// Fixed-position orchestrator: RadialGlow → DotMatrix → AuroraBlobs → GrainOverlay

import { useEffect, useState } from 'react';
import RadialGlow from './RadialGlow';
import DotMatrix from './DotMatrix';
import AuroraBlobs from './AuroraBlobs';
import GrainOverlay from './GrainOverlay';

export default function LuxuryBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [disableGrain, setDisableGrain] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);

    const shouldDisableGrain = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const connection = (navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }).connection;
      const saveData = connection?.saveData ?? false;
      const lowCpu = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
      const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const lowMemory = typeof deviceMemory === 'number' ? deviceMemory <= 4 : false;

      return prefersReducedMotion || saveData || lowCpu || lowMemory;
    };

    setDisableGrain(shouldDisableGrain());
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#080808',
      }}
      aria-hidden="true"
    >
      {/* z-[1] Deep center spotlight */}
      <RadialGlow />

      {/* z-[2] Dot grid */}
      <DotMatrix />

      {/* z-[3] Aurora orbs */}
      <AuroraBlobs />

      {/* z-[4] Film grain */}
      <GrainOverlay isMobile={isMobile} disabled={disableGrain} />
    </div>
  );
}
