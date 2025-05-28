"use client";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 font-alexandria">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/hero-bg.png)`,
        }}
      >
        {/* Removed the opacity overlay to match the design */}
      </div>

      {/* Navigation Header */}
      <header className="relative z-20 p-6 bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left side - Contact button and search */}
          <div className="flex items-center gap-4">
            <button className="bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
              تواصل معنا
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200">
              <Search size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Center - Logo using the provided image */}
          <div className="flex items-center">
            <Image
              src="/assets/rose-h-logo.png"
              alt="Rosewood Logo"
              width={200}
              height={50}
            />
          </div>

          {/* Right side - Menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-gray-800" />
          </button>
        </div>
      </header>

      {/* Sliding Navigation Panel - Updated to match the design */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center mb-8">
            <Image
              src="/assets/rose-h-logo.png"
              alt="Rosewood Logo"
              width={200}
              height={100}
            />
            <button
              onClick={toggleMenu}
              className="text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation menu items with icons like in the design */}
          <nav className="space-y-6">
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
            >
              <span className="text-amber-800">🏠</span>
              من نحن
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
            >
              <span className="text-amber-800">📦</span>
              المنتجات
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
            >
              <span className="text-amber-800">⚙️</span>
              آثار الجملة والتصدير
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
            >
              <span className="text-amber-800">❓</span>
              لماذا تستخدم أشياب روز وود
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
            >
              <span className="text-amber-800">🛡️</span>
              التخذية البحرية
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
            >
              <span className="text-amber-800">📞</span>
              تواصل معنا
            </a>
          </nav>

          {/* Bottom section with buttons like in the design */}
          <div className="mt-12 space-y-4">
            <button className="w-full bg-amber-800 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
              تواصل معنا
            </button>
            <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
              عرض سعر
            </button>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <span className="text-sm">in</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <span className="text-sm">f</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <span className="text-sm">X</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <span className="text-sm">▶</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={toggleMenu} />
      )}

      {/* Hero Content - Updated text color to black */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
            جودة طبيعية... لأدوات مطبخ صحية
          </h1>
          <p className="text-lg md:text-xl mb-8 text-black max-w-3xl mx-auto leading-relaxed">
            مرحباً بكم في <span className="font-bold">روز وود</span> حيث نعيد
            تعريف أدوات المطبخ من خلال منتجات خشبية طبيعية وصحية، تجمع بين
            الجودة العالية والتصميم العصري.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
