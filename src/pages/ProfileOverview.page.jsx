import React from "react";
import Container from "../components/Container.component";
import Navbar from "../components/Navbar.component";
import Sidebar from "../components/Siderbar.component";
import ApplyForm from "../features/jobs/ApplyForm";
import ProfileForm from "../features/profile/ProfileForm";
import ProfileOverview from "../features/profile/ProfileOverview";

const ProfileOverviewPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <ProfileOverview />
      </div>
    </Container>
  );
};

export default ProfileOverviewPage;
