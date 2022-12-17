import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { HiMinus } from "react-icons/hi";
import { Link } from "react-router-dom";

const RightDetailBody = ({ detailBodyData }) => {
  const { title, price, style, material, customized, type } = detailBodyData;

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubstract = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <div
      className="md:w-1/2 w-full md:h-screen min-h-1/2 flex items-center md:px-[60px] px-[10px] md:py-[0px]
      py-[20px]"
    >
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-lg font-bold text-black font-shippori uppercase">
          {title}
        </h1>
        <div className="flex items-center gap-[3px]">
          {[0, 1, 2, 3].map((index) => (
            <AiFillStar size={16} color="black" key={index} />
          ))}
          <AiOutlineStar size={16} color="black" />
        </div>
        <div className="flex items-center gap-[50px] mt-[10px]">
          <ul className="list-none flex gap-[10px] flex-col">
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              style
            </li>
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              Material
            </li>
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              Type
            </li>
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              Customized
            </li>
          </ul>
          <ul className="list-none flex gap-[10px] flex-col">
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              {style}
            </li>
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              {material}
            </li>
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              {type}
            </li>
            <li className="text-xs font-shippori font-normal text-[#5A5757] uppercase">
              {customized ? "Customized" : "Non-Customized"}
            </li>
          </ul>
        </div>
        <h1 className="mt-[20px] font-extrabold font-shippori text-xl text-black">
          $ {price}
        </h1>
        <div className="flex sm:flex-row flex-col items-center gap-[20px]">
          <div className="sm:w-[120px] w-full h-[40px] border-[1px] border-black relative flex justify-evenly">
            <h1
              className="absolute -top-[10px] px-[2px] left-[2px] bg-white text-[10px] font-semibold font-shippori
              text-black"
            >
              Quentity
            </h1>
            <button
              className="w-[40px] h-full border-none outline-none flex
              justify-center items-center"
              onClick={handleSubstract}
            >
              <HiMinus size={10} color="black" />
            </button>

            <div
              className="w-[40px] h-full flex justify-center items-center font-shippori text-lg 
              text-black font-medium"
            >
              {count}
            </div>

            <button
              className="w-[40px] h-[40px] border-none outline-none flex
              justify-center items-center"
              onClick={handleAdd}
            >
              <BsPlusLg size={10} color="black" />
            </button>
          </div>
          <button
            className="sm:w-[160px] w-full h-[40px] bg-black flex justify-center items-center uppercase text-white
            sm:hover:opacity-100 sm:opacity-80 font-shippori text-xs"
          >
            Add to cart
          </button>
        </div>
      </div>

      <Link to={"/"}>
        <button
          className="sm:w-[40px] sm:h-[42px] w-[30px] h-[32px] bg-black text-white flex justify-center
          items-center opacity-80 hover:opacity-100 fixed sm:bottom-[50px] sm:right-[50px]
           bottom-[20px] right-[20px]"
        >
          <FaHome size={18} />
        </button>
      </Link>
    </div>
  );
};

export default RightDetailBody;
