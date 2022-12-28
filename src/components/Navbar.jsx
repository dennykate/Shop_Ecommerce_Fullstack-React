import React, { useEffect, useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state) => state.carts);
  const [showNavbar, setShowNavbar] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const userData = localStorage.getItem("userData");

    setUserData(JSON.parse(userData));
  };

  const logOut = () => {
    localStorage.clear();

    checkAuth();
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="w-full h-[60px] bg-white fixed top-0 shadow-sm z-20">
        <div className="max-w-[1200px] md:px-[20px] sm:px-[20px] px-[10px] h-full flex justify-between items-center mx-auto ">
          <div className="gap-[30px] items-center md:flex hidden">
            <Link to={"/"}>
              <h1
                className="text-black font-shippori font-semibold text-xs uppercase cursor-pointer
          hover:text-black"
              >
                Home
              </h1>
            </Link>
            <h1
              className="text-[#8F8F8F] font-shippori font-semibold text-xs uppercase cursor-pointer
          hover:text-black"
            >
              Detail
            </h1>
            <h1
              className="text-[#8F8F8F] font-shippori font-semibold text-xs uppercase cursor-pointer
          hover:text-black"
            >
              Pages
            </h1>
            <h1
              className="text-[#8F8F8F] font-shippori font-semibold text-xs uppercase cursor-pointer
          hover:text-black"
            >
              Elements
            </h1>
          </div>

          <Link to={"/"}>
            <h1 className="text-xl font-extrabold text-black font-shippori uppercase ">
              shop
            </h1>
          </Link>

          <div className="md:flex hidden items-center gap-[30px]">
            <div className="flex gap-[4px] items-center cursor-pointer">
              <FiSearch size={13} color="black" />
              <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                Search
              </h1>
            </div>
            <Link to="/cart">
              <div className="flex gap-[4px] items-center cursor-pointer relative">
                <FiShoppingCart size={13} color="black" />
                <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                  Cart
                </h1>

                {carts.length > 0 && (
                  <div
                    className="w-[20px] h-[20px] bg-red-500 rounded-md absolute -top-[16px] -right-[16px] text-white 
                text-[10px] flex justify-center items-center "
                  >
                    {carts.length}
                  </div>
                )}
              </div>
            </Link>
            {userData?.email ? (
              <div
                onClick={logOut}
                className="flex gap-[4px] items-center cursor-pointer"
              >
                <FiLogOut size={16} color="black" />
                <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                  Logout
                </h1>
              </div>
            ) : (
              <Link to={"/login"}>
                <div className="flex gap-[4px] items-center cursor-pointer">
                  <MdPersonOutline size={16} color="black" />
                  <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                    Login
                  </h1>
                </div>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-[20px] md:hidden ">
            <Link to="/cart">
              <button
                className="flex items-center justify-center relative"
                onClick={handleShowNavbar}
              >
                {carts.length > 0 && (
                  <div
                    className="absolute -top-[15px] -right-[15px] w-[20px] h-[20px] bg-red-500 flex justify-center 
                items-center text-white text-xs rounded-md"
                  >
                    {carts.length}
                  </div>
                )}
                <FiShoppingCart size={20} color="black" />
              </button>
            </Link>

            <button
              className="flex items-center justify-center "
              onClick={handleShowNavbar}
            >
              <HiOutlineBars3 size={25} color="black" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-[60px] w-full py-[30px] bg-[#F3F3F3] md:hidden flex justify-center 
        md:items-center items-start  transition-all duration-200 ease-in-out sm:px-[20px] px-[10px]
      ${showNavbar ? "translate-y-0" : "-translate-y-[300px]"} z-10`}
      >
        <div className="flex flex-col gap-[25px] sm:items-center items-start w-full">
          <Link to="/">
            <h1
              className="text-black font-shippori font-semibold text-sm uppercase cursor-pointer
          hover:text-black"
            >
              Home
            </h1>
          </Link>
          <h1
            className="text-black font-shippori font-semibold text-sm uppercase cursor-pointer
          hover:text-black"
          >
            Detail
          </h1>
          <h1
            className="text-black font-shippori font-semibold text-sm uppercase cursor-pointer
          hover:text-black"
          >
            Pages
          </h1>
          <h1
            className="text-black font-shippori font-semibold text-sm uppercase cursor-pointer
          hover:text-black"
          >
            Elements
          </h1>
          <div className="flex sm:justify-evenly justify-between items-center w-full mt-[15px]">
            <div className="flex gap-[4px] items-center">
              <FiSearch size={13} color="black" />
              <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                Search
              </h1>
            </div>
            {userData?.email ? (
              <button onClick={logOut} className="flex gap-[4px] items-center">
                <FiLogOut size={16} color="black" />
                <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                  LogOut
                </h1>
              </button>
            ) : (
              <Link to={"/login"}>
                <div className="flex gap-[4px] items-center">
                  <MdPersonOutline size={16} color="black" />
                  <h1 className="text-black text-xs font-shippori uppercase font-semibold">
                    Login
                  </h1>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
