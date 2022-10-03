import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import JobsList from "../features/jobs/JobsList";
import Sidebar from "../components/Siderbar.component";

const JobsListPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <JobsList />
      </div>
    </Container>
  );
};

export default JobsListPage;
