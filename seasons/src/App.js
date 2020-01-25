import React from "react";
import "./App.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMsg: "" };
  }

  componentDidMount() {
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
    return <div className="custom-style-1">{this.renderContent()}</div>;
  }

  renderContent() {
    if (!this.state.lat && !this.state.errorMsg) {
      return (
        <div className="App">
          <Spinner message="Loading... Please accept the location request." />
        </div>
      );
    } else if (this.state.lat) {
      return (
        <div className="App">
          {/* <h1>Lattitude: {this.state.lat}</h1> */}
          <SeasonDisplay lat={this.state.lat} />
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
