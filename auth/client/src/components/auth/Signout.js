import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return <h3>Sorry to see you go</h3>;
  }
}

export default connect(null, actions)(Signout);
