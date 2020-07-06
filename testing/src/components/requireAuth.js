// Higher Order Component

import React, { Component } from "react";
import { connect } from "react-redux";

// exporting a higher order function
// it's injecting new functionality to the child component
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // injected methods and functionalities
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    componentDidMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    render() {
      // make sure all the props received from parent components get passed to the children
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
