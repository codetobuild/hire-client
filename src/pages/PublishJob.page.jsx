import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import PublishJob from "../features/jobs/PublishJob";

const PublishJobPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <PublishJob />
      </div>
    </Container>
  );
};

export default PublishJobPage;
