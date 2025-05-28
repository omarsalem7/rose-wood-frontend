"use client";
import { X } from "lucide-react";
import Image from "next/image";

const SideNav = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-30 transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
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
          onClick={onClose}
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
          <span className="text-amber-800">🏠</span> من نحن
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <span className="text-amber-800">📦</span> المنتجات
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <span className="text-amber-800">⚙️</span> آثار الجملة والتصدير
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <span className="text-amber-800">❓</span> لماذا تستخدم أشياب روز وود
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <span className="text-amber-800">🛡️</span> التخذية البحرية
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <span className="text-amber-800">📞</span> تواصل معنا
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
);

export default SideNav;
