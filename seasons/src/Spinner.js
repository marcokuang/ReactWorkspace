import React from "react";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui segment spinner">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">{this.props.message}</div>
        </div>
      </div>
    );
  }
}

Spinner.defaultProps = {
  message: "Loading......",
};

export default Spinner;
