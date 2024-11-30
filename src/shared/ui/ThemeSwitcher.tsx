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
      variant="ghost"
      aria-label={t.common.toggleTheme}
      className="w-10 h-10 bg-default-100 hover:bg-default-200 transition-all duration-300 ease-in-out"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <div className="w-5 h-5 transition-transform duration-300 ease-in-out">
        {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </Button>
  );
};
