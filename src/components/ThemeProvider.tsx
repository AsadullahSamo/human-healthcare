'use client';

import React, { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/redux/store';
import { setTheme } from '../lib/redux/slices/uiSlice';
import { getSystemTheme, applyTheme, saveThemePreference } from '../lib/utils/theme';
import type { Theme } from '../types/index';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(state => state.ui.theme.theme);

  // Apply theme and persist preference
  const handleThemeChange = useCallback(
    (theme: Theme) => {
      dispatch(setTheme(theme));
      applyTheme(theme);
      saveThemePreference(theme);
    },
    [dispatch]
  );

  // Respond to system theme changes
  const handleSystemChange = useCallback(
    (e: MediaQueryListEvent) => {
      if (currentTheme === 'system') applyTheme(e.matches ? 'dark' : 'light');
    },
    [currentTheme]
  );

  // Initialize theme on mount and listen for system changes
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const initial = saved || 'system';
    dispatch(setTheme(initial));
    applyTheme(initial === 'system' ? getSystemTheme() : initial);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', handleSystemChange);
    else mediaQuery.addListener(handleSystemChange);

    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener('change', handleSystemChange);
      else mediaQuery.removeListener(handleSystemChange);
    };
  }, [dispatch, handleSystemChange]);

  // Persist theme changes
  useEffect(() => {
    const resolved = currentTheme === 'system' ? getSystemTheme() : currentTheme;
    applyTheme(resolved);
    saveThemePreference(currentTheme);
  }, [currentTheme]);

  return <>{children}</>;
}

// Hook for theme utilities
export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.ui.theme.theme);

  const setCurrentTheme = useCallback((newTheme: Theme) => dispatch(setTheme(newTheme)), [dispatch]);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setCurrentTheme]);

  const resetToSystem = useCallback(() => setCurrentTheme('system'), [setCurrentTheme]);

  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
  const isDark = resolvedTheme === 'dark';

  return { theme, resolvedTheme, isDark, setTheme: setCurrentTheme, toggleTheme, resetToSystem };
}

export default ThemeProvider;
