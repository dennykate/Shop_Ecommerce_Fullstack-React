import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import { shopCategories } from "../utils/data";
import { getProducts } from "../fetch/fetchFunction";
import Pagination from "./Pagination";

import Loading from "../assets/fluid-loading.json";
import ItemCard from "./ItemCard";

const Shop = () => {
  const pageRef = useRef(null);
  const [shopItemData, setShopItemData] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoginFirst, setShowLoginFirst] = useState(false);

  useEffect(() => {
    setShopItemData([]);
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
    const data = await getProducts(page);
    setShopItemData(data.data);
    calcPage(Math.ceil(data.meta.total / 8));
  };

  const calcPage = (page) => {
    let expPage = [];
    for (let i = 0; i < page; i++) {
      expPage.push(i);
    }
    setTotalPage(expPage);
  };

  return (
    <div ref={pageRef} className="w-full py-[80px] bg-white">
      <div className="max-w-[1150px] px-[10px] mx-auto">
        <div className="w-full flex justify-between items-center md:flex-row flex-col gap-[20px]">
          <div className="md:flex grid grid-cols-3 gap-[20px] items-center">
            {shopCategories.map(({ name }, index) => (
              <button
                key={index}
                className={`sm:text-xs text-[10px] font-shippori font-semibold hover:text-black uppercase
              ${index == 0 ? "text-black" : "text-[#8F8F8F]"}`}
              >
                {name}
              </button>
            ))}
          </div>
          <button className="flex items-center">
            <h1 className="text-xs text-black font-shippori font-bold uppercase">
              Filter
            </h1>
            <RiArrowDropDownLine size={23} color="black" />
          </button>
        </div>

        {shopItemData.length > 0 ? (
          <div className="w-full mt-[50px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {shopItemData.map((data, index) => (
              <ItemCard
                data={data}
                key={index}
                setShowLoginFirst={setShowLoginFirst}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[180px] mt-[50px]">
              <Lottie animationData={Loading} />
            </div>
          </div>
        )}

        <Pagination
          page={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {showLoginFirst && (
        <div
          className="w-screen h-screen z-[100] bg-black fixed top-0 left-0 bg-opacity-20 flex justify-center
      items-center"
        >
          <div className="px-[40px] py-[30px] bg-white rounded-md animate-slide-up">
            <h1 className="text-xl text-black font-shippori font-extrabold">
              You're not a member
            </h1>
            <Link to={"/login"}>
              <div
                className="w-full h-[50px] flex justify-center items-center text-sm font-shippori
             text-black mt-[20px] mx-auto bg-[#6dd5ed] "
              >
                Please Login First
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
