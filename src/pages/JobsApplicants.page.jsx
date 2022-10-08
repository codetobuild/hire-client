import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import AppliedJobsList from "../features/jobs/AppliedJobsList";
import JobsApplicants from "../features/jobs/JobsApplicants";

const JobsApplicantsPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <JobsApplicants />
      </div>
    </Container>
  );
};

export default JobsApplicantsPage;
