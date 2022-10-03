import { useState, useEffect } from "react";

import { FaBars, FaUserCircle, FaAngleDoubleRight } from "react-icons/fa";

const Navbar = () => {
  const [hamberMenu, setHamberMenu] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 h-16 bg-blue-400 ">
      <div className="">
        <div className="text-black text-3xl font-bold">Hire</div>
      </div>
      <div className="">
        <div className="w-12 h-12 md:block xs:hidden">
          <FaUserCircle className="text-4xl" />
        </div>
        <div className="xs:block md:hidden">
          <FaBars
            className="text-4xl cursor-pointer"
            onClick={() => {
              setHamberMenu((prev) => !prev);
            }}
          />
        </div>
      </div>
      {hamberMenu ? (
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
              <li className="p-2 text-center ">Home</li>
              <li className="p-2 text-center ">Home</li>
              <li className="p-2 text-center ">Home</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
