"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import { getTags, getProductsByTag } from "@/lib/api/collections";

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

// Custom hook for managing products state
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (tagId = null) => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedProducts = await getProductsByTag(tagId);
      if (tagId) {
        setFilteredProducts(fetchedProducts || []);
      } else {
        setProducts(fetchedProducts || []);
        setFilteredProducts([]);
      }
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch products:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearFilter = useCallback(() => {
    setFilteredProducts([]);
  }, []);

  return {
    products,
    filteredProducts,
    isLoading,
    error,
    fetchProducts,
    clearFilter,
  };
};

// Custom hook for managing tags state
const useTags = () => {
  const [tags, setTags] = useState([]);
  const [isLoadingTags, setIsLoadingTags] = useState(true);
  const [tagsError, setTagsError] = useState(null);

  const fetchTags = useCallback(async () => {
    try {
      setIsLoadingTags(true);
      setTagsError(null);
      const tagsData = await getTags();
      setTags(tagsData || []);
    } catch (err) {
      setTagsError(err.message);
      console.error("Failed to fetch tags:", err);
    } finally {
      setIsLoadingTags(false);
    }
  }, []);

  return {
    tags,
    isLoadingTags,
    tagsError,
    fetchTags,
  };
};

// Custom hook for pagination
const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = useCallback(
    (page) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    },
    [totalPages]
  );

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const goToPrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    goToNextPage,
    goToPrevPage,
    resetToFirstPage,
  };
};

// Custom hook for responsive behavior
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

// Custom hook for color selection
const useColorSelection = () => {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorChange = useCallback((productId, colorIndex) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }));
  }, []);

  const getCurrentImage = useCallback((product, selectedColorIndex) => {
    if (
      selectedColorIndex !== undefined &&
      product.colors &&
      product.colors[selectedColorIndex] &&
      product.colors[selectedColorIndex].imgUrl
    ) {
      return product.colors[selectedColorIndex].imgUrl;
    }
    return product.image || product.mainImageUrl;
  }, []);

  return {
    selectedColors,
    handleColorChange,
    getCurrentImage,
  };
};

