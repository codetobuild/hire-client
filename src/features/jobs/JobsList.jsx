import React from "react";
import Button from "../../components/Button.component";
import Container from "../../components/Container.component";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";

const JobsList = () => {
  return (
    <Container>
      <div className="p-4">
        <div className="">
          <h1 className="text-2xl font-medium leading-tight">
            Search for Jobs
          </h1>
        </div>
        <div className="flex flex-col items-start gap-4 my-8">
          <div>
            <Link to="/jobs/publish">
              <Button label="Publish new job" />
            </Link>
          </div>
          <div className="text-lg flex gap-2 justify-center items-center">
            <p>Sort by</p>
            <select className="outline-none border-2 border-slate-300 rounded-md px-2 py-1">
              <option>Most Recent</option>
              <option>Most Recent</option>
              <option>Most Recent</option>
            </select>
          </div>
          {/* <div className="text-lg">Results (120)</div> */}
        </div>
        <div className="">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </Container>
  );
};

export default JobsList;
