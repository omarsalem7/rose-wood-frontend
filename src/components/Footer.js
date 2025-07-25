"use client";

import { useState, useEffect } from "react";
import { Youtube, X, Linkedin, Facebook, Heart } from "lucide-react";
import { fetchFooterData } from "@/lib/api/cms";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    vText: "s صممت بحب لكم",
    footerItems: [
      {
        id: 1,
        title: "روز وود",
        items: [
          { id: 1, text: "من نحن", url: "/about" },
          { id: 2, text: "خدماتنا", url: "/services" },
        ],
      },
      {
        id: 2,
        title: "تواصل معنا",
        items: [
          { id: 3, text: "اتصل بنا", url: "/contact" },
          { id: 4, text: "البريد الإلكتروني", url: "mailto:info@rosewood.com" },
        ],
      },
    ],
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

  // Find social media section
  const socialMediaSection = footerData.footerItems.find((section) =>
    section.title.toLowerCase().includes("social media")
  );

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
    <footer className="bg-gradient-to-r from-[#DAD0C7] to-[#F6F3F1] py-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Dynamic Footer Sections */}
          {footerData.footerItems
            .filter(
              (section) => !section.title.toLowerCase().includes("social media")
            )
            .map((section) => (
              <div key={section.id} className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="text-gray-600 hover:text-amber-800 transition-colors duration-200 text-sm"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Social Media Icons in 2x2 grid + heart */}
          <div className="lg:col-span-1">
            <div className="flex gap-2">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  {socialMediaSection?.items.slice(0, 2).map((social) => {
                    const getSocialIcon = (text) => {
                      const lowerText = text.toLowerCase();
                      if (lowerText.includes("x")) return <X size={16} />;
                      if (lowerText.includes("youtube"))
                        return <Youtube size={16} />;
                      if (lowerText.includes("linkedin"))
                        return <Linkedin size={16} />;
                      if (lowerText.includes("facebook"))
                        return <Facebook size={16} />;
                      return <X size={16} />; // default
                    };

                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-red-800 transition-colors duration-200"
                      >
                        {getSocialIcon(social.text)}
                      </a>
                    );
                  })}
                </div>
                <div className="flex gap-3">
                  {socialMediaSection?.items.slice(2, 4).map((social) => {
                    const getSocialIcon = (text) => {
                      const lowerText = text.toLowerCase();
                      if (lowerText.includes("x")) return <X size={16} />;
                      if (lowerText.includes("youtube"))
                        return <Youtube size={16} />;
                      if (lowerText.includes("linkedin"))
                        return <Linkedin size={16} />;
                      if (lowerText.includes("facebook"))
                        return <Facebook size={16} />;
                      return <X size={16} />; // default
                    };

                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener"
                        className="w-10 h-10 bg-[#9C3C28] rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
                      >
                        {getSocialIcon(social.text)}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="mt-2">
                <p className="[writing-mode:vertical-rl] font-semibold text-xl">
                  {footerData.vText}
                </p>
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Text Background */}
        <div className="relative lg:h-[150px]">
          <div className="absolute h-fit inset-0 flex items-center justify-center opacity-5">
            <h2 className="text-4xl md:text-7xl lg:text-[9rem] xl:text-[12rem] font-bold text-[oklch(0.56 0 0)] whitespace-nowrap">
              ROSEWOOD
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
