import React from "react";
import PropTypes from "prop-types";

const InputLabel = (props) => {
  const { label, id } = props;
  return (
    <label htmlFor={id} className="block text-md font-medium text-gray-700">
      {label}
    </label>
  );
};

InputLabel.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

InputLabel.defaultProps = {
  label: "Unspecified label",
  id: "unspecified",
};

export default InputLabel;
