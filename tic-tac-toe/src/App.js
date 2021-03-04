import Board from "./components/Board";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import History from "./components/History";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to Tic Tac Toe!",
      isWon: false,
      isXNext: true,
      cards: new Array(9).fill(null),
      history: [],
    };
  }

  saveToHistory = () => {
    let cards = [...this.state.cards];
    this.setState((state) => {
      let newHistory = state.history;
      state.cards = cards;
      newHistory = newHistory.concat(state);
      return { history: [...newHistory] };
    });
  };

  handleClick = (id) => {
    if (this.state.cards[id] !== null || this.state.isWon) {
      return;
    }

    // save to history
    this.saveToHistory();

    let currentCards = this.state.cards;

    let nextMove;
    if (this.state.isXNext) {
      nextMove = "X";
    } else {
      nextMove = "O";
    }

    // store the move
    currentCards[id] = nextMove;
    let winner = this.checkWinner();

    if (winner) {
      this.updateWinner(winner);
    } else {
      this.updateNextPlayer();
    }

    this.setState({
      cards: [...currentCards],
    });

    if (
      winner === null &&
      this.state.cards.filter((val) => val === null).length === 0
    ) {
      this.updateWinner("restart");
    }
  };

  checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let cards = this.state.cards;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cards[a] && cards[a] === cards[b] && cards[a] === cards[c]) {
        return cards[a];
      }
    }
    return null;
  };

  restart = () => {
    this.setState({
      message: "Welcome to Tic Tac Toe!",
      isWon: false,
      isXNext: true,
      cards: new Array(9).fill(null),
      history: [],
    });
  };

  updateNextPlayer = () => {
    if (this.state.isXNext) {
      this.setState({ isXNext: false, message: "Next Player: O" });
    } else {
      this.setState({ isXNext: true, message: "Next Player: X" });
    }
  };

  updateWinner = (winner) => {
    if (winner === "restart") {
      this.setState({ isWon: true, message: "Restart Game!" });
    } else {
      this.setState({ isWon: true, message: `Winner is: ${winner}!!` });
    }
  };

  handeHistoryButtonClick = (index) => {
    // console.log(index);
    this.setState((state) => {
      // const prevState = Object.assign({}, state.history[index]);
      const prevState = state.history[index];
      return {
        // cards: [...prevState.cards],
        // history: [...prevState.history],
        ...prevState,
      };
    });
  };

  render() {
    if (!this.state.isWon) {
      return (
        <div className="App">
          <Header message={this.state.message} />
          <Board cards={this.state.cards} handleClick={this.handleClick} />
          <History
            history={this.state.history.length}
            onClick={this.handeHistoryButtonClick}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Header message={this.state.message} />
        <Board cards={this.state.cards} handleClick={this.handleClick} />
        <button
          className="btn-restart"
          onClick={() => {
            this.restart();
          }}
        >
          Restart
        </button>
      </div>
    );
  }
}
export default App;
