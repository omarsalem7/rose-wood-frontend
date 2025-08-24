"use client";
import React, { useState, useEffect } from "react";
import { fetchRelatedCategories } from "@/lib/api/categories";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

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

const OtherCategory = ({ currentCategoryId, locale }) => {
  const t = locale === "ar" ? ar : en;
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    async function getCategories() {
      const cats = await fetchRelatedCategories(currentCategoryId);
      setCategories(cats);
    }
    getCategories();
  }, [currentCategoryId]);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === totalPages - 1;

  const visibleCategories = categories.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <>
      <style>{swiperStyles}</style>
      {categories.length > 0 && (
        <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
          <h2 className="text-2xl font-medium mb-8 pr-2">
            {t.otherCategories}
          </h2>

          {/* Mobile Swiper */}
          {isMobile ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1.1}
              centeredSlides={false}
              style={{ paddingLeft: "6vw", paddingRight: "6vw" }}
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
              {categories.map((cat, idx) => (
                <SwiperSlide key={cat.id || idx} className="h-auto">
                  <Link
                    href={`/${locale}/products?categoryId=${cat.id}`}
                    className="bg-white border hover:shadow-lg border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center min-h-[320px] shadow-sm transition-shadow h-full w-full"
                  >
                    <SafeImage
                      src={cat.image}
                      alt={cat.name}
                      width={160}
                      height={160}
                      className="h-40 object-contain mb-6 mt-2"
                      fallbackClassName="h-40 w-full bg-gray-200 rounded-lg flex items-center justify-center mb-6 mt-2"
                    />
                    <div className="font-bold text-2xl text-[#1A3447] mb-2">
                      {cat.name}
                    </div>
                    <div className="text-gray-400 text-base">
                      {cat.subtitle}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* Desktop Grid */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleCategories.map((cat, idx) => (
                <Link
                  href={`/${locale}/products?categoryId=${cat.id}`}
                  key={cat.id || idx}
                  className="bg-white border hover:shadow-lg border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center min-h-[320px] shadow-sm transition-shadow"
                >
                  <SafeImage
                    src={cat.image}
                    alt={cat.name}
                    width={160}
                    height={160}
                    className="h-40 object-contain mb-6 mt-2"
                    fallbackClassName="h-40 w-full bg-gray-200 rounded-lg flex items-center justify-center mb-6 mt-2"
                  />
                  <div className="font-bold text-2xl text-[#1A3447] mb-2">
                    {cat.name}
                  </div>
                  <div className="text-gray-400 text-base">{cat.subtitle}</div>
                </Link>
              ))}
            </div>
          )}

          {/* Button and Arrows Row - Only show on desktop */}
          {!isMobile && (
            <div className="flex items-center justify-between mt-10">
              {/* Right: Arrows */}
              <div className="flex gap-4">
                {categories.length > 3 && (
                  <>
                    <button
                      onClick={prevSlide}
                      disabled={isPrevDisabled}
                      className="ltr:rotate-180 w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white hover:bg-gray-50 transition-colors disabled:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5  text-gray-600" />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={isNextDisabled}
                      className="ltr:rotate-180 w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white hover:bg-gray-50 transition-colors disabled:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5  text-gray-600" />
                    </button>
                  </>
                )}
              </div>
              <div>
                <Link
                  href={`/${locale}/categories`}
                  className="bg-[#5F361F] hover:bg-amber-900 text-white px-8 py-2 rounded-xl  font-medium transition-colors"
                >
                  {t.viewAllCategories}
                </Link>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default OtherCategory;
