import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <div className="relative z-0">{children}</div>
    </div>
  );
}
