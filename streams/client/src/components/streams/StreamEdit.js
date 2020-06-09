import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

// for react router componets, we alwasys need to make sure each component needs
// to be designed to work in isolation (fetch its own data)

class StreamEdit extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props.stream);
    return (
      <div>
        <h3>StreamEdit - Title: {this.props.stream.title} </h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={this.props.stream}
        />
      </div>
    );
  }
}

// the mapStateToProps gets called with 2 arguments.
// The first is always the state object from the redux store
// ownProps is a reference to the props object for the stream edit component
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
