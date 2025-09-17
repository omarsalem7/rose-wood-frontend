import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Page numbers in normal order for RTL (1 to totalPages)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center py-8 gap-3">
      {/* Right Arrow (which means "back" in Arabic layout) */}
      <button
        onClick={handlePrev}
        className="bg-[#5B3629] text-white rounded-md w-10 h-10 flex items-center justify-center"
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => {
            onPageChange(page);
            scrollToTop();
          }}
          className={`w-10 h-10 flex items-center justify-center rounded-md 
            ${
              currentPage === page
                ? "bg-[#F1E3DF] text-[#5B3629] font-bold"
                : "bg-[#DDE4E6] text-gray-600"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Left Arrow (which means "forward" in Arabic layout) */}
      <button
        onClick={handleNext}
        className="bg-[#5B3629] text-white rounded-md w-10 h-10 flex items-center justify-center"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
