"use client";
import React, { useState, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import SafeImage from "./SafeImage";

// Custom styles for equal height Swiper slides
const swiperStyles = `
  .equal-height-swiper .swiper-slide {
    height: auto;
    display: flex;
  }
  .equal-height-swiper .swiper-wrapper {
    align-items: stretch;
  }
`;

function formatArabicDate(dateString) {
  const date = new Date(dateString);
  return ` ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()} `;
}

const ArticlesSection = ({ blogs = [], title, locale }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const articlesPerPage = 3;
  const t = locale === "ar" ? ar : en;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(blogs.length / articlesPerPage);
  const startIndex = currentPage * articlesPerPage;
  const currentArticles = blogs.slice(startIndex, startIndex + articlesPerPage);

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const canGoLeft = currentPage > 0;
  const canGoRight = currentPage < totalPages - 1;

  return (
    <>
      <style>{swiperStyles}</style>
      <section
        id="blogs"
        className="max-sm:my-12 py-8 px-0 md:px-8"
        style={{
          backgroundColor: "#804524",
          boxShadow: "0px 4px 4px 0px #8173640D",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div
            className="text-center mb-12"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <h2 className="text-[18px] md:text-[32px] font-medium text-white mb-4 font-alexandria">
              {title}
            </h2>
          </div>

          {/* Articles Grid or Swiper */}
          <div
            className="mb-12"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {isMobile ? (
              <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                centeredSlides={false}
                style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
                className="equal-height-swiper"
              >
                {blogs.map((article, index) => (
                  <SwiperSlide
                    key={article.id}
                    style={{ width: "84vw", maxWidth: 400, height: "auto" }}
                    className="h-auto"
                  >
                    <div>
                      <Card className="bg-[#F2ECE9] max-sm:w-[70vw] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        {/* Article Image */}
                        <div className="aspect-video  overflow-hidden flex-shrink-0 p-3">
                          <SafeImage
                            src={article.image}
                            alt={article.title}
                            width={200}
                            height={200}
                            className="w-full rounded-xl h-full object-cover"
                            fallbackClassName="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center"
                          />
                        </div>
                        <CardContent className="px-3 flex flex-col flex-grow gap-2">
                          {/* Article Title */}
                          <h3 className="text-sm font-medium text-[#4D4E5F]  font-alexandria leading-relaxed flex-shrink-0">
                            {article.title}
                          </h3>
                          {/* Article Excerpt */}
                          <p className="text-[#727580] text-xs leading-relaxed  font-alexandria flex-grow">
                            {article.description}{" "}
                            <Link
                              className="font-medium underline"
                              href={`/${locale}/blog/${article.id}`}
                            >
                              ... {t.readMore}
                            </Link>
                          </p>

                          {/* Article Meta */}
                          <div className="flex items-center justify-between text-gray-500 text-sm flex-shrink-0 mt-auto">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span className="font-alexandria">
                                  {formatArabicDate(article.date)}
                                </span>
                              </div>
                              {/* <div className="flex items-center space-x-1">
                            <MessageCircle size={16} />
                            <span>{article.comments}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye size={16} />
                            <span>{article.views}</span>
                          </div> */}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {currentArticles.map((article, index) => (
                  <Link key={article.id} href={`/${locale}/blog/${article.id}`}>
                    <Card
                      className="bg-[#F2ECE9] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={300 + index * 100}
                    >
                      {/* Article Image */}
                      <div className="aspect-video p-3  overflow-hidden flex-shrink-0">
                        <SafeImage
                          src={article.image}
                          alt={article.title}
                          width={200}
                          height={200}
                          className="w-full rounded-xl h-full object-cover"
                          fallbackClassName="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center"
                        />
                      </div>
                      <CardContent className="px-3 flex flex-col flex-grow gap-2">
                        {/* Article Title */}
                        <h3 className="text-xl font-medium text-gray-600 font-alexandria leading-relaxed flex-shrink-0">
                          {article.title}
                        </h3>
                        {/* Article Excerpt */}
                        <p className="text-gray-600 text-sm leading-relaxed font-alexandria line-clamp-4 flex-grow">
                          {article.description}{" "}
                          <span className="font-medium underline">
                            ... {t.readMore}
                          </span>
                        </p>
                        {/* Article Meta */}
                        <hr className="p-[1px] bg-[#96979e24] mt-2" />
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar size={16} />
                          <span className="font-alexandria">
                            {formatArabicDate(article.date)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Section with Button and Navigation */}

          <div
            className="flex items-center md:justify-between justify-center px-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {/* Show All Blogs Button */}
            <Link
              href={`/${locale}/blog`}
              className="rounded-xl text-white hover:bg-white hover:text-primary-900  px-12 py-3 text-base font-medium border border-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {t.viewAllBlogs}
            </Link>
            {/* Navigation Arrows */}
            {blogs.length > 3 && (
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={goToPrevious}
                  disabled={!canGoLeft}
                  className={`w-12 h-12 bg-[#ffffff6b] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    canGoLeft
                      ? "hover:bg-opacity-30 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-delay="500"
                >
                  <ChevronRight
                    size={20}
                    className="text-white ltr:rotate-180"
                  />
                </button>
                <button
                  onClick={goToNext}
                  disabled={!canGoRight}
                  className={`w-12 h-12 bg-[#ffffff6b] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    canGoRight
                      ? "hover:bg-opacity-30 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-delay="600"
                >
                  <ChevronLeft
                    size={20}
                    className="text-white ltr:rotate-180"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesSection;
