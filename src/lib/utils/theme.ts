import type { Theme } from '../../types/index';

// --- System theme detection ---
export function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'light'; // SSR fallback
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme | 'dark' | 'light'): void {
  if (typeof window === 'undefined') return;

  const resolved = theme === 'system' ? getSystemTheme() : theme;
  const root = document.documentElement;

  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
  root.setAttribute('data-theme', resolved);

  updateMetaThemeColor(resolved);
}

// Update mobile browser meta theme-color
function updateMetaThemeColor(theme: 'dark' | 'light'): void {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f172a' : '#ffffff');
}

// --- LocalStorage persistence ---
export function saveThemePreference(theme: Theme): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('theme', theme);
    localStorage.setItem('theme-timestamp', new Date().toISOString());
  } catch { /* ignore localStorage errors */ }
}

export function loadThemePreference(): Theme | null {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem('theme') as Theme | null;
    return ['light', 'dark', 'system'].includes(saved || '') ? saved : null;
  } catch { return null; }
}

export function clearThemePreference(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem('theme');
    localStorage.removeItem('theme-timestamp');
  } catch {}
}

export function getThemeTimestamp(): Date | null {
  if (typeof window === 'undefined') return null;
  try {
    const ts = localStorage.getItem('theme-timestamp');
    return ts ? new Date(ts) : null;
  } catch { return null; }
}

// --- Initialize theme ---
export function initializeTheme(): Theme {
  const saved = loadThemePreference();
  const initial = saved || 'system';
  applyTheme(initial);
  return initial;
}

// --- Helpers ---
export function isDarkMode(theme: Theme): boolean {
  return (theme === 'system' ? getSystemTheme() : theme) === 'dark';
}

export function toggleTheme(current: Theme): Theme {
  if (current === 'system') return getSystemTheme() === 'dark' ? 'light' : 'dark';
  return current === 'light' ? 'dark' : 'light';
}

// --- System theme listener ---
export function createSystemThemeListener(callback: (isDark: boolean) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = (e: MediaQueryListEvent) => callback(e.matches);

  if (media.addEventListener) media.addEventListener('change', handler);
  else media.addListener(handler); // fallback

  return () => {
    if (media.removeEventListener) media.removeEventListener('change', handler);
    else media.removeListener(handler);
  };
}
