'use client';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../lib/redux/store';
import { ThemeProvider } from './ThemeProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
}

export default Providers;
