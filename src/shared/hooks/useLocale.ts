"use client";

import { useState, useEffect } from "react";
import { LocaleType, locales } from "@/shared/config/i18n";
import { create } from "zustand";

interface LocaleStore {
  locale: LocaleType;
  t: typeof locales.ru;
  setLocale: (locale: LocaleType) => void;
}

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: "ru",
  t: locales.ru,
  setLocale: (locale: LocaleType) => set({ locale, t: locales[locale] }),
}));

export const useLocale = () => {
  const { locale, setLocale, t } = useLocaleStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as LocaleType;
    if (savedLocale && savedLocale in locales) {
      setLocale(savedLocale);
    }
  }, [setLocale]);

  const toggleLocale = () => {
    const newLocale: LocaleType = locale === "ru" ? "en" : "ru";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return {
    locale,
    t,
    toggleLocale,
    mounted,
  };
};
