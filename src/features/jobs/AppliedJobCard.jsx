import React from "react";
import Button from "../../components/Button.component";

const AppliedJobCard = () => {
  return (
    <div className="block xs:px-2 xs:py-4 md:px-4 rounded-lg drop-shadow-sm hover:drop-shadow-lg ease-in-out duration-300 bg-white border-b-2 border-slate-200 max-w-full mb-4">
      <div className="flex justify-between items-center flex-wrap">
        <div className="grow mb-3">
          <h5 className="text-gray-900 text-md font-medium">Company Name</h5>
          <p className="text-gray-600 font-medium text-base break-all">
            Software Development Engineer
          </p>
          <p className="text-gray-600 text-base break-all">Internship + FTE</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-cyan-600 text-white rounded">
              Dream Tier
            </span>
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">
              Applied on : 12 oct, 10:30 pm
            </span>
          </div>
        </div>

        <div className="flex xs:flex-row sm:flex-col md:flex-row gap-4 flex-wrap justify-between items-center">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
