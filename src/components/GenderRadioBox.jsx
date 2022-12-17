import React from "react";

const GenderRadioBox = () => {
  return (
    <div className="w-full">
      <h1 className="font-shippori text-black text-sm font-semibold">Gender</h1>
      <div className="grid grid-cols-3 mt-[7px] sm:gap-[10px] gap-[5px]">
        <div className="flex sm:gap-[5px] gap-[2px] items-center">
          <input
            name="gender"
            type="radio"
            id="male"
            className="sm:w-[18px] sm:h-[18px] w-[15px] h-[15px] accent-green-600"
          />
          <label
            htmlFor="male"
            className="font-shippori text-black sm:text-sm text-xs font-semibold"
          >
            Male
          </label>
        </div>
        <div className="flex sm:gap-[5px] gap-[2px] items-center">
          <input
            name="gender"
            type="radio"
            id="female"
            className="sm:w-[18px] sm:h-[18px] w-[15px] h-[15px] accent-green-600"
          />
          <label
            htmlFor="female"
            className="font-shippori text-black sm:text-sm text-xs font-semibold "
          >
            Female
          </label>
        </div>
        <div className="flex sm:gap-[5px] gap-[2px] items-center">
          <input
            name="gender"
            type="radio"
            id="undiscolsed"
            className="sm:w-[18px] sm:h-[18px] w-[15px] h-[15px] accent-green-600"
          />
          <label
            htmlFor="undiscolsed"
            className="font-shippori text-black sm:text-sm text-xs font-semibold"
          >
            Undiscolsed
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderRadioBox;
