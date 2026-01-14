import React from "react";

// ui
import TagElement from "../tagElement/TagElement";

// images
import logoImages from "../../assets/images/SideBar/Logo Wrapper.png";
import HomeImages from "../../assets/images/SideBar/Home.svg";
import ArchiveImages from "../../assets/images/SideBar/Archive.svg";

const SideBar = () => {
  return (
    <div className="w-1/6 h-full border-r border-gray-500 px-1.5 py-4">
      <div>
        <img src={logoImages} alt="logo" />
      </div>
      <ul>
        <li className="flex gap-1 items-center cursor-pointer py-4">
          <img src={HomeImages} alt="Home icon" />
          <span>All Notes</span>
        </li>
        <li className="flex gap-1 items-center cursor-pointer">
          <img src={ArchiveImages} alt="Archive icon" />
          <span>Archived Notes</span>
        </li>
      </ul>
      <div className="w-full h-px bg-gray-500 mt-8"></div>

      <ul>
        <TagElement />
      </ul>
    </div>
  );
};

export default SideBar;
