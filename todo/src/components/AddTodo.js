import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }

  onAddTodoButtonClicked = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="ui action input">
        <input
          type="text"
          onChange={(e) => this.setState({ input: e.target.value })}
          value={this.state.input}
        />
        <button
          className="ui button teal"
          onClick={this.onAddTodoButtonClicked}
        >
          {" "}
          Add Todo
        </button>
        {this.state.input}
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
