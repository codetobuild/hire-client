import React from "react";
// import { PropTypes } from "prop-types";
import PropTypes from "prop-types";

const Button = (props) => {
  const { label, btnType, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  btnType: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "BUTTON",
  btnType: "button",
  onClick: () => {},
};
export default Button;
