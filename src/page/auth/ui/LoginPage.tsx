import { LoginForm } from "@/features/auth/ui/LoginForm";

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
};
