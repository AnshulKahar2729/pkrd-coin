import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Pagination({ paginatedData, setCurrentPage, currentPage }) {
  const [totalPages, setTotalPages] = useState([]);
  useEffect(() => {
    if (paginatedData) {
      const totalNumberofPages = parseInt(paginatedData?.total_pages || 1, 10);
      const totalPagesArray = Array.from(
        { length: totalNumberofPages },
        (_, index) => index + 1
      );
      setTotalPages(totalPagesArray);
    }
  }, [paginatedData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Change this value to control the maximum number of visible pages

    if (totalPages.length <= maxVisiblePages) {
      return totalPages;
    }

    const leftEllipsisThreshold = maxVisiblePages - 2;
    const rightEllipsisThreshold = totalPages.length - (maxVisiblePages - 2);

    if (currentPage < leftEllipsisThreshold) {
      for (let i = 1; i <= maxVisiblePages - 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages.length);
    } else if (currentPage > rightEllipsisThreshold) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages.length - (maxVisiblePages - 2); i <= totalPages.length; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages.length);
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-row gap-1 sm:gap-4 items-center text-[12px] cmlg:text-sm sm:text-base">
      <button
        className={`${currentPage === 1 ? "pointer-events-none" : ""
          } text-[12px] sm:text-base flex flex-row p-2 items-center gap-1 text-black hover:bg-[#3e3e3e14] hover:rounded-full transition-all duration-300`}
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
        type="button"
      >
        <FaArrowLeftLong /> Previous
      </button>
      <div className="flex items-center gap-2 sm:gap-4">
        {renderPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(pageNumber)}
            className={`flex flex-row px-2 cmlg:px-3 py-1 items-center gap-1 text-black hover:text-white rounded-full transition-all duration-300 ${currentPage === pageNumber
              ? " bg-[#29A744] text-white "
              : " bg-[#3e3e3e14] text-black"
              }`}
            type="button"
          >
            <span>{pageNumber}</span>
          </button>
        ))}
      </div>
      <button
        className={`${currentPage === totalPages.length
          ? "pointer-events-none"
          : ""
          } text-[12px] sm:text-base flex flex-row p-2 items-center gap-1 text-black hover:bg-[#3e3e3e14] hover:rounded-full transition-all duration-300`}
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        disabled={currentPage === totalPages.length}
        type="button"
      >
        Next <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Pagination;
