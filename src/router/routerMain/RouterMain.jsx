import React from "react";

// Pages
import MainPages from "../../pages/mainPages/MainPages";
import SideBar from "../../components/sideBar/SideBar";
const RouterMain = () => {
  return (
    <div className="h-full flex">
      <SideBar />
      <MainPages />
    </div>
  );
};

export default RouterMain;
