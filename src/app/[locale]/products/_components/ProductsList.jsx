"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Link from "next/link";
import { getAllproducts } from "@/lib/api/products";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import ProductSkeleton from "@/components/ProductSkeleton";
import SafeImage from "@/components/SafeImage";
import { trackSearch } from "@/lib/analytics";

const PAGE_SIZE = 12;

const ProductsList = ({ locale }) => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const t = locale === "ar" ? ar : en;

  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  const fetchProducts = async (page = 1, searchValue = "") => {
    setIsLoading(true);
    try {
      const filters = searchValue ? { name: { $containsi: searchValue } } : {};
      const res = await getAllproducts({
        categoryId,
        filters,
        page,
        pageSize: PAGE_SIZE,
      });
      setProducts(res.items || []);
      setTotalCount(res.totalCount || 0);

      // Track search results if there's a search term
      if (searchValue.trim()) {
        trackSearch(searchValue.trim(), res.totalCount || 0);
      }
    } catch (e) {
      setProducts([]);
      setTotalCount(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search, categoryId]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (searchValue) => {
    setSearch(searchValue);
    setCurrentPage(1);
  };

  const shouldShowLoading = isLoading;
  const shouldShowNoProducts = !isLoading && products.length === 0;

  return (
    <>
      <div>
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
            {t.allProducts} ({totalCount})
          </div>

          {shouldShowLoading ? (
            <div className="items py-8 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : shouldShowNoProducts ? (
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
                <p className="text-gray-500 text-sm">
                  {categoryId ? t.noProductsInCategory : ""}
                </p>
              </div>
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="items py-2 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
                {products.map((product, index) => (
                  <Link
                    href={`/${locale}/products/${product.documentId}`}
                    key={product.id}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                    className="item bg-white border border-[#DEDAD4] rounded-lg w-full flex flex-col items-center gap-3 p-4 md:p-8 transition-transform hover:shadow-md min-h-fit "
                  >
                    <div className="flex justify-center h-[150px] md:h-[250px]  w-full flex-grow">
                      <SafeImage
                        src={product.mainImageUrl || product.image}
                        alt={product.name}
                        width={220}
                        height={140}
                        className="object-contain mb-2 md:mb-6 h-auto w-auto"
                        fallbackClassName="w-[220px] h-[140px] bg-gray-200 rounded-lg flex items-center justify-center mb-6"
                      />
                    </div>
                    <h2 className="text-lg md:text-2xl font-semibold text-[#223132] text-center">
                      {product.name}
                    </h2>
                    <span className="text-base text-[#7B8B8E] text-center">
                      {product?.availableQuantities}
                    </span>
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

export default ProductsList;
