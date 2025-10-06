"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import {
  Youtube,
  X,
  Linkedin,
  Facebook,
  Heart,
  MapPin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import { fetchFooterData } from "@/lib/api/cms";
import Link from "next/link";
import Image from "next/image";
const myFont = localFont({
  src: "../../public/fonts/Blenny_Black_24726.otf",
  variable: "--font-blenny-black",
});

const Footer = ({ locale }) => {
  const [footerData, setFooterData] = useState({
    verticalText: "مـنتجات صممت بحب لكم",
    location: "بجوار مول العرب, 6 اكتوبر",
    phone: "+201033143***  -  +201033143***",
    email: "info@rosewood.com",
    socialMedia: {
      title: "تواصل معنا",
      items: [
        { id: 220, text: "x", url: null },
        { id: 221, text: "youtube", url: null },
        { id: 222, text: "linkedin", url: null },
        { id: 223, text: "facebook", url: null },
      ],
    },
    ourProducts: {
      title: "منتجاتنا",
      items: [
        { id: 228, text: "الاطباق", url: null },
        { id: 229, text: "المعالق", url: null },
        { id: 230, text: "الشوك", url: null },
        { id: 231, text: "الخشبيات", url: null },
      ],
    },
    importantLinks: {
      title: "روابط مهمة",
      items: [
        { id: 232, text: "تواصل معنا", url: null },
        { id: 233, text: "أطلب كميتك", url: null },
        { id: 234, text: "عرض كل المنتجات", url: null },
      ],
    },

    rosewoodLinks: {
      title: "روز وود",
      home: "الصفحة الرئيسية",
      whoUs: "من نـحن",
      whyUs: "لـماذا الاخشاب",
      contactUs: "تواصل معنا",
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFooterData = async () => {
      try {
        const data = await fetchFooterData();
        setFooterData(data);
      } catch (error) {
        console.error("Error loading footer data:", error);
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    loadFooterData();
  }, []);

  const getSocialIcon = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("x.com")) return <X size={16} />;
    if (lowerText.includes("youtube")) return <Youtube size={16} />;
    if (lowerText.includes("linkedin")) return <Linkedin size={16} />;
    if (lowerText.includes("facebook")) return <Facebook size={16} />;
    if (lowerText.includes("instagram")) return <Instagram size={16} />;
    if (lowerText.includes("tiktok"))
      return (
        <Image src="/icons/tiktok.svg" alt="tiktok" width={16} height={16} />
      );
    return <X size={16} />; // default
  };

  if (loading) {
    return (
      <footer className="bg-gradient-to-r from-[#DAD0C7] to-[#F6F3F1] py-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="lg:col-span-1">
                  <div className="h-6 bg-gray-300 rounded mb-4 w-24"></div>
                  <div className="space-y-3">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="h-4 bg-gray-200 rounded w-20"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-to-r from-[#DAD0C7] to-[#F6F3F1] py-16 pb-24 px-6 overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          {/* Upper Section - Navigation Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Rosewood Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {footerData.rosewoodLinks?.title || "روز وود"}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}`}
                    className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                  >
                    {footerData.rosewoodLinks?.home || "الصفحة الرئيسية"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/about-us`}
                    className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                  >
                    {footerData.rosewoodLinks?.whoUs || "من نـحن"}
                  </Link>
                </li>
                <li>
                  <a
                    href={`/${locale}/wholesale`}
                    className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                  >
                    {footerData.rosewoodLinks?.whyUs || "لـماذا الاخشاب"}
                  </a>
                </li>
                <li>
                  <a
                    href={`/${locale}/contact`}
                    className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                  >
                    {footerData.rosewoodLinks?.contactUs || "تواصل معنا"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Products Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {footerData.ourProducts?.title || "منتجاتنا"}
              </h3>
              <ul className="space-y-3">
                {footerData.ourProducts?.items?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`${locale}/${item.url}`}
                      className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {footerData.importantLinks?.title || "روابط مهمة"}
              </h3>
              <ul className="space-y-3">
                {footerData.importantLinks?.items?.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url || "#"}
                      target="_blank"
                      rel="noopener"
                      className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="lg:col-span-1 flex justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {footerData.socialMedia?.title || "تواصل معنا"}
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {footerData.socialMedia?.items?.map(
                    (social) =>
                      social.url && (
                        <a
                          key={social.id}
                          href={social.url || "#"}
                          target="_blank"
                          rel="noopener"
                          className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-red-800 transition-colors duration-200"
                        >
                          {getSocialIcon(social.url)}
                        </a>
                      )
                  )}
                </div>
              </div>

              {/* Vertical Text and Heart */}

              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <p className="[writing-mode:vertical-rl] font-semibold text-xl text-gray-800">
                    {footerData.verticalText || "مـنتجات صممت بحب لكم"}
                  </p>
                  <Heart className="w-6 h-6 text-red-500 fill-current mt-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="font-alexandria flex flex-col md:flex-row gap-8 md:justify-between border-t border-gray-300 pt-4 text-gray-600 text-sm">
            {footerData.location && (
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-amber-800" />
                <span className="text-[#002B36] font-medium md:text-[16px]">
                  {footerData.location}
                </span>
              </div>
            )}
            {footerData.phone && (
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-amber-800" />
                <span
                  className="text-[#002B36] font-medium md:text-[16px]"
                  style={{ direction: "ltr" }}
                >
                  {footerData.phone}
                </span>
              </div>
            )}
            {footerData.email && (
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-amber-800" />
                <a
                  href={`mailto:${footerData.email}`}
                  className="text-[#002B36] font-medium md:text-[16px] "
                >
                  {footerData.email}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Divider Line */}
        {/* <div className="border-t border-gray-300 mb-8"></div> */}

        {/* Lower Section - Contact Information & Watermark */}
        <div className="relative">
          {/* Contact Information */}

          {/* Large Brand Text Background */}
          <div className="absolute  inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <h2
              className={`md:w-full md:tracking-widest text-7xl lg:text-[9rem] xl:text-[12rem] font-bold text-[oklch(0.46 0.01 0.5);] whitespace-nowrap ${myFont.className}`}
            >
              ROSEWOOD
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
