import React from "react";
import SearchBar from "./SearchBar";
import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='ui container app-container'>
        <SearchBar />
      </div>
    );
  }
}

export default App;
