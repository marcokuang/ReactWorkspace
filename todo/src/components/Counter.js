import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  handleClick = () => {
    this.setState((state) => ({ count: state.count++ }));
  };

  renderButton() {
    return (
      <button
        className="ui button primary"
        onClick={() => {
          this.setState((state) => ({ count: state.count++ }));
        }}
      >
        Click me!
      </button>
    );
  }

  render() {
    return (
      <div className="ui content">
        {this.renderButton()}
        <div className="ui message">Counts: {this.state.count}</div>
      </div>
    );
  }
}

export default Counter;
