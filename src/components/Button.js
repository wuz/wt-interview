import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className="button typescale:1 flex a:center j:center"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
