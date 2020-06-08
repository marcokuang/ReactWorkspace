import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

// for react router componets, we alwasys need to make sure each component needs
// to be designed to work in isolation (fetch its own data)

class StreamEdit extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props.stream);
    return <div>StreamEdit - Title: {this.props.stream.title}</div>;
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

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
