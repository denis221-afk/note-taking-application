import React from "react";
import loading from "../../../public/loading.svg";
const Loading = () => {
  return (
    <div className="bg-white z-50 absolute inset-0 flex items-center justify-center">
      <img width={100} src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
