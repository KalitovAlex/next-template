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
  return <Toaster />;
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
