"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AuthInitializer } from "./auth-initializer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const ToasterProvider = () => {
  return (
    <Toaster
      theme="light"
      richColors
      position="top-right"
      toastOptions={{
        style: {
          background: '#FFFFFF',
          color: '#000000',
          border: '1px solid',
          borderColor: '#E5E7EB',
        },
        success: {
          style: {
            background: '#f0fdf4',
            borderColor: '#bbf7d0',
          },
        },
        error: {
          style: {
            background: '#fef2f2',
            borderColor: '#fecaca',
          },
        },
        warning: {
          style: {
            background: '#fffbeb',
            borderColor: '#fde68a',
          },
        },
        duration: 4000,
        className: 'toast-class',
      }}
    />
  );
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <AuthInitializer>
          {children}
          <ToasterProvider />
        </AuthInitializer>
      </NextUIProvider>
    </QueryClientProvider>
  );
};
