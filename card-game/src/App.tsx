import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [isWon, setIsWon] = useState(false);

  if (!isWon) {
    return (
      <div className="App">
        <Board setIsWon={setIsWon} />
      </div>
    );
  }

  return (
    <div className="congrat">
      <h1>You Win!</h1>
      <div>
        <button
          onClick={() => {
            setIsWon(false);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
