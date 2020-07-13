import React from "react";
import requireAuth from "./requireAuth";

class Feature extends React.Component {
  render() {
    return (
      <div>
        <h3>This is the feature of the app</h3>
        <p>Additional messages here</p>
      </div>
    );
  }
}

export default requireAuth(Feature);
