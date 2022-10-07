import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { inputType, id, placeholder } = props;
  return (
    <input
      type={inputType}
      className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id={id}
      name={id}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  inputType: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  inputType: "text",
  id: "unspecified",
  placeholder: "",
};

export default Input;
