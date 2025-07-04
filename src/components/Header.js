"use client";
import { Menu, Search } from "lucide-react";
import Image from "next/image";

const Header = ({ onMenuClick }) => (
  <header className="relative z-20 p-6 bg-white">
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
      <div className="flex items-center">
        <Image
          src="/assets/rose-h-logo.png"
          alt="Rosewood Logo"
          width={200}
          height={50}
        />
      </div>
      {/* Left side - Contact button and search */}
      <div className="flex items-center gap-4">
        <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
          <Search size={20} className="text-gray-600" />
        </button>
        <button className="bg-[#5F361F] text-white px-8 py-2 rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
          تواصل معنا
        </button>
      </div>
    </div>
  </header>
);

export default Header;
