"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { currentLocale, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLocale === "ar" ? "default" : "outline"}
        size="sm"
        onClick={() => switchLanguage("ar")}
        className="text-sm"
      >
        العربية
      </Button>
      <Button
        variant={currentLocale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => switchLanguage("en")}
        className="text-sm"
      >
        English
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
