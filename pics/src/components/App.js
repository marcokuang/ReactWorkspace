import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Keys from "./Keys";
import "../css/App.css";

class App extends React.Component {
  state = {
    term: ""
  };

  location = "https://api.unsplash.com";
  searchPhotos = "/search/photos";

  onSearchSubmit(term) {
    console.log(`App Component >>> ${term}`);
    this.setState({ term: term });

    axios.get(this.location + this.searchPhotos, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${Keys.AccessKey}`
      }
    });
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
