import React from "react";

const Input = ({ className, label, type, value, setValue }) => {
  return (
    <div className={className}>
      <label
        htmlFor={label}
        className="font-shippori text-black text-sm font-semibold "
      >
        {label}
      </label>
      <input
        value={value}
        type={type ? "password" : "text"}
        id={label}
        className="w-full h-[40px] bg-[#f1f1f3] outline-none mt-[5px] sm:px-[10px] px-[5px] text-sm border-[1px] 
        border-black border-opacity-10"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
