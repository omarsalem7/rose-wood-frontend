"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react"; // or use any translate icon you prefer

const LanguageSwitcher = () => {
  const { currentLocale, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      {currentLocale === "ar" ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => switchLanguage("en")}
          title="Switch to English"
          className="text-sm rounded-xl flex items-center gap-1 cursor-pointer"
        >
          <Globe size={16} /> En
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          title="Switch to Arabic"
          onClick={() => switchLanguage("ar")}
          className="text-sm rounded-xl flex items-center gap-1 cursor-pointer"
        >
          <Globe size={16} /> ع
        </Button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
