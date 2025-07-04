"use client";
import Image from "next/image";
import { Youtube, X, Linkedin, Facebook, Heart } from "lucide-react";

const SideNav = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 right-0 h-full w-sm bg-white shadow-2xl z-30 transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="p-6 ">
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
      <nav className="space-y-4">
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <Image
            width={25}
            height={25}
            src="/icons/who.svg"
            alt="who"
            className="text-white"
          />
          من نحن
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <Image
            width={25}
            height={25}
            src="/icons/products.svg"
            alt="who"
            className="text-white"
          />
          المنتجات
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <Image
            width={25}
            height={25}
            src="/icons/export.svg"
            alt="who"
            className="text-white"
          />
          الجملة والتصدير
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <Image
            width={25}
            height={25}
            src="/icons/rose-icon.svg"
            alt="who"
            className="text-white"
          />
          لماذا تستخدم اخشاب روز وود
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <Image
            width={25}
            height={25}
            src="/icons/feedEye.svg"
            alt="who"
            className="text-white"
          />
          التغذية البصرية
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
        >
          <Image
            width={25}
            height={25}
            src="/icons/contact.svg"
            alt="who"
            className="text-white"
          />
          تواصل معنا
        </a>
      </nav>
      {/* Bottom section with buttons like in the design */}
      <div className="mt-12 space-y-4">
        <button className="w-full bg-[#5F361F] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
          تواصل معنا
        </button>
        <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          عرض سعر
        </button>
      </div>
      {/* Social media icons */}
      <div className="absolute bottom-5 flex justify-center gap-4 mt-8">
        <a
          href="#"
          className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
        >
          <Facebook size={16} />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
        >
          <X size={16} />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
        >
          <Youtube size={16} />
        </a>
      </div>
    </div>
  </div>
);

export default SideNav;
