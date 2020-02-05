import React from "react";
//import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/Unsplash";
//import Keys from "../api/Keys";
import "../css/App.css";

class App extends React.Component {
  state = {
    term: "",
    images: []
  };

  baseURL = "https://api.unsplash.com";
  searchPhotos = "/search/photos";

  /* 
  * use traditional way to define axios request
  onSearchSubmit(term) {
    console.log(`App Component >>> ${term}`);
    this.setState({ term: term });

    axios
      .get(this.baseURL + this.searchPhotos, {
        params: {
          query: term
        },
        headers: {
          Authorization: `Client-ID ${Keys.AccessKey}`
        }
      })
      .then(response => {
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }
  */

  // use axios create method to create a get request
  onSearchSubmit2 = async term => {
    console.log(`App Component >>> ${term}`);
    this.setState({ term: term });

    try {
      const response = await unsplash.get(this.searchPhotos, {
        params: {
          query: term
        }
      });
      this.setState({ images: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container app-container">
        <SearchBar onSubmit={this.onSearchSubmit2} />
        <div>Keyword: {this.state.term}</div>
        <div>Found: {this.state.images.length} images</div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
