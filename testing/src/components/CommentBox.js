import React from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "../actions";
import requireAuth from "components/requireAuth";

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

  handleFetchButtonClicked = (event) => {
    event.preventDefault();
    this.props.fetchComments();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button type="submit">Submit Comment</button>
          <button onClick={this.handleFetchButtonClicked}>
            Fetch Comments
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { saveComment, fetchComments })(
  requireAuth(CommentBox)
);
