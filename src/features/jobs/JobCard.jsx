import React from "react";
import Button from "../../components/Button.component";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="block xs:px-2 xs:py-4 md:px-4 rounded-lg drop-shadow-sm hover:drop-shadow-lg ease-in-out duration-200 bg-white border-b-2 border-slate-200 max-w-full mb-4">
      <div className="flex gap-x-2 xs:justify-left xs:items-start xs:flex-col md:flex-row">
        <h5 className="text-gray-900 text-xl font-medium mb-1">Company Name</h5>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-cyan-600 text-white rounded">
            Dream Tier
          </span>
          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">
            Actively hiring
          </span>
          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">
            Apply Deadline : 12 oct
          </span>
        </div>
      </div>
      <p className="text-gray-800 font-medium text-base break-all">
        Role: Software Development Engineer
      </p>
      <div className="flex">
        <p className="text-gray-900 text-base break-all">
          Internship + FTE ~ CTC 25 Lpa
        </p>
      </div>
      <p className="text-gray-700 text-base break-all  mb-4 ">
        About the company Some quick example text to build on the card title and
        make up the bulk of the card's content. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sequi, neque....
      </p>

      <div className="flex gap-4">
        <Link to="/jobs/jobId">
          <Button label="View" />
        </Link>
        <Link to="/jobs/apply/jobId">
          <Button label="Apply" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
