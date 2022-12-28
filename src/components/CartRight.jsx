import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CartRight = ({ showCheckout }) => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhNb, setInputPhNb] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const localUserData = localStorage.getItem("userData");

    if (localUserData == null) navigate("/login");
    else setUserData(JSON.parse(localUserData));
  };

  const totalCost = carts.reduce((pv, cv) => pv + cv.cost, 0);

  const checkoutOrder = () => {
    if (inputAddress == "" || inputPhNb == "" || carts.length == 0) {
      requireAllData();
      return;
    }

    const time = getTime();
    const order = {
      id: Date.now(),
      time,
      orderedBy: userData.id,
      userData: {
        name: userData.firstName + " " + userData.lastName,
        email: userData.email,
        address: inputAddress,
        phoneNumber: inputPhNb,
      },
      carts,
      totalAmount: totalCost,
      note: inputNote,
    };

    submitOrder(order);
  };

  const submitOrder = async (order) => {
    const response = await fetch(BASE_URL + "cart", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    console.log(data);

    if (data.message == "Checkout Success") {
      checkoutSuccess();
    } else if (data.message == "Checkout Fail") {
      checkoutFail();
    }
  };

  const getTime = () => {
    const date = new Date();
    const time =
      date.getHours() +
      ":" +
      date.getMinutes() +
      " " +
      date.getDate() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear();

    return time;
  };

  const requireAllData = () => {
    setShow(true);
    setTitle("Require All Data");
    setIsSuccess(false);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const checkoutSuccess = () => {
    setShow(true);
    setTitle("Checkout Success");
    setIsSuccess(true);

    setInputAddress("");
    setInputNote("");
    setInputPhNb("");
    dispatch({
      type: "Clear Cart",
    });

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const checkoutFail = () => {
    setShow(true);
    setTitle("Checkout Fail");
    setIsSuccess(false);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div
      className={`md:w-1/3 sm:w-[400px] w-full md:static fixed top-0  bg-[#f1f1f3] h-screen overflow-y-scroll py-[30px] 
    lg:px-[30px] px-[10px] right-0 md:translate-x-0 ${
      showCheckout ? "translate-x-0" : " translate-x-[100%]"
    } transition-all duration-200 ease-in-out scrollbar`}
    >
      <div className="w-full min-h-screen">
        <div
          className="w-full justify-start items-center py-[20px] flex border-b-[1px] border-gray-700 
      border-opacity-20 mb-[30px]"
        >
          <h1 className="text-lg font-shippori font-extrabold text-black">
            Order Summary
          </h1>
        </div>

        <div
          className="flex flex-col gap-[30px] pb-[30px] border-b-[1px] border-gray-700 
      border-opacity-20"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-xs font-shippori text-black font-bold uppercase">
              Items {carts.length}
            </h1>
            <h1 className="text-xs font-shippori text-black font-bold">
              ${totalCost}
            </h1>
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-xs font-shippori text-black font-bold uppercase">
              Shipping
            </h1>

            <select
              className="w-full h-[35px] px-[5px] border-none outline-none bg-white
          text-black font-shippori text-sm font-semibold"
            >
              <option
                value=""
                className="text-black font-shippori text-xs font-semibold"
              >
                Cash On Deli - Only
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-xs font-shippori text-black font-bold uppercase">
              Address
            </h1>
            <input
              value={inputAddress || ""}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder="Enter Your Address"
              className="w-full h-[35px] px-[10px] border-none outline-none bg-white
          text-black font-shippori text-sm font-semibold customPlaceholder"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-xs font-shippori text-black font-bold uppercase">
              Phone Number
            </h1>
            <input
              value={inputPhNb || ""}
              onChange={(e) => setInputPhNb(e.target.value)}
              placeholder="Enter Your Phone Number"
              className="w-full h-[35px] px-[10px] border-none outline-none bg-white
          text-black font-shippori text-sm font-semibold customPlaceholder"
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-xs font-shippori text-black font-bold uppercase">
              Note
            </h1>
            <textarea
              value={inputNote || ""}
              onChange={(e) => setInputNote(e.target.value)}
              placeholder="Enter Your Note"
              className="w-full px-[10px] border-none outline-none bg-white
          text-black font-shippori text-sm font-semibold customPlaceholder py-[5px]"
              rows={6}
            />
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-xs font-shippori text-black font-bold uppercase">
              Promo Code
            </h1>

            <input
              placeholder="Enter Your Code"
              className="w-full h-[35px] px-[10px] border-none outline-none bg-white
          text-black font-shippori text-sm font-semibold customPlaceholder"
            />
          </div>

          <button
            className="w-[100px] h-[35px] flex justify-center items-center font-shippori text-white 
        font-semibold uppercase bg-[#F00000] text-sm"
          >
            Apply
          </button>
        </div>

        <div className="py-[30px] flex justify-between items-center">
          <h1 className="text-xs font-shippori text-black font-bold uppercase">
            Total Cost
          </h1>
          <h1 className="text-xs font-shippori text-black font-bold">
            ${totalCost}
          </h1>
        </div>

        <button
          onClick={checkoutOrder}
          className="w-full h-[35px] flex justify-center items-center font-shippori text-white 
        font-bold uppercase bg-[#009FFF] text-sm"
        >
          Checkout
        </button>
      </div>

      <Alert show={show} title={title} isSuccess={isSuccess} />
    </div>
  );
};

export default CartRight;
