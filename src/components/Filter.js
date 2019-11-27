import React from "react";
import Button from "./Button";

const Filter = ({ filterTodos }) => {
  return (
    <div className="box-filters btn-group" role="group">
      <Button
        type=""
        label="All"
        data-test-id="button-all"
        position=""
        color="info"
        handleClick={() => filterTodos("all")}
      />
      <Button
        type=""
        label="Done"
        data-test-id="button-done"
        position=""
        color="info"
        handleClick={() => filterTodos("done")}
      />
      <Button
        type=""
        label="Not done"
        data-test-id="button-notdone"
        position=""
        color="info"
        handleClick={() => filterTodos("notdone")}
      />
    </div>
  );
};

export default Filter;
