import React from "react";

class SearchBar extends React.Component {
  state = { keyword: "" };

  searchBarOnChange = event => {
    // console.log(event.target.value);
    this.setState({ keyword: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Youtube Video Search</label>
            <input
              type="text"
              // name="keyword"
              placeholder="Search..."
              value={this.state.keyword}
              onChange={this.searchBarOnChange}
            ></input>
          </div>
          <div>{this.state.keyword}</div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
