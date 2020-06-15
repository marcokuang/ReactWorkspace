import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";

class Filters extends React.Component {
  onFilterClick = (filter) => {
    console.log(filter);
    this.props.setFilter(filter);
  };

  render() {
    console.log(this.props.currentFilter);
    return (
      <div className={"ui buttons"}>
        <button
          className={`ui button ${
            this.props.currentFilter === "all" ? "active" : ""
          }`}
          onClick={() => this.onFilterClick("all")}
        >
          all
        </button>
        <button
          className={`ui button ${
            this.props.currentFilter === "completed" ? "active" : ""
          }`}
          onClick={() => this.onFilterClick("completed")}
        >
          completed
        </button>
        <button
          className={`ui button ${
            this.props.currentFilter === "incomplete" ? "active" : ""
          }`}
          onClick={() => this.onFilterClick("incomplete")}
        >
          incomplete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentFilter: state.filter.filter,
});

export default connect(mapStateToProps, { setFilter })(Filters);
