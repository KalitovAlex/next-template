"use client";

import { SignupForm } from "@/features/auth/ui/SignupForm";

export const SignupPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-[600px]">
        <SignupForm />
      </div>
    </div>
  );
};
