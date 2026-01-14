import React from "react";
import loading from "../../../public/loading.svg";
const Loading = () => {
  return (
    <div className="inset-0 bg-white z-50 fixed flex items-center justify-center">
      <img width={100} src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
