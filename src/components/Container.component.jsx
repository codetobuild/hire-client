import React from "react";

const Container = (props) => {
  return (
    <div className="bg-gray-100 container mx-auto max-w-screen-2xl min-h-screen	 relative">
      {props.children}
    </div>
  );
};

export default Container;
