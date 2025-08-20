"use client";
import { useState, useEffect } from "react";
import { Plus, ChevronLeft, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel.js";
import { useModal } from "@/lib/ModalContext";
import Image from "next/image";
import Link from "next/link";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

const ProductCarouselSection = ({ title, categories, locale }) => {
  const { openModal, closeModal } = useModal();
  const t = locale === "ar" ? ar : en;
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

  const getCardScale = (index) => {
    if (index === activeIndex) {
      return "scale-x-[0.85] md:scale-x-75 scale-y-[0.8]"; // Center card is smaller
    }
    return "scale-x-125 scale-y-100"; // Side cards are larger
  };

  const getCardOpacity = (index) => {
    if (index === activeIndex) {
      return "opacity-100";
    }
    return "opacity-70";
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

  const handleViewDetailsClick = (id) => {
    closeModal();
    router.push(`/${locale}/products/${id}`);
  };

  const createModalContent = (product) => {
    return (
      <div className="w-full">
        {/* Product Image */}
        <div className="flex justify-center mb-6 min-h-[250px]">
          <Image
            src={product.visualFeeding}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Product Title */}
        <h3 className="text-[18px]  font-medium mb-4">{product.name}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-2">{product.description}</p>

        {/* Features */}
        <p className="text-gray-400 text-sm mb-2">{product.features}</p>

        {/* Action Button */}
        <Link
          href={`/${locale}/products?${
            product.id ? `categoryId=${product.id}` : ""
          }`}
          onClick={() => handleViewDetailsClick(product.id)}
          className="w-full flex items-center justify-center gap-2 text-[#5F361F] hover:text-amber-900 py-3 rounded-lg font-semibold text-lg transition focus:outline-none cursor-pointer"
        >
          <ChevronLeft size={20} className="rtl:rotate-180" />
          {t.viewDetails}
        </Link>
      </div>
    );
  };

  return (
    <section
      id="visual-feeding"
      style={{ direction: "ltr" }}
      className="py-16 px-0 font-alexandria "
    >
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[18px] md:text-[32px] font-medium mb-4">
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
              {categories.map((item, index) => (
                <CarouselItem
                  key={item?.id}
                  className="basis-[65%] flex-shrink-0"
                >
                  <div
                    className={`relative group cursor-pointer transition-all duration-700 ease-in-out transform  ${getCardScale(
                      index
                    )} ${getCardOpacity(index)} mx-2`}
                    onClick={() => openModal(createModalContent(item))}
                  >
                    <div className="aspect-[7/4] overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                      <Image
                        src={item.visualFeeding}
                        alt={item.name ?? `categoryImage ${index}`}
                        width={500}
                        height={250}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Plus icon overlay */}

                      {index === activeIndex && (
                        <div className="absolute top-6 left-6 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-80 group-hover:opacity-100 transition-opacity">
                          <Plus size={16} className="text-gray-600" />
                        </div>
                      )}
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
    </section>
  );
};

export default ProductCarouselSection;
