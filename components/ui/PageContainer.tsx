'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'relative border border-primary-accent',
        'rounded-2xl bg-background p-4 pt-20',
        'shadow-2xl shadow-shadow',
        'flex flex-col gap-30',
        className,
      )}
    >
      {children}
    </div>
  );
}
