import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ page, currentPage, setCurrentPage }) => {
  return (
    <div className="w-full flex justify-center items-center h-[80px]">
      <div className="flex gap-[10px]">
        <button
          className={`w-[40px] h-[40px] rounded-md shadow-md flex items-center  justify-center
               font-shippori text-base font-bold bg-white text-black border-[1px] border-black
               hover:bg-black hover:text-white`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <MdKeyboardArrowLeft size={30} />
        </button>

        <button
          className={`w-[40px] h-[40px] rounded-md shadow-md flex items-center  justify-center
               font-shippori text-base font-bold sm:hover:bg-black hover:text-white
               bg-black text-white cursor-default`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {currentPage}
        </button>

        <button
          className={`w-[40px] h-[40px] rounded-md shadow-md flex items-center  justify-center
               font-shippori text-base font-bold bg-white text-black border-[1px] border-black
               hover:bg-black hover:text-white`}
          onClick={() =>
            currentPage < page.length && setCurrentPage(currentPage + 1)
          }
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
