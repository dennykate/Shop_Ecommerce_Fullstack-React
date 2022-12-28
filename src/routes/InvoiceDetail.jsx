import React, { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import Lottie from "lottie-react";

import InvoiceDetailItem from "../components/InvoiceDetailItem";
import { getCartDetail } from "../fetch/fetchFunction";
import Loading from "../assets/fluid-loading.json";

const InvoiceDetail = () => {
  const { id } = useParams();
  const [cartDetail, setCartDetail] = useState(null);
  const [showNotiBar, setShowNotiBar] = useState(true);

  useEffect(() => {
    fetchCartDetail();
  }, []);

  const fetchCartDetail = async () => {
    if (id) {
      const data = await getCartDetail(id);
      setCartDetail(data.data);
    }
  };

  if (!cartDetail) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[180px] mt-[50px]">
          <Lottie animationData={Loading} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f1f1f3] min-h-screen">
      <div className="max-w-[768px] mx-auto min-h-screen bg-white">
        {showNotiBar && (
          <div className="w-full h-[40px] bg-black flex items-center px-[20px] justify-between">
            <Link to="/invoice">
              <TiArrowBack color="white" size={22} />
            </Link>
            <button onClick={() => setShowNotiBar(false)}>
              <HiOutlineXMark color="white" size={22} />
            </button>
          </div>
        )}
        <div className="w-full h-[200px] bg-purple-600 flex justify-between items-center sm:px-[30px] px-[15px]">
          <h1 className=" font-shippori sm:text-lg text-base text-white font-extrabold uppercase">
            Shop <br />
            Ecommerce
          </h1>
          <div className="flex flex-col sm:gap-[10px] gap-[5px] items-end w-[200px]">
            <h1 className=" font-shippori sm:text-xs text-[10px] text-gray-100">
              Shop Ecommerce - Company LTD
            </h1>
            <h1 className=" font-shippori sm:text-xs text-[10px] text-gray-100 text-end">
              No.374 Ward No.49 Watayar Industrial Zone Shwe Pyi Tar Township
            </h1>
            <h1 className=" font-shippori sm:text-xs text-[10px] text-gray-100 underline">
              Yangon
            </h1>
            <h1 className=" font-shippori sm:text-xs text-[10px] text-gray-100 underline">
              11411
            </h1>
          </div>
        </div>
        <div className="sm:p-[20px] p-[10px]">
          <div className="w-full flex justify-end items-center pb-[20px] border-b-[1px] border-black border-opacity-20">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[3px]">
                <h1 className=" font-shippori font-extrabold text-black text-[10px] text-end uppercase">
                  Invoice #
                </h1>
                <h1 className=" font-shippori font-medium text-gray-700 text-xs text-end">
                  {cartDetail?.id}
                </h1>
              </div>

              <div className="flex flex-col gap-[3px]">
                <h1 className=" font-shippori font-extrabold text-black text-[10px] text-end uppercase">
                  Date
                </h1>
                <h1 className=" font-shippori font-medium text-gray-700 text-xs text-end">
                  {cartDetail?.time.split(" ")[1]}
                </h1>
              </div>

              <div className="flex flex-col gap-[3px]">
                <h1 className=" font-shippori font-extrabold text-black text-[10px] text-end uppercase">
                  Invoice Due Date
                </h1>
                <h1 className=" font-shippori font-medium text-gray-700 text-xs text-end">
                  {cartDetail?.status}
                </h1>
              </div>
            </div>
          </div>

          <div className="py-[20px] ">
            <div className="flex flex-col gap-[10px]">
              <h1 className=" font-shippori sm:text-sm text-[10px] font-bold text-black">
                Id - {cartDetail?.id}
              </h1>
              <h1 className=" font-shippori sm:text-sm text-[10px] font-bold text-black">
                Name - {cartDetail?.userData.name}
              </h1>
              <h1 className=" font-shippori sm:text-sm text-[10px] font-bold text-black">
                Email - {cartDetail?.userData.email}
              </h1>
              <h1 className=" font-shippori sm:text-sm text-[10px] font-bold text-black">
                Address - {cartDetail?.userData.address}
              </h1>
              <h1 className=" font-shippori sm:text-sm text-[10px] font-bold text-black">
                Phone Number - {cartDetail?.userData.phoneNumber}
              </h1>
              <h1 className=" font-shippori sm:text-sm text-[10px] font-bold text-black">
                Total Amount - ${cartDetail?.totalAmount}
              </h1>
            </div>

            <div className="my-[20px] w-full flex justify-center items-center flex-wrap gap-[20px]">
              {cartDetail?.carts.map((data, index) => (
                <InvoiceDetailItem key={index} data={data} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[130px] bg-purple-300 flex justify-between items-center">
          <div className="w-3/5 px-[10px]">
            <h1 className=" font-shippori sm:text-xs text-[10px] text-black font-bold">
              Note:{" "}
            </h1>
            <h1 className=" font-shippori sm:text-xs text-[10px] text-black font-nromal truncate">
              {cartDetail?.note}
            </h1>
          </div>
          <div className="w-2/5 h-full flex justify-end items-center bg-purple-600 p-[20px]">
            <div className="flex items-end flex-col justify-center">
              <h1 className=" font-shippori text-white sm:text-sm text-xs">
                Total
              </h1>
              <h1 className=" font-shippori text-white sm:text-lg text-base font-extrabold">
                ${cartDetail?.totalAmount}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
