const CategorySkeleton = () => (
  <div className="item bg-white border border-[#DEDAD4] rounded-lg w-full flex flex-col items-center gap-4 p-4 md:p-8 animate-pulse min-h-fit md:min-h-[350px]">
    <div className="bg-gray-200 rounded-lg w-[220px] h-[140px] mb-6" />
    <div className="bg-gray-200 rounded h-8 w-2/3 mb-2" />
  </div>
);

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
              <CategorySkeleton key={i} />
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
