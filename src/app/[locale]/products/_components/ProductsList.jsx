"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Link from "next/link";
import { getAllproducts } from "@/lib/api/products";

const PAGE_SIZE = 12;

// Skeleton component for loading state
const ProductSkeleton = () => (
  <div className="item bg-white shadow-lg rounded-2xl w-full md:w-[30%] flex flex-col items-center gap-4 p-8 animate-pulse min-h-[350px]">
    <div className="bg-gray-200 rounded-full w-[160px] h-[100px] mt-4 mb-6" />
    <div className="bg-gray-200 rounded h-7 w-2/3 mb-2" />
    <div className="bg-gray-100 rounded h-4 w-1/2" />
  </div>
);

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  const fetchProducts = async (page = 1, searchValue = "") => {
    setLoading(true);
    try {
      const filters = searchValue
        ? { name: { $contains: searchValue } }
        : {};
      const res = await getAllproducts({
        filters,
        page,
        pageSize: PAGE_SIZE,
      });
      setProducts(res.items || []);
      setTotalCount(res.totalCount || 0);
    } catch (e) {
      setProducts([]);
      setTotalCount(0);
    }
    setLoading(false);
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
      <Filter onFilter={handleFilter} />
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="py-4">كل المنتجات ({totalCount})</div>
          {loading ? (
            <div className="items py-2 flex flex-col justify-between md:flex-row flex-wrap gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-8 text-center">لا توجد منتجات</div>
          ) : (
            <>
              <div className="items py-2 flex flex-col justify-between md:flex-row flex-wrap gap-4">
                {products.map((product) => (
                  <Link
                    href={`products/${product.id}`}
                    key={product.id}
                    className="item bg-white shadow-lg rounded-2xl w-full md:w-[30%] flex flex-col items-center gap-4 p-8 transition-transform hover:scale-105 min-h-[350px]"
                  >
                    <div className="flex justify-center w-full">
                      <Image
                        src={product.mainImageUrl || product.image}
                        alt=""
                        width={220}
                        height={140}
                        className="object-contain mb-6 drop-shadow-md"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#223132] text-center mb-2">
                      {product.name}
                    </h2>
                    <span className="text-base text-[#7B8B8E] text-center">
                      {product.availableQuantities}
                    </span>
                  </Link>
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsList;
