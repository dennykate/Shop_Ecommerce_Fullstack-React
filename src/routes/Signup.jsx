import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Alert, Loading } from "../components/";
import { useNavigate } from "react-router-dom";

import {
  Input,
  BirthdateSelectBox,
  GenderRadioBox,
  RegionSelectBox,
} from "../components";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [confirmEmailAddress, setConfirmEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleSingup = async () => {
    if (emailAddress != confirmEmailAddress) {
      console.log("error email");
      return;
    } else if (password != confirmPassword) {
      console.log("error password");
      return;
    }

    const body = {
      firstName,
      lastName,
      birthDate,
      region,
      gender,
      email: emailAddress,
      password,
    };

    setShowLoading(true);

    const response = await fetch(BASE_URL + "user/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    if (data.message == "require all data") {
      authFail();
    } else if (data.message == "signup successfull") {
      authSuccess(data.data);
    } else if (data.message == "user already exists") {
      userAlreadyExists();
    }
  };

  const authFail = () => {
    setShow(true);
    setTitle("Require All Data");
    setIsSuccess(false);
    setShowLoading(false);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const authSuccess = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setShow(true);
    setTitle("Signup Success");
    setIsSuccess(true);
    setShowLoading(false);

    setTimeout(() => {
      setShow(false);
      navigate("/");
    }, 1000);
  };

  const userAlreadyExists = () => {
    setShow(true);
    setTitle("User Already Exists");
    setIsSuccess(false);
    setShowLoading(false);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

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
            <Input
              className=""
              label="First Name"
              value={firstName}
              setValue={setFirstName}
            />
            <Input
              className=""
              label="Last Name"
              value={lastName}
              setValue={setlastName}
            />
          </div>
          <div className="mb-[20px]">
            <BirthdateSelectBox setValue={setBirthDate} />
          </div>
          <div className="w-full mb-[20px]">
            <RegionSelectBox setValue={setRegion} />
          </div>
          <div className="mb-[25px] mt-[10px]">
            <GenderRadioBox setValue={setGender} />
          </div>
          <Input
            label="Email Address"
            className="w-full mb-[20px]"
            value={emailAddress}
            setValue={setEmailAddress}
          />
          <Input
            label="Confirm Email Address"
            className="w-full mb-[20px]"
            value={confirmEmailAddress}
            setValue={setConfirmEmailAddress}
          />
          <Input
            label="Password"
            className="w-full mb-[20px]"
            type
            value={password}
            setValue={setPassword}
          />
          <Input
            label="Confirm Password"
            className="w-full mb-[20px]"
            type
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <button
            className="w-full mt-[50px] mb-[20px] h-[40px] flex justify-center items-center bg-black
        text-white uppercase opacity-80 hover:opacity-100"
            onClick={handleSingup}
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
          items-center opacity-80 hover:opacity-100 absolute bottom-0 right-1"
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

export default Signup;
