import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { BiErrorCircle } from "react-icons/bi";

const Alert = ({ show, title, isSuccess }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setShowAlert(show);
  }, [show]);

  const bg = isSuccess ? "bg-green-100" : "bg-red-100";

  return (
    <>
      {showAlert && (
        <div
          className={`z-[100] fixed sm:bottom-5 sm:left-5 bottom-1 left-1 sm:w-[300px] sm:h-[50px] w-[250px] h-[40px] rounded-md
    border-[1px] border-black border-opacity-5 shadow-md flex justify-between items-center px-[10px] ${bg}`}
        >
          <div className="flex gap-[10px] items-center">
            {isSuccess ? (
              <AiOutlineCheckCircle className="text-4xl text-green-500" />
            ) : (
              <BiErrorCircle className="text-4xl text-red-500" />
            )}

            <h1 className="sm:text-base text-sm text-black font-shippori font-bold">
              {title}
            </h1>
          </div>
          <button onClick={() => setShowAlert(false)}>
            <HiOutlineXMark className="text-lg text-black" />
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
