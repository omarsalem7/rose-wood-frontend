"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";

const Header = ({ onMenuClick, contactUs, locale, isLoading = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 p-6 py-3 bg-white h-[80px] transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Right side - Menu button */}
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Menu size={35} className="text-[#5F361F]" />
        </button>
        {/* Center - Logo using the provided image */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            className="w-auto h-auto"
            src="/assets/rose-h-logo.svg"
            alt="Rosewood Logo"
            width={300}
            height={100}
            priority
          />
        </Link>
        {/* Left side - Language switcher, Contact button and search */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href={`/${locale}/contact`}
            className="bg-[#5F361F] text-white px-2 md:px-8 py-2 rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
          >
            {isLoading ? (
              <div className="w-16 h-4 bg-white/20 rounded animate-pulse"></div>
            ) : (
              contactUs
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
