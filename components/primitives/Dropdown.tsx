'use client';

import { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

export default function Dropdown({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        className={cn(
          "transform duration-150",
          isOpen ? "-rotate-90" : "rotate-0",
        )}
        onClick={toggle}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-150 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </>
  );
}
