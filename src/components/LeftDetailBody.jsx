import React, { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";

const LeftDetailBody = ({ images }) => {
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    setMainImage(images[0]);
  }, []);
  return (
    <div
      className="md:w-1/2 w-full bg-[#f7f7f8] md:min-h-screen  px-[20px] flex flex-col justify-center 
md:pt-[0px] pt-[80px] md:pb-[0px] pb-[20px]"
    >
      <div className="w-full flex justify-center items-center relative">
        <div className="w-1/2 bg-[#f1f1f3] p-[10px]">
          {mainImage && <img src={mainImage} alt="detail-item" />}
          <button
            className="w-[30px] h-[30px] bg-white rounded-full shadow-lg absolute top-0 right-0 flex
      justify-center items-center"
          >
            <BiHeart size={20} />
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md:gap-[30px] gap-[10px] mt-[20px]">
        {images.map((data, index) => (
          <div
            key={index}
            className="bg-[#f1f1f3] p-[10px]"
            onMouseEnter={() => {
              setMainImage(data);
            }}
            onMouseLeave={() => {
              setMainImage(images[0]);
            }}
          >
            <img src={data} alt="detail-item" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftDetailBody;
