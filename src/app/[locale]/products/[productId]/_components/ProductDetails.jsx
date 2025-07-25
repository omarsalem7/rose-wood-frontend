"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
const ProductDetails = ({ locale }) => {
  console.log('locale',locale);

  const t = locale === "ar" ? ar : en;
  const images = [
    {
      id: 1,
      image: "/assets/product-details.png",
    },
    {
      id: 2,
      image: "/assets/product1.png",
    },
    {
      id: 3,
      image: "/assets/product-details.png",
    },
    {
      id: 4,
      image: "/assets/product-details.png",
    },
  ];

  const [selectedImageId, setSelectedImageId] = useState(1);

  const selectedImage = images.find((img) => img.id === selectedImageId)?.image;

  const handleImageSelect = (id) => {
    setSelectedImageId(id);
  };
  return (
    <>
      <section className="px-6  ">
        <div className="max-w-7xl mx-auto border-t border-gray-300 relative">
          <span className="absolute left-0 top-0 z-50 w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-0 w-1.5 z-50 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>

          <div className="items flex flex-col md:flex-row justify-between   gap-2 md:gap-6 py-12  ">
            <div className="w-full md:w-[50%]    px-2   flex flex-col gap-4">
              <h1 className=" font-medium text-[40px]">
                حامل البيتزا الدائري الصحي <br /> باحجام مختلفة
              </h1>
              <p>{t.from}: روز وود</p>
              <div>
                <span className="text-[#5F361F] font-bold">{t.noteOverView}</span>
                <p className="text-[#586675] text-lg pt-3">
                  نستخدم أخشاب طبيعية مجففة، ونشطبها بزيوت وشموع آمنة للطعام، مع
                  خطوط إنتاج حديثة وتصاميم تجمع بين الأناقة والوظيفة.
                </p>
              </div>
              <div>
                <span className="text-[#5F361F] font-bold">
                  {t.availableSizes}
                </span>
                <div className="flex items-center gap-4 py-3">
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.large}</Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.medium}</Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.small}</Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.custom}</Button>
                </div>
              </div>
              <div>
                <span className="text-[#5F361F] font-bold">{t.colors}</span>
                <div className="flex gap-4    py-3 items-center">
                  <Button className="bg-[#DB9D5F] rounded-xl w-[40px] h-[40px]"></Button>
                  <Button className="bg-[#BA806D] rounded-xl w-[40px] h-[40px]"></Button>
                  <Button className="bg-[#4D2E26] rounded-xl w-[40px] h-[40px]"></Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.customColor}</Button>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-[50%]">
              <div className="h-[450px]">
                <Image
                  src={selectedImage || ""}
                  className="w-full h-full object-fill"
                  width={400}
                  height={400}
                  alt="Selected product image"
                />
              </div>
              <div className="flex justify-center items-center mt-4 gap-3">
                {images.map((img) => (
                  <Button
                    key={img.id}
                    onClick={() => handleImageSelect(img.id)}
                    className={`w-[140px] h-[118px] rounded-xl p-0 overflow-hidden transition-opacity duration-200 ${
                      img.id === selectedImageId
                        ? "opacity-100"
                        : "opacity-80 bg-black "
                    }`}
                  >
                    <Image
                      src={img.image}
                      width={200}
                      height={200}
                      alt={`Thumbnail ${img.id}`}
                      className="w-full h-full object-fill"
                    />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
