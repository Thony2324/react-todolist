import React from "react";
import Button from "./Button";
import Filter from "./Filter";
import AddTodo from "./AddTodo";

class App extends React.Component {
  state = {
    todos: [
      { title: "Learn to code", done: true },
      { title: "Rule the world", done: false }
    ]
  };

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({ todos: res.data }));
  // }

  addTodo = title => {
    const newTodo = {
      title: title,
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });

    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title: title,
    //   completed: false
    // })
    //   .then(res => this.setState({
    //     todos: [...this.state.todos, res.data]
    //   }));
  };

  deleteTodo = index => {
    const newTodos = [
      ...this.state.todos.slice(0, index),
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({ todos: newTodos });
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.index !== index)]
    // })
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

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-6">Todo List</h1>
          <Filter />
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
                  <Button
                    type="button"
                    label="Delete"
                    position="right"
                    color="danger"
                    handleClick={() => this.deleteTodo(index)}
                  />
                  {/* <button
                    type="button"
                    className="btn btn-danger btn-sm float-right"
                    onClick={() => this.handleChange(index)}
                  >
                    Delete
                  </button> */}
                </li>
              );
            })}
          </ul>
          <hr className="my-4" />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
