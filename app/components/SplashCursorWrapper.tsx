'use client';

import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';
import SplashCursor from '@/components/ui/SplashCursor';

export default function SplashCursorWrapper() {
  const isLargeScreen = useIsLargeScreen();

  if (!isLargeScreen) {
    return null;
  }

  return (
    <SplashCursor
      DENSITY_DISSIPATION={3}
      VELOCITY_DISSIPATION={2}
      PRESSURE={0.08}
      CURL={3}
      SPLAT_RADIUS={0.1}
      SPLAT_FORCE={4000}
      COLOR_UPDATE_SPEED={10}
      SHADING
      RAINBOW_MODE={false}
      COLOR="#A855F7"
    />
  );
}
