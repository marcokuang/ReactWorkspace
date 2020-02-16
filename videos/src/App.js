import React from "react";
import logo from "./logo.svg";
import SearchBar from "./components/SearchBar";
import youtube from "./api/Youtube";
import "./App.css";

class App extends React.Component {
  state = { videos: [] };

  onKeywordSubmit = event => {
    event.preventDefault();
    this.getYoutubeResultsUsingAwaitAsync(event.target.value);
  };

  getYoutubeResults = keyword => {
    // use the axios instance to get api response
    youtube
      .get("/search", {
        params: {
          q: keyword
        }
      })
      .then(response => {
        this.setState({ videos: response.data.items });
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  getYoutubeResultsUsingAwaitAsync = async keyword => {
    try {
      const response = await youtube.get("/search/haha", {
        params: {
          q: keyword
        }
      });
      this.setState({ videos: response.data.items });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onKeywordSubmit} />
      </div>
    );
  }
}

export default App;
