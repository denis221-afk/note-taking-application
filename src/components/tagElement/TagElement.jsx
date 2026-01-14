import React from "react";
import TagImages from "../../assets/images/SideBar/Tag.svg";
const TagElement = () => {
  return (
    <>
      <li className="flex gap-1 items-center cursor-pointer py-4">
        <img src={TagImages} alt="TAG icon" />
        <span>All Cooking</span>
      </li>
    </>
  );
};

export default TagElement;
