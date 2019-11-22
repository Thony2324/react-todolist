import React from "react";
import Filter from "./Filter";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

class App extends React.Component {
  state = {
    filter: "all", // done, notdone
    todos: [
      { title: "Learn CSS", done: true },
      { title: "Learn Javascript", done: true },
      { title: "Learn React", done: false },
      { title: "Learn Redux", done: false }
    ]
  };

  addTodo = title => {
    const newTodo = {
      title: title,
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  deleteTodo = index => {
    const newTodos = [
      ...this.state.todos.slice(0, index),
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
  };

  markAsDone = index => {
    // create a copy of a todo (this.state.todos[index] get the todo at the index)
    // update du param 'done' which update the todo at the same index
    const todoCopy = {
      ...this.state.todos[index],
      done: !this.state.todos[index].done
    };
    // create a copie of the todos list
    const todosCopy = [...this.state.todos];
    // update a todo at the index with the copy
    todosCopy[index] = todoCopy;
    // update the state with the copy of the new todos list
    this.setState({ todos: todosCopy });
  };

  filterTodos = filter => {
    this.setState({
      filter: filter
    });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-6">Todo List</h1>
          <Filter filterTodos={this.filterTodos} />
          <ListTodos
            todos={this.state.todos}
            filter={this.state.filter}
            deleteTodo={this.deleteTodo}
            markAsDone={this.markAsDone}
          />
          <hr className="my-4" />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
