import { useState } from "react";

import { FaBars, FaUserCircle } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu.component";

const Navbar = () => {
  const [hamberMenu, setHamberMenu] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 h-16 bg-blue-400 ">
      <div className="">
        <div className="text-black text-3xl font-bold">Hire</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="md:flex md:justify-center md:items-center w-12 h-12 xs:hidden">
          <FaUserCircle className="text-4xl" />
        </div>
        <div className="xs:block md:hidden">



\]\


n           <FaBars
            className="text-4xl cursor-pointer"
            onClick={() => {
              setHamberMenu((prev) => !prev);
            }}
          />
        </div>
      </div>
      {hamberMenu ? (
        <HamburgerMenu hamberMenu={hamberMenu} setHamberMenu={setHamberMenu} />
      ) : null}
    </div>
  );
};

export default Navbar;
