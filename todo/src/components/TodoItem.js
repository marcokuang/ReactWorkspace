import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

class TodoItem extends React.Component {
  onCheckboxClicked = () => {
    const todo = this.props.value;
    this.props.toggleTodo(todo.id);
  };
  render() {
    const todo = this.props.value;
    return (
      <div className={`ui checkbox field`}>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={this.onCheckboxClicked}
        />
        <label
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </label>
      </div>
    );
  }
}

export default connect(null, { toggleTodo })(TodoItem);
