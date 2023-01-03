import React, { useState } from "react";

import { FaGoogle, FaFacebook, FaTwitter, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Input, Loading } from "../components";
import { Alert } from "../components";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("required all data");
      return;
    }
    const body = { email: email, password: password };

    setShowLoading(true);

    const response = await fetch(BASE_URL + "user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    if (data.message == "wrong information") {
      authFail();
    } else if (data.message == "login successfull") {
      authSuccess(data.data);
    }
  };

  const authFail = () => {
    setShow(true);
    setTitle("Login Fail");
    setIsSuccess(false);
    setShowLoading(false);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const authSuccess = (data) => {
    localStorage.setItem("userData", JSON.stringify(data[0]));
    setShow(true);
    setTitle("Login Success");
    setIsSuccess(true);
    setShowLoading(false);

    setTimeout(() => {
      setShow(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen py-[20px] bg-[#f1f1f3]">
      <div className="w-full flex flex-col items-center">
        <h1 className="uppercase font-shippori text-xl font-[900] text-black">
          Shop
        </h1>
        <h1 className="text-xl text-black text-opacity-70 font-shippori font-semibold mt-[15px]">
          Login To Your Account
        </h1>
      </div>
      <div className="my-[20px] max-w-[500px] sm:p-[30px] p-[5px] py-[30px] bg-white mx-auto shadow-sm">
        <Input
          label="Email Address"
          className="w-full mb-[10px]"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Password"
          className="w-full mb-[10px]"
          type
          value={password}
          setValue={setPassword}
        />

        <div className="flex justify-between items-end mb-[30px]">
          <div className="flex sm:gap-[5px] gap-[2px] items-end">
            <input
              type="checkbox"
              className="rounded-sm border-none outline-none w-[18px] h-[18px] accent-green-500 "
            />
            <h1 className="font-shippori text-black text-xs font-semibold text-opacity-70">
              Remember me
            </h1>
          </div>
          <h1
            className="font-shippori text-black text-xs font-semibold text-opacity-70 hover:underline
          cursor-pointer"
          >
            Forget Your Password?
          </h1>
        </div>
        <button
          className="w-full h-[40px] flex justify-center items-center bg-black text-white font-shippori
         font-normal text-[14px] uppercase opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out"
          onClick={handleLogin}
        >
          sign in
        </button>
        <div className="my-[30px] border-b-[1px] border-black border-opacity-20 w-full flex justify-center">
          <div
            className="px-[5px] font-shippori text-sm text-black text-opacity-70 font-bold translate-y-[7px]
           bg-white"
          >
            or Continue With
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-[20px] pt-[8px]">
          <div
            className="bg-gray-300 h-[40px] flex justify-center items-center cursor-pointer 
          hover:-translate-y-1 transition-all duration-200 ease-in-out hover:shadow-md"
          >
            <FaGoogle size={20} />
          </div>
          <div
            className="bg-gray-300 h-[40px] flex justify-center items-center cursor-pointer
          hover:-translate-y-1 transition-all duration-200 ease-in-out hover:shadow-md"
          >
            <FaFacebook size={20} />
          </div>
          <div
            className="bg-gray-300 h-[40px] flex justify-center items-center cursor-pointer
          hover:-translate-y-1 transition-all duration-200 ease-in-out hover:shadow-md"
          >
            <FaTwitter size={20} />
          </div>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto h-[50px] flex justify-between items-center sm:px-[10px] px-[5px]">
        <div className="sm:block hidden"></div>
        <h1 className="sm:text-sm text-xs font-shippori text-black ">
          Doesn't have a account yet?{" "}
          <Link to={"/signup"}>
            <h1 className="underline inline">Sign up</h1>
          </Link>
        </h1>
        <Link to={"/"}>
          <button
            className="sm:w-[40px] sm:h-[42px] w-[30px] h-[32px] bg-black text-white flex justify-center
          items-center opacity-80 hover:opacity-100"
          >
            <FaHome size={18} />
          </button>
        </Link>
      </div>

      <Alert show={show} title={title} isSuccess={isSuccess} />
      {showLoading && <Loading />}
    </div>
  );
};

export default Login;
