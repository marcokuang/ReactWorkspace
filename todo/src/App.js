import React from "react";
import { connect } from "react-redux";
import Counter from "./components/Counter";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="ui countainer">
        <h1 className="ui header">Todo List</h1>

        <AddTodo />
        <TodoList />
        <Filters />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  };
};

export default connect(mapStateToProps)(App);
