// src/hooks/useDeviceType.ts
// Detects touch device, mobile viewport, iOS, and pixel ratio

import { useEffect, useState } from 'react';
import type { DeviceType } from '../types';

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>({
    isTouchDevice: false,
    isMobile: false,
    isIOS: false,
    pixelRatio: 1,
  });

  useEffect(() => {
    const detect = () => {
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
      const isMobile = window.innerWidth < 768;
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const pixelRatio = window.devicePixelRatio || 1;

      setDeviceType({ isTouchDevice, isMobile, isIOS, pixelRatio });
    };

    detect();
    window.addEventListener('resize', detect);
    return () => window.removeEventListener('resize', detect);
  }, []);

  return deviceType;
}
