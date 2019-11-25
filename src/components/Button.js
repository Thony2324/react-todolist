import React from "react";
import classNames from "classnames";

const Button = ({ type, label, position, color, handleClick }) => {
  const btnClasses = classNames("btn btn-sm", {
    "float-right": position === "right",
    [`btn-${color}`]: true
  });

  return (
    <button type={type} className={btnClasses} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
