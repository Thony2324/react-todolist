import React from "react";
import Button from "./Button";

const TodoItem = ({ index, todo, deleteTodo, markAsDone }) => {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        checked={todo.done ? "checked" : ""}
        className="form-check-input"
        onChange={() => markAsDone(index)}
      />
      <span className={todo.done ? "done" : ""}>{todo.title}</span>
      <Button
        type="button"
        label="Delete"
        position="right"
        color="danger"
        handleClick={() => deleteTodo(index)}
      />
    </li>
  );
};

export default TodoItem;
