import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaUserCircle,
  FaUserCog,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu.component";

const NavAvatarModal = () => {
  return (
    <div className="w-72 bg-white absolute z-10 top-[130%] right-0 rounded-lg py-5 px-7 drop-shadow-2xl  xs:hidden md:block">
      <Link to="#">
        <div className="flex gap-5 justify-start items-center py-3 border-b-2 border-gray-300">
          <FaUserCog className="text-gray-700 text-2xl" />
          <p className="text-lg text-gray-700">Account</p>
        </div>
      </Link>
      <Link to="#">
        <div className="flex gap-5 justify-start items-center py-3 border-b-2 border-gray-300">
          <FaUserCog className="text-gray-700 text-2xl" />
          <p className="text-lg text-gray-700">Account</p>
        </div>
      </Link>
      <Link to="#">
        <div className="flex gap-5 justify-start items-center py-3 border-b-2 border-gray-300">
          <FaSignInAlt className="text-gray-700 text-2xl" />
          <p className="text-lg  text-gray-700">Sign In</p>
        </div>
      </Link>
      <Link to="#">
        <div className="flex gap-5 justify-start items-center py-3">
          <FaSignOutAlt className="text-gray-700 text-2xl" />
          <p className="text-lg  text-gray-700">Sign out</p>
        </div>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [hamberMenu, setHamberMenu] = useState(false);
  const [avatarModal, setAvatarModal] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 h-16 bg-blue-400 ">
      <div className="">
        <div className="text-black text-3xl font-bold">Hire</div>
      </div>
      <div className="flex justify-between items-center relative">
        <div className="md:flex md:justify-center md:items-center w-12 h-12 xs:hidden">
          <FaUserCircle
            className="text-4xl cursor-pointer"
            onClick={() => {
              setAvatarModal((prev) => !prev);
            }}
          />
        </div>
        <div className="xs:block md:hidden">
          <FaBars
            className="text-4xl cursor-pointer"
            onClick={() => {
              setHamberMenu((prev) => !prev);
            }}
          />
        </div>
        {avatarModal ? <NavAvatarModal /> : null}
      </div>
      {hamberMenu ? (
        <HamburgerMenu hamberMenu={hamberMenu} setHamberMenu={setHamberMenu} />
      ) : null}
    </div>
  );
};

export default Navbar;
