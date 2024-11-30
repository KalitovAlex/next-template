"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { AuthInitializer } from "./auth-initializer";
import { useTheme } from "next-themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const ToasterProvider = () => {
  const { theme } = useTheme();
  
  return (
    <Toaster
      theme={theme as "light" | "dark"}
      richColors
      position="top-right"
      toastOptions={{
        style: {
          background: theme === 'dark' ? '#1E1E1E' : '#FFFFFF',
          color: theme === 'dark' ? '#FFFFFF' : '#000000',
          border: '1px solid',
          borderColor: theme === 'dark' ? '#2D2D2D' : '#E5E7EB',
        },
        success: {
          style: {
            background: theme === 'dark' ? '#052e16' : '#f0fdf4',
            borderColor: theme === 'dark' ? '#166534' : '#bbf7d0',
          },
        },
        error: {
          style: {
            background: theme === 'dark' ? '#450a0a' : '#fef2f2',
            borderColor: theme === 'dark' ? '#991b1b' : '#fecaca',
          },
        },
        warning: {
          style: {
            background: theme === 'dark' ? '#451a03' : '#fffbeb',
            borderColor: theme === 'dark' ? '#9a3412' : '#fde68a',
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
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <NextUIProvider>
          <AuthInitializer>
            {children}
            <ToasterProvider />
          </AuthInitializer>
        </NextUIProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};
