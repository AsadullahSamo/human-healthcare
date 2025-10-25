'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils/cn';
import { useAppDispatch, useAppSelector } from '../../lib/redux/store';
import {
  toggleMobileMenu,
  setMobileMenu,
} from '../../lib/redux/slices/uiSlice';

const navigationItems = [
  { name: 'Home', href: '/' as const },
  { name: 'About', href: '/about' as const },
  { name: 'Services', href: '/services' as const },
  { name: 'Contact', href: '/contact' as const },
];

export function Navigation() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(
    state => state.ui.navigation.mobileMenuOpen
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!mobileMenuOpen) return;

      switch (event.key) {
        case 'Escape':
          dispatch(setMobileMenu(false));
          buttonRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => (prev + 1) % navigationItems.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev =>
            prev <= 0 ? navigationItems.length - 1 : prev - 1
          );
          break;
        case 'Tab':
          if (event.shiftKey && focusedIndex === 0) {
            dispatch(setMobileMenu(false));
            buttonRef.current?.focus();
          }
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, focusedIndex, dispatch]);

  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  }, [mobileMenuOpen]);

  const handleMobileToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      dispatch(setMobileMenu(false));
    }
  };

  return (
    <nav className="relative" role="navigation" aria-label="Main navigation">
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1',
              pathname === item.href
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300'
            )}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        ref={buttonRef}
        type="button"
        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={handleMobileToggle}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {mobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="absolute top-12 left-0 right-0 md:hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
                onClick={handleLinkClick}
                onFocus={() => setFocusedIndex(index)}
                className={cn(
                  'block px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                  pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300',
                  focusedIndex === index && 'ring-2 ring-blue-500 ring-offset-2'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
