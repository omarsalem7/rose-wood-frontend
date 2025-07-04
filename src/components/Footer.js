import React from "react";
import { Youtube, X, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6 font-alexandria" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* تواصل معنا Section with Social Icons */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              تواصل معنا
            </h3>

            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-2">تواصل معنا</p>
              <p className="text-gray-600 text-sm mb-2">اطلب كميتك</p>
              <p className="text-gray-600 text-sm mb-4">اطلب كميتك</p>
            </div>

            {/* Social Media Icons in 2x2 grid + heart */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white hover:bg-red-800 transition-colors duration-200"
                >
                  <X size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200"
                >
                  <Youtube size={16} />
                </a>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook size={16} />
                </a>
              </div>
              <div className="mt-2">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
            </div>
          </div>

          {/* خدماتنا Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  اسم الخدمة لنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  اسم الخدمة لنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  اسم الخدمة لنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  اسم الخدمة لنا
                </a>
              </li>
            </ul>
          </div>

          {/* منتجاتنا Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              منتجاتنا
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  الأطباق
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  المعالق
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  البلاطيل
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  الخدميات
                </a>
              </li>
            </ul>
          </div>

          {/* روابط مهمة Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              روابط مهمة
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  تواصل معنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  عرض كل المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  عرض كل الخدمات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  عرض كل الخدمات
                </a>
              </li>
            </ul>
          </div>

          {/* روز وود Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              روز وود
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  تواصل معنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  اطلب كميتك
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  اطلب كميتك
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Brand Text Background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-400 whitespace-nowrap">
              ROSEWOOD
            </h2>
          </div>

          {/* Bottom Border */}
          <div className="relative z-10 pt-8 mt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2024 روز وود. جميع الحقوق محفوظة
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  سياسة الخصوصية
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                >
                  شروط الاستخدام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
