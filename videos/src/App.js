import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/Youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  defaultKeyword = "Google Pixel";

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
      // set the default video after the user submits a search keyword
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    } catch (err) {
      console.error(err);
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount(){
    this.onKeywordSubmit(this.defaultKeyword);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onKeywordSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
