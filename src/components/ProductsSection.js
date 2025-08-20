"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

// Custom styles for equal height Swiper slides
const swiperStyles = `
  .equal-height-swiper .swiper-slide {
    height: auto;
    display: flex;
    width: auto !important;
    flex-shrink: 0;
  }
  .equal-height-swiper .swiper-wrapper {
    align-items: stretch;
  }
  .equal-height-swiper .swiper-slide > div {
    width: 100%;
    min-width: 280px;
    max-width: 320px;
  }
`;

const ProductsSection = ({ products, locale }) => {
  const t = locale === "ar" ? ar : en;
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedColors, setSelectedColors] = useState({});

  // No category filtering, just use all products
  const filteredProducts = products;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleColorChange = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <style>{swiperStyles}</style>
      <section className="py-16 font-alexandria">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <h2 className="text-[18px] md:text-[32px] font-medium mb-8">
              {t.roseWoodProducts}
            </h2>

            {/* Pagination Controls (no categories) */}
            {totalPages > 1 && (
              <div
                className="flex flex-wrap justify-end items-center mb-8"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="hidden md:flex gap-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-6 h-6 ltr:rotate-180 text-gray-600" />
                  </button>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-6 h-6 ltr:rotate-180 text-gray-600" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid/Swiper */}
          <div className="mb-12">
            {isMobile ? (
              <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                centeredSlides={false}
                style={{
                  paddingLeft: "6vw",
                  paddingRight: "6vw",
                  paddingBottom: "30px",
                }}
                className="equal-height-swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                }}
              >
                {currentProducts.map((product, index) => {
                  const selectedColor = selectedColors[product.id];
                  // Use main product image as default, or color image if color is selected
                  const currentImage =
                    selectedColor !== undefined &&
                    product.colors &&
                    product.colors[selectedColor] &&
                    product.colors[selectedColor].imgUrl
                      ? product.colors[selectedColor].imgUrl
                      : product.image || product.mainImageUrl;

                  return (
                    <SwiperSlide key={product.id} className="h-auto">
                      <div
                        className="bg-white border border-[#E5E5E5] rounded-lg hover:shadow-lg transition-shadow h-full flex flex-col w-full min-w-0 p-4"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={200 + index * 100}
                      >
                        {/* Product Image */}
                        <div className="w-full h-36 rounded-xl overflow-hidden flex-shrink-0">
                          {currentImage &&
                          typeof currentImage === "string" &&
                          currentImage.trim() !== "" ? (
                            <Image
                              width={200}
                              height={200}
                              src={currentImage}
                              alt={product.name}
                              loading="lazy"
                              quality={75}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                              {t.noImage}
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="text-center my-4 flex-grow flex flex-col gap-2">
                          <h3 className="text-xl font-bold text-gray-800  flex-shrink-0">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm flex-grow">
                            {product.description}
                          </p>
                          <p className="text-gray-500 text-xs flex-shrink-0">
                            {product.features}
                          </p>
                        </div>

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                          <div className="flex justify-center gap-3 mb-6 flex-shrink-0">
                            {product.colors.map((colorData, index) => {
                              return (
                                <button
                                  key={colorData.id}
                                  onClick={() =>
                                    handleColorChange(product.id, index)
                                  }
                                  className={`w-5 h-5 rounded-full border-3 transition-all ${
                                    selectedColor === index
                                      ? "border-white ring-[1.5px] ring-black"
                                      : "border-white hover:border-gray-400"
                                  }`}
                                  style={{ backgroundColor: colorData.color }}
                                />
                              );
                            })}
                          </div>
                        )}

                        {/* Add to Cart Button */}
                        <Link
                          href={`/${locale}/products/${product.id}`}
                          className="flex items-center  justify-center gap-2 font-medium text-center hover:text-[#5F361F] text-[#804524] flex-shrink-0 mt-auto"
                        >
                          {t.productDetails}
                          <ChevronLeft size={16} className="ltr:rotate-180" />
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-fr">
                {currentProducts.map((product, index) => {
                  const selectedColor = selectedColors[product.id];
                  // Use main product image as default, or color image if color is selected
                  const currentImage =
                    selectedColor !== undefined &&
                    product.colors &&
                    product.colors[selectedColor] &&
                    product.colors[selectedColor].imgUrl
                      ? product.colors[selectedColor].imgUrl
                      : product.image || product.mainImageUrl;

                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-[#E5E5E5] rounded-lg p-3 md:p-8  hover:shadow-lg transition-shadow h-full flex flex-col"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={200 + index * 100}
                    >
                      {/* Product Image */}
                      <div className="w-full h-24 md:h-48 rounded-xl overflow-hidden flex-shrink-0">
                        {currentImage &&
                        typeof currentImage === "string" &&
                        currentImage.trim() !== "" ? (
                          <Image
                            width={150}
                            height={150}
                            src={currentImage}
                            alt={product.name}
                            loading="lazy"
                            quality={75}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                            {t.noImage}
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="text-center my-4 flex-grow flex flex-col gap-2">
                        <h3 className="md:text-xl md:font-bold text-gray-800 flex-shrink-0">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm flex-grow">
                          {product.description}
                        </p>
                        <p className="text-gray-500 text-xs flex-shrink-0">
                          {product.features}
                        </p>
                      </div>

                      {/* Color Selection */}
                      {product.colors && product.colors.length > 0 && (
                        <div className="flex justify-center gap-3 mb-6 flex-shrink-0">
                          {product.colors.map((colorData, index) => {
                            return (
                              <button
                                key={colorData.id}
                                onClick={() =>
                                  handleColorChange(product.id, index)
                                }
                                className={`w-5 h-5 rounded-full border-3 transition-all ${
                                  selectedColor === index
                                    ? "border-white ring-[1.5px] ring-black"
                                    : "border-white hover:border-gray-400"
                                }`}
                                style={{ backgroundColor: colorData.color }}
                              />
                            );
                          })}
                        </div>
                      )}

                      {/* Add to Cart Button */}
                      <Link
                        href={`/${locale}/products/${product.id}`}
                        className="flex items-center justify-center gap-2 font-medium text-center hover:text-[#5F361F] text-[#804524] flex-shrink-0 mt-auto"
                      >
                        {t.productDetails}
                        <ChevronLeft size={16} className="ltr:rotate-180" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <Link
              href={`/${locale}/categories`}
              className="bg-[#5F361F] hover:bg-amber-900 text-white px-4 md:px-12 py-3 rounded-lg text-sm"
            >
              {t.viewAllProducts}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
