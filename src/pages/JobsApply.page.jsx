import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import ApplyForm from "../features/jobs/ApplyForm";

const JobsApplyPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <ApplyForm />
      </div>
    </Container>
  );
};

export default JobsApplyPage;
