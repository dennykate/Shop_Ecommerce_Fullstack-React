import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f1f1f3] ">
      <div
        className="max-w-[1300px] px-[10px] mx-auto flex 
         justify-evenly md:items-center items-start min-h-screen md:flex-row flex-col lg:pt-0 pt-[80px]"
      >
        <div className="flex sm:gap-[25px] gap-[15px] max-w-[300px] flex-col items-between">
          <h1 className="sm:text-4xl text-2xl text-black font-bold font-shippori uppercase">
            decorative funiture
          </h1>
          <h1 className="sm:text-sm text-xs text-[#8F8F8F] font-normal font-shippori">
            Lorem ipsum is simply dummy text of the printing and typesettin
            industry.
          </h1>
          <div className="grid gap-[20px] grid-cols-2">
            <div
              className="h-[40px] bg-black text-white sm:text-xs text-[10px] font-shippori font-normal uppercase
            opacity-80 hover:opacity-100 flex justify-center items-center cursor-pointer"
            >
              buy now
            </div>

            <div
              className="flex gap-[5px] items-center text-black font-shippori font-semibold uppercase
            sm:text-xs text-[10px]"
            >
              <h1>learn more</h1>
              <BsArrowRight size={18} color="black" />
            </div>
          </div>
        </div>

        <div className="max-w-[600px]">
          <img
            src={require("../assets/hero-img.png")}
            alt="hero"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
