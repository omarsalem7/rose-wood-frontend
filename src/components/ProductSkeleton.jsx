import React from "react";

const ProductSkeleton = () => (
  <div className="item bg-white shadow-lg rounded-2xl w-full flex flex-col items-center gap-4 p-8 animate-pulse min-h-[350px]">
    <div className="bg-gray-200 rounded-full w-[160px] h-[100px] mt-4 mb-6" />
    <div className="bg-gray-200 rounded h-7 w-2/3 mb-2" />
    <div className="bg-gray-100 rounded h-4 w-1/2" />
  </div>
);

export default ProductSkeleton;
