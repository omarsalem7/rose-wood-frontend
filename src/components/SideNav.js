"use client";
import Image from "next/image";
import Link from "next/link";
import SmoothScrollLink from "./ui/SmoothScrollLink";

import { Youtube, X, Linkedin, Facebook } from "lucide-react";

const SideNav = ({ isOpen, onClose, data, locale, isLoading = false }) => {
  // Skeleton component for loading state
  const MenuItemSkeleton = () => (
    <div className="flex items-center gap-3 py-3">
      <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
    </div>
  );

  return (
    <div
      className={`fixed  z-50  top-0 bottom-0 ltr:right-0 rtl:left-0 h-full w-64 md:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
      ${
        isOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"
      }`}
    >
      <div className="p-6">
        {/* Header with logo and close button */}
        <div className="flex justify-between items-center pb-8">
          <Link href={`/${locale}`}>
            <Image
              className="w-auto h-auto"
              src="/assets/rose-h-logo.svg"
              alt="Rosewood Logo"
              width={200}
              height={100}
              priority
              onClick={onClose}
            />
          </Link>
          <button
            onClick={onClose}
            className="text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        {/* Navigation menu items with icons like in the design */}
        <nav className="space-y-4 max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <>
              <MenuItemSkeleton />
              <MenuItemSkeleton />
              <MenuItemSkeleton />
              <MenuItemSkeleton />
              <MenuItemSkeleton />
              <MenuItemSkeleton />
            </>
          ) : (
            <>
              <Link
                href={`/${locale}/about-us`}
                className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
                onClick={onClose}
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/who.svg"
                  alt="who"
                  className="text-white"
                />
                {data?.whoAreWe}
              </Link>
              <Link
                onClick={onClose}
                href={`/${locale}/products`}
                className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/products.svg"
                  alt="who"
                  className="text-white"
                />
                {data?.products}
              </Link>
              <Link
                onClick={onClose}
                href={`/${locale}/wholesale`}
                className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/export.svg"
                  alt="who"
                  className="text-white"
                />
                {data?.wholesaleExport}
              </Link>
              {/* <SmoothScrollLink
                elementId="whyUseRosewood"
                locale={locale}
                onClick={onClose}
                className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/rose-icon.svg"
                  alt="who"
                  className="text-white"
                />
                {data?.whyUseRosewood}
              </SmoothScrollLink> */}
              <Link
                onClick={onClose}
                href={`/${locale}/wood-steps`}
                className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/rose-icon.svg"
                  alt="manufacturingSteps"
                  className="text-white"
                />
                {data?.manufacturingSteps || "خطوات التصنيع"}
              </Link>

              <Link
                onClick={onClose}
                href={`/${locale}/blog`}
                className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/rose-icon.svg"
                  alt="manufacturingSteps"
                  className="text-white"
                />
                {data?.blogs || "مدوناتنا"}
              </Link>
              <SmoothScrollLink
                elementId="visual-feeding"
                locale={locale}
                className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
                onClick={onClose}
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/feedEye.svg"
                  alt="video"
                  className="text-white"
                />
                {data?.visualFeeding}
              </SmoothScrollLink>
              {/* <SmoothScrollLink
                elementId="blogs"
                locale={locale}
                className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
                onClick={onClose}
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/feedEye.svg"
                  alt="video"
                  className="text-white"
                />
                {data?.blogs}
              </SmoothScrollLink> */}

              {/* <SmoothScrollLink
                elementId="contactUs"
                locale={locale}
                onClick={onClose}
                className="flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-amber-800 transition-colors duration-200 py-3"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/contact.svg"
                  alt="who"
                  className="text-white"
                />
                {data?.contactUs}
              </SmoothScrollLink> */}
            </>
          )}
        </nav>
        {/* Bottom section with buttons like in the design */}
        <div className="mt-5 flex gap-2">
          {isLoading ? (
            <>
              <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </>
          ) : (
            <>
              <Link
                href={`/${locale}/contact`}
                onClick={onClose}
                className="w-full text-center bg-[#5F361F] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
              >
                {data?.contactUs}
              </Link>
              <Link
                onClick={onClose}
                href={`/${locale}/order/price-quote`}
                className="w-full text-center border border-gray-300 text-gray-700 px-3 py-2  rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                {data?.offerPrice}
              </Link>
            </>
          )}
        </div>
        {/* Social media icons */}
        <div className="absolute bottom-10 flex justify-center gap-4 ">
          {data?.linkedin && (
            <a
              href={data?.linkedin}
              className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <Linkedin size={16} />
            </a>
          )}
          {data?.facebook && (
            <a
              href={data?.facebook}
              className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <Facebook size={16} />
            </a>
          )}
          {data?.x && (
            <a
              href={data?.x}
              className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <X size={16} />
            </a>
          )}
          {data?.youtube && (
            <a
              href={data?.youtube}
              className="w-10 h-10 bg-[#5F361F] rounded-full flex items-center justify-center text-white hover:bg-amber-900 transition-colors duration-200"
            >
              <Youtube size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
