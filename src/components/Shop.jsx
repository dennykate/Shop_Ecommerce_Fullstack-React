import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { shopCategories } from "../utils/data";
import { shopItemData } from "../utils/dummyData";

const Shop = () => {
  return (
    <div className="w-full py-[80px] bg-white">
      <div className="max-w-[1150px] px-[10px] mx-auto">
        <div className="w-full flex justify-between items-center md:flex-row flex-col gap-[20px]">
          <div className="md:flex grid grid-cols-3 gap-[20px] items-center">
            {shopCategories.map(({ name }, index) => (
              <button
                key={index}
                className={`sm:text-xs text-[10px] font-shippori font-semibold hover:text-black uppercase
              ${index == 0 ? "text-black" : "text-[#8F8F8F]"}`}
              >
                {name}
              </button>
            ))}
          </div>
          <button className="flex items-center">
            <h1 className="text-xs text-black font-shippori font-bold uppercase">
              Filter
            </h1>
            <RiArrowDropDownLine size={23} color="black" />
          </button>
        </div>
        <div className="w-full mt-[50px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
          {shopItemData.map(({ title, des, image, price }, index) => (
            <div
              key={index}
              className="sm:hover:shadow-2xl sm:hover:-translate-y-1 transition-all duration-100 ease-in-out"
            >
              <div className="w-full bg-[#f1f1f3]">
                <img src={image} alt="shop-item" className="w-full" />
              </div>
              <div className="my-[20px] flex justify-center items-center flex-col gap-[5px]">
                <h1 className="text-base text-black font-shippori font-semibold uppercase text-center">
                  {title}
                </h1>
                <div className=" h-[37px]">
                  <h1 className=" font-shippori text-xs text-[#8F8F8F]  text-center">
                    {des.substring(0, 60) + "..."}
                  </h1>
                </div>
                <h1 className="text-sm text-black font-shippori font-semibold flex items-center gap-[8px]">
                  <span>Price:</span> <span>${price}</span>
                </h1>
                <Link to={"/detail"}>
                  <button
                    className="px-[15px] py-[8px] mt-[10px] border-[1px] border-black font-shippori text-black
                text-xs font-semibold uppercase hover:bg-black hover:text-white transition-all duration-200 
                ease-in-out"
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
