"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      {children}
      <Toaster richColors position="top-right" />
    </NextUIProvider>
  );
};
