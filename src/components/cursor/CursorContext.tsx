// src/components/cursor/CursorContext.tsx
// React Context for cursor state + useCursor hook

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { CursorVariant, CursorContextType } from '../../types';

const CursorContext = createContext<CursorContextType>({
  variant: 'default',
  setVariant: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default');

  useEffect(() => {
    const coarseQuery = window.matchMedia('(pointer: coarse)');

    const resolveVariant = (event: PointerEvent) => {
      if (coarseQuery.matches) {
        return 'hidden' as const;
      }

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const cursorTarget = target instanceof HTMLElement ? target.closest('[data-cursor]') as HTMLElement | null : null;

      if (event.buttons > 0) return 'click';
      if (!cursorTarget) return 'default';

      const cursorKind = cursorTarget.dataset.cursor;
      if (cursorKind === 'click' || cursorKind === 'text' || cursorKind === 'hidden') {
        return cursorKind;
      }
      if (
        cursorTarget.matches('a, button, [role="button"], input, textarea, select') ||
        cursorKind === 'hover'
      ) {
        return 'hover';
      }

      return 'default';
    };

    const setFromPointer = (event: PointerEvent) => {
      const nextVariant = resolveVariant(event);
      setVariant((current) => (current === nextVariant ? current : nextVariant));
    };

    const syncCoarseMode = () => {
      setVariant((current) => {
        if (coarseQuery.matches) return current === 'hidden' ? current : 'hidden';
        return current === 'hidden' ? 'default' : current;
      });
    };

    syncCoarseMode();

    document.addEventListener('pointermove', setFromPointer, { passive: true });
    document.addEventListener('pointerdown', setFromPointer, { passive: true });
    document.addEventListener('pointerup', setFromPointer, { passive: true });
    coarseQuery.addEventListener('change', syncCoarseMode);

    return () => {
      document.removeEventListener('pointermove', setFromPointer);
      document.removeEventListener('pointerdown', setFromPointer);
      document.removeEventListener('pointerup', setFromPointer);
      coarseQuery.removeEventListener('change', syncCoarseMode);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
