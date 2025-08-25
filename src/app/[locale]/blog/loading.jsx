import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BlogLoading = () => {
  return (
    <>
      {/* Filter Section Skeleton */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto border-t border-gray-300 relative">
          <span className="absolute left-0 top-0 w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-0 w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <div className="text-center py-5">
            <div className="h-8 bg-gray-200 rounded-lg w-48 mx-auto animate-pulse"></div>
          </div>
          <div className="flex justify-between items-center gap-2 md:gap-6">
            <div className="w-[80%] py-2 rounded-full px-2 bg-[#FFF8F6]">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-[20%]">
              <div className="h-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title Skeleton */}
          <div className="py-4">
            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>

          {/* Blog Cards Grid Skeleton */}
          <div className="py-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                className="bg-[#f2ece9ce] rounded-xl overflow-hidden shadow-lg h-full flex flex-col animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="aspect-video p-3 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gray-200 rounded-xl animate-pulse"></div>
                </div>

                <CardContent className="px-3 flex flex-col flex-grow gap-2">
                  {/* Title Skeleton */}
                  <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>

                  {/* Description Skeleton */}
                  <div className="space-y-2 flex-grow">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  </div>

                  {/* Meta Skeleton */}
                  <hr className="p-[1px] bg-[#96979e24] mt-2" />
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="py-4">
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLoading;
