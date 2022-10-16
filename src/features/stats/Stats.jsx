import { useState } from "react";
import Button from "../../components/Button.component";
import Container from "../../components/Container.component";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <Container>
      <div className="p-4 flex justify-around flex-wrap gap-4">
        <Link to="/stats/students">
          <div className="bg-white p-6 w-56 h-56 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer flex flex-col justify-center items-center">
            <div>
              <FaUsers className="text-5xl" />
            </div>
            <div>
              <p className="text-lg font-medium text-center">
                View students placement statistics
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Stats;
