import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMsg: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMsg: err.message });
      }
    );
  }

  render() {
    if (!this.state.lat && !this.state.errorMsg) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      );
    } else if (this.state.lat) {
      return (
        <div className="App">
          <h1>Lattitude: {this.state.lat}</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Error: {this.state.errorMsg}</h1>
        </div>
      );
    }
  }
}

export default App;
