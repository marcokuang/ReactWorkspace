import React from "react";

class SearchBar extends React.Component {
  state = {input: ''};

  onInputChange(event){
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="Search Bar..." onChange={this.onInputChange.bind(this)}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
