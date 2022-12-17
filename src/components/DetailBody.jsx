import React, { useEffect, useState } from "react";

import { detailBodyData } from "../utils/dummyData";
import LeftDetailBody from "./LeftDetailBody";
import RightDetailBody from "./RightDetailBody";

const { images } = detailBodyData;

const DetailBody = () => {
  return (
    <div className="w-screen min-h-screen flex md:flex-row flex-col md:pb-[0px] sm:pb-[20px] pb-[40px]">
      <LeftDetailBody images={images} />

      <RightDetailBody detailBodyData={detailBodyData} />
    </div>
  );
};

export default DetailBody;
