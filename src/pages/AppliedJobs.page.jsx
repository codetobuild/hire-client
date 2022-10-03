import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import AppliedJobsList from "../features/jobs/AppliedJobsList";

const AppliedJobsPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <AppliedJobsList />
      </div>
    </Container>
  );
};

export default AppliedJobsPage;
