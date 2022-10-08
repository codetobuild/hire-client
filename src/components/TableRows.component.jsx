import React from "react";

import { Link } from "react-router-dom";

const TableRows = (props) => {
  const { data: rowsData } = props;
  return (
    <tbody>
      {rowsData.map((row, idx) => {
        return (
          <tr className="border-b bg-white text-gray-700 text-md" key={idx}>
            {row.map((item, idx) => {
              if (item.type == "link") {
                return (
                  <td className="py-4 px-6" key={item.label + idx}>
                    <Link
                      to={item.url}
                      className="font-medium text-blue-600 hover:underline">
                      {item.label}
                    </Link>
                  </td>
                );
              }
              return (
                <td className="py-4 px-6 text-md" key={idx}>
                  {item.label}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRows;
