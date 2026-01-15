'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ToastProvider } from './ui/toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <ToastProvider>{children}</ToastProvider>
    </NuqsAdapter>
  );
}
