import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      {children}
    </div>
  );
}
