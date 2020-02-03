import React from "react";
import Axios from "axios";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  // use arrow function to make sure the 'this' keyword will always assign to SearchBar class
  // this is the same as binding the 'this' keyword in the event handler below in render()
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search Bar..."
              onChange={this.onInputChange.bind(this)}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
