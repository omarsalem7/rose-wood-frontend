"use client";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "@/lib/api/categories";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductSkeleton from "@/components/ProductSkeleton";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

const PAGE_SIZE = 12;

const CategoryList = ({ locale }) => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Start with false to avoid hydration mismatch
  const [hasInitialized, setHasInitialized] = useState(false); // Track if we've made first API call
  const t = locale === "ar" ? ar : en;

  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  const fetchProducts = async (page = 1, searchValue = "") => {
    setIsLoading(true);
    try {
      const filters = searchValue ? { name: { $containsi: searchValue } } : {};
      const res = await fetchCategories({
        filters,
        page,
        pageSize: PAGE_SIZE,
      });
      setCategories(res.items || []);
      console.log('cat: ', res.items );
      setTotalCount(res.totalCount || 0);
    } catch (e) {
      setCategories([]);
      setTotalCount(0);
    } finally {
      setIsLoading(false);
      setHasInitialized(true);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (searchValue) => {
    setSearch(searchValue);
    setCurrentPage(1);
  };

  // Show loading only after we've initialized and are actually loading
  const shouldShowLoading = isLoading && hasInitialized;
  // Show no categories only after we've initialized and have no results
  const shouldShowNoCategories =
    hasInitialized && !isLoading && categories.length === 0;

  return (
    <>
      <div className="flex gap-4 items-center">
        <Filter onFilter={handleFilter} isCategoryDownload={true} />
      </div>
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="py-4"
          >
            {t.otherCategories} ({totalCount})
          </div>

          {/* Only render content after client-side initialization to prevent hydration mismatch */}
          {!hasInitialized ? (
            // Initial state - render nothing to ensure server/client match
            <div className="py-8">
              {/* Empty div to maintain layout but prevent hydration issues */}
            </div>
          ) : shouldShowLoading ? (
            <div className="items py-8 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : shouldShowNoCategories ? (
            <div className="py-16 pb-24 text-center">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <img
                    src="/assets/noProducts.png"
                    alt="No products found"
                    className="w-32 h-32 mx-auto opacity-60"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {t.noProductsFound}
                </h3>
              </div>
            </div>
          ) : categories.length > 0 ? (
            <>
              <div className="items py-2 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
                {categories.map((category, index) => (
                  <Link
                    href={`/${locale}/products?categoryId=${category.id}`}
                    key={category.id}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                    className="item bg-white border border-[#DEDAD4] rounded-lg w-full flex flex-col items-center gap-4 p-4 md:p-8 transition-transform hover:shadow-md min-h-fit"
                  >
                    <div className="flex justify-center w-full flex-grow">
                      <SafeImage
                        src={category.mainImageUrl || category.image}
                        alt={category.name || "Category image"}
                        width={220}
                        height={140}
                        className="object-contain mb-6 drop-shadow-md"
                        style={{ width: "auto", height: "auto" }}
                        fallbackClassName="w-[220px] h-[220px] bg-gray-200 rounded-lg flex items-center justify-center mb-6"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#223132] text-center mb-2">
                      {category.name}
                    </h2>
                  </Link>
                ))}
              </div>
              <div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default CategoryList;
