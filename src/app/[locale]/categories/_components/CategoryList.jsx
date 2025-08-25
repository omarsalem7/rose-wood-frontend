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
  const t = locale === "ar" ? ar : en;

  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  const fetchProducts = async (page = 1, searchValue = "") => {
    try {
      const filters = searchValue ? { name: { $containsi: searchValue } } : {};
      const res = await fetchCategories({
        filters,
        page,
        pageSize: PAGE_SIZE,
      });
      setCategories(res.items || []);
      setTotalCount(res.totalCount || 0);
    } catch (e) {
      setCategories([]);
      setTotalCount(0);
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

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="800">
        <Filter onFilter={handleFilter} />
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
          {categories.length === 0 ? (
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
          ) : (
            <>
              <div className="items py-2 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
                {categories.map((category, index) => (
                  <Link
                    href={`/${locale}/products?categoryId=${category.id}`}
                    key={category.id}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                    className="item bg-white border border-[#DEDAD4] rounded-lg w-full flex flex-col items-center gap-4 p-4 md:p-8 transition-transform hover:shadow-md min-h-fit md:min-h-[350px]"
                  >
                    <div className="flex justify-center w-full">
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
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryList;
