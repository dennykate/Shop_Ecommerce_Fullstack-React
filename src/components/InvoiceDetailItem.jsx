import React from "react";

const InvoiceDetailItem = ({
  data: {
    data: { images, title },
    quantity,
  },
}) => {
  return (
    <div
      className="sm:w-[170px] w-[130px] sm:h-[190px] h-[150px] border-[1px] border-black border-opacity-5 
                shadow-lg rounded-md hover:shadow-xl cursor-pointer"
    >
      <div className="sm:w-[170px] sm:h-[170px] w-[130px] h-[130px] relative">
        <img src={images[0]} alt="shop-item" className="w-full h-full" />
        <div
          className="w-[30px] h-[30px] rounded-md bg-red-500 text-white absolute top-[5px] right-[5px] z-[10]
         font-shippori flex justify-center items-center text-sm"
        >
          {quantity}
        </div>
      </div>
      <div className="w-full h-[20px] flex justify-center items-center">
        <h1 className=" font-shippori text-black font-bold truncate sm:text-xs text-[10px] px-[5px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default InvoiceDetailItem;
