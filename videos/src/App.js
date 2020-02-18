import React from "react";
import logo from "./logo.svg";
import SearchBar from "./components/SearchBar";
import youtube from "./api/Youtube";
import VideoList from "./components/VideoList";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onKeywordSubmit = keyword => {
    //this.getYoutubeResults(keyword);
    this.getYoutubeResultsUsingAwaitAsync(keyword);
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
      console.log(keyword);
      let response = await youtube.get("/search", {
        params: {
          q: keyword
        }
      });
      this.setState({ videos: response.data.items });
    } catch (err) {
      console.error(err);
    }
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onKeywordSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
