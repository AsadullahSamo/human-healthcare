'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    let effectiveTheme: 'light' | 'dark';
    if (theme === 'system') {
      effectiveTheme = systemPrefersDark ? 'dark' : 'light';
    } else {
      effectiveTheme = theme as 'light' | 'dark';
    }

    setResolvedTheme(effectiveTheme);

    root.classList.remove('light', 'dark');
    root.classList.add(effectiveTheme);

    localStorage.setItem('theme', theme);

    try {
      document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (error) {
      console.warn('Failed to set theme cookie:', error);
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const systemPrefersDark = mediaQuery.matches;
        const effectiveTheme = systemPrefersDark ? 'dark' : 'light';
        setResolvedTheme(effectiveTheme);

        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(effectiveTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return {
    theme: resolvedTheme,
    themeMode: theme,
    toggleTheme,
    setTheme: setThemeMode,
  };
}
