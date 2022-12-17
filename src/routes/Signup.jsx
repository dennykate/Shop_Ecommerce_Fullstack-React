import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import {
  Input,
  BirthdateSelectBox,
  GenderRadioBox,
  RegionSelectBox,
} from "../components";

const Signup = () => {
  return (
    <div className=" min-h-screen py-[20px] bg-[#f1f1f3]">
      <div className="w-full flex flex-col items-center">
        <h1 className="uppercase font-shippori text-xl font-[900] text-black">
          Shop
        </h1>
        <h1 className="text-xl text-black text-opacity-70 font-shippori font-semibold mt-[15px]">
          Sign Up To Your Account
        </h1>
      </div>
      <div className="max-w-[1000px] mx-auto relative ">
        <div className="my-[20px] max-w-[500px] sm:p-[30px] p-[5px] py-[30px] bg-white mx-auto shadow-sm">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px] mb-[20px]">
            <Input className="" label="First Name" />
            <Input className="" label="Last Name" />
          </div>
          <div className="mb-[20px]">
            <BirthdateSelectBox />
          </div>
          <div className="w-full mb-[20px]">
            <RegionSelectBox />
          </div>
          <div className="mb-[25px] mt-[10px]">
            <GenderRadioBox />
          </div>
          <Input label="Email Address" className="w-full mb-[20px]" />
          <Input label="Confirm Email Address" className="w-full mb-[20px]" />
          <Input label="Password" className="w-full mb-[20px]" type />
          <Input label="Confirm Password" className="w-full mb-[20px]" type />
          <button
            className="w-full mt-[50px] mb-[20px] h-[40px] flex justify-center items-center bg-black
        text-white uppercase opacity-80 hover:opacity-100"
          >
            sign up
          </button>
          <Link to={"/login"}>
            <h1 className="font-shippori text-xs text-black underline text-center">
              Have an account already?
            </h1>
          </Link>
        </div>
        <Link to={"/"}>
          <button
            className="sm:w-[40px] sm:h-[42px] w-[30px] h-[32px] bg-black text-white flex justify-center
          items-center opacity-80 hover:opacity-100 absolute bottom-0 right-0"
          >
            <FaHome size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
