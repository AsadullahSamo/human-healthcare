'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { useTheme } from '../ThemeProvider';
import { cn } from '../../lib/utils/cn';

export function Header() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Human Healthcare
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Navigation />

            <button
              type="button"
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-md transition-colors',
                'text-gray-700 dark:text-gray-300',
                'hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isDark ? (
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                ) : (
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
