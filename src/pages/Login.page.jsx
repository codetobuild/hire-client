import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import JobsList from "../features/jobs/JobsList";
import Sidebar from "../components/Siderbar.component";
import LoginForm from "../features/login/LoginForm";

const JobsListPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default JobsListPage;
