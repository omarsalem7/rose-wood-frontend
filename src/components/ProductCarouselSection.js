"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Plus, Move } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel.js";

const ProductCarouselSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const products = [
    {
      id: 1,
      title: "طبق خشبي",
      description: "متوفر تيكات تبدأ من 100 قطعة",
      features: "متاح تصنيع حسب المقاس / اللون / التشطيب",
      image: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      gallery: [
        "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
        "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      ],
    },
    {
      id: 2,
      title: "أدوات المطبخ الخشبية",
      description: "مجموعة متكاملة من أدوات المطبخ",
      features: "طبيعية 100% وآمنة على الطعام",
      image: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      gallery: [
        "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
        "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      ],
    },
    {
      id: 3,
      title: "لوح التقطيع",
      description: "لوح تقطيع عالي الجودة",
      features: "مقاوم للبكتيريا وسهل التنظيف",
      image: "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      gallery: [
        "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
        "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      ],
    },
    {
      id: 4,
      title: "صندوق تخزين خشبي",
      description: "صندوق أنيق للتخزين والتنظيم",
      features: "مصنوع من خشب طبيعي عالي الجودة",
      image: "/lovable-uploads/91cdd0f1-bb5d-4353-bb11-ec58a2aa1433.png",
      gallery: [
        "/lovable-uploads/91cdd0f1-bb5d-4353-bb11-ec58a2aa1433.png",
        "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      ],
    },
    {
      id: 5,
      title: "ملاعق خشبية مجموعة",
      description: "مجموعة ملاعق متنوعة الأحجام",
      features: "مناسبة للطبخ والتقديم",
      image: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
      gallery: [
        "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
        "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
        "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      ],
    },
    {
      id: 6,
      title: "كوب خشبي",
      description: "كوب طبيعي للمشروبات الساخنة",
      features: "عازل حراري ومقاوم للكسر",
      image: "/lovable-uploads/9d836571-687a-4ae1-8ef1-7473e1c9ccae.png",
      gallery: [
        "/lovable-uploads/9d836571-687a-4ae1-8ef1-7473e1c9ccae.png",
        "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
        "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
      ],
    },
  ];

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

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentSlide((prev) => (prev + 1) % selectedProduct.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + selectedProduct.gallery.length) %
          selectedProduct.gallery.length
      );
    }
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
    <section className="py-6 px-0 bg-gray-50 font-alexandria">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ direction: "rtl" }}
          >
            التغذية البصرية
          </h2>
        </div>

        {/* Product Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
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
                  key={product.id}
                  className="basis-1/2 md:basis-2/3 lg:basis-3/5 flex-shrink-0"
                >
                  <div
                    className={`relative group cursor-pointer transition-all duration-700 ease-in-out transform ${getCardScale(
                      index
                    )} ${getCardOpacity(index)} mx-2`}
                    onClick={() => openModal(product)}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                      <img
                        src={product.image}
                        alt={product.title}
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

          {/* Draggable Circle */}
          {isHovering && (
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg cursor-grab transition-all duration-300 ${
                isDragging ? "cursor-grabbing scale-110" : "hover:scale-105"
              }`}
              onMouseDown={handleDragStart}
            >
              <Move size={24} className="text-gray-600" />
            </div>
          )}

          {/* Progress indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <div className="h-1 bg-gray-300 rounded-full w-32">
                <div
                  className="h-1 bg-amber-600 rounded-full transition-all duration-300"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex">
              {/* Image Section */}
              <div className="flex-1 relative">
                <img
                  src={selectedProduct.gallery[currentSlide]}
                  alt={selectedProduct.title}
                  className="w-full h-96 object-cover"
                />

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Plus icon */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Plus size={16} className="text-gray-600" />
                </div>
              </div>

              {/* Content Section */}
              <div
                className="w-80 p-6 flex flex-col"
                style={{ direction: "rtl" }}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 left-4 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700"
                >
                  <X size={16} />
                </button>

                {/* Product gallery thumbnails */}
                <div className="flex gap-2 mb-6 justify-center">
                  {selectedProduct.gallery.map((img, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                        currentSlide === index
                          ? "border-amber-600"
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Product info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {selectedProduct.title}
                  </h3>

                  <p className="text-blue-600 text-sm mb-2 text-center">
                    {selectedProduct.description}
                  </p>

                  <p className="text-gray-600 text-sm mb-6 text-center">
                    {selectedProduct.features}
                  </p>
                </div>

                {/* Add to cart button */}
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <ChevronLeft size={16} />
                  أضف إلى طلب الجملة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCarouselSection;
