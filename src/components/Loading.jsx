import React from "react";
import Lottie from "lottie-react";

import LoadingData from "../assets/loading.json";

const Loading = () => {
  return (
    <div
      className="w-screen h-screen bg-black bg-opacity-20 z-[50] fixed top-0 left-0 right-0 bottom-0 
    flex justify-center items-center"
    >
      <div className="w-[150px] mb-[100px]">
        <Lottie animationData={LoadingData} />
      </div>
    </div>
  );
};

export default Loading;
