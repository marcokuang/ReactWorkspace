import React from "react";
import Card from "./Card";

interface MyProps {
  setIsWon: Function;
}

interface MyState {
  cards: Array<number>;
  cardStatus: Array<boolean>;
  winStatus: boolean;
  selectedCards: Array<number>;
}

class Board extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    const initCards = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0,
    ];
    const initCardStatus = new Array(initCards.length).fill(false);
    const initState = {
      // cards: initCards.sort(() => Math.random() - 0.5),
      cards: initCards,
      cardStatus: initCardStatus,
      winStatus: false,
      selectedCards: [],
    };

    this.state = initState;
    // this.setState(initState);
  }

  handleOnCardClick = (event: Event) => {
    event.preventDefault();
    console.log(event.target);
    let target = event.target as HTMLElement;
    if (target) {
      let id = parseInt(target.id);
      this.handleOnCardStatusChange(id);
    }
  };

  handleOnCardStatusChange = (id: number) => {
    let currentSelectedCards = this.state.selectedCards;
    // push the current card with id to the selected list when total card selected is less than 2
    if (currentSelectedCards.length < 2) {
      // update the state then exit
      currentSelectedCards = [...currentSelectedCards, id];
      this.setState({
        selectedCards: currentSelectedCards,
      });
    }

    if (currentSelectedCards.length < 2) {
      return;
    }

    //2 cards are now selected
    let cards = this.state.cards;
    if (
      currentSelectedCards[0] !== currentSelectedCards[1] &&
      cards[currentSelectedCards[0]] === cards[currentSelectedCards[1]]
    ) {
      // cards match:
      let newCardStatus = [...this.state.cardStatus];
      newCardStatus[currentSelectedCards[0]] = true;
      newCardStatus[currentSelectedCards[1]] = true;
      // empty the currentSelected cards;
      this.setState(
        {
          cardStatus: newCardStatus,
          selectedCards: [],
        },
        this.isWon
      );
    } else {
      this.setState(
        {
          selectedCards: [],
        },
        this.isWon
      );
    }
  };

  isWon = () => {
    let win = this.state.cardStatus.reduce((prev, curr) => prev && curr);
    console.log("win", win);
    if (win) {
      this.props.setIsWon(true);
    }
  };

  render() {
    if (this.state === null) {
      return null;
    }

    return (
      <div className="board">
        <div className="cards">
          {this.state.cards.map((card, i) => {
            return (
              <Card
                id={i}
                key={i}
                cardNumber={card}
                isFlipped={
                  this.state.cardStatus[i] ||
                  this.state.selectedCards.includes(i)
                }
                onClickHandler={this.handleOnCardClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Board;
