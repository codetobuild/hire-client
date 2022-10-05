import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import StudentDetails from "../features/students/StudentDetails";

const StudentDetailsPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <StudentDetails />
      </div>
    </Container>
  );
};

export default StudentDetailsPage;
