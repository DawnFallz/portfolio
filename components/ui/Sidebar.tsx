'use client';

import { useState } from 'react';

import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

import Link from 'next/link';

import Logo from './Logo';

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer">
      {/* Toggle */}
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />

      {/* Page content */}
      <div className="drawer-content">
        <label
          htmlFor="sidebar-drawer"
          className="btn btn-ghost fixed top-4 left-4 z-60"
        >
          {!open ? (
            <Bars2Icon className="w-6 h-6 md:w-8 md:h-8" />
          ) : (
            <XMarkIcon className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50 overflow-visible!">
        <label
          htmlFor="sidebar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <aside className="flex flex-col w-64 h-dvh shadow-[12px_0_18px_-5px_oklch(0.627_0.265_303.9_/50%)] bg-sidebar border-r border-primary-accent rounded-r-2xl overflow-x-hidden">
          {/* Logo */}
          <div className="flex items-end justify-end px-4 py-2 border-b border-primary-accent">
            <Link href="/" className="flex items-center">
              <Logo className="text-3xl" />
            </Link>
          </div>

          {/* Menu */}
          <div className="overflow-y-auto sidebar-scroll">{children}</div>

          {/* Footer */}
          <div
            className="
              px-6 py-6 mt-auto
              border-t border-primary-accent
              bg-sidebar-accent
            "
          >
            <div className="flex items-center justify-between">
              <Link
                href="https://github.com/DawnFallz/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <small>© {new Date().getFullYear()} DawnFallz</small>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
