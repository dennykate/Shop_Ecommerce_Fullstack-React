import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";

import { DetailBody, Navbar } from "../components";
import { getProduct } from "../fetch/fetchFunction";
import Loading from "../assets/fluid-loading.json";

const Detail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await getProduct(id);
    setProductData(data[0]);
  };

  return (
    <div>
      <Navbar />
      {productData ? (
        <DetailBody productData={productData} />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[180px] mt-[50px]">
            <Lottie animationData={Loading} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
