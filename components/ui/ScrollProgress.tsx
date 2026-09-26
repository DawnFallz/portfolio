'use client';

import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollProgress({
  className = '',
}: {
  className?: string;
}) {
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    setProgress(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      updateProgress();
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(update);
    };

    const initialFrame = requestAnimationFrame(update);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(initialFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateProgress]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-40 h-1.5',
        className,
      )}
    >
      <div
        className="
          h-full origin-left rounded-xl bg-linear-to-r
          from-violet-500 via-fuchsia-500 to-pink-500
          shadow-[0_0_12px_rgb(217_70_239/0.7)]
          transition-[width] duration-75 ease-out
        "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
