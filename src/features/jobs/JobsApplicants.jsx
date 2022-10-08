import React from "react";
import Container from "../../components/Container.component";
import { Link } from "react-router-dom";
import { tableData } from "./formData";
import TableRows from "../../components/TableRows.component";
import TableColumns from "../../components/TableColumns.component";

const Table = (props) => {
  const { tableData } = props;
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        <p>{tableData.caption.primary}</p>
      </caption>
      <TableColumns {...tableData.cols} />
      <TableRows {...tableData.rows} />
    </table>
  );
};

const JobsApplicants = () => {
  return (
    <Container>
      <div className="p-4 ">
        <div className="overflow-x-auto relative shadow-md rounded-lg">
          <Table tableData={tableData} />
        </div>
      </div>
    </Container>
  );
};

export default JobsApplicants;
