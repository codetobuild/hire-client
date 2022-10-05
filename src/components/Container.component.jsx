import React from "react";

const Container = (props) => {
  return (
    <div className="bg-gray-100 container mx-auto max-w-screen-2xl relative">
      {props.children}
    </div>
  );
};

export default Container;
