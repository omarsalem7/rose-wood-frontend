"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button.js";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("الأكثر مبيعا");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const categories = [
    "الأكثر مبيعا",
    "التصميمات الحديثة",
    "العروض الحالية",
    "من اختيارنا لك",
  ];

  const products = [
    {
      id: 1,
      name: "حامل خشبي",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "الأكثر مبيعا",
      images: {
        dark: "/lovable-uploads/0614bf8a-ec39-4aa0-b5aa-f9a5e619060e.png",
        medium: "/assets/product1.png",
        light: "/lovable-uploads/4714f7de-a63b-4eaf-a171-bd3524269b0f.png",
      },
    },
    {
      id: 2,
      name: "طبق خشبي",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "الأكثر مبيعا",
      images: {
        dark: "/lovable-uploads/5845fca4-7450-42e0-8e75-7c1105255af6.png",
        medium: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        light: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      },
    },
    {
      id: 3,
      name: "ملعقة خشبية",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "الأكثر مبيعا",
      images: {
        dark: "/lovable-uploads/91cdd0f1-bb5d-4353-bb11-ec58a2aa1433.png",
        medium: "/lovable-uploads/9d836571-687a-4ae1-8ef1-7473e1c9ccae.png",
        light: "/lovable-uploads/abee8294-cd6c-4158-b482-cd7d3200155b.png",
      },
    },
    {
      id: 4,
      name: "وعاء خشبي كبير",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "الأكثر مبيعا",
      images: {
        dark: "/lovable-uploads/c5ec857a-c38c-4b6e-9a3a-2a3b76e6f6dc.png",
        medium: "/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png",
        light: "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      },
    },
    {
      id: 5,
      name: "شوكة خشبية",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "الأكثر مبيعا",
      images: {
        dark: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
        medium: "/lovable-uploads/0614bf8a-ec39-4aa0-b5aa-f9a5e619060e.png",
        light: "/lovable-uploads/2c379c90-3310-45a8-966a-20888683a80a.png",
      },
    },
    {
      id: 6,
      name: "مجموعة سكاكين خشبية",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "الأكثر مبيعا",
      images: {
        dark: "/lovable-uploads/4714f7de-a63b-4eaf-a171-bd3524269b0f.png",
        medium: "/lovable-uploads/5845fca4-7450-42e0-8e75-7c1105255af6.png",
        light: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      },
    },
    {
      id: 7,
      name: "أدوات مطبخ خشبية",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "التصميمات الحديثة",
      images: {
        dark: "/lovable-uploads/c5ec857a-c38c-4b6e-9a3a-2a3b76e6f6dc.png",
        medium: "/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png",
        light: "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      },
    },
    {
      id: 8,
      name: "مقشة خشبية حديثة",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "التصميمات الحديثة",
      images: {
        dark: "/lovable-uploads/91cdd0f1-bb5d-4353-bb11-ec58a2aa1433.png",
        medium: "/lovable-uploads/9d836571-687a-4ae1-8ef1-7473e1c9ccae.png",
        light: "/lovable-uploads/abee8294-cd6c-4158-b482-cd7d3200155b.png",
      },
    },
    {
      id: 9,
      name: "طبق تقديم عصري",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "التصميمات الحديثة",
      images: {
        dark: "/lovable-uploads/5845fca4-7450-42e0-8e75-7c1105255af6.png",
        medium: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        light: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      },
    },
    {
      id: 10,
      name: "لوح تقطيع خشبي",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "العروض الحالية",
      images: {
        dark: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
        medium: "/lovable-uploads/0614bf8a-ec39-4aa0-b5aa-f9a5e619060e.png",
        light: "/lovable-uploads/2c379c90-3310-45a8-966a-20888683a80a.png",
      },
    },
    {
      id: 11,
      name: "مجموعة أطباق خشبية",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "العروض الحالية",
      images: {
        dark: "/lovable-uploads/c5ec857a-c38c-4b6e-9a3a-2a3b76e6f6dc.png",
        medium: "/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png",
        light: "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      },
    },
    {
      id: 12,
      name: "ملاعق صغيرة للتوابل",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "العروض الحالية",
      images: {
        dark: "/lovable-uploads/91cdd0f1-bb5d-4353-bb11-ec58a2aa1433.png",
        medium: "/lovable-uploads/9d836571-687a-4ae1-8ef1-7473e1c9ccae.png",
        light: "/lovable-uploads/abee8294-cd6c-4158-b482-cd7d3200155b.png",
      },
    },
    {
      id: 13,
      name: "مجموعة أدوات خشبية",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "من اختيارنا لك",
      images: {
        dark: "/lovable-uploads/4714f7de-a63b-4eaf-a171-bd3524269b0f.png",
        medium: "/lovable-uploads/5845fca4-7450-42e0-8e75-7c1105255af6.png",
        light: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      },
    },
    {
      id: 14,
      name: "وعاء تقديم فاخر",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "من اختيارنا لك",
      images: {
        dark: "/lovable-uploads/0614bf8a-ec39-4aa0-b5aa-f9a5e619060e.png",
        medium: "/lovable-uploads/2c379c90-3310-45a8-966a-20888683a80a.png",
        light: "/lovable-uploads/4714f7de-a63b-4eaf-a171-bd3524269b0f.png",
      },
    },
    {
      id: 15,
      name: "طقم ملاعق متنوعة",
      description: "متوفر بكميات تبدأ من 100 قطعة",
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      category: "من اختيارنا لك",
      images: {
        dark: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
        medium: "/lovable-uploads/c5ec857a-c38c-4b6e-9a3a-2a3b76e6f6dc.png",
        light: "/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png",
      },
    },
  ];

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
                  <Image
                    width={200}
                    height={200}
                    src={currentImage}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                  <h3 className="font-semibold md:text-xl md:font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {product.description}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {product.subDescription}
                  </p>
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
          <Button className="bg-[#5F361F] hover:bg-amber-900 text-white px-12 py-3 rounded-lg text-lg">
            عرض كل المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
