import React from "react";
import Container from "../../components/Container.component";
import Button from "../../components/Button.component";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobsList = () => {
  return (
    <Container>
      <div className="p-4">
        <div className="">
          <h1 className="text-2xl font-medium leading-tight">Applied Jobs</h1>
        </div>
        <div className="flex xs:flex-col md:flex-row xs:gap-0 md:gap-5 justify-start my-8">
          <div className="text-lg flex gap-2 justify-center items-center">
            <p>Sort by</p>
            <select className="outline-none border-2 border-slate-300 rounded-md px-2 py-1">
              <option>Most Recent</option>
              <option>Most Recent</option>
              <option>Most Recent</option>
            </select>
          </div>
          <div className="text-lg">Results (120)</div>
        </div>
        <AppliedJobCard />
        <AppliedJobCard />
        <AppliedJobCard />
        <AppliedJobCard />
        <AppliedJobCard />
      </div>
    </Container>
  );
};

export default AppliedJobsList;
