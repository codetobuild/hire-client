import React from "react";
import Container from "../../components/Container.component";
import Button from "../../components/Button.component";
import { Link } from "react-router-dom";

const ProfileOverview = () => {
  return (
    <Container>
      <div className="p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-medium leading-tight">
            Profile Overview
          </h1>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto mb-4">
          <div className="mb-4">
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Name:</span> Firstname Lastname
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Email:</span> example@example.com
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Enrollment No:</span> 19UCS043
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Phone No:</span> 141351351513
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">College:</span> National Institute
              of Technology, Agartala
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Passing Year:</span> Bachelor of
              Technology
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Branch:</span> Computer Science and
              Engineering
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Current CGPA:</span> 8.10
            </p>
            <p className="xs:text-md md:text-lg">
              <span className="font-medium">Placement status:</span> Not placed
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/profile/update">
              <Button label={"Update"} />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileOverview;

// name
// enrollment number
// email
// phone number
// college name
// passing year
// current cgpa
// course
// branch
// is it placed in any company?
