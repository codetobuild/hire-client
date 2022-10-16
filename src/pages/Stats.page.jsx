import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import Stats from "../features/stats/Stats";

const ProfileFormPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <Stats />
      </div>
    </Container>
  );
};

export default ProfileFormPage;
