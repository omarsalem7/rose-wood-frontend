"use client";
import React, { useState, useEffect } from "react";
import { fetchRelatedCategories } from "@/lib/api/categories";

const OtherCategory = ({ currentCategoryId }) => {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

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
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-2xl font-medium mb-8 text-right pr-2">اقسام اخرى</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCategories.map((cat, idx) => (
          <div
            key={cat.id || idx}
            className="bg-white border hover:shadow-lg border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center min-h-[320px] shadow-sm transition-shadow"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-40 object-contain mb-6 mt-2"
            />
            <div className="font-bold text-2xl text-[#1A3447] mb-2">
              {cat.name}
            </div>
            <div className="text-gray-400 text-base">{cat.subtitle}</div>
          </div>
        ))}
      </div>
      {/* Button and Arrows Row */}
      <div className="flex items-center justify-between mt-10">
        <div></div>
        {/* Right: Arrows */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`rtl:rotate-180 w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
              isPrevDisabled
                ? "border-gray-200 border-2 text-gray-300 cursor-not-allowed"
                : "border-gray-800 border-2 cursor-pointer text-gray-600 hover:bg-gray-100 hover:border-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`rtl:rotate-180 w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
              isNextDisabled
                ? "border-gray-200 border-2 text-gray-300 cursor-not-allowed"
                : "border-gray-800 border-2 cursor-pointer text-gray-600 hover:bg-gray-100 hover:border-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherCategory;
