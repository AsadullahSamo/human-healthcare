import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Theme, UiState, RootState } from '../../../types';

const initialState: UiState = {
  theme: {
    theme: 'system',
    timestamp: new Date(),
  },
  navigation: {
    currentPath: '/',
    mobileMenuOpen: false,
    loading: false,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Set theme preference 
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme.theme = action.payload;
      state.theme.timestamp = new Date();
    },

    // Toggle between light/dark; 'system' defaults to 'light'
    toggleTheme(state) {
      const { theme } = state.theme;
      state.theme.theme = theme === 'dark' ? 'light' : 'dark';
      state.theme.timestamp = new Date();
    },

    // Reset theme to system preference
    resetTheme(state) {
      state.theme.theme = 'system';
      state.theme.timestamp = new Date();
    },

    setCurrentPath(state, action: PayloadAction<string>) {
      state.navigation.currentPath = action.payload;
    },

    toggleMobileMenu(state) {
      state.navigation.mobileMenuOpen = !state.navigation.mobileMenuOpen;
    },

    // Explicitly set mobile menu open/closed
    setMobileMenu(state, action: PayloadAction<boolean>) {
      state.navigation.mobileMenuOpen = action.payload;
    },

    setNavigationLoading(state, action: PayloadAction<boolean>) {
      state.navigation.loading = action.payload;
    },

    closeMobileMenu(state) {
      state.navigation.mobileMenuOpen = false;
    },

    resetUIState: () => initialState,
  },
});

// --- Actions ---
export const {
  setTheme,
  toggleTheme,
  resetTheme,
  setCurrentPath,
  toggleMobileMenu,
  setMobileMenu,
  setNavigationLoading,
  closeMobileMenu,
  resetUIState,
} = uiSlice.actions;

// --- Selectors ---
export const selectTheme = (state: RootState) => state.ui.theme.theme;
export const selectThemeTimestamp = (state: RootState) => state.ui.theme.timestamp;
export const selectCurrentPath = (state: RootState) => state.ui.navigation.currentPath;
export const selectMobileMenuOpen = (state: RootState) => state.ui.navigation.mobileMenuOpen;
export const selectNavigationLoading = (state: RootState) => state.ui.navigation.loading;

// --- Reducer ---
export default uiSlice.reducer;
