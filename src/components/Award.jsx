import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Award = () => {
  return (
    <div className="w-screen md:py-[50px] py-[20px] pb-[50px] bg-[#eeeef0] ">
      <div
        className="max-w-[1300px] px-[10px] mx-auto flex gap-[20px]
     justify-evenly items-center md:flex-row flex-col "
      >
        <div className="max-w-[350px]">
          <img
            src={require("../assets/award.png")}
            alt="hero"
            className="w-full object-cover"
          />
        </div>

        <div className="flex sm:gap-[20px] gap-[15px] max-w-[400px] flex-col items-between">
          <h1 className="sm:text-2xl text-lg text-black font-bold font-shippori uppercase">
            design award 2017 now open for entries
          </h1>
          <h1 className="sm:text-sm text-[10px] text-[#8F8F8F] font-normal font-shippori">
            Lorem ipsum is simply dummy text of the printing and typesettin
            industry.
          </h1>
          <div className="grid gap-[20px] grid-cols-2">
            <Link to={"/detail"}>
              <div
                className="h-[40px] bg-black text-white sm:text-xs text-[10px] font-shippori font-normal 
                uppercase flex justify-center items-center
        opacity-80 hover:opacity-100"
              >
                buy now
              </div>
            </Link>
            <div
              className="flex gap-[5px] items-center text-black font-shippori font-semibold uppercase
        sm:text-xs text-[10px]"
            >
              <h1>learn more</h1>
              <BsArrowRight size={18} color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
