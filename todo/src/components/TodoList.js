import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { toggleTodo } from "../actions";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    let todoList = [];

    if (this.props.filter === "all") {
      todoList = _.values(this.props.todos).map((todo) => {
        return <TodoItem value={todo} key={todo.id} />;
      });
    } else if (this.props.filter === "completed") {
      todoList = _.filter(this.props.todos, { completed: true }).map((todo) => {
        return <TodoItem value={todo} key={todo.id} />;
      });
    } else {
      todoList = _.filter(this.props.todos, { completed: false }).map(
        (todo) => {
          return <TodoItem value={todo} key={todo.id} />;
        }
      );
    }

    return (
      <div className="ui form">
        <div className="grouped fields">{todoList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter.filter,
  };
};

export default connect(mapStateToProps)(TodoList);
