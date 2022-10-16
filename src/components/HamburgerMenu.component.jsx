import React from "react";

import { FaBars, FaUserCircle, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const HamburgerMenu = (props) => {
  const { setHamberMenu } = props;
  return (
    <div className="xs:block md:hidden w-3/4 h-full fixed top-0 right-0 bg-blue-200 drop-shadow-lg z-50">
      <div className="mb-4">
        <FaAngleDoubleRight
          className="text-4xl cursor-pointer"
          onClick={() => {
            setHamberMenu((prev) => !prev);
          }}
        />
      </div>
      <div className="flex flex-col gap-x-2 justify-center items-center mb-4">
        <FaUserCircle className="text-4xl" />
        <p className="text-lg">Firstname Lastname</p>
      </div>
      <div className="h-full overflow-x-auto">
        <ul>
          <li className="p-2 text-center text-md font-medium">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="p-2 text-center text-md font-medium">
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li className="p-2 text-center text-md font-medium">
            <NavLink to="/jobs/applied">Applied</NavLink>
          </li>
          <li className="p-2 text-center text-md font-medium">
            <NavLink to="/stats">Stats</NavLink>
          </li>
          <li className="p-2 text-center text-md font-medium">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
