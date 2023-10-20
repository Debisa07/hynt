import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className="w-[200px] h-[200px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <InfinitySpin width="400" color="#F1C093" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
