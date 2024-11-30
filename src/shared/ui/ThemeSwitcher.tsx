"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon } from "@/shared/ui/icons/SunIcon";
import { MoonIcon } from "@/shared/ui/icons/MoonIcon";
import { useEffect, useState } from "react";
import { t } from "@/shared/config/localization";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label={t.common.toggleTheme}
      className="w-10 h-10 text-default-500"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <div className="w-5 h-5">
        {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </Button>
  );
};
