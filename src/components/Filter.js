import React from "react";
import Button from "./Button";

const Filter = ({ filterTodos }) => {
  return (
    <div className="box-filters btn-group" role="group">
      <Button
        type=""
        label="All"
        position=""
        color="info"
        handleClick={() => filterTodos("all")}
      />
      <Button
        type=""
        label="Done"
        position=""
        color="info"
        handleClick={() => filterTodos("done")}
      />
      <Button
        type=""
        label="Not done"
        position=""
        color="info"
        handleClick={() => filterTodos("notdone")}
      />
    </div>
  );
};

export default Filter;
