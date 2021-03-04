import React, { Component } from "react";
import Card from "./Card";

class Board extends Component {
  renderCards = () => {
    return this.props.cards.map((card, i) => {
      return (
        <Card key={i} value={card} onClick={() => this.props.handleClick(i)} />
      );
    });
  };

  render() {
    return <div className="board">{this.renderCards()}</div>;
  }
}

export default Board;
