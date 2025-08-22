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
  const [currentPage, setCurrentPage] = useState(0);

  const selectedImage =
    product?.gallery?.find((img) => img.id === selectedImageId)?.img ||
    product?.mainImageUrl ||
    product?.image ||
    null;

  const handleImageSelect = (id) => {
    setSelectedImageId(id);
  };

  const imagesPerPage = 4;
  const totalPages = Math.ceil((product?.gallery?.length || 0) / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = product?.gallery?.slice(startIndex, endIndex) || [];

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
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
                <div className="relative group">
                  <div
                    className={`flex ${
                      currentImages.length === 1
                        ? "justify-start"
                        : "justify-center"
                    } items-center mt-4 gap-3`}
                  >
                    {currentImages.map((img) => (
                      <Button
                        key={img.id}
                        onClick={() => handleImageSelect(img.id)}
                        className={`h-[118px] w-[25%] rounded-xl p-0 overflow-hidden transition-opacity duration-200 ${
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

                  {/* Navigation Arrows - Only show when hovering over gallery using group-hover */}
                  {product.gallery.length > 4 && (
                    <>
                      {/* Left Arrow - Only show if there are previous pages */}
                      {currentPage > 0 && (
                        <button
                          onClick={handlePreviousPage}
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-white text-gray-700 hover:bg-gray-100 shadow-md opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </button>
                      )}

                      {/* Right Arrow - Only show if there are next pages */}
                      {currentPage < totalPages - 1 && (
                        <button
                          onClick={handleNextPage}
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-white text-gray-700 hover:bg-gray-100 shadow-md opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      )}
                    </>
                  )}
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
