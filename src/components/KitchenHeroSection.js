"use client";

import { Button } from "@/components/ui/button";
import { fetchQuotationSection } from "@/lib/api/cms";
import Image from "next/image";
import { useState, useEffect } from "react";

const KitchenHeroSection = () => {
  const [data, setData] = useState({
    title: "اشترِ طبيك الدن معنا واطلب كميتك",
    buttonText: "عرض سعر مخصص",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const quotationData = await fetchQuotationSection();
        setData(quotationData);
      } catch (error) {
        console.error("Error loading quotation section data:", error);
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <section
        className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png)",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0ab5]"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="mb-8">
              <div className="mb-4">
                <Image
                  src="/lovable-uploads/2c379c90-3310-45a8-966a-20888683a80a.png"
                  alt="Rosewood Kitchen Collections Logo"
                  className="mx-auto"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="h-8 bg-white/20 rounded mb-12 mx-auto max-w-md"></div>
            <div className="h-12 bg-white/20 rounded mx-auto max-w-xs"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png)",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a0a0ab5]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="mb-4">
            <Image
              src="/lovable-uploads/2c379c90-3310-45a8-966a-20888683a80a.png"
              alt="Rosewood Kitchen Collections Logo"
              className="mx-auto"
              width={200}
              height={100}
            />
          </div>
        </div>

        {/* Main Arabic Text */}
        <h1 className="text-2xl md:text-4xl md:font-semibold mb-12 leading-9 md:leading-tight">
          {data.title}
        </h1>

        {/* Call to Action Button */}
        <Button
          className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white px-12 py-6 text-base font-medium border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          style={{ borderRadius: "12px" }}
        >
          {data.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default KitchenHeroSection;
