import React from "react";

const ActionPane = ({ children }) => {
  return <div className="flex a:start j:space-between">{children}</div>;
};

const Description = ({ children }) => {
  return <div className="flow">{children}</div>;
};

ActionPane.Description = Description;

export default ActionPane;
