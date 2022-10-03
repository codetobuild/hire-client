import React from "react";
import Container from "../../components/Container.component";
import JobCard from "./JobCard";

const JobsList = () => {
  return (
    <Container>
      <div className="p-4">
        <div className="">
          <h1 className="text-2xl font-medium leading-tight">
            Search for Jobs
          </h1>
        </div>
        <div className="flex xs:flex-col md:flex-row xs:gap-0 md:gap-5 justify-start my-8">
          <div className="text-lg flex gap-2">
            <p>Sort by</p>
            <select className="font-medium">
              <option>Most Recent</option>
              <option>Most Recent</option>
              <option>Most Recent</option>
            </select>
          </div>
          <div className="text-lg">Results (120)</div>
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
