import React, { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";

import { CartLeft } from "../components";
import CartRight from "../components/CartRight";

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <CartLeft />
      <CartRight showCheckout={showCheckout} />
      {showCheckout ? (
        <button
          className="w-[40px] h-[40px] bg-[#0858f7] absolute top-[5px] right-0
      flex justify-center items-center rounded-tl-[20px] rounded-bl-[20px] pl-[5px] md:hidden "
          onClick={() => setShowCheckout(false)}
        >
          <HiOutlineXMark size={22} color="white" />
        </button>
      ) : (
        <button
          className="w-[40px] h-[40px] bg-[#0858f7] absolute top-[5px] right-0
      flex justify-center items-center rounded-tl-[20px] rounded-bl-[20px] pl-[5px] md:hidden"
          onClick={() => setShowCheckout(true)}
        >
          <BsFillCartCheckFill size={20} color="white" />
        </button>
      )}
    </div>
  );
};

export default Cart;
