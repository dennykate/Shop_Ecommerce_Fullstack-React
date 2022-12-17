import React from "react";

const Input = ({ className, label, type }) => {
  return (
    <div className={className}>
      <label
        htmlFor={label}
        className="font-shippori text-black text-sm font-semibold "
      >
        {label}
      </label>
      <input
        type={type ? "password" : "text"}
        id={label}
        className="w-full h-[40px] bg-[#f1f1f3] outline-none mt-[5px] px-[10px] text-sm border-[1px] 
        border-black border-opacity-10"
      />
    </div>
  );
};

export default Input;
