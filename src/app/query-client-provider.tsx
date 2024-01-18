'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

export const Provider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)
