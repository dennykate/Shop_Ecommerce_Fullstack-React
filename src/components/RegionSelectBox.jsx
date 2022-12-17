import React from "react";
import { countries } from "../utils/countries";

const RegionSelectBox = () => {
  return (
    <>
      <label
        htmlFor="countrySelectBox"
        className="font-shippori text-black text-sm font-semibold"
      >
        Region
      </label>
      <select
        id="countrySelectBox"
        className="h-[40px] w-full font-shippori text-black text-sm font-semibold bg-[#f1f1f3] px-[3px]
            border-none outline-none mt-[5px]"
      >
        <option value="">USA</option>
        {countries.map(({ name, alpha3Code }, index) => (
          <option key={index} value={alpha3Code}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default RegionSelectBox;
