import React, { useState } from "react";
import { BsPlusLg, BsArrowLeft } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({
  data: {
    cost,
    quantity,
    data: { images, title, price, _id },
  },
}) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleIncreaseQuantity = () => {
    dispatch({
      type: "Increase Quantity",
      payload: {
        id: _id,
      },
    });
  };

  const handleDecreaseQuantity = () => {
    if (quantity == 1) {
      setShowAlert(true);
      return;
    }

    dispatch({
      type: "Decrease Quantity",
      payload: {
        id: _id,
      },
    });
  };

  const handleRemoveItem = () => {
    dispatch({
      type: "Remove Item",
      payload: {
        id: _id,
      },
    });
    setShowAlert(false);
  };

  return (
    <div
      className="w-full sm:flex items-center mb-[30px] grid grid-cols-2 gap-[10px] border-b-[1px] border-black 
      border-opacity-10 pb-[10px]"
    >
      <div className="sm:w-3/6 w-2/5 h-[100px] flex items-center justify-start">
        <div className="flex gap-[10px]">
          <div className="w-[100px] h-[100px]">
            <img
              src={images[0]}
              alt="shop-item"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-col justify-center gap-[20px] items-start py-[5px] sm:flex hidden">
            <h1 className="text-black font-shippori text-sm truncate font-semibold">
              {title}
            </h1>
            <button
              onClick={() => setShowAlert(true)}
              className="px-[5px] py-[3px] font-shippori bg-red-600 text-white font-semibold
              text-xs"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="sm:w-1/6 w-auto flex items-center flex-col justify-center gap-[15px]">
        <div className="flex items-center sm:gap-[10px] gap-[15px]">
          <button onClick={handleDecreaseQuantity}>
            <HiMinus size={12} color="black" />
          </button>
          <div
            className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] flex justify-center items-center 
            border-[1px] border-black font-shippori text-sm"
          >
            {quantity}
          </div>
          <button onClick={handleIncreaseQuantity}>
            <BsPlusLg size={12} color="black" />
          </button>
        </div>
        <div className="sm:hidden font-shippori text-black font-bold text-xs">
          ${price}/${cost}
        </div>
        <button
          onClick={() => setShowAlert(true)}
          className="px-[5px] py-[3px] font-shippori bg-red-600 text-white font-semibold
              text-xs sm:hidden"
        >
          Remove
        </button>
      </div>
      <div className="sm:w-1/6 w-auto sm:flex hidden items-center sm:justify-center justify-start">
        <h1 className="text-black text-xs uppercase font-shippori font-semibold">
          ${price}
        </h1>
      </div>
      <div className="sm:w-1/6 w-auto sm:flex hidden items-center justify-center">
        <h1 className="text-black  text-xs uppercase font-shippori font-semibold">
          ${cost}
        </h1>
      </div>

      {showAlert && (
        <div
          className="w-screen h-screen z-[100] bg-black fixed top-0 left-0 bg-opacity-20 flex justify-center
      items-center "
        >
          <div className="sm:px-[40px] px-[20px] py-[30px] bg-white rounded-md animate-slide-up mx-[5px] relative">
            <h1 className="sm:text-xl text-lg text-black font-shippori font-extrabold">
              Are you sure to delete ?
            </h1>
            <button
              onClick={handleRemoveItem}
              className="w-full h-[50px] flex justify-center items-center sm:text-sm text-sm font-shippori
             text-white mt-[20px] mx-auto bg-red-500 "
            >
              Confirm
            </button>

            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-[3px] right-[3px] w-[20px] h-[20px] flex justify-center items-center
            bg-red-500"
            >
              <HiOutlineXMark size={18} color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
