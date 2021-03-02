import React from "react";

interface MyProps {
  id: number;
  cardNumber: number;
  isFlipped: boolean;
  onClickHandler?: Function;
}

function Card(props: MyProps) {
  let classList = ["card"];
  if (props.isFlipped) {
    classList.push("flipped");
  }
  return (
    <div
      className={classList.join(" ")}
      id={props.id.toString()}
      onClick={(e) => {
        if (props.onClickHandler) {
          props.onClickHandler(e);
        }
      }}
    >
      {props.isFlipped ? props.cardNumber : " "}
    </div>
  );
}

export default Card;
