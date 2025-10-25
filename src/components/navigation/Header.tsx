'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-[#a048a7] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#a048a7] shadow-lg">
                <Image
                  src="/images/favicon.jpg"
                  alt="Human Healthcare Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl text-[#a048a7]">
                  Human Healthcare
                </span>
                <span className="font-poppins text-xs text-[#565656]">
                  Healthcare at Your Doorstep
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
