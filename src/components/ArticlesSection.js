"use client";
import React, { useState, useEffect } from "react";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

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
  return new Date(dateString).toLocaleDateString("ar-EG", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const ArticlesSection = ({ blogs = [], title, locale }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const articlesPerPage = 3;

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
        className="py-16 px-0 md:px-8"
        style={{ backgroundColor: "#8B5A3C" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div
            className="text-center mb-12"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <h2 className="text-2xl md:text-3xl md:font-semibold text-white mb-4 font-alexandria">
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
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={300 + index * 100}
                  >
                    <Link href={`/${locale}/blog/${article.id}`}>
                      <Card className="bg-white max-sm:w-[70vw] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        {/* Article Image */}
                        <div className="aspect-video  overflow-hidden flex-shrink-0">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6 flex flex-col flex-grow">
                          {/* Article Title */}
                          <h3 className="text-xl font-medium text-gray-600 mb-4 font-alexandria leading-relaxed flex-shrink-0">
                            {article.title}
                          </h3>
                          {/* Article Excerpt */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-alexandria line-clamp-4 flex-grow">
                            {article.description}
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
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {currentArticles.map((article, index) => (
                  <Link key={article.id} href={`/${locale}/blog/${article.id}`}>
                    <Card
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={300 + index * 100}
                    >
                      {/* Article Image */}
                      <div className="aspect-video overflow-hidden flex-shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        {/* Article Title */}
                        <h3 className="text-xl font-medium text-gray-600 mb-4 font-alexandria leading-relaxed flex-shrink-0">
                          {article.title}
                        </h3>
                        {/* Article Excerpt */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-alexandria line-clamp-4 flex-grow">
                          {article.description}
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
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Section with Button and Navigation */}
          <div
            className="flex items-center justify-between px-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {/* View All Button */}
            {/* <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#8B5A3C] transition-all duration-300 font-alexandria">
            عرض كل الأخبار
          </button> */}

            {/* Navigation Arrows */}
            {blogs.length > 3 && (
              <div className="hidden md:flex items-center space-x-4">
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
                  <ArrowRight size={20} className="text-white ltr:rotate-180" />
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
                  <ArrowLeft size={20} className="text-white ltr:rotate-180" />
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
