"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel.js";

const ProductCarouselSection = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getCardScale = (index) => {
    if (index === activeIndex) {
      return "scale-75"; // Center card is smaller
    }
    return "scale-110"; // Side cards are larger
  };

  const getCardOpacity = (index) => {
    if (index === activeIndex) {
      return "opacity-100";
    }
    return "opacity-70";
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !api) return;

    const deltaX = e.clientX - dragStartX;
    const threshold = 50; // Minimum distance to trigger navigation

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        api.scrollPrev();
      } else {
        api.scrollNext();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      style={{ direction: "ltr" }}
      className="py-16 px-0 bg-gray-50 font-alexandria"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl md:font-semibold text-gray-800 mb-4">
            {title}
          </h2>
        </div>

        {/* Product Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{ align: "center", loop: true }}
          >
            <CarouselContent className="flex">
              {products.map((product, index) => (
                <CarouselItem
                  key={product?.id}
                  className="basis-[80%] md:basis-2/3 lg:basis-3/5 flex-shrink-0"
                >
                  <div
                    className={`relative group cursor-pointer transition-all duration-700 ease-in-out transform ${getCardScale(
                      index
                    )} ${getCardOpacity(index)} mx-2`}
                    onClick={() => openModal(product)}
                  >
                    <div className="aspect-[7/5] overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                      <Image
                        src={product.image}
                        alt={product.name ?? `productImage ${index}`}
                        width={500}
                        height={250}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Plus icon overlay */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-80 group-hover:opacity-100 transition-opacity">
                        <Plus size={16} className="text-gray-600" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <div className="h-1 bg-gray-300 rounded-full w-32">
                <div
                  className="h-1 bg-[#5A6E51] rounded-full transition-all duration-300"
                  style={{ width: `${(current / count) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {String(current).padStart(2, "0")}/
                {String(count).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md md:w-full p-6 pt-16 text-center flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="إغلاق"
              className="absolute -inset-8  w-8 h-8 flex items-center justify-center cursor-pointer bg-[#CB974F] hover:bg-[#cb974fa2] text-white rounded-full  transition focus:outline-none focus:ring-2 focus:ring-amber-900"
            >
              <X size={20} />
            </button>

            {/* Product Image */}
            <div className="flex justify-center">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={300}
                height={300}
              />
            </div>

            {/* Product Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-16">
              {selectedProduct.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base mb-1">
              {selectedProduct.description}
            </p>

            {/* Features */}
            <p className="text-gray-400 text-sm mb-6">
              {selectedProduct.features}
            </p>

            {/* Action Button */}
            <button className="w-full flex items-center justify-center gap-2 text-[#5F361F] hover:text-amber-900  py-3 rounded-lg font-semibold text-lg  transition focus:outline-none cursor-pointer">
              <ChevronLeft size={20} />
              أضف إلى طلب الجملة
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCarouselSection;
