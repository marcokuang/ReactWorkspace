import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({lat: position.coords.latitude});
      },
      err => console.error(err)
    );
  }

  render(){
    return (
      <div className="App">
          <h1>Lattitude: {this.state.lat}</h1>
      </div>
    );
    }
}

export default App;
