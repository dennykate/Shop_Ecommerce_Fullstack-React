import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

import { footerData } from "../utils/data";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full bg-white pb-[20px]">
      <div className="max-w-[1150px] sm:px-[20px] px-[10px] mx-auto ">
        <div
          className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:py-[80px] py-[50px] border-b-[1px]
      border-black border-opacity-10 gap-[30px]"
        >
          {footerData.map(({ title, data }, index) => (
            <div key={index} className="flex md:justify-center justify-start">
              <div
                key={index}
                className="flex md:gap-[20px] sm:gap-[15px] gap-[10px] items-start flex-col"
              >
                <h1 className="text-lg text-black font-bold font-shippori">
                  {title}
                </h1>
                <ul className=" list-none flex flex-col md:gap-[10px] gap-[7px]">
                  {data.map(({ path, name }, index) => (
                    <li
                      key={index}
                      className="sm:text-sm text-xs font-shippori text-[#5A5757] font-semibold cursor-pointer
            hover:text-black transition-all duration-100 ease-in-out"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full pt-[20px] flex justify-between items-center">
          <h1 className="sm:text-xs text-[10px] font-shippori font-semibold text-[#8F8F8F]">
            Copy Right &#169; 2022 MMS IT.All Rights Reserved
          </h1>
          <button
            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] bg-black text-white flex justify-center
          items-center opacity-80 hover:opacity-100"
            onClick={handleScrollTop}
          >
            <MdArrowBackIosNew className="text-xs sm:text-lg rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
