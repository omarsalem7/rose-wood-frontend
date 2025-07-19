"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const LANGUAGE_STORAGE_KEY = "preferred_language";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children, locale }) => {
  const [currentLocale, setCurrentLocale] = useState(locale || "ar");
  const direction = currentLocale === "ar" ? "rtl" : "ltr";
  const router = useRouter();
  const pathname = usePathname();

  // Update currentLocale if locale prop changes
  useEffect(() => {
    setCurrentLocale(locale || "ar");
  }, [locale]);

  const switchLanguage = (newLocale) => {
    if (newLocale === currentLocale) return;
    // Store preference
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLocale);
    // Replace the locale in the path (assuming /[locale]/...)
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const value = {
    currentLocale,
    direction,
    isRTL: direction === "rtl",
    isArabic: currentLocale === "ar",
    isEnglish: currentLocale === "en",
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
