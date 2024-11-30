"use client";

import { Button } from "@nextui-org/react";
import { useLocale } from "@/shared/hooks/useLocale";

export const LanguageSwitcher = () => {
  const { locale, toggleLocale, mounted } = useLocale();

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <Button
      isIconOnly
      variant="ghost"
      aria-label="Toggle language"
      className="w-10 h-10 bg-default-100 hover:bg-default-200"
      onClick={toggleLocale}
    >
      {locale.toUpperCase()}
    </Button>
  );
}; 