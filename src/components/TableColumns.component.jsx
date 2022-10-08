import React from "react";

const TableColumns = (props) => {
  const { data: colsData } = props;
  return (
    <thead className="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {colsData.map((item, idx) => (
          <th scope="col" className="py-3 px-6" key={idx}>
            {item.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableColumns;
