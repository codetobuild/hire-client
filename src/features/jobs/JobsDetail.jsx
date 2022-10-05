import React from "react";
import Container from "../../components/Container.component";
import { FaFilePdf } from "react-icons/fa";
import Button from "../../components/Button.component";
import { Link } from "react-router-dom";

const JobsDetail = () => {
  return (
    <Container>
      <div className="p-4">
        <div className="">
          <h1 className="text-2xl font-medium leading-tight">
            Job Description
          </h1>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-full mb-4">
          <div className="mb-6">
            <p>
              <span className="font-medium text-lg">Company Name:</span> Google
              India
            </p>
            <p>
              <span className="font-medium text-lg">About company:</span> Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              explicabo architecto veritatis distinctio sit id labore officia
              optio amet. Voluptate odio aut inventore aliquam? Neque architecto
              dolores atque molestiae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo, atque.
            </p>
          </div>
          <div className="mb-6">
            <p>
              <span className="font-medium text-lg">Role:</span> Software
              Development Engineer
            </p>
            <p>
              <span className="font-medium text-lg">Tier:</span> Dream
            </p>
            <p>
              <span className="font-medium text-lg">CTC range:</span> 16 - 18
              lpa
            </p>
            <p>
              <span className="font-medium text-lg">CTC Beak-down:</span> 10 lpa
              base, 1 lpa relocation bonus
            </p>
            <p>
              <span className="font-medium text-lg">Eligible Course:</span>B.
              Tech, M.Tech
            </p>
            <p>
              <span className="font-medium text-lg">Eligible Branches:</span>
              CSE, ECE, EE, EI, IIIT
            </p>
            <p>
              <span className="font-medium text-lg">
                Other Eligible criteria:
              </span>
              No active backlog, above 7 CGPA
            </p>
            <p>
              <span className="font-medium text-lg">Location:</span>
              Bangalore, Hyderabad, Noida
            </p>
            <p>
              <span className="font-medium text-lg">Apply Deadline:</span>
              11:49 pm 12 October
            </p>
            <p>
              <span className="font-medium text-lg">Other Details:</span>
              Drive date: 20 oct, Interview: 22 oct
            </p>
          </div>
          <div className="mb-6">
            <p className="font-medium text-lg">Job Decription attachments</p>
            <div className="flex gap-4 flex-wrap">
              <button>
                <FaFilePdf className="text-6xl" />
              </button>
              <button>
                <FaFilePdf className="text-6xl" />
              </button>
              <button>
                <FaFilePdf className="text-6xl" />
              </button>
            </div>
          </div>
          <div>
            <Link to="/jobs/apply/:jobId">
              <Button label="Apply" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobsDetail;
