import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    // Placeholder - will be replaced with actual slices
    _placeholder: (state = {}) => state,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Setup listeners for RTK Query (if we add it later)
setupListeners(store.dispatch);

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use throughout the app
export { useDispatch, useSelector, type TypedUseSelectorHook };

// Create typed versions of hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Helper to get initial state for SSR
export const getInitialState = () => ({
  ui: {
    theme: 'system' as const,
    isDarkMode: false,
    sidebarOpen: false,
    mobileMenuOpen: false,
  },
  contact: {
    isLoading: false,
    error: null,
    lastSubmission: null,
    formData: {
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: 'general',
      message: '',
      preferredContact: 'email',
      urgency: 'medium',
    },
  },
});

export default store;
