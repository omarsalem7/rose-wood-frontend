"use client";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import ImageMagnifier from "@/components/ImageMagnifier";
import { trackProductView } from "@/lib/analytics";
const ProductDetails = ({ locale, product }) => {
  const t = locale === "ar" ? ar : en;

  const [selectedImageId, setSelectedImageId] = useState(
    product?.gallery?.[0]?.id || 1
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);

  // Track product view when component mounts
  useEffect(() => {
    if (product?.id) {
      trackProductView(
        product?.id,
        product?.name,
        product?.category?.name || "unknown"
      );
    }
  }, [product?.id, product?.name, product?.category?.name]);

  // Always use selectedImageId to determine selected image
  let selectedImage = null;
  if (selectedColor) {
    // Find the color object and use its imgUrl if available
    const colorObj = product.colors?.find(
      (color) => color.id === selectedColor
    );
    selectedImage =
      colorObj?.imgUrl ||
      product?.gallery?.find((img) => img.id === selectedImageId)?.img ||
      product?.mainImageUrl ||
      product?.image ||
      null;
  } else {
    selectedImage =
      product?.gallery?.find((img) => img.id === selectedImageId)?.img ||
      product?.mainImageUrl ||
      product?.image ||
      null;
  }

  // When a color is selected, set selectedImageId to the color's image if available
  const handleColorSelect = (colorData) => {
    setSelectedImageId(product.gallery?.[0]?.id || 1);
    setSelectedColor(colorData.id);
  };

  const handleImageSelect = (id) => {
    setSelectedImageId(id);
    setSelectedColor(null); // Deselect color if user picks from gallery
  };

  const imagesPerPage = 4;
  const filteredGallery = product?.gallery || [];
  const totalPages = Math.ceil((filteredGallery.length || 0) / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredGallery.slice(startIndex, endIndex) || [];

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <>
      <section className="pt-16 max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="border-t border-gray-300 relative ">
          <span className="absolute left-0 top-0  w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-0 w-1.5  h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 py-12">
            <div className="w-full px-2 flex flex-col gap-4 md:gap-8">
              <h1 className=" font-medium text-[30px] md:text-[40px] md:leading-[75px]">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <span>{t.from}: </span>
                <span className="text-[#9C3C28] text-xl"> {product.brand}</span>

                <img src="/icons/rose-icon.svg" alt="rosewood" />
              </div>
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
                  {product.sizes.map((size) => (
                    <Tooltip
                      key={size.id}
                      content={size.dimension}
                      position="bottom"
                    >
                      <Button className="bg-[#F4F8FF] rounded-xl md:min-w-20">
                        {size.name}
                      </Button>
                    </Tooltip>
                  ))}
                  <Button className="bg-[#F8F8FF] rounded-xl">
                    {t.custom}
                  </Button>
                </div>
              </div>
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-[#5F361F] font-bold">{t.colors}</span>
                  <div className="flex gap-4 py-2 md:py-3 items-center">
                    {product.colors.map((colorData) => (
                      <Button
                        key={colorData.id}
                        onClick={() => handleColorSelect(colorData)}
                        className={`rounded-xl w-[30px] h-[30px] md:w-[40px] md:h-[40px] transition-all duration-200 ${
                          selectedColor === colorData.id
                            ? "ring-2 ring-[#5F361F] scale-110"
                            : "hover:scale-105"
                        }`}
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
            <div className="w-full">
              <div className="h-[270px] md:h-[450px] flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden">
                {selectedImage ? (
                  <ImageMagnifier
                    src={selectedImage}
                    className="w-full h-full"
                    width={800}
                    height={800}
                    quality={95}
                    priority={true}
                    alt="Selected product image"
                    zoomLevel={1.7}
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <p>No image available</p>
                  </div>
                )}
              </div>
              {/* Always show gallery thumbnails from product.gallery */}
              {product.gallery && product.gallery.length > 1 && (
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
                        className={`h-[80px] md:h-[118px] w-[25%] rounded-xl p-0 overflow-hidden transition-opacity duration-200 ${
                          !selectedColor && img.id === selectedImageId
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
                  {filteredGallery.length > 4 && (
                    <>
                      {/* Left Arrow - Only show if there are previous pages */}
                      {currentPage > 0 && (
                        <button
                          onClick={handlePreviousPage}
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#0000007e] rounded-s-md  flex items-center justify-center transition-all duration-200  text-gray-700  shadow-md opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
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
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#0000007e] rounded-e-md flex items-center justify-center transition-all duration-200 text-gray-700shadow-md opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
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
