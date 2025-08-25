import React from "react";

const ProductDetailsSkeleton = () => (
  <section className="pt-16 max-w-7xl mx-auto px-6 2xl:px-0">
    <div className="border-t border-gray-300 relative">
      <span className="absolute left-0 top-0 w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
      <span className="absolute right-0 top-0 w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 py-12">
        {/* Right: Product Info */}
        <div className="w-full px-2 flex flex-col gap-4 md:gap-8">
          {/* Product Title */}
          <div className="bg-gray-200 rounded h-12 w-3/4 animate-pulse" />

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 rounded h-6 w-20 animate-pulse" />
            <div className="bg-gray-200 rounded h-6 w-24 animate-pulse" />
            <div className="bg-gray-200 rounded h-6 w-6 animate-pulse" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="bg-gray-200 rounded h-6 w-32 animate-pulse" />
            <div className="bg-gray-200 rounded h-20 w-full animate-pulse" />
          </div>

          {/* Available Sizes */}
          <div className="space-y-2">
            <div className="bg-gray-200 rounded h-6 w-32 animate-pulse" />
            <div className="flex items-center gap-4 py-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-xl h-10 w-20 animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <div className="bg-gray-200 rounded h-6 w-24 animate-pulse" />
            <div className="flex items-center gap-4 py-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-full h-10 w-10 animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Left: Product Images */}
        <div className="w-full px-2 flex flex-col gap-4 md:gap-8">
          {/* Main Image */}
          <div className="bg-gray-200 rounded-lg w-full h-96 animate-pulse" />

          {/* Gallery Thumbnails */}
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg w-20 h-20 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MakeOrderSkeleton = () => (
  <div className="bg-[#FFF8F6]">
    <div className="py-8 max-w-7xl mx-auto px-6 2xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
      <div className="space-y-2">
        <div className="bg-gray-200 rounded h-5 w-48 animate-pulse" />
        <div className="bg-gray-200 rounded h-6 w-64 animate-pulse" />
      </div>
      <div className="flex gap-3 md:gap-6">
        <div className="bg-gray-200 rounded-lg h-10 w-full animate-pulse" />
        <div className="bg-gray-200 rounded-lg h-10 w-full animate-pulse" />
      </div>
    </div>
  </div>
);

const ProductInfoSkeleton = () => (
  <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
    <div className="">
      <div className="text-center mb-2">
        <div className="bg-gray-200 rounded h-8 w-48 mx-auto mb-1 animate-pulse" />
        <div className="bg-gray-200 rounded h-6 w-64 mx-auto pt-3 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center">
        {/* Right: Product Details */}
        <div className="w-full">
          <ul className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 rounded w-6 h-6 animate-pulse" />
                  <div className="bg-gray-200 rounded h-5 w-32 animate-pulse" />
                </div>
                <div className="bg-gray-200 rounded h-5 w-20 animate-pulse" />
              </li>
            ))}
          </ul>
        </div>

        {/* Left: Product Image */}
        <div className="w-full">
          <div className="bg-gray-200 rounded-lg w-full h-80 animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);

const HowWorkSkeleton = () => (
  <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
    <div className="">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="bg-gray-200 rounded h-10 w-64 mx-auto mb-4 animate-pulse" />
        <div className="bg-gray-200 rounded h-6 w-96 mx-auto animate-pulse" />
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        {/* Features List */}
        <div className="space-y-8 mb-8 text-xl">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse" />
              <div className="bg-gray-200 rounded h-6 w-48 animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="bg-gray-200 rounded-lg col-span-2 h-32 animate-pulse" />
        <div className="bg-gray-200 rounded-lg col-span-3 h-32 animate-pulse" />
      </div>
    </div>
  </section>
);

const OtherCategorySkeleton = () => (
  <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
    <div className="text-center mb-12">
      <div className="bg-gray-200 rounded h-10 w-64 mx-auto mb-4 animate-pulse" />
      <div className="bg-gray-200 rounded h-6 w-96 mx-auto animate-pulse" />
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-[#DEDAD4] rounded-lg w-full flex flex-col items-center gap-4 p-4 md:p-8 animate-pulse min-h-fit md:min-h-[350px]"
        >
          <div className="bg-gray-200 rounded-lg w-[220px] h-[140px] mb-6" />
          <div className="bg-gray-200 rounded h-8 w-2/3 mb-2" />
        </div>
      ))}
    </div>
  </section>
);

const RelatedProductsSkeleton = () => (
  <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
    <div className="text-center mb-12">
      <div className="bg-gray-200 rounded h-10 w-64 mx-auto mb-4 animate-pulse" />
      <div className="bg-gray-200 rounded h-6 w-96 mx-auto animate-pulse" />
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-[#DEDAD4] rounded-lg w-full flex flex-col items-center gap-4 p-4 md:p-8 animate-pulse min-h-fit md:min-h-[350px]"
        >
          <div className="bg-gray-200 rounded-lg w-[220px] h-[140px] mb-6" />
          <div className="bg-gray-200 rounded h-8 w-2/3 mb-2" />
        </div>
      ))}
    </div>
  </section>
);

export default function Loading() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ProductDetailsSkeleton />
      <MakeOrderSkeleton />
      <ProductInfoSkeleton />
      <HowWorkSkeleton />
      <OtherCategorySkeleton />
      <RelatedProductsSkeleton />
    </div>
  );
}
