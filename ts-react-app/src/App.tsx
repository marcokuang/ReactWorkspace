import React from 'react';
import logo from './logo.svg';
import BioBlock from './components/BioBlock';
import './App.css';

/**
 * Render the main App component.
 *
 * @return {JSX.Element} The JSX element representing the main App component.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <BioBlock name="Marco" id={1234} bio="I am a developer" />
      </body>
    </div>
  );
}

export default App;
