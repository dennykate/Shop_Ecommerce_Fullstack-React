import React from "react";
import { Link } from "react-router-dom";

const InvoiceCard = ({ data: { id, carts, totalAmount, time, status } }) => {
  const isPending =
    status == "pending" ? "bg-red-600 text-white" : "bg-white text-black";

  return (
    <div className="h-[200px] bg-white rounded-md shadow-sm flex items-center sm:gap-[30px] gap-[10px] px-[10px]">
      <div className="sm:w-[180px] sm:h-[180px] w-[150px] h-[150px]">
        <img
          src={carts[0].data.images[0]}
          alt="invoice-item"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[15px]">
        <h1 className="text-black font-shippori sm:text-xs text-[10px]  font-semibold">
          <span className="uppercase">Total Cost</span> - ${totalAmount}
        </h1>
        <h1 className="text-black font-shippori sm:text-xs text-[10px]  font-semibold">
          <span className="uppercase">Date</span> - {time}
        </h1>
        <h1 className={` font-shippori sm:text-xs text-[10px]  font-semibold`}>
          <span className="uppercase">Items</span> - {carts.length}
        </h1>
        <h1 className={` font-shippori sm:text-xs text-[10px]  font-semibold`}>
          <span className="uppercase">Status</span> -{" "}
          <span className={`${isPending} p-[2px]`}>{status}</span>
        </h1>
        <Link to={`/invoice/${id}`}>
          <div
            className="sm:px-[10px] px-[7px] py-[4px] bg-[#009FFF] sm:text-base text-xs text-white font-shippori 
          font-bold flex justify-center items-center"
          >
            Detail
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InvoiceCard;
