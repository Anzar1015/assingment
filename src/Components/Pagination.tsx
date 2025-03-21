import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight
} from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        {<FaAngleDoubleLeft size={18} />}
        First
      </button>

      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {<FaAngleLeft size={18} />}
        Previous
      </button>

      <span className="px-6 py-2 text-lg font-semibold bg-gray-100 rounded-lg shadow-md">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        {<FaAngleRight size={18} />}
      </button>

      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {<FaAngleDoubleRight size={18} />}
        Last
      </button>
    </div>
  );
};

export default Pagination;
