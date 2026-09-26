'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';

import Image from 'next/image';

export interface Certificate {
  title: string;
  href: string;
  image: string;
}

export interface CertificateCarouselProps {
  /** Items displayed by the carousel */
  certificates: Certificate[];

  /** Additional classes for the outer carousel */
  className?: string;

  /** Automatically move to the next item */
  autoPlay?: boolean;

  /** Time between slides in milliseconds */
  interval?: number;

  /** Pause autoplay while the mouse is over the carousel */
  pauseOnHover?: boolean;

  /** Continue from the last slide when reaching either end */
  loop?: boolean;

  /** Slide to display initially */
  initialIndex?: number;

  /** Show the previous/next buttons */
  showArrows?: boolean;

  /** Show the navigation dots */
  showDots?: boolean;

  /** Accessible label for the carousel */
  ariaLabel?: string;

  /** Height of the carousel */
  height?: string;

  /** Callback whenever the active slide changes */
  onChange?: (certificate: Certificate, index: number) => void;
}

export function CertificateCarousel({
  certificates,
  className = '',
  autoPlay = true,
  interval = 5000,
  pauseOnHover = true,
  loop = true,
  initialIndex = 0,
  showArrows = true,
  showDots = true,
  ariaLabel = 'Certificate carousel',
  height = '24rem',
  onChange,
}: CertificateCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), Math.max(certificates.length - 1, 0)),
  );

  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const hasItems = certificates.length > 0;

  const goTo = useCallback(
    (index: number) => {
      if (!hasItems) return;

      const nextIndex = Math.min(Math.max(index, 0), certificates.length - 1);

      setActiveIndex(nextIndex);
      onChange?.(certificates[nextIndex], nextIndex);
    },
    [certificates, hasItems, onChange],
  );

  const goToNext = useCallback(() => {
    if (!hasItems) return;

    if (activeIndex < certificates.length - 1) {
      goTo(activeIndex + 1);
    } else if (loop) {
      goTo(0);
    }
  }, [activeIndex, certificates.length, goTo, hasItems, loop]);

  const goToPrevious = useCallback(() => {
    if (!hasItems) return;

    if (activeIndex > 0) {
      goTo(activeIndex - 1);
    } else if (loop) {
      goTo(certificates.length - 1);
    }
  }, [activeIndex, certificates.length, goTo, hasItems, loop]);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || !hasItems || certificates.length <= 1) {
      return;
    }

    if (pauseOnHover && isHovered) {
      return;
    }

    const timer = window.setInterval(goToNext, interval);

    return () => window.clearInterval(timer);
  }, [
    autoPlay,
    certificates.length,
    goToNext,
    hasItems,
    interval,
    isHovered,
    pauseOnHover,
  ]);

  // Keyboard navigation
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;

      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;

      case 'Home':
        event.preventDefault();
        goTo(0);
        break;

      case 'End':
        event.preventDefault();
        goTo(certificates.length - 1);
        break;
    }
  };

  // Basic touch/swipe support
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const difference = touchStartX.current - touchEndX;

    // Ignore very small movements.
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  if (!hasItems) {
    return null;
  }

  const activeCertificate = certificates[activeIndex];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-neutral-950 border-2 border-gradient p-2 shadow-2xl ${className}`}
      style={{ height }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {certificates.map((certificate, index) => {
          const isActive = index === activeIndex;

          return (
            <a
              key={`${certificate.title}-${index}`}
              href={certificate.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              className={`
                absolute inset-0 block
                transition-opacity duration-700 ease-in-out
                ${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'}
              `}
            >
              {/* Certificate */}
              <div className="absolute inset-0 bg-neutral-950">
                <Image
                  src={certificate.image}
                  alt="{certificate.title}"
                  fill
                  sizes="100vw"
                  className="object-contain object-top rounded-lg"
                  aria-hidden="true"
                />
              </div>

              {/* Dark overlay */}
              <div
                className="absolute inset-0 bg-black/20"
                aria-hidden="true"
              />

              {/* Bottom shadow / gradient */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-violet-900 via-fuchsia-900 to-transparent rounded-lg"
                aria-hidden="true"
              />

              {/* Title */}
              <div className="absolute inset-x-0 bottom-0 pb-12 text-center">
                <p className="text-lg font-semibold drop-shadow-lg sm:text-2xl md:text-3xl">
                  {certificate.title}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Previous button */}
      {showArrows && certificates.length > 1 && (
        <button
          type="button"
          onClick={goToPrevious}
          disabled={!loop && activeIndex === 0}
          className="
            btn btn-circle
            absolute left-3 top-1/3 z-20
            -translate-y-1/2
            border border-white/20
            bg-black/50
            text-white
            backdrop-blur-sm
            hover:bg-black/70
            disabled:cursor-not-allowed
            disabled:opacity-30
            sm:left-5
          "
          aria-label="Previous certificate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Next button */}
      {showArrows && certificates.length > 1 && (
        <button
          type="button"
          onClick={goToNext}
          disabled={!loop && activeIndex === certificates.length - 1}
          className="
            btn btn-circle
            absolute right-3 top-1/3 z-20
            -translate-y-1/2
            border border-white/20
            bg-black/50
            text-white
            backdrop-blur-sm
            hover:bg-black/70
            disabled:cursor-not-allowed
            disabled:opacity-30
            sm:right-5
          "
          aria-label="Next certificate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Dots */}
      {showDots && certificates.length > 1 && (
        <div
          className="
            absolute bottom-4 left-1/2 z-20
            flex -translate-x-1/2
            items-center gap-2
            rounded-full
            border border-gradient
            bg-black/40
            px-3 py-2
            backdrop-blur-md
          "
          role="tablist"
          aria-label="Certificate navigation"
        >
          {certificates.map((certificate, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${certificate.title}-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${certificate.title}`}
                onClick={() => goTo(index)}
                className={`
                  h-2 rounded-full
                  transition-all duration-300
                  ${
                    isActive ? 'w-7 bg-gradient' : 'w-2 bg-gradient hover-scale'
                  }
                `}
              />
            );
          })}
        </div>
      )}

      {/* Screen-reader status */}
      <div className="sr-only" aria-live="polite">
        {activeCertificate.title}, {activeIndex + 1} of {certificates.length}
      </div>
    </div>
  );
}

export default CertificateCarousel;
