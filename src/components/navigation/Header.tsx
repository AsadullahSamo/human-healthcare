'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { useTheme } from '../ThemeProvider';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '../../lib/utils/cn';

export function Header() {
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
