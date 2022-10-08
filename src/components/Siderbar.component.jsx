import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaUserEdit,
  FaClipboardCheck,
  FaChartPie,
} from "react-icons/fa";
import { useLocation, NavLink } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  // console.log(location);
  const currentActiveSideNav = location.pathname.split("/");
  // console.log(currentActiveSideNav);

  return (
    <div className="xs:hidden md:block w-20 mt-12 ml-2">
      <NavLink to="/home">
        <div className="p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl">
          <FaHome className="text-3xl" />
          <p className="font-normal">Home</p>
        </div>
      </NavLink>
      <NavLink to="/jobs">
        <div
          className={`p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl ${
            currentActiveSideNav[1] == "jobs" &&
            currentActiveSideNav[2] != "applied"
              ? "bg-blue-200"
              : ""
          }`}>
          <FaBriefcase className="text-3xl" />
          <p className="font-normal">Jobs</p>
        </div>
      </NavLink>
      <NavLink to="/jobs/applied">
        <div
          className={`p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl ${
            currentActiveSideNav[1] == "jobs" &&
            currentActiveSideNav[2] == "applied"
              ? "bg-blue-200"
              : ""
          }`}>
          <FaClipboardCheck className="text-3xl" />
          <p className="font-normal">Applied</p>
        </div>
      </NavLink>
      <NavLink to="/students/stats">
        <div
          className={`p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl ${
            currentActiveSideNav[1] == "students" &&
            currentActiveSideNav[2] == "stats"
              ? "bg-blue-200"
              : ""
          }`}>
          <FaChartPie className="text-3xl" />
          <p className="font-normal">Stats</p>
        </div>
      </NavLink>
      <NavLink to="/profile">
        <div
          className={`p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl ${
            currentActiveSideNav[1] == "profile" ? "bg-blue-200" : ""
          }`}>
          <FaUserEdit className="text-3xl" />
          <p className="font-normal">Profile</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
