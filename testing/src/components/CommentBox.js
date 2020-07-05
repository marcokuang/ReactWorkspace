import React from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions";

class CommentBox extends React.Component {
  state = { comment: "" };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    // call action creator, and save comment
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { saveComment })(CommentBox);