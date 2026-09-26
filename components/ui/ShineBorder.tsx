'use client';

import { cn } from '@/lib/utils';

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
}

export default function ShineBorder({
  children,
  borderWidth = 1,
  duration = 14,
  shineColor = '#000000',
  className,
  style,
  ...props
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor)
    ? shineColor.join(',')
    : shineColor;

  return (
    <div
      className={cn(
        'relative rounded-[inherit]',
        className
      )}
      {...props}
    >
      {/* Content */}
      {children}

      {/* Animated border */}
      <div
        aria-hidden="true"
        className="motion-safe:animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]"
        style={
          {
            '--border-width': `${borderWidth}px`,
            '--duration': `${duration}s`,
            backgroundImage: `radial-gradient(
              transparent,
              transparent,
              ${colors},
              transparent,
              transparent
            )`,
            backgroundSize: '300% 300%',
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: 'var(--border-width)',
            ...style,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
