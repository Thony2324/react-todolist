import React from "react";

const Button = ({ type, label, position, color, handleClick }) => {
  const classPosition = position === "right" ? "float-right" : "";
  return (
    <button
      type={type}
      className={`btn btn-sm btn-${color} ${classPosition}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
