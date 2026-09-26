"use client";

import React, { useEffect, useState, type MouseEvent } from "react";

import { cn } from "@/lib/utils";

type ButtonSize = "sm" | "md" | "lg";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  size?: ButtonSize;
  duration?: string;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(
  (
    {
      className,
      children,
      rippleColor = "#ffffff",
      size = "md",
      duration = "600ms",
      onClick,
      ...props
    },
    ref
  ) => {
    const [buttonRipples, setButtonRipples] = useState<
      Array<{ x: number; y: number; size: number; key: number }>
    >([]);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      createRipple(event);
      onClick?.(event);
    };

    const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const rippleSize = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - rippleSize / 2;
      const y = event.clientY - rect.top - rippleSize / 2;

      const newRipple = {
        x,
        y,
        size: rippleSize,
        key: Date.now(),
      };

      setButtonRipples((prevRipples) => [...prevRipples, newRipple]);
    };

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout> | null = null;

      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1];

        timeout = setTimeout(() => {
          setButtonRipples((prevRipples) =>
            prevRipples.filter((ripple) => ripple.key !== lastRipple.key)
          );
        }, parseInt(duration));
      }

      return () => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
    }, [buttonRipples, duration]);

    const sizeClasses = {
      sm: "px-4 py-2",
      md: "px-5 py-2.5",
      lg: "px-6 py-3",
    };

    return (
      <button
        className={cn(
          "bg-background text-primary relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 text-center",
          sizeClasses[size],
          className
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <div className="relative z-10">{children}</div>

        <span className="pointer-events-none absolute inset-0">
          {buttonRipples.map((ripple) => (
            <span
              className="animate-rippling bg-background absolute rounded-full opacity-30"
              key={ripple.key}
              style={
                {
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  top: `${ripple.y}px`,
                  left: `${ripple.x}px`,
                  backgroundColor: rippleColor,
                  transform: "scale(0)",
                  "--duration": duration,
                } as React.CSSProperties
              }
            />
          ))}
        </span>
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";

