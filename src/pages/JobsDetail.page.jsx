import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import JobsDetail from "../features/jobs/JobsDetail";

const JobsDetailPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <JobsDetail />
      </div>
    </Container>
  );
};

export default JobsDetailPage;
