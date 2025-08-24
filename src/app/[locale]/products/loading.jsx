import ProductSkeleton from "@/components/ProductSkeleton";

export default function Loading() {
  return (
    <>
      {/* Filter Skeleton */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="py-8">
            <div className="bg-gray-200 rounded-lg h-12 w-full max-w-md mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Categories Section Skeleton */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Count Skeleton */}
          <div className="py-4">
            <div className="bg-gray-200 rounded h-6 w-48 animate-pulse" />
          </div>

          {/* Categories Grid Skeleton */}
          <div className="items py-2 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="py-8 flex justify-center">
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-lg h-10 w-10 animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
