import React from "react";
import Container from "../../components/Container.component";

const TableRow = () => {
  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Apple MacBook Pro 17"
      </th>
      <td className="py-4 px-6">19UCS104</td>
      <td className="py-4 px-6">Placed</td>
      <td className="py-4 px-6">Google</td>
      <td className="py-4 px-6">Dream</td>
      <td className="py-4 px-6 text-right">
        <a
          href="#"
          className="text-md font-medium text-blue-600 dark:text-blue-500 hover:underline">
          View or Edit
        </a>
      </td>
    </tr>
  );
};

const StudentStats = () => {
  return (
    <Container>
      <div className="p-4 ">
        <div className="overflow-x-auto relative shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Students Status
            </caption>
            <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Student name
                </th>
                <th scope="col" className="py-3 px-6">
                  Enrollment
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  company
                </th>
                <th scope="col" className="py-3 px-6">
                  Tier
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(30).fill(0)].map((d, k) => (
                <TableRow key={k} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default StudentStats;
