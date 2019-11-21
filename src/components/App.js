import React from "react";

class App extends React.Component {
  state = {
    todos: [
      { title: "Learn to code", done: true },
      { title: "Rule the world", done: false }
    ]
  };

  showAllTodos = () => {
    const filterTodos = this.state.todos.filter();
    this.setState({
      todos: filterTodos
    });
  };

  showTodosDone = () => {
    const filterTodos = this.state.todos.filter(todo => todo.done);
    this.setState({
      todos: filterTodos
    });
  };

  showTodosNotDone = () => {
    const filterTodos = this.state.todos.filter(todo => !todo.done);
    this.setState({
      todos: filterTodos
    });
  };

  handleChange = index => {
    const newTodos = [
      ...this.state.todos.slice(0, index),
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
  };

  handleChangeCheckbox = index => {
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

  handleSubmit = e => {
    e.preventDefault();
    const newTodos = [
      ...this.state.todos,
      { title: e.target[0].value, done: false }
    ];
    this.setState({
      todos: newTodos
    });
    // reset form
    document.getElementById("fm-add-todo").reset();
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-6">Todo List</h1>
          <div className="btn-group" role="group">
            <button className="btn btn-info btn-sm" onClick={this.showAllTodos}>
              All
            </button>
            <button
              className="btn btn-info btn-sm"
              onClick={this.showTodosDone}
            >
              Done
            </button>
            <button
              className="btn btn-info btn-sm"
              onClick={this.showTodosNotDone}
            >
              Not done
            </button>
          </div>
          <br />
          <br />
          <ul className="list-group">
            {this.state.todos.map((todo, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <input
                    type="checkbox"
                    checked={todo.done ? "checked" : ""}
                    className="form-check-input"
                    onChange={() => this.handleChangeCheckbox(index)}
                  />
                  <span className={todo.done ? "done" : ""}>{todo.title}</span>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm float-right"
                    onClick={() => this.handleChange(index)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <hr className="my-4" />
          <form id="fm-add-todo" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="lblTodo">Add a todo : </label>
              <input type="text" className="form-control" placeholder="Title" />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
