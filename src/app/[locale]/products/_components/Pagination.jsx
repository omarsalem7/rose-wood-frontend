import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 4;

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleNext = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Page numbers in normal order for RTL (1 to 4)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-row items-center justify-center py-8 gap-3" dir="rtl">
      {/* Right Arrow (which means "back" in Arabic layout) */}
      <button
        onClick={handleNext}
        className="bg-[#5B3629] text-white rounded-md w-10 h-10 flex items-center justify-center"
      >
        &lt;
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
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
        onClick={handlePrev}
        className="bg-[#5B3629] text-white rounded-md w-10 h-10 flex items-center justify-center"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
