import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  // React Fragment is used here to return multiple button elements
  // it groups a list of children whiout adding extra nodes to DOM
  // shortcut syntax: <> </>
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderOnDelete(id) {
    this.props.deleteStream(id);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure to delete this stream?";
    }

    return `Are you sure to delete this stream with title ${this.props.stream.title}?`;
  }

  renderActions() {
    const id = this.props.match.params.id;
    const actions = (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.renderOnDelete(id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );

    return actions;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

// Note: the state contains the entire Redux store
// ownProps argument will contain all of the props given to the wrapper component
// that was generated by connect.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
