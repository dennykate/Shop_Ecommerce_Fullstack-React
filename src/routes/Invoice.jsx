import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import { Navbar } from "../components";
import InvoiceCard from "../components/InvoiceCard";
import { getCarts } from "../fetch/fetchFunction";

import Loading from "../assets/fluid-loading.json";
import Pagination from "../components/Pagination";

const Invoice = () => {
  const [userData, setUserData] = useState({});
  const [cartData, setCartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const localUserData = localStorage.getItem("userData");

    if (localUserData == undefined) {
      navigate("/login");
    }
  };

  const fetchData = async (page) => {
    const localUserData = JSON.parse(localStorage.getItem("userData"));
    const data = await getCarts(localUserData.id, page);

    setCartData(data.data);
    calcPage(Math.ceil(data.meta.total / 10));
  };

  const calcPage = (page) => {
    let expPage = [];
    for (let i = 0; i < page; i++) {
      expPage.push(i);
    }
    setPage(expPage);
  };

  return (
    <div className="bg-[#f1f1f3] min-h-screen">
      <Navbar />
      <div className="max-w-[1024px] mx-auto sm:px-[30px] px-[3px] pt-[90px]">
        {cartData?.length > 0 ? (
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[10px]">
            {cartData.map((data, index) => (
              <InvoiceCard key={index} data={data} />
            ))}
          </div>
        ) : (
          <div className="w-full  flex justify-center items-center">
            <div className="w-[180px] mt-[50px]">
              <Lottie animationData={Loading} />
            </div>
          </div>
        )}
        <Pagination
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Invoice;