const ProductsSection = ({ locale }) => {
  const t = locale === "ar" ? ar : en;
  const itemsPerPage = 3;

  // Custom hooks
  const { isMobile } = useResponsive();
  const { tags, isLoadingTags, tagsError, fetchTags } = useTags();
  const {
    products,
    filteredProducts,
    isLoading,
    error,
    fetchProducts,
    clearFilter,
  } = useProducts();
  const { selectedColors, handleColorChange, getCurrentImage } =
    useColorSelection();

  // Local state
  const [selectedTag, setSelectedTag] = useState(null);

  // Computed values
  const productsToShow = selectedTag ? filteredProducts : products;

  const {
    currentPage,
    totalPages,
    currentItems,
    goToNextPage,
    goToPrevPage,
    resetToFirstPage,
  } = usePagination(productsToShow, itemsPerPage);

  // Effects
  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (selectedTag) {
      fetchProducts(selectedTag);
    } else {
      clearFilter();
    }
    resetToFirstPage();
  }, [selectedTag, fetchProducts, clearFilter, resetToFirstPage]);

  // Event handlers
  const handleTagClick = useCallback(
    (tagId) => {
      if (selectedTag === tagId) {
        setSelectedTag(null);
      } else {
        setSelectedTag(tagId);
      }
    },
    [selectedTag]
  );

  const handleClearFilters = useCallback(() => {
    setSelectedTag(null);
    resetToFirstPage();
  }, [resetToFirstPage]);

  // Render helpers
  const renderLoadingState = () => (
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
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-white border border-[#E5E5E5] rounded-lg h-full flex flex-col w-full min-w-0 p-4">
                {/* Skeleton Image */}
                <div className="w-full h-36 rounded-xl bg-gray-200 animate-pulse mb-4"></div>

                {/* Skeleton Title */}
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>

                {/* Skeleton Description */}
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-3/4"></div>

                {/* Skeleton Features */}
                <div className="h-3 bg-gray-200 rounded animate-pulse mb-4 w-1/2"></div>

                {/* Skeleton Color Dots */}
                <div className="flex justify-center gap-3 mb-6">
                  <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                </div>

                {/* Skeleton Button */}
                <div className="h-8 bg-gray-200 rounded animate-pulse mt-auto"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-fr">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-lg p-3 md:p-8 h-full flex flex-col"
            >
              {/* Skeleton Image */}
              <div className="w-full h-24 md:h-48 rounded-xl bg-gray-200 animate-pulse mb-4"></div>

              {/* Skeleton Title */}
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>

              {/* Skeleton Description */}
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-3/4"></div>

              {/* Skeleton Features */}
              <div className="h-3 bg-gray-200 rounded animate-pulse mb-4 w-1/2"></div>

              {/* Skeleton Color Dots */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
              </div>

              {/* Skeleton Button */}
              <div className="h-8 bg-gray-200 rounded animate-pulse mt-auto"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderErrorState = () => (
    <div className="text-center py-12">
      <div className="text-red-500 text-lg mb-4">
        {t.errorLoadingProducts || "حدث خطأ في تحميل المنتجات"}
      </div>
      <button
        onClick={() => fetchProducts()}
        className="text-[#804524] hover:text-[#5F361F] underline"
      >
        {t.retry || "إعادة المحاولة"}
      </button>
    </div>
  );

  const renderNoProductsMessage = () => (
    <div className="text-center py-12 min-h-[300px] md:min-h-[440px] flex items-center justify-center">
      <div className="max-w-md mx-auto">
        {/* Illustration Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
          {t.noProductsFound || "لا توجد منتجات لهذا التصنيف"}
        </h3>

        <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
          {t.noProductsDescription ||
            "عذراً، لا توجد منتجات متاحة في هذا التصنيف حالياً. جرب تصنيف آخر أو عد لاحقاً."}
        </p>
      </div>
    </div>
  );

  const renderProductCard = useCallback(
    (product, index, isMobileView = false) => {
      const selectedColor = selectedColors[product.id];
      const currentImage = getCurrentImage(product, selectedColor);

      const cardContent = (
        <>
          {/* Product Image */}
          <div
            className={`w-full ${
              isMobileView ? "h-36" : "h-24 md:h-48"
            } rounded-xl overflow-hidden flex-shrink-0`}
          >
            {currentImage &&
            typeof currentImage === "string" &&
            currentImage.trim() !== "" ? (
              <Image
                width={isMobileView ? 200 : 150}
                height={isMobileView ? 200 : 150}
                src={currentImage}
                alt={product.name}
                loading="lazy"
                quality={75}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                {t.noImage || "لا توجد صورة"}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="text-center my-4 flex-grow flex flex-col gap-2">
            <h3
              className={`${
                isMobileView ? "text-xl" : "md:text-xl md:font-bold"
              } font-bold text-gray-800 flex-shrink-0`}
            >
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
              {product.colors.map((colorData, colorIndex) => (
                <button
                  key={colorData.id}
                  onClick={() => handleColorChange(product.id, colorIndex)}
                  className={`w-6 h-6 rounded-full border-3 transition-all ${
                    selectedColor === colorIndex
                      ? "border-white ring-[1.5px] ring-black"
                      : "border-white hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: colorData.color }}
                />
              ))}
            </div>
          )}

          {/* Product Details Link */}
          <Link
            href={`/${locale}/products/${product.id}`}
            className="flex items-center justify-center gap-2 font-medium text-center hover:text-[#5F361F] text-[#804524] flex-shrink-0 mt-auto"
          >
            {t.productDetails || "تفاصيل المنتج"}
            <ChevronLeft size={16} className="ltr:rotate-180" />
          </Link>
        </>
      );

      if (isMobileView) {
        return (
          <SwiperSlide key={product.id} className="h-auto">
            <div
              className="bg-white border border-[#E5E5E5] rounded-lg hover:shadow-lg transition-shadow h-full flex flex-col w-full min-w-0 p-4"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={200 + index * 100}
            >
              {cardContent}
            </div>
          </SwiperSlide>
        );
      }

      return (
        <div
          key={product.id}
          className="bg-white border border-[#E5E5E5] rounded-lg p-3 md:p-8 hover:shadow-lg transition-shadow h-full flex flex-col"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={200 + index * 100}
        >
          {cardContent}
        </div>
      );
    },
    [selectedColors, getCurrentImage, handleColorChange, locale, t]
  );

  const renderPaginationControls = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="hidden md:flex gap-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="rounded-full p-3 bg-white hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6 ltr:rotate-180 text-primary-900" />
        </button>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="rounded-full p-3 bg-white hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6 ltr:rotate-180 text-primary-900" />
        </button>
      </div>
    );
  };

  const renderTagButtons = () => (
    <div className="flex gap-0 md:gap-4 items-center max-md:flex-wrap max-md:justify-center">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => handleTagClick(tag.id)}
          className={`p-3 transition-all ${
            selectedTag === tag.id
              ? "text-[#5F361F] font-medium"
              : "text-[#7B8B8E] hover:text-primary-900 hover:bg-[#F2ECE9] rounded-lg"
          }`}
        >
          {tag.name}
        </button>
      ))}

      {selectedTag && (
        <button
          onClick={handleClearFilters}
          className="p-2 text-[#804524] hover:text-[#5F361F] text-sm underline"
        >
          {t.clearFilters || "مسح الفلاتر"}
        </button>
      )}
    </div>
  );

  const renderProductsGrid = () => {
    if (isMobile) {
      return (
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
          {currentItems.map((product, index) =>
            renderProductCard(product, index, true)
          )}
        </Swiper>
      );
    }

    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-fr">
        {currentItems.map((product, index) =>
          renderProductCard(product, index, false)
        )}
      </div>
    );
  };

  // Main render
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
              {t.roseWoodProducts || "منتجات روزوود"}
            </h2>

            {/* Pagination Controls */}

            <div
              className="flex flex-wrap justify-between items-center"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              {renderTagButtons()}
              {totalPages > 1 && renderPaginationControls()}
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-12">
            {/* Loading State */}
            {isLoading && renderLoadingState()}

            {/* Error State */}
            {error && !isLoading && renderErrorState()}

            {/* No Products Message */}
            {!isLoading &&
              !error &&
              selectedTag &&
              filteredProducts.length === 0 &&
              renderNoProductsMessage()}

            {/* Products Grid/Swiper - Only show when there are products to display */}
            {!isLoading &&
              !error &&
              currentItems.length > 0 &&
              !(selectedTag && filteredProducts.length === 0) &&
              renderProductsGrid()}
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <Link
              href={`/${locale}/categories`}
              className="bg-[#5F361F] hover:bg-amber-900 text-white px-12 py-3 rounded-lg text-sm"
            >
              {t.viewAllProducts || "عرض جميع المنتجات"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
