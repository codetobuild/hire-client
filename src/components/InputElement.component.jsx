import React from "react";

const InputElement = (props) => {
  const { type } = props;
  switch (type) {
    case "text":
      return <input {...props} />;
    case "password":
      return <input {...props} />;
    case "textarea":
      return <textarea {...props}>{props.value}</textarea>;
    case "number":
      return <input {...props} />;
    case "email":
      return <input {...props} />;
    case "select":
      const { type, options, placeholder, ...restProps } = props;
      return (
        <select {...restProps}>
          <option>{placeholder}</option>
          {options.map((item, idx) => (
            <option value={item.value} key={idx}>
              {item.label}
            </option>
          ))}
        </select>
      );

    default:
      return null;
  }
};

export default InputElement;
