import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCard = ({
  data: { title, description, images, price, id },
  setShowLoginFirst,
}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const userData = localStorage.getItem("userData");

    setUserData(JSON.parse(userData));
  };

  return (
    <div className="sm:hover:shadow-2xl sm:hover:-translate-y-1 transition-all duration-100 ease-in-out">
      <div className="w-full bg-[#f1f1f3]">
        <img src={images[0]} alt="shop-item" className="w-full" />
      </div>
      <div className="my-[20px] flex justify-center items-center flex-col gap-[5px]">
        <h1 className="text-base text-black font-shippori font-semibold uppercase text-center">
          {title}
        </h1>
        <div className=" h-[37px]">
          <h1 className=" font-shippori text-xs text-[#8F8F8F]  text-center">
            {description.substring(0, 60) + "..."}
          </h1>
        </div>
        <h1 className="text-sm text-black font-shippori font-semibold flex items-center gap-[8px]">
          <span>Price:</span> <span>${price}</span>
        </h1>
        {userData?.email ? (
          <Link to={`/detail/${id}`}>
            <button
              className="px-[15px] py-[8px] mt-[10px] border-[1px] border-black font-shippori text-black
                text-xs font-semibold uppercase hover:bg-black hover:text-white transition-all duration-200 
                ease-in-out"
            >
              Add to cart
            </button>
          </Link>
        ) : (
          <button
            className="px-[15px] py-[8px] mt-[10px] border-[1px] border-black font-shippori text-black
                text-xs font-semibold uppercase hover:bg-black hover:text-white transition-all duration-200 
                ease-in-out"
            onClick={() => {
              setShowLoginFirst(true);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
