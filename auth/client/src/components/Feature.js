import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { compose } from "redux";
import requireAuth from "./requireAuth";

class Feature extends React.Component {
  componentDidMount() {
    this.props.loadFeature();
  }

  populateFeatureLists = () => {
    if (this.props.featureList) {
      return this.props.featureList.map((item) => {
        return <p key={item}>{item}</p>;
      });
    }

    return <p>Additional messages here</p>;
  };

  render() {
    return (
      <div>
        <h3>This is the feature of the app</h3>
        {this.populateFeatureLists()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    featureList: state.auth.features,
  };
};

export default compose(connect(mapStateToProps, actions), requireAuth)(Feature);
