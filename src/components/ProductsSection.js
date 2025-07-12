"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ProductsSection = ({ myCategories, products }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    if (myCategories && myCategories.length > 0) {
      setActiveCategory(myCategories[0].name);
    }
  }, [myCategories]);

  const categories = myCategories.map((cat) => cat.name);

  const [selectedColors, setSelectedColors] = useState({});

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );
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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
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
    <section className="py-16 px-6 font-alexandria">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl md:font-bold text-gray-800 mb-8">
            منتجات روز وود
          </h2>

          {/* Pagination and Category Navigation */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            {/* Category Navigation */}
            <div className="flex gap-4 md:gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-sm md:text-lg font-medium transition-colors ${
                    activeCategory === category
                      ? "text-amber-600 border-b-2 border-amber-600"
                      : "text-gray-600 hover:text-amber-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/*  Pagination Controls */}
            <div className="hidden md:flex gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
          {currentProducts.map((product) => {
            const selectedColor = selectedColors[product.id] || "medium";
            const currentImage = product.images[selectedColor];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-3 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Product Image */}
                <div className="w-full h-24 md:h-64 mb-6  rounded-xl overflow-hidden">
                  {currentImage ? (
                    typeof currentImage === "string" &&
                    currentImage.trim() !== "" ? (
                      <Image
                        width={200}
                        height={200}
                        src={currentImage}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        لا توجد صورة
                      </div>
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      لا توجد صورة
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                  <h3 className="font-semibold md:text-xl md:font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {product.description}
                  </p>
                  <p className="text-gray-500 text-xs">{product.features}</p>
                </div>

                {/* Color Selection */}
                <div className="flex justify-center gap-3 mb-6">
                  {Object.keys(product.images).map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(product.id, color)}
                      className={`w-7 h-7 rounded-full border-3 transition-all ${
                        selectedColor === color
                          ? "border-white ring-[1.5px] ring-black"
                          : "border-white hover:border-gray-400"
                      } ${
                        color === "dark"
                          ? "bg-[#4D2E26]"
                          : color === "medium"
                          ? "bg-[#BA806D]"
                          : "bg-[#DB9D5F]"
                      }`}
                    />
                  ))}
                </div>

                {/* Add to Cart Button */}
                <div className="flex items-center justify-center gap-2 font-medium text-center hover:text-[#5F361F] text-[#804524] ">
                  أضف إلى طلب الجملة
                  <ChevronLeft size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="bg-[#5F361F] hover:bg-amber-900 text-white px-12 py-3 rounded-lg text-lg"
          >
            عرض كل المنتجات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
