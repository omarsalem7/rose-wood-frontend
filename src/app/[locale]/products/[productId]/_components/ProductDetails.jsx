"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
const ProductDetails = ({ locale, product }) => {
  const t = locale === "ar" ? ar : en;

  const [selectedImageId, setSelectedImageId] = useState(
    product?.gallery?.[0]?.id || 1
  );

  const selectedImage =
    product?.gallery?.find((img) => img.id === selectedImageId)?.img ||
    product?.mainImageUrl ||
    product?.image ||
    null;

  const handleImageSelect = (id) => {
    setSelectedImageId(id);
  };

  return (
    <>
      <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="border-t border-gray-300 relative ">
          <span className="absolute left-0 top-0  w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-0 w-1.5  h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>

          <div className="items flex flex-col md:flex-row justify-between   gap-2 md:gap-6 py-12  ">
            <div className="w-full md:w-[50%]    px-2   flex flex-col gap-4">
              <h1 className=" font-medium text-[40px]">{product.name}</h1>
              <p>
                {t.from}: {product.brand}
              </p>
              <div>
                <span className="text-[#5F361F] font-bold">
                  {t.noteOverView}
                </span>
                <p className="text-[#586675] text-lg pt-3">
                  {product.description}
                </p>
              </div>
              <div>
                <span className="text-[#5F361F] font-bold">
                  {t.availableSizes}
                </span>
                <div className="flex items-center gap-4 py-3">
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.large}</Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">
                    {t.medium}
                  </Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">{t.small}</Button>
                  <Button className="bg-[#F4F8FF] rounded-xl">
                    {t.custom}
                  </Button>
                </div>
              </div>
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-[#5F361F] font-bold">{t.colors}</span>
                  <div className="flex gap-4 py-3 items-center">
                    {product.colors.map((colorData) => (
                      <Button
                        key={colorData.id}
                        className="rounded-xl w-[40px] h-[40px]"
                        style={{ backgroundColor: colorData.color }}
                      />
                    ))}
                    <Button className="bg-[#F4F8FF] rounded-xl">
                      {t.customColor}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            {/* Image Section */}
            <div className="w-full md:w-[50%]">
              <div className="h-[450px] flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    className="w-full h-full object-fill"
                    width={800}
                    height={800}
                    quality={95}
                    priority={true}
                    alt="Selected product image"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <p>No image available</p>
                  </div>
                )}
              </div>
              {product.gallery && product.gallery.length > 0 && (
                <div className="flex justify-center items-center mt-4 gap-3">
                  {product.gallery.map((img) => (
                    <Button
                      key={img.id}
                      onClick={() => handleImageSelect(img.id)}
                      className={`h-[118px] w-full rounded-xl p-0 overflow-hidden transition-opacity duration-200 ${
                        img.id === selectedImageId
                          ? "opacity-100 ring-2 ring-[#5F361F]"
                          : "opacity-60 bg-black hover:opacity-90"
                      }`}
                    >
                      {img.img ? (
                        <Image
                          src={img.img}
                          width={300}
                          height={300}
                          quality={70}
                          loading="lazy"
                          alt={img.alt || "Product image"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                          📷
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
