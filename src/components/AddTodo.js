import React from "react";
import Button from "./Button";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <form id="fm-add-todo" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="lblTodo">Add a todo : </label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <Button type="submit" label="Add" position="" color="primary" />
      </form>
    );
  }
}

export default AddTodo;
