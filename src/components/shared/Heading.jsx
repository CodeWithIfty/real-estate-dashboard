import React from "react";

const Heading = ({ title, path }) => {
  console.log(title, path);
  return (
    <div className="p-5 flex justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      <h3 className="text-xl ">{path}</h3>
    </div>
  );
};

export default Heading;
