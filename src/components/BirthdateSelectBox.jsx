import React, { useEffect, useState } from "react";
import { days, months, years } from "../utils/data";

const BirthdateSelectBox = ({ setValue }) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    setValue(`${day}/${month}/${year}`);
  }, [day, month, year]);

  return (
    <div className="w-full">
      <h1 className="font-shippori text-black text-sm font-semibold mb-[5px]">
        Date Of Birth
      </h1>
      <div className="grid grid-cols-3 gap-[10px] ">
        <select
          className="h-[40px] font-shippori text-black text-sm font-semibold bg-[#f1f1f3] px-[3px]
            border-none outline-none"
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="" selected hidden disabled>
            Day
          </option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          className="h-[40px] font-shippori text-black text-sm font-semibold bg-[#f1f1f3] px-[3px]
            border-none outline-none"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="" selected hidden disabled>
            Month
          </option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select
          className="h-[40px] font-shippori text-black text-sm font-semibold bg-[#f1f1f3] px-[3px]
            border-none outline-none"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="" selected hidden disabled>
            Year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BirthdateSelectBox;
