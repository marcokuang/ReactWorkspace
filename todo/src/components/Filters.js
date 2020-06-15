import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";

class Filters extends React.Component {
  onFilterClick = (filter) => {
    console.log(filter);
    this.props.setFilter(filter);
  };

  renderButton(buttonType) {
    return (
      <button
        className={`ui button ${
          this.props.currentFilter === buttonType ? "active" : ""
        }`}
        onClick={() => this.onFilterClick(buttonType)}
      >
        {buttonType}
      </button>
    );
  }

  render() {
    console.log(this.props.currentFilter);
    return (
      <div className={"ui buttons"}>
        {this.renderButton("all")}
        {this.renderButton("completed")}
        {this.renderButton("incomplete")}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFilter: state.filter.filter,
});

export default connect(mapStateToProps, { setFilter })(Filters);
