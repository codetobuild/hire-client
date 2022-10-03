import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaUserEdit,
  FaClipboardCheck,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="xs:hidden md:block w-20 mt-12 ml-2">
      <div className="p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl">
        <FaHome className="text-3xl" />
        <p className="font-normal">Home</p>
      </div>
      <div className="p-2 bg-blue-200 flex flex-col justify-center items-center cursor-pointer rounded-xl">
        <FaBriefcase className="text-3xl" />
        <p className="font-normal">Jobs</p>
      </div>
      <div className="p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl">
        <FaClipboardCheck className="text-3xl" />
        <p className="font-normal">Applied</p>
      </div>
      <div className="p-2 flex flex-col justify-center items-center cursor-pointer rounded-xl">
        <FaUserEdit className="text-3xl" />
        <p className="font-normal">Profile</p>
      </div>
    </div>
  );
};

export default Sidebar;
