import React from "react";
import TodoItem from "./TodoItem";

const ListTodos = ({ todos, filter, deleteTodo, markAsDone }) => {
  var shownTodos = todos.filter(todo => {
    switch (filter) {
      case "done":
        return todo.done;
      case "notdone":
        return !todo.done;
      default:
        return true;
    }
  });

  if (shownTodos.length === 0) {
    return <div>Pas de todo !</div>;
  }
  return (
    <ul className="list-group">
      {shownTodos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            markAsDone={markAsDone}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default ListTodos;
