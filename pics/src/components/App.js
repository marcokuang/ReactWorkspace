import React from "react";
import SearchBar from "./SearchBar";
import "../css/App.css";

class App extends React.Component {
  state = {
    term: ""
  };

  onSearchSubmit(term) {
    console.log(`App Component >>> ${term}`);
    this.setState({ term: term });
  }

  render() {
    return (
      <div className="ui container app-container">
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <div>Keyword: {this.state.term}</div>
      </div>
    );
  }
}

export default App;
