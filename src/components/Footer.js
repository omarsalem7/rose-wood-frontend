import React from "react";
import { Youtube, X, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#DAD0C7] to-[#F6F3F1] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
          </div>

          {/* Social Media Icons in 2x2 grid + heart */}
          <div className="lg:col-span-1">
            <div className="flex gap-2">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-red-800 transition-colors duration-200"
                  >
                    <X size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200"
                  >
                    <Youtube size={16} />
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <p className="[writing-mode:vertical-rl] font-semibold text-xl">
                  مـنتجات صممت بحب لكم
                </p>
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Text Background */}
        <div className="relative lg:h-[150px]">
          <div className="absolute h-fit inset-0 flex items-center justify-center opacity-5">
            <h2 className="text-4xl md:text-9xl lg:text-[12rem] font-bold text-[oklch(0.56 0 0)] whitespace-nowrap">
              ROSEWOOD
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
