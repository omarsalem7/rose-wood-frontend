"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ onMenuClick, contactUs, locale }) => (
  <header className="relative z-20 p-6 py-3 bg-white">
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
          src="/assets/rose-h-logo.png"
          alt="Rosewood Logo"
          width={200}
          height={50}
        />
      </Link>
      {/* Left side - Language switcher, Contact button and search */}
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <button className="bg-[#5F361F] text-white px-2 md:px-8 py-2 rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
          {contactUs}
        </button>
      </div>
    </div>
  </header>
);

export default Header;
