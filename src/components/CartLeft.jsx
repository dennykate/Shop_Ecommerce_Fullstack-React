import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartLeft = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <div className="md:w-2/3 w-full min-h-screen lg:px-[40px] px-[10px] py-[30px] overflow-y-scroll scrollbar">
      <div
        className="w-full justify-between items-center py-[20px] flex border-b-[1px] border-gray-700 
      border-opacity-20 mb-[30px]"
      >
        <h1 className="sm:text-lg text-base font-shippori font-extrabold text-black">
          Shopping Cart
        </h1>
        <div className="flex items-center gap-[10px]">
          <Link to={`/invoice`}>
            <HiDocumentText size={28} className="text-red-600" />
          </Link>
          <h1 className="sm:text-lg text-base font-shippori font-extrabold text-black">
            {carts.length > 0 && carts.length + " Items"}
          </h1>
        </div>
      </div>

      <div className="w-full sm:flex hidden items-center mb-[30px] ">
        <div className="sm:w-3/6 w-auto flex items-center justify-start">
          <h1 className="text-gray-600 sm:text-xs text-[10px] uppercase font-shippori font-semibold">
            Product Details
          </h1>
        </div>
        <div className="sm:w-1/6 w-auto flex items-center justify-center">
          <h1 className="text-gray-600 sm:text-xs text-[10px] uppercase font-shippori font-semibold">
            Quentity
          </h1>
        </div>
        <div className="sm:w-1/6 w-1/5 flex  items-center justify-center">
          <h1 className="text-gray-600 sm:text-xs text-[10px] uppercase font-shippori font-semibold">
            Price
          </h1>
        </div>
        <div className="sm:w-1/6 w-1/5  flex  items-center justify-center">
          <h1 className="text-gray-600 sm:text-xs text-[10px] uppercase font-shippori font-semibold">
            Total
          </h1>
        </div>
      </div>

      <div className="w-full">
        {carts.length > 0 &&
          carts.map((cart, index) => <CartItem key={index} data={cart} />)}
      </div>

      <Link to="/">
        <div className="flex items-center gap-[10px] text-red-600 mt-[30px] cursor-pointer">
          <BsArrowLeft size={18} />
          <h1 className=" font-shippori font-bold text-sm">
            Continue Shopping
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default CartLeft;
